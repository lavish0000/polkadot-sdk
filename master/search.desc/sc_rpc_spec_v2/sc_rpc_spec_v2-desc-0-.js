searchState.loadedDescShard("sc_rpc_spec_v2", 0, "Substrate JSON-RPC interface v2.\nMethod encountered an error.\nThe result of an RPC method.\nThe error result of an RPC method.\nThe successful result of an RPC method.\nMethod generated a result.\nTask executor that is being used by RPC subscriptions.\nSubstrate archive API.\nSubstrate chain head API.\nSubstrate chain specification API.\nConstructs an error result.\nThe error of the method.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nUtil function to encode a value as a hex string\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConstructs a successful result.\nThe result of the method.\nSubstrate transaction API.\nAPI trait of the archive methods.\nAPI implementation for <code>archive</code>.\nError helpers for <code>archive</code> RPC module.\nClient implementation for the <code>ArchiveApi</code> RPC API.\nServer trait implementation for the <code>ArchiveApi</code> RPC API.\nRetrieves the body (list of transactions) of a given block …\nRetrieves the body (list of transactions) of a given block …\nCall into the Runtime API at a specified block’s state.\nCall into the Runtime API at a specified block’s state.\nGet the height of the current finalized block.\nGet the height of the current finalized block.\nGet the chain’s genesis hash.\nGet the chain’s genesis hash.\nGet the hashes of blocks from the given height.\nGet the hashes of blocks from the given height.\nGet the block’s header.\nGet the block’s header.\nReturns storage entries at a specific block’s state.\nReturns storage entries at a specific block’s state.\nCollects all the methods and subscriptions defined in the …\nAn API for archive RPC calls.\nThe configuration of <code>Archive</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe maximum number of items the <code>archive_storage</code> can return …\nThe maximum number of queried items allowed for the …\nCreate a new <code>Archive</code>.\nChainHead RPC errors.\nFailed to fetch leaves.\nInvalid parameter provided to the RPC method.\nRuntime call failed.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nAPI trait of the chain head.\nAPI implementation for <code>chainHead</code>.\nError helpers for <code>chainHead</code> RPC module.\nThe chain head’s event returned as json compatible …\nClient implementation for the <code>ChainHeadApi</code> RPC API.\nServer trait implementation for the <code>ChainHeadApi</code> RPC API.\nA list of values of given type.\nRPC list or value wrapper.\nA single value of given type.\nRetrieves the body (list of transactions) of a pinned …\nRetrieves the body (list of transactions) of a pinned …\nCall into the Runtime API at a specified block’s state.\nCall into the Runtime API at a specified block’s state.\nResumes a storage fetch started with <code>chainHead_storage</code> …\nResumes a storage fetch started with <code>chainHead_storage</code> …\nTrack the state of the head of the chain: the finalized, …\nTrack the state of the head of the chain: the finalized, …\nRetrieves the header of a pinned block.\nRetrieves the header of a pinned block.\nStops an operation started with chainHead_v1_body, …\nStops an operation started with chainHead_v1_body, …\nReturns storage entries at a specific block’s state.\nReturns storage entries at a specific block’s state.\nUnpin a block or multiple blocks reported by the <code>follow</code> …\nUnpin a block or multiple blocks reported by the <code>follow</code> …\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCollects all the methods and subscriptions defined in the …\nMap every contained value using function <code>F</code>.\nAn API for chain head RPC calls.\nThe configuration of <code>ChainHead</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nThe maximum number of pinned blocks across all …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe maximum number of <code>chainHead_follow</code> subscriptions per …\nStop all subscriptions if the distance between the leaves …\nCreate a new <code>ChainHead</code>.\nHelper to convert the <code>subscription ID</code> to a string.\nThe maximum number of pending messages per subscription.\nThe maximum number of ongoing operations per subscription.\nThe maximum duration that a block is allowed to be pinned …\nChainHead RPC errors.\nInternal error.\nThe provided block hash is invalid.\nWait-for-continue event not generated.\nReceived duplicate hashes for the <code>chainHead_unpin</code> method.\nInvalid parameter provided to the RPC method.\nThe follow subscription was started with <code>withRuntime</code> set …\nMaximum number of chainHead_follow has been reached.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nGeneral purpose errors, as defined in …\nErrors for <code>chainHead</code> RPC module, as defined in …\nInternal error.\nInvalid parameter error.\nThe provided block hash is invalid.\nWait-for-continue event not generated.\nReceived duplicate hashes for the <code>chainHead_unpin</code> method.\nThe follow subscription was started with <code>withRuntime</code> set …\nMaximum number of chainHead_follow has been reached.\nIndicate the block hash of the new best block.\nThe best block of the chain.\nSimplified type clone of <code>sp_version::RuntimeVersion</code>. Used …\nThe operation could not be processed due to an error.\nIndicate the finalized and pruned block hashes.\nA list of finalized and pruned blocks.\nThe event generated by the <code>follow</code> method.\nContain information about the latest finalized block.\nThe latest finalized block.\nThe runtime could not be obtained due to an error.\nThe RPC server cannot handle the request at the moment.\nThe method response of <code>chainHead_body</code>, <code>chainHead_call</code> and …\nThe <code>started</code> result of a method.\nIndicate a new non-finalized block.\nA new non-finalized block was added.\nThe response of the <code>chainHead_body</code> method.\nThe response of the <code>chainHead_body</code> method.\nThe response of the <code>chainHead_call</code> method.\nThe response of the <code>chainHead_call</code> method.\nIndicate a problem during the operation.\nThe RPC server encountered an error while processing an …\nIndicate the operation id of the event.\nThe RPC server was unable to provide the response of the …\nThe responses of the <code>chainHead_storage</code> method have been …\nThe response of the <code>chainHead_call</code> method.\nYield one or more items found in the storage.\nAsk the user to call <code>chainHead_continue</code> to produce more …\nThe runtime event generated if the <code>follow</code> subscription has …\nThe runtime specification of the current block.\nThe method has started.\nThe subscription is dropped and no further events will be …\nThe runtime version of this block.\nMap of all supported API “features” and their versions.\nThe block hash of the new best block.\nThe hash of the new block.\nThe number of items from the back of the <code>chainHead_storage</code> …\nReason of the error.\nThe reason of the error.\nThe hash of the latest finalized blocks.\nBlock hashes that are finalized.\nThe runtime version of the finalized block.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nName of the implementation of the spec.\nVersion of the implementation of the specification.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe resulting items.\nThe runtime version of the new block.\nThe operation id of the event.\nThe operation id of the event.\nThe operation id of the event.\nThe operation id of the event.\nThe operation id of the event.\nThe operation id of the response.\nHexadecimal-encoded output of the runtime function call.\nThe parent hash of the new block.\nBlock hashes that are pruned (removed).\nCustom serialize implementation to include the <code>RuntimeEvent</code>…\nCustom serialize implementation to include the <code>RuntimeEvent</code>…\nThe runtime version.\nIdentifies the different Substrate runtimes.\nVersion of the runtime specification.\nTransaction version.\nArray of hexadecimal-encoded scale-encoded extrinsics …\nAPI trait of the chain spec.\nAPI implementation for the specification of a chain.\nClient implementation for the <code>ChainSpecApi</code> RPC API.\nServer trait implementation for the <code>ChainSpecApi</code> RPC API.\nGet the chain name, as present in the chain specification.\nGet the chain name, as present in the chain specification.\nGet the chain’s genesis hash.\nGet the chain’s genesis hash.\nGet the properties of the chain, as present in the chain …\nGet the properties of the chain, as present in the chain …\nCollects all the methods and subscriptions defined in the …\nAn API for chain spec RPC calls.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCreates a new <code>ChainSpec</code>.\nAPI trait for transactions.\nTransaction RPC errors.\nThe transaction’s event returned as json compatible …\nAPI implementation for submitting transactions.\nAPI implementation for broadcasting transactions.\nClient implementation for the <code>TransactionApi</code> RPC API.\nServer trait implementation for the <code>TransactionApi</code> RPC API.\nClient implementation for the <code>TransactionBroadcastApi</code> RPC …\nServer trait implementation for the <code>TransactionBroadcastApi</code>…\nBroadcast an extrinsic to the chain.\nBroadcast an extrinsic to the chain.\nCollects all the methods and subscriptions defined in the …\nCollects all the methods and subscriptions defined in the …\nBroadcast an extrinsic to the chain.\nBroadcast an extrinsic to the chain.\nSubmit an extrinsic to watch.\nSubmit an extrinsic to watch.\nTransaction RPC errors.\nTransactionBroadcast error.\nThe provided operation ID is invalid.\nTransaction pool error.\nVerification error.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nGeneral purpose errors, as defined in …\nInvalid parameter error.\nThe transaction was included in a best block of the chain.\nThe client was not capable of keeping track of this …\nThe transaction could not be processed due to an error.\nThe transaction was included in a finalized block.\nThe transaction is marked as invalid.\nThe transaction was included in a block of the chain.\nThe transaction was dropped because of exceeding limits.\nThe transaction could not be processed due to an error.\nPossible transaction status events.\nThe transaction was validated by the runtime.\nReason of the error.\nReason of the event.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nThe hash of the block the transaction was included into.\nThe index (zero-based) of the transaction within the body …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nAn API for transaction RPC calls.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nHandle events generated by the transaction-pool and …\nCalls <code>U::from(self)</code>.\nCreates a new <code>Transaction</code>.\nAn API for transaction RPC calls.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGenerate an unique operation ID for the …\nCalls <code>U::from(self)</code>.\nCreates a new <code>TransactionBroadcast</code>.")