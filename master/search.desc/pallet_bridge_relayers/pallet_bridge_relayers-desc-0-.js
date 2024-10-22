searchState.loadedDescShard("pallet_bridge_relayers", 0, "Runtime module that is used to store relayer rewards and …\nAdapter that allows relayers pallet to be used as a …\nThe target that will be used when publishing logs related …\n<code>StakeAndSlash</code> that works with <code>NamedReservableCurrency</code> and …\nExtended weight info.\nBenchmarks for the relayers Pallet.\nSigned extension, built around <code>pallet-bridge-relayers</code>. It …\nReturns weight that we need to deduct from the message …\nReturns weight that we need to deduct from the message …\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nA module that is responsible for migration of storage.\nThe <code>pallet</code> module in each FRAME pallet hosts the most …\nReturns weight, that needs to be added to the pre-dispatch …\nReturns weight, that needs to be added to the pre-dispatch …\nReturns weight, that needs to be added to the pre-dispatch …\nReturns weight, that needs to be added to the pre-dispatch …\nAutogenerated weights for pallet_bridge_relayers\nTrait that must be implemented by runtime.\nPallet we’re benchmarking here.\nLane id to use in benchmarks.\nGive enough balance to given account.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nPrepare environment for paying given reward for serving …\nA signed extension, built around <code>pallet-bridge-relayers</code>.\nWe’ll deal with different bridge items here - messages, …\nDo nothing with relayer account.\nData that is crafted in <code>validate</code>, passed to <code>prepare</code> and …\nThe actions on relayer account that need to be performed …\nReward the relayer.\nSlash the relayer.\nAdapter to be used in signed extension configuration, when …\nTransaction extension that refunds a relayer for …\nAdapter to be used in signed extension configuration, when …\nCompute priority boost for transaction that brings given …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nComputations, specific to bridge messages transactions.\nComputations, specific to bridge parachains transactions.\nComputations, specific to bridge relay chains transactions.\nEnsures that the value of <code>PriorityBoostPerMessage</code> matches …\nEnsures that the value of <code>PriorityBoostPerHeader</code> matches …\nEnsures that the value of <code>PriorityBoostPerHeader</code> matches …\nThe in-code storage version.\nThis module contains data structures that are valid for …\nThis migration updates <code>RelayerRewards</code> where …\nReward account generator for <code>v0</code>.\nStructure used to identify the account that pays a reward …\nbridged_chain_id\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nlane_id\nCreate a new instance of <code>RewardsAccountParams</code>.\nowner\nReturn account that pays rewards based on the provided …\n<code>UncheckedMigrationV0ToV1</code> wrapped in a <code>VersionedMigration</code>, …\nMigrates the pallet storage to v1.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nContains a variant per dispatchable extrinsic that this …\nNew registration lease is less than the previous one.\nConfiguration trait of this pallet.\nRelayer has been <code>deregistered</code>.\nThe <code>Error</code> enum of this pallet.\nThe <code>Event</code> enum of this pallet\nReward payment procedure has failed.\nFailed to reserve enough funds on relayer account.\nFailed to <code>unreserve</code> enough funds on relayer account.\n<code>Instance1</code> to be used for instantiable pallets defined with …\nThe relayer has tried to register for past block or …\nLane identifier type.\nType alias to <code>Pallet</code>, to be used by <code>construct_runtime</code>.\nNo reward can be claimed by given relayer.\nCannot <code>deregister</code> if not registered.\nThe <code>Pallet</code> struct, the main type that implements traits …\nPay rewards scheme.\nRelayers that have reserved some of their balance to get …\nFailed to <code>deregister</code> relayer, because lease is still …\nRelayer registration has been added or updated.\nMap of the relayer =&gt; accumulated reward.\nType of relayer reward.\nReward has been paid to the relayer.\nRelayer reward has been registered and may be claimed …\nThe overarching event type.\nRelayer has been slashed and <code>deregistered</code>.\nStake and slash scheme.\nPallet call weights.\nClaim accumulated rewards.\nClaim accumulated rewards.\n<code>Deregister</code> relayer.\n<code>Deregister</code> relayer.\nAuto-generated docs-only module listing all defined …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true if given relayer registration is active at …\nCreate a call with the variant <code>claim_rewards</code>.\nCreate a call with the variant <code>deregister</code>.\nCreate a call with the variant <code>register</code>.\nRegister relayer or update its registration.\nRegister relayer or update its registration.\nRegister reward for given relayer.\nAn auto-generated getter for <code>RegisteredRelayers</code>.\nAn auto-generated getter for <code>RelayerRewards</code>.\nSlash and <code>deregister</code> relayer. This function slashes all …\nAuto-generated docs-only module listing all (public and …\nRelayer registration.\nRegistration that was removed.\nRelayer account that can claim reward.\nRelayer account that has been rewarded.\nRelayer account that has been registered.\nRelayer account that has been <code>deregistered</code>.\nRelayer account that has been <code>deregistered</code>.\nReward amount.\nReward amount.\nRelayer can claim reward from this account.\nRelayer has received reward from this account.\nClaim accumulated rewards.\n<code>Deregister</code> relayer.\nRegister relayer or update its registration.\nRelayers that have reserved some of their balance to get …\nMap of the relayer =&gt; accumulated reward.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWeights for <code>pallet_bridge_relayers</code> that are generated …\nWeight functions needed for pallet_bridge_relayers.\nStorage: BridgeRelayers RelayerRewards (r:1 w:1)\nStorage: BridgeRelayers RegisteredRelayers (r:1 w:1)\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nStorage: BridgeRelayers RegisteredRelayers (r:1 w:1)\nStorage: BridgeRelayers RelayerRewards (r:1 w:1)\nStorage: BridgeRelayers RegisteredRelayers (r:1 w:1)")