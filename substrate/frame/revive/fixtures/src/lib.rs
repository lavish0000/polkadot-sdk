// This file is part of Substrate.

// Copyright (C) Parity Technologies (UK) Ltd.
// SPDX-License-Identifier: Apache-2.0

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// 	http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

#![cfg_attr(not(feature = "std"), no_std)]

extern crate alloc;

/// Load a given wasm module and returns a wasm binary contents along with it's hash.
#[cfg(feature = "std")]
pub fn compile_module(fixture_name: &str) -> anyhow::Result<(Vec<u8>, sp_core::H256)> {
	let ws_dir: std::path::PathBuf = env!("CARGO_WORKSPACE_ROOT_DIR").into();
	let fixture_path = ws_dir
		.join("target")
		.join("pallet-revive-fixtures")
		.join(format!("{fixture_name}.polkavm"));
	log::debug!("Loading fixture from {fixture_path:?}");
	let binary = std::fs::read(fixture_path)?;
	let code_hash = sp_io::hashing::keccak_256(&binary);
	Ok((binary, sp_core::H256(code_hash)))
}

/// Fixtures used in runtime benchmarks.
///
/// We explicitly include those fixtures into the binary to make them
/// available in no-std environments (runtime benchmarks).
pub mod bench {
	use alloc::vec::Vec;

	#[cfg(feature = "riscv")]
	macro_rules! fixture {
		($name: literal) => {
			include_bytes!(concat!(
				env!("CARGO_WORKSPACE_ROOT_DIR"),
				"/target/pallet-revive-fixtures/",
				$name,
				".polkavm"
			))
		};
	}
	#[cfg(not(feature = "riscv"))]
	macro_rules! fixture {
		($name: literal) => {
			&[]
		};
	}
	pub const DUMMY: &[u8] = fixture!("dummy");
	pub const NOOP: &[u8] = fixture!("noop");
	pub const INSTR: &[u8] = fixture!("instr_benchmark");

	pub fn dummy_unique(replace_with: u32) -> Vec<u8> {
		let mut dummy = DUMMY.to_vec();
		let idx = dummy
			.windows(4)
			.position(|w| w == &[0xDE, 0xAD, 0xBE, 0xEF])
			.expect("Benchmark fixture contains this pattern; qed");
		dummy[idx..idx + 4].copy_from_slice(&replace_with.to_le_bytes());
		dummy
	}
}
