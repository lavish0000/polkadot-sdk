(function() {var implementors = {
"kitchensink_runtime":[["impl&lt;__SrApiBlock__: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>, RuntimeApiImplCall: <a class=\"trait\" href=\"sp_api/trait.CallApiAt.html\" title=\"trait sp_api::CallApiAt\">CallApiAt</a>&lt;__SrApiBlock__&gt; + 'static&gt; <a class=\"trait\" href=\"sp_consensus_beefy/trait.BeefyApi.html\" title=\"trait sp_consensus_beefy::BeefyApi\">BeefyApi</a>&lt;__SrApiBlock__, <a class=\"struct\" href=\"sp_consensus_beefy/ecdsa_crypto/struct.Public.html\" title=\"struct sp_consensus_beefy::ecdsa_crypto::Public\">Public</a>&gt; for <a class=\"struct\" href=\"kitchensink_runtime/struct.RuntimeApiImpl.html\" title=\"struct kitchensink_runtime::RuntimeApiImpl\">RuntimeApiImpl</a>&lt;__SrApiBlock__, RuntimeApiImplCall&gt;<span class=\"where fmt-newline\">where\n    RuntimeApiImplCall::<a class=\"associatedtype\" href=\"sp_api/trait.CallApiAt.html#associatedtype.StateBackend\" title=\"type sp_api::CallApiAt::StateBackend\">StateBackend</a>: <a class=\"trait\" href=\"sp_state_machine/backend/trait.Backend.html\" title=\"trait sp_state_machine::backend::Backend\">StateBackend</a>&lt;<a class=\"type\" href=\"sp_runtime/traits/type.HashingFor.html\" title=\"type sp_runtime::traits::HashingFor\">HashingFor</a>&lt;__SrApiBlock__&gt;&gt;,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;'static RuntimeApiImplCall</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"type\" href=\"node_primitives/type.BlockNumber.html\" title=\"type node_primitives::BlockNumber\">BlockNumber</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"sp_consensus_beefy/struct.ValidatorSet.html\" title=\"struct sp_consensus_beefy::ValidatorSet\">ValidatorSet</a>&lt;<a class=\"type\" href=\"sp_consensus_beefy/ecdsa_crypto/type.AuthorityId.html\" title=\"type sp_consensus_beefy::ecdsa_crypto::AuthorityId\">AuthorityId</a>&gt;&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"struct\" href=\"sp_consensus_beefy/struct.EquivocationProof.html\" title=\"struct sp_consensus_beefy::EquivocationProof\">EquivocationProof</a>&lt;<a class=\"type\" href=\"node_primitives/type.BlockNumber.html\" title=\"type node_primitives::BlockNumber\">BlockNumber</a>, <a class=\"type\" href=\"sp_consensus_beefy/ecdsa_crypto/type.AuthorityId.html\" title=\"type sp_consensus_beefy::ecdsa_crypto::AuthorityId\">AuthorityId</a>, <a class=\"struct\" href=\"sp_consensus_beefy/ecdsa_crypto/struct.Signature.html\" title=\"struct sp_consensus_beefy::ecdsa_crypto::Signature\">Signature</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"struct\" href=\"sp_consensus_beefy/struct.OpaqueKeyOwnershipProof.html\" title=\"struct sp_consensus_beefy::OpaqueKeyOwnershipProof\">OpaqueKeyOwnershipProof</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"type\" href=\"sp_consensus_beefy/type.ValidatorSetId.html\" title=\"type sp_consensus_beefy::ValidatorSetId\">ValidatorSetId</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"type\" href=\"sp_consensus_beefy/ecdsa_crypto/type.AuthorityId.html\" title=\"type sp_consensus_beefy::ecdsa_crypto::AuthorityId\">AuthorityId</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"sp_consensus_beefy/struct.OpaqueKeyOwnershipProof.html\" title=\"struct sp_consensus_beefy::OpaqueKeyOwnershipProof\">OpaqueKeyOwnershipProof</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    __SrApiBlock__::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Header\" title=\"type sp_runtime::traits::Block::Header\">Header</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,</span>"]],
"polkadot_test_runtime":[["impl&lt;__SrApiBlock__: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>, RuntimeApiImplCall: <a class=\"trait\" href=\"sp_api/trait.CallApiAt.html\" title=\"trait sp_api::CallApiAt\">CallApiAt</a>&lt;__SrApiBlock__&gt; + 'static&gt; <a class=\"trait\" href=\"sp_consensus_beefy/trait.BeefyApi.html\" title=\"trait sp_consensus_beefy::BeefyApi\">BeefyApi</a>&lt;__SrApiBlock__, <a class=\"struct\" href=\"sp_consensus_beefy/ecdsa_crypto/struct.Public.html\" title=\"struct sp_consensus_beefy::ecdsa_crypto::Public\">Public</a>&gt; for <a class=\"struct\" href=\"polkadot_test_runtime/struct.RuntimeApiImpl.html\" title=\"struct polkadot_test_runtime::RuntimeApiImpl\">RuntimeApiImpl</a>&lt;__SrApiBlock__, RuntimeApiImplCall&gt;<span class=\"where fmt-newline\">where\n    RuntimeApiImplCall::<a class=\"associatedtype\" href=\"sp_api/trait.CallApiAt.html#associatedtype.StateBackend\" title=\"type sp_api::CallApiAt::StateBackend\">StateBackend</a>: <a class=\"trait\" href=\"sp_state_machine/backend/trait.Backend.html\" title=\"trait sp_state_machine::backend::Backend\">StateBackend</a>&lt;<a class=\"type\" href=\"sp_runtime/traits/type.HashingFor.html\" title=\"type sp_runtime::traits::HashingFor\">HashingFor</a>&lt;__SrApiBlock__&gt;&gt;,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;'static RuntimeApiImplCall</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"type\" href=\"polkadot_core_primitives/type.BlockNumber.html\" title=\"type polkadot_core_primitives::BlockNumber\">BlockNumber</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"sp_consensus_beefy/struct.ValidatorSet.html\" title=\"struct sp_consensus_beefy::ValidatorSet\">ValidatorSet</a>&lt;<a class=\"type\" href=\"sp_consensus_beefy/ecdsa_crypto/type.AuthorityId.html\" title=\"type sp_consensus_beefy::ecdsa_crypto::AuthorityId\">AuthorityId</a>&gt;&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"struct\" href=\"sp_consensus_beefy/struct.EquivocationProof.html\" title=\"struct sp_consensus_beefy::EquivocationProof\">EquivocationProof</a>&lt;<a class=\"type\" href=\"polkadot_core_primitives/type.BlockNumber.html\" title=\"type polkadot_core_primitives::BlockNumber\">BlockNumber</a>, <a class=\"type\" href=\"sp_consensus_beefy/ecdsa_crypto/type.AuthorityId.html\" title=\"type sp_consensus_beefy::ecdsa_crypto::AuthorityId\">AuthorityId</a>, <a class=\"struct\" href=\"sp_consensus_beefy/ecdsa_crypto/struct.Signature.html\" title=\"struct sp_consensus_beefy::ecdsa_crypto::Signature\">Signature</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"struct\" href=\"sp_consensus_beefy/struct.OpaqueKeyOwnershipProof.html\" title=\"struct sp_consensus_beefy::OpaqueKeyOwnershipProof\">OpaqueKeyOwnershipProof</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"type\" href=\"sp_consensus_beefy/type.ValidatorSetId.html\" title=\"type sp_consensus_beefy::ValidatorSetId\">ValidatorSetId</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"type\" href=\"sp_consensus_beefy/ecdsa_crypto/type.AuthorityId.html\" title=\"type sp_consensus_beefy::ecdsa_crypto::AuthorityId\">AuthorityId</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"sp_consensus_beefy/struct.OpaqueKeyOwnershipProof.html\" title=\"struct sp_consensus_beefy::OpaqueKeyOwnershipProof\">OpaqueKeyOwnershipProof</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    __SrApiBlock__::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Header\" title=\"type sp_runtime::traits::Block::Header\">Header</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,</span>"]],
"rococo_runtime":[["impl&lt;__SrApiBlock__: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>, RuntimeApiImplCall: <a class=\"trait\" href=\"sp_api/trait.CallApiAt.html\" title=\"trait sp_api::CallApiAt\">CallApiAt</a>&lt;__SrApiBlock__&gt; + 'static&gt; <a class=\"trait\" href=\"sp_consensus_beefy/trait.BeefyApi.html\" title=\"trait sp_consensus_beefy::BeefyApi\">BeefyApi</a>&lt;__SrApiBlock__, <a class=\"struct\" href=\"sp_consensus_beefy/ecdsa_crypto/struct.Public.html\" title=\"struct sp_consensus_beefy::ecdsa_crypto::Public\">Public</a>&gt; for <a class=\"struct\" href=\"rococo_runtime/struct.RuntimeApiImpl.html\" title=\"struct rococo_runtime::RuntimeApiImpl\">RuntimeApiImpl</a>&lt;__SrApiBlock__, RuntimeApiImplCall&gt;<span class=\"where fmt-newline\">where\n    RuntimeApiImplCall::<a class=\"associatedtype\" href=\"sp_api/trait.CallApiAt.html#associatedtype.StateBackend\" title=\"type sp_api::CallApiAt::StateBackend\">StateBackend</a>: <a class=\"trait\" href=\"sp_state_machine/backend/trait.Backend.html\" title=\"trait sp_state_machine::backend::Backend\">StateBackend</a>&lt;<a class=\"type\" href=\"sp_runtime/traits/type.HashingFor.html\" title=\"type sp_runtime::traits::HashingFor\">HashingFor</a>&lt;__SrApiBlock__&gt;&gt;,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;'static RuntimeApiImplCall</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"type\" href=\"polkadot_core_primitives/type.BlockNumber.html\" title=\"type polkadot_core_primitives::BlockNumber\">BlockNumber</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"sp_consensus_beefy/struct.ValidatorSet.html\" title=\"struct sp_consensus_beefy::ValidatorSet\">ValidatorSet</a>&lt;<a class=\"type\" href=\"sp_consensus_beefy/ecdsa_crypto/type.AuthorityId.html\" title=\"type sp_consensus_beefy::ecdsa_crypto::AuthorityId\">AuthorityId</a>&gt;&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"struct\" href=\"sp_consensus_beefy/struct.EquivocationProof.html\" title=\"struct sp_consensus_beefy::EquivocationProof\">EquivocationProof</a>&lt;<a class=\"type\" href=\"polkadot_core_primitives/type.BlockNumber.html\" title=\"type polkadot_core_primitives::BlockNumber\">BlockNumber</a>, <a class=\"type\" href=\"sp_consensus_beefy/ecdsa_crypto/type.AuthorityId.html\" title=\"type sp_consensus_beefy::ecdsa_crypto::AuthorityId\">AuthorityId</a>, <a class=\"struct\" href=\"sp_consensus_beefy/ecdsa_crypto/struct.Signature.html\" title=\"struct sp_consensus_beefy::ecdsa_crypto::Signature\">Signature</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"struct\" href=\"sp_consensus_beefy/struct.OpaqueKeyOwnershipProof.html\" title=\"struct sp_consensus_beefy::OpaqueKeyOwnershipProof\">OpaqueKeyOwnershipProof</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"type\" href=\"sp_consensus_beefy/type.ValidatorSetId.html\" title=\"type sp_consensus_beefy::ValidatorSetId\">ValidatorSetId</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"type\" href=\"sp_consensus_beefy/ecdsa_crypto/type.AuthorityId.html\" title=\"type sp_consensus_beefy::ecdsa_crypto::AuthorityId\">AuthorityId</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"sp_consensus_beefy/struct.OpaqueKeyOwnershipProof.html\" title=\"struct sp_consensus_beefy::OpaqueKeyOwnershipProof\">OpaqueKeyOwnershipProof</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    __SrApiBlock__::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Header\" title=\"type sp_runtime::traits::Block::Header\">Header</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,</span>"]],
"westend_runtime":[["impl&lt;__SrApiBlock__: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>, RuntimeApiImplCall: <a class=\"trait\" href=\"sp_api/trait.CallApiAt.html\" title=\"trait sp_api::CallApiAt\">CallApiAt</a>&lt;__SrApiBlock__&gt; + 'static&gt; <a class=\"trait\" href=\"sp_consensus_beefy/trait.BeefyApi.html\" title=\"trait sp_consensus_beefy::BeefyApi\">BeefyApi</a>&lt;__SrApiBlock__, <a class=\"struct\" href=\"sp_consensus_beefy/ecdsa_crypto/struct.Public.html\" title=\"struct sp_consensus_beefy::ecdsa_crypto::Public\">Public</a>&gt; for <a class=\"struct\" href=\"westend_runtime/struct.RuntimeApiImpl.html\" title=\"struct westend_runtime::RuntimeApiImpl\">RuntimeApiImpl</a>&lt;__SrApiBlock__, RuntimeApiImplCall&gt;<span class=\"where fmt-newline\">where\n    RuntimeApiImplCall::<a class=\"associatedtype\" href=\"sp_api/trait.CallApiAt.html#associatedtype.StateBackend\" title=\"type sp_api::CallApiAt::StateBackend\">StateBackend</a>: <a class=\"trait\" href=\"sp_state_machine/backend/trait.Backend.html\" title=\"trait sp_state_machine::backend::Backend\">StateBackend</a>&lt;<a class=\"type\" href=\"sp_runtime/traits/type.HashingFor.html\" title=\"type sp_runtime::traits::HashingFor\">HashingFor</a>&lt;__SrApiBlock__&gt;&gt;,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;'static RuntimeApiImplCall</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"type\" href=\"polkadot_core_primitives/type.BlockNumber.html\" title=\"type polkadot_core_primitives::BlockNumber\">BlockNumber</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"sp_consensus_beefy/struct.ValidatorSet.html\" title=\"struct sp_consensus_beefy::ValidatorSet\">ValidatorSet</a>&lt;<a class=\"type\" href=\"sp_consensus_beefy/ecdsa_crypto/type.AuthorityId.html\" title=\"type sp_consensus_beefy::ecdsa_crypto::AuthorityId\">AuthorityId</a>&gt;&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"struct\" href=\"sp_consensus_beefy/struct.EquivocationProof.html\" title=\"struct sp_consensus_beefy::EquivocationProof\">EquivocationProof</a>&lt;<a class=\"type\" href=\"polkadot_core_primitives/type.BlockNumber.html\" title=\"type polkadot_core_primitives::BlockNumber\">BlockNumber</a>, <a class=\"type\" href=\"sp_consensus_beefy/ecdsa_crypto/type.AuthorityId.html\" title=\"type sp_consensus_beefy::ecdsa_crypto::AuthorityId\">AuthorityId</a>, <a class=\"struct\" href=\"sp_consensus_beefy/ecdsa_crypto/struct.Signature.html\" title=\"struct sp_consensus_beefy::ecdsa_crypto::Signature\">Signature</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"struct\" href=\"sp_consensus_beefy/struct.OpaqueKeyOwnershipProof.html\" title=\"struct sp_consensus_beefy::OpaqueKeyOwnershipProof\">OpaqueKeyOwnershipProof</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"type\" href=\"sp_consensus_beefy/type.ValidatorSetId.html\" title=\"type sp_consensus_beefy::ValidatorSetId\">ValidatorSetId</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"type\" href=\"sp_consensus_beefy/ecdsa_crypto/type.AuthorityId.html\" title=\"type sp_consensus_beefy::ecdsa_crypto::AuthorityId\">AuthorityId</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"sp_consensus_beefy/struct.OpaqueKeyOwnershipProof.html\" title=\"struct sp_consensus_beefy::OpaqueKeyOwnershipProof\">OpaqueKeyOwnershipProof</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    __SrApiBlock__::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Header\" title=\"type sp_runtime::traits::Block::Header\">Header</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()