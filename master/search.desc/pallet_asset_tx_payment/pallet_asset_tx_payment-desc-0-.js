searchState.loadedDescShard("pallet_asset_tx_payment", 0, "Asset Transaction Payment Pallet\nThe initial fee was paid in an asset.\nThe type used to identify the assets used for transaction …\nThe underlying integer type in which fees are calculated.\nRequire the transactor pay for themselves and maybe …\nImplements the asset transaction for a balance to asset …\nAllows specifying what to do with the withdrawn asset fees.\nUsed to pass the initial payment info from pre- to …\nThe type used to store the intermediate values between …\nThe initial fee was paid in the native currency.\nNo initial fee was paid.\nHandle withdrawing, refunding and depositing of …\nThe info passed between the prepare and post-dispatch …\nThe info passed between the validate and prepare steps for …\nEnsure payment of the transaction fees can be withdrawn.\nEnsure payment of the transaction fees can be withdrawn.\nAfter the transaction was executed the actual fee can be …\nHand the fee and the tip over to the <code>[HandleCredit]</code> …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nUtility constructor. Used only in client/factory code.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nImplement to determine what to do with the withdrawn asset …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe <code>pallet</code> module in each FRAME pallet hosts the most …\nAutogenerated weights for <code>pallet_asset_tx_payment</code>\nBefore the transaction is executed the payment of the …\nWithdraw the predicted fee from the transaction origin.\nA transaction fee <code>actual_fee</code>, of which <code>tip</code> was added to …\nBenchmark helper\nHelper trait to benchmark the <code>ChargeAssetTxPayment</code> …\nContains a variant per dispatchable extrinsic that this …\nConfiguration trait of this pallet.\nThe <code>Event</code> enum of this pallet\nThe fungibles instance used to pay for transactions in …\nType alias to <code>Pallet</code>, to be used by <code>construct_runtime</code>.\nThe actual transaction charging logic that charges the …\nThe <code>Pallet</code> struct, the main type that implements traits …\nThe overarching event type.\nThe weight information of this pallet.\nReturns the <code>AssetId</code> to be used in the liquidity pool by …\nAuto-generated docs-only module listing all defined …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a liquidity pool for a given asset and sufficiently …\nAuto-generated docs-only module listing all (public and …\nWeights for <code>pallet_asset_tx_payment</code> using the Substrate …\nWeight functions needed for <code>pallet_asset_tx_payment</code>.\nStorage: <code>TransactionPayment::NextFeeMultiplier</code> (r:1 w:0) …\nStorage: <code>TransactionPayment::NextFeeMultiplier</code> (r:1 w:0) …\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.")