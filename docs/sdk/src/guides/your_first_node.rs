//! # Your first Node
//!
//! In this guide, you will learn how to run a runtime, such as the one created in
//! [`your_first_runtime`], in a node. Within the context of this guide, we will focus on running
//! the runtime with an [`omni-node`]. Please first read this page to learn about the OmniNode, and
//! other options when it comes to running a node.
//!
//! [`your_first_runtime`] is a runtime with no consensus related code, and therefore can only be
//! executed with a node that also expects no consensus ([`sc_consensus_manual_seal`]).
//! `polkadot_omni_node`'s [`--dev-block-time`] precisely does this.
//!
//! ## Running The Omni Node
//!
//! The `polkadot-omni-node` can either be downloaded from the latest [Release](https://github.com/paritytech/polkadot-sdk/releases/) of `polkadot-sdk`,
//! or installed using `cargo`:
//!
//! ```text
//! cargo install polkadot-omni-node
//! ```
//!
//! Next, we need to install the [`chain-spec-builder`]. This is the tool that helps us interact
//! with the genesis related APIs of the runtime, as described in
//! [`super::your_first_runtime#genesis-configuration`].
//!
//!
//!
//! Dump:
//! ```text
//! ./chain-spec-builder create --para-id 42 --relay-chain dontcare --runtime polkadot_sdk_docs_first_runtime.wasm named-preset development
//! ./polkadot-omni-node --tmp --dev-block-time 100 --chain polkadot_sdk_docs_first_runtime.json
//! ./
//! ```
//!
//! [`runtime`]: crate::reference_docs::glossary#runtime
//! [`node`]: crate::reference_docs::glossary#node
//! [`build_config`]: first_runtime::Runtime#method.build_config
//! [`omni-node`]: crate::reference_docs::omni_node
//! [`--dev-block-time`]: (polkadot_omni_node_lib::cli::Cli::dev_block_time)

#[cfg(test)]
mod tests {
	use assert_cmd::Command;
	use rand::Rng;
	use sc_chain_spec::{DEV_RUNTIME_PRESET, LOCAL_TESTNET_RUNTIME_PRESET};
	use sp_genesis_builder::PresetId;
	use std::path::PathBuf;

	const PARA_RUNTIME: &'static str = "parachain-template-runtime";
	const FIRST_RUNTIME: &'static str = "polkadot-sdk-docs-first-runtime";
	const MINIMAL_RUNTIME: &'static str = "minimal-template-runtime";

	const CHAIN_SPEC_BUILDER: &'static str = "chain-spec-builder";
	const OMNI_NODE: &'static str = "polkadot-omni-node";

	fn cargo() -> Command {
		Command::new(std::env::var("CARGO").unwrap_or_else(|_| "cargo".to_string()))
	}

	fn get_target_directory() -> Option<PathBuf> {
		let output = cargo().arg("metadata").arg("--format-version=1").output().ok()?;

		if !output.status.success() {
			return None;
		}

		let metadata: serde_json::Value = serde_json::from_slice(&output.stdout).ok()?;
		let target_directory = metadata["target_directory"].as_str()?;

		Some(PathBuf::from(target_directory))
	}

	fn find_release_binary(name: &str) -> Option<PathBuf> {
		let target_dir = get_target_directory()?;
		let release_path = target_dir.join("release").join(name);

		if release_path.exists() {
			Some(release_path)
		} else {
			None
		}
	}

	fn find_wasm(runtime_name: &str) -> Option<PathBuf> {
		let target_dir = get_target_directory()?;
		let wasm_path = target_dir
			.join("release")
			.join("wbuild")
			.join(runtime_name)
			.join(format!("{}.wasm", runtime_name.replace('-', "_")));

		if wasm_path.exists() {
			Some(wasm_path)
		} else {
			None
		}
	}

	fn maybe_build_runtimes() {
		if find_wasm(&PARA_RUNTIME).is_none() {
			println!("Building parachain-template-runtime...");
			Command::new("cargo")
				.arg("build")
				.arg("--release")
				.arg("-p")
				.arg(PARA_RUNTIME)
				.assert()
				.success();
		}
		if find_wasm(&FIRST_RUNTIME).is_none() {
			println!("Building polkadot-sdk-docs-first-runtime...");
			Command::new("cargo")
				.arg("build")
				.arg("--release")
				.arg("-p")
				.arg(FIRST_RUNTIME)
				.assert()
				.success();
		}

		assert!(find_wasm(PARA_RUNTIME).is_some());
		assert!(find_wasm(FIRST_RUNTIME).is_some());
	}

	fn maybe_build_chain_spec_builder() {
		if find_release_binary(CHAIN_SPEC_BUILDER).is_none() {
			println!("Building chain-spec-builder...");
			Command::new("cargo")
				.arg("build")
				.arg("--release")
				.arg("-p")
				.arg("staging-chain-spec-builder")
				.assert()
				.success();
		}
		assert!(find_release_binary(CHAIN_SPEC_BUILDER).is_some());
	}

	fn maybe_build_omni_node() {
		if find_release_binary(OMNI_NODE).is_none() {
			println!("Building polkadot-omni-node...");
			Command::new("cargo")
				.arg("build")
				.arg("--release")
				.arg("-p")
				.arg("polkadot-omni-node")
				.assert()
				.success();
		}
	}

	fn test_runtime_preset(runtime: &'static str, block_time: u64, maybe_preset: Option<PresetId>) {
		sp_tracing::try_init_simple();
		maybe_build_runtimes();
		maybe_build_chain_spec_builder();
		maybe_build_omni_node();

		let chain_spec_builder =
			find_release_binary(&CHAIN_SPEC_BUILDER).expect("we built it above; qed");
		let omni_node = find_release_binary(OMNI_NODE).expect("we built it above; qed");
		let runtime_path = find_wasm(runtime).expect("we built it above; qed");

		let random_seed: u32 = rand::thread_rng().gen();
		let chain_spec_file = std::env::current_dir()
			.unwrap()
			.join(format!("{}_{}_{}.json", runtime, block_time, random_seed));

		Command::new(chain_spec_builder)
			.args(["-c", chain_spec_file.to_str().unwrap()])
			.arg("create")
			.args(&["--para-id", "1000", "--relay-chain", "dontcare"])
			.args(["-r", runtime_path.to_str().unwrap()])
			.args(match maybe_preset {
				Some(preset) => vec!["named-preset".to_string(), preset.to_string()],
				None => vec!["default".to_string()],
			})
			.assert()
			.success();

		let output = Command::new(omni_node)
			.arg("--tmp")
			.args(["--chain", chain_spec_file.to_str().unwrap()])
			.args(["--dev-block-time", block_time.to_string().as_str()])
			.timeout(std::time::Duration::from_secs(10))
			.output()
			.unwrap();

		std::fs::remove_file(chain_spec_file).unwrap();

		// uncomment for debugging.
		// println!("output: {:?}", output);

		let expected_blocks = (10_000 / block_time).saturating_div(2);
		assert!(expected_blocks > 0, "test configuration is bad, should give it more time");
		assert!(String::from_utf8(output.stderr)
			.unwrap()
			.contains(format!("Imported #{}", expected_blocks).to_string().as_str()));
	}

	#[test]
	fn works_with_different_block_times() {
		test_runtime_preset(PARA_RUNTIME, 100, Some(DEV_RUNTIME_PRESET.into()));
		test_runtime_preset(PARA_RUNTIME, 3000, Some(DEV_RUNTIME_PRESET.into()));
	}

	#[test]
	fn parachain_runtime_works() {
		// TODO: None doesn't work. But maybe it should? it would be misleading as many users might
		// use it.
		[Some(DEV_RUNTIME_PRESET.into()), Some(LOCAL_TESTNET_RUNTIME_PRESET.into())]
			.into_iter()
			.for_each(|preset| {
				test_runtime_preset(PARA_RUNTIME, 1000, preset);
			});
	}

	#[test]
	fn minimal_runtime_works() {
		[None, Some(DEV_RUNTIME_PRESET.into())].into_iter().for_each(|preset| {
			test_runtime_preset(MINIMAL_RUNTIME, 1000, preset);
		});
	}

	#[test]
	fn guide_first_runtime_works() {
		[Some(DEV_RUNTIME_PRESET.into())].into_iter().for_each(|preset| {
			test_runtime_preset(FIRST_RUNTIME, 1000, preset);
		});
	}
}
