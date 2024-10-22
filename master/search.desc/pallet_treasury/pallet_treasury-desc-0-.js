searchState.loadedDescShard("pallet_treasury", 0, "Made with <em>Substrate</em>, for <em>Polkadot</em>.\nTrait describing factory functions for dispatchables’ …\nPayment attempted with a payment identifier.\nPayment failed.\nThe state of the payment claim.\nPending claim.\nA spending proposal.\nAn index of a proposal. Just a <code>u32</code>.\nA trait to allow the Treasury Pallet to spend it’s funds …\nIndex of an approved treasury spend.\nInfo regarding an approved treasury spend.\nTypedGet implementation to get the AccountId of the …\nFactory function for an asset kind.\nFactory function for a beneficiary.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nTreasury pallet migrations.\nThe <code>pallet</code> module in each FRAME pallet hosts the most …\nAutogenerated weights for <code>pallet_treasury</code>\nMigration to cleanup unapproved proposals to return the …\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nThe payment has already been attempted.\nProposal indices that have been approved but not yet …\nType parameter representing the asset kinds to be spent …\nA new asset spend proposal has been approved.\nAn approved spend was voided.\nSome funds have been allocated.\nType for converting the balance of an Self::AssetKind to …\nHelper type for benchmarks.\nType parameter used to identify the beneficiaries eligible …\nConverting trait to take a source type and convert to …\nPercentage of spare funds (if any) that are burnt per …\nHandler for the unbalanced decrease when treasury funds …\nSome of our funds have been burnt.\nContains a variant per dispatchable extrinsic that this …\nConfiguration trait of this pallet.\nThe staking balance.\nThe amount which has been reported as inactive to Currency.\nSome funds have been deposited.\nThe spend is not yet eligible for payout.\nError for the treasury pallet.\nThe <code>Event</code> enum of this pallet\nThe balance of the asset kind is not convertible to the …\nCan be used to configure the genesis state of this pallet.\nThe payment has neither failed nor succeeded yet.\n<code>Instance1</code> to be used for instantiable pallets defined with …\nThe spend origin is valid but the amount it is allowed to …\nNo proposal, bounty or spend at that index.\nThe maximum number of approvals that can wait in the …\nType alias to <code>Pallet</code>, to be used by <code>construct_runtime</code>.\nThe payout was not yet attempted/claimed.\nA payment happened.\nThe <code>Pallet</code> struct, the main type that implements traits …\nThe treasury’s pallet id, used for deriving its …\nType for processing spends of Self::AssetKind in favor of …\nA payment failed and can be retried.\nThere was some issue with the mechanism of payment.\nThe period during which an approved treasury spend has to …\nNumber of proposals that have been made.\nProposal has not been approved.\nProposals that have been made.\nOrigin from which rejections must come.\nSpending has finished; this is the amount that rolls over …\nThe overarching event type.\nA new spend proposal has been approved.\nThe spend has expired and cannot be claimed.\nRuntime hooks to external pallet using treasury to compute …\nThe origin required for approving spends from the treasury …\nPeriod between successive spends.\nA spend was processed and removed from the storage. It …\nWe have ended a spend period and will now allocate funds.\nSpends that have been approved and being processed.\nToo many approvals in the queue.\nThe inactive funds of the pallet have been updated.\nWeight information for extrinsics in this pallet.\nThe account ID of the treasury pot.\nPublic function to approvals storage.\nCheck the status of the spend and remove it from the …\nCheck the status of the spend and remove it from the …\nAuto-generated docs-only module listing all defined …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a call with the variant <code>check_status</code>.\nCreate a call with the variant <code>payout</code>.\nCreate a call with the variant <code>remove_approval</code>.\nCreate a call with the variant <code>spend</code>.\nCreate a call with the variant <code>spend_local</code>.\nCreate a call with the variant <code>void_spend</code>.\nComplexity\nClaim a spend.\nClaim a spend.\nReturn the amount of money in the pot.\nPublic function to proposal_count storage.\nPublic function to proposals storage.\nForce a previously approved proposal to be removed from …\nForce a previously approved proposal to be removed from …\nPropose and approve a spend of treasury funds.\nPropose and approve a spend of treasury funds.\nSpend some money! returns number of approvals before spend.\nPropose and approve a spend of treasury funds.\nPropose and approve a spend of treasury funds.\nAuto-generated docs-only module listing all (public and …\nVoid previously approved spend.\nVoid previously approved spend.\nCheck the status of the spend and remove it from the …\nClaim a spend.\nForce a previously approved proposal to be removed from …\nPropose and approve a spend of treasury funds.\nPropose and approve a spend of treasury funds.\nVoid previously approved spend.\nProposal indices that have been approved but not yet …\nThe amount which has been reported as inactive to Currency.\nNumber of proposals that have been made.\nProposals that have been made.\nThe count of spends that have been made.\nSpends that have been approved and being processed.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWeights for <code>pallet_treasury</code> using the Substrate node and …\nWeight functions needed for <code>pallet_treasury</code>.\nStorage: <code>Treasury::Spends</code> (r:1 w:1) Proof: <code>Treasury::Spends</code>…\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nStorage: <code>Treasury::Deactivated</code> (r:1 w:1) Proof: …\nStorage: <code>Treasury::Spends</code> (r:1 w:1) Proof: <code>Treasury::Spends</code>…\nStorage: Treasury Approvals (r:1 w:1) Proof: Treasury …\nStorage: <code>AssetRate::ConversionRateToNative</code> (r:1 w:0) …\nStorage: <code>Treasury::ProposalCount</code> (r:1 w:1) Proof: …\nStorage: <code>Treasury::Spends</code> (r:1 w:1) Proof: <code>Treasury::Spends</code>…")