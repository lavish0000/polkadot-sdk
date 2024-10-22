(function() {var implementors = {
"bridge_hub_westend_runtime":[["impl RococoFinalityApiV1&lt;<a class=\"struct\" href=\"sp_runtime/generic/block/struct.Block.html\" title=\"struct sp_runtime::generic::block::Block\">Block</a>&lt;<a class=\"struct\" href=\"sp_runtime/generic/header/struct.Header.html\" title=\"struct sp_runtime::generic::header::Header\">Header</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u32.html\">u32</a>, <a class=\"struct\" href=\"sp_runtime/traits/struct.BlakeTwo256.html\" title=\"struct sp_runtime::traits::BlakeTwo256\">BlakeTwo256</a>&gt;, <a class=\"struct\" href=\"sp_runtime/generic/unchecked_extrinsic/struct.UncheckedExtrinsic.html\" title=\"struct sp_runtime::generic::unchecked_extrinsic::UncheckedExtrinsic\">UncheckedExtrinsic</a>&lt;<a class=\"enum\" href=\"bridge_hub_westend_runtime/enum.MultiAddress.html\" title=\"enum bridge_hub_westend_runtime::MultiAddress\">MultiAddress</a>&lt;&lt;&lt;<a class=\"enum\" href=\"sp_runtime/enum.MultiSignature.html\" title=\"enum sp_runtime::MultiSignature\">MultiSignature</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.Verify.html\" title=\"trait sp_runtime::traits::Verify\">Verify</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Verify.html#associatedtype.Signer\" title=\"type sp_runtime::traits::Verify::Signer\">Signer</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.IdentifyAccount.html\" title=\"trait sp_runtime::traits::IdentifyAccount\">IdentifyAccount</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.IdentifyAccount.html#associatedtype.AccountId\" title=\"type sp_runtime::traits::IdentifyAccount::AccountId\">AccountId</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.unit.html\">()</a>&gt;, <a class=\"enum\" href=\"bridge_hub_westend_runtime/enum.RuntimeCall.html\" title=\"enum bridge_hub_westend_runtime::RuntimeCall\">RuntimeCall</a>, <a class=\"enum\" href=\"sp_runtime/enum.MultiSignature.html\" title=\"enum sp_runtime::MultiSignature\">MultiSignature</a>, (<a class=\"struct\" href=\"frame_system/extensions/check_non_zero_sender/struct.CheckNonZeroSender.html\" title=\"struct frame_system::extensions::check_non_zero_sender::CheckNonZeroSender\">CheckNonZeroSender</a>&lt;<a class=\"struct\" href=\"bridge_hub_westend_runtime/struct.Runtime.html\" title=\"struct bridge_hub_westend_runtime::Runtime\">Runtime</a>&gt;, <a class=\"struct\" href=\"frame_system/extensions/check_spec_version/struct.CheckSpecVersion.html\" title=\"struct frame_system::extensions::check_spec_version::CheckSpecVersion\">CheckSpecVersion</a>&lt;<a class=\"struct\" href=\"bridge_hub_westend_runtime/struct.Runtime.html\" title=\"struct bridge_hub_westend_runtime::Runtime\">Runtime</a>&gt;, <a class=\"struct\" href=\"frame_system/extensions/check_tx_version/struct.CheckTxVersion.html\" title=\"struct frame_system::extensions::check_tx_version::CheckTxVersion\">CheckTxVersion</a>&lt;<a class=\"struct\" href=\"bridge_hub_westend_runtime/struct.Runtime.html\" title=\"struct bridge_hub_westend_runtime::Runtime\">Runtime</a>&gt;, <a class=\"struct\" href=\"frame_system/extensions/check_genesis/struct.CheckGenesis.html\" title=\"struct frame_system::extensions::check_genesis::CheckGenesis\">CheckGenesis</a>&lt;<a class=\"struct\" href=\"bridge_hub_westend_runtime/struct.Runtime.html\" title=\"struct bridge_hub_westend_runtime::Runtime\">Runtime</a>&gt;, <a class=\"struct\" href=\"frame_system/extensions/check_mortality/struct.CheckMortality.html\" title=\"struct frame_system::extensions::check_mortality::CheckMortality\">CheckMortality</a>&lt;<a class=\"struct\" href=\"bridge_hub_westend_runtime/struct.Runtime.html\" title=\"struct bridge_hub_westend_runtime::Runtime\">Runtime</a>&gt;, <a class=\"struct\" href=\"frame_system/extensions/check_nonce/struct.CheckNonce.html\" title=\"struct frame_system::extensions::check_nonce::CheckNonce\">CheckNonce</a>&lt;<a class=\"struct\" href=\"bridge_hub_westend_runtime/struct.Runtime.html\" title=\"struct bridge_hub_westend_runtime::Runtime\">Runtime</a>&gt;, <a class=\"struct\" href=\"frame_system/extensions/check_weight/struct.CheckWeight.html\" title=\"struct frame_system::extensions::check_weight::CheckWeight\">CheckWeight</a>&lt;<a class=\"struct\" href=\"bridge_hub_westend_runtime/struct.Runtime.html\" title=\"struct bridge_hub_westend_runtime::Runtime\">Runtime</a>&gt;, <a class=\"struct\" href=\"pallet_transaction_payment/struct.ChargeTransactionPayment.html\" title=\"struct pallet_transaction_payment::ChargeTransactionPayment\">ChargeTransactionPayment</a>&lt;<a class=\"struct\" href=\"bridge_hub_westend_runtime/struct.Runtime.html\" title=\"struct bridge_hub_westend_runtime::Runtime\">Runtime</a>&gt;, <a class=\"struct\" href=\"bridge_hub_westend_runtime/struct.BridgeRejectObsoleteHeadersAndMessages.html\" title=\"struct bridge_hub_westend_runtime::BridgeRejectObsoleteHeadersAndMessages\">BridgeRejectObsoleteHeadersAndMessages</a>, (<a class=\"struct\" href=\"pallet_bridge_relayers/extension/struct.BridgeRelayersTransactionExtension.html\" title=\"struct pallet_bridge_relayers::extension::BridgeRelayersTransactionExtension\">BridgeRelayersTransactionExtension</a>&lt;<a class=\"struct\" href=\"bridge_hub_westend_runtime/struct.Runtime.html\" title=\"struct bridge_hub_westend_runtime::Runtime\">Runtime</a>, <a class=\"struct\" href=\"pallet_bridge_relayers/extension/messages_adapter/struct.WithMessagesExtensionConfig.html\" title=\"struct pallet_bridge_relayers::extension::messages_adapter::WithMessagesExtensionConfig\">WithMessagesExtensionConfig</a>&lt;<a class=\"struct\" href=\"bridge_hub_westend_runtime/bridge_to_rococo_config/struct.StrOnBridgeHubWestendRefundBridgeHubRococoMessages.html\" title=\"struct bridge_hub_westend_runtime::bridge_to_rococo_config::StrOnBridgeHubWestendRefundBridgeHubRococoMessages\">StrOnBridgeHubWestendRefundBridgeHubRococoMessages</a>, <a class=\"struct\" href=\"bridge_hub_westend_runtime/struct.Runtime.html\" title=\"struct bridge_hub_westend_runtime::Runtime\">Runtime</a>, <a class=\"struct\" href=\"frame_support/instances/struct.Instance1.html\" title=\"struct frame_support::instances::Instance1\">Instance1</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"bridge_hub_westend_runtime/bridge_to_rococo_config/struct.PriorityBoostPerMessage.html\" title=\"struct bridge_hub_westend_runtime::bridge_to_rococo_config::PriorityBoostPerMessage\">PriorityBoostPerMessage</a>&gt;, &lt;<a class=\"struct\" href=\"bridge_hub_westend_runtime/struct.Runtime.html\" title=\"struct bridge_hub_westend_runtime::Runtime\">Runtime</a> as <a class=\"trait\" href=\"pallet_bridge_messages/pallet/trait.Config.html\" title=\"trait pallet_bridge_messages::pallet::Config\">Config</a>&lt;<a class=\"struct\" href=\"frame_support/instances/struct.Instance1.html\" title=\"struct frame_support::instances::Instance1\">Instance1</a>&gt;&gt;::<a class=\"associatedtype\" href=\"pallet_bridge_messages/pallet/trait.Config.html#associatedtype.LaneId\" title=\"type pallet_bridge_messages::pallet::Config::LaneId\">LaneId</a>&gt;,), <a class=\"struct\" href=\"frame_metadata_hash_extension/struct.CheckMetadataHash.html\" title=\"struct frame_metadata_hash_extension::CheckMetadataHash\">CheckMetadataHash</a>&lt;<a class=\"struct\" href=\"bridge_hub_westend_runtime/struct.Runtime.html\" title=\"struct bridge_hub_westend_runtime::Runtime\">Runtime</a>&gt;, <a class=\"struct\" href=\"cumulus_primitives_storage_weight_reclaim/struct.StorageWeightReclaim.html\" title=\"struct cumulus_primitives_storage_weight_reclaim::StorageWeightReclaim\">StorageWeightReclaim</a>&lt;<a class=\"struct\" href=\"bridge_hub_westend_runtime/struct.Runtime.html\" title=\"struct bridge_hub_westend_runtime::Runtime\">Runtime</a>&gt;)&gt;&gt;&gt; for <a class=\"struct\" href=\"bridge_hub_westend_runtime/struct.Runtime.html\" title=\"struct bridge_hub_westend_runtime::Runtime\">Runtime</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()