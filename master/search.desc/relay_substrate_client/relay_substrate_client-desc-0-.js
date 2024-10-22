searchState.loadedDescShard("relay_substrate_client", 0, "Tools to interact with Substrate node using RPC methods.\nThe difference between best block number and number of its …\nAverage block interval.\nThe user account identifier type for the runtime.\nAccount id type used by the chain.\nType of key pairs used to sign transactions.\nAccount key pair used by transactions signing scheme.\nAccount public type used by the chain.\nAuto query from chain.\nName of the runtime API method that is returning best …\nBalance of an account in native tokens.\nBalance type used by the chain.\nA type that fulfills the abstract idea of what a Substrate …\nBlock number used by the chain.\nBlock with justification.\nThe bridge pallet is halted and all transactions will be …\nThe bridge pallet is not yet initialized and all …\nThe transaction has been broadcast to the given peers.\nThe aggregated <code>Call</code> type.\nCall type used by the chain.\nSubstrate-based chain from minimal relay-client point of …\nUnderlying chain type.\nMinimal Substrate-based chain representation that may be …\nChain runtime version in client\nSubstrate-based chain with <code>AccountData</code> generic argument of …\nSubstrate-based chain that is using direct GRANDPA …\nSubstrate-based chain with messaging support from minimal …\nBridge-supported network definition.\nSubstrate-based chain transactions signing scheme.\nSubstrate-based chain that uses <code>pallet-utility</code>.\nInternal channel error - communication channel is either …\nRelay uses the <code>Client</code> to communicate with the node, …\nThe client we’re connected to is not synced, so we can’…\nSubstrate-over-websocket connection params.\nCustom runtime version, defined by user.\nCustom logic error.\nTransaction has been dropped from the pool because of the …\nContains the error value\nErrors that can occur only when interacting with a …\nName of the runtime API method that is returning interval …\nName of the …\nRuntime call has failed.\nFailed to get pending extrinsics.\nFailed to get system health.\nFailed to prove storage keys.\nFailed to read best finalized header hash from given chain.\nFailed to read best finalized header from given chain.\nFailed to read block by hash from given chain.\nFailed to read header by hash from given chain.\nFailed to read header hash by number from given chain.\nFailed to read runtime version of given chain.\nFailed to read sotrage value at given chain.\nFailed to submit transaction.\nFailed to subscribe to GRANDPA justifications stream.\nFailed to subscribe to GRANDPA justifications stream.\nFailed to subscribe to GRANDPA justifications stream.\nFailed to find finality proof for the given header.\nFinality proof submission exceeds size and/or weight …\nMaximum number of finality watchers has been reached, old …\nTransaction has been finalized by a finality-gadget, e.g. …\nStructure that implements <code>UtilityPalletProvider</code> based on a …\nTransaction is part of the future queue.\nA type that fulfills the abstract idea of what a Substrate …\nHash type used by the chain.\nA type that fulfills the abstract idea of what a Substrate …\nA type that fulfills the abstract idea of what a Substrate …\nHeader id used by the chain.\nHeader type used by the chain.\nChain id.\nTransaction is immortal.\nTransaction is immortal.\nTransaction has been included in block with given hash at …\nTransaction is no longer valid in the current state.\nIO error.\nThe type of the key owner proof used by the grandpa engine.\nMaximal size of the parachain header.\nRequired parachain head is not present at the relay chain.\nStructure that implements <code>UtilityPalletProvider</code> based on a …\nTransaction is valid for a given number of blocks, …\nTransaction is valid for a given number of blocks, …\nChain name.\nNonce of a transaction used by the chain.\nTransaction nonce type used by the chain.\nContains the success value\nOpaque GRANDPA authorities set.\nParachain identifier.\nName of the <code>runtime_parachains::paras</code> pallet in the …\nSubstrate-based parachain from minimal relay-client point …\nMinimal parachain representation that may be used from …\nCurrent version of the chain runtime, known to relay.\nTransaction is part of the ready queue.\nSubstrate-based relay chain that supports parachains.\nThe response from the server could not be SCALE decoded.\nResult type used by Substrate client.\nThe block this transaction was included in has been …\nAn error that can occur when making a request to an …\nType of RPC client with caching support.\nVersion of the state implementation used by this chain. …\nName of the runtime API method that is returning the …\nSign transaction parameters\nSignature type, used on this chain.\nSignature type used by the chain.\nBlock type.\nSigned block type of given chain.\nSigned transaction.\nA simple runtime version. It only includes the <code>spec_version</code>…\nStructure describing a stream.\nSubscription to some chain events.\nGeneric wrapper for <code>sp_runtime::traits::Header</code> based …\nName of the …\nEra of specific transaction.\nTransaction era used by the chain.\nThe Substrate transaction is invalid.\nTransaction status of the chain.\nSubstrate transaction tracker implementation.\nA trait that provides the type of the underlying chain.\nHeaders of the chain are finalized out of order. Maybe …\nTransaction before it is signed.\nTransaction has been replaced in the pool, by another …\nTrait that provides functionality defined inside …\nThe utility pallet provider.\nName of the <code>pallet-bridge-parachains</code>, deployed at the …\nName of the bridge relayers pallet (used in …\nThe client is configured to use newer runtime version than …\nReturn runtime storage key for getting …\nGet best finalized header.\nGet best finalized header.\nGet best finalized header hash.\nGet best finalized header number.\nGet best finalized header number.\nGet best header.\nGet best header hash.\nGet best header hash.\nGet block by hash.\nBox the error.\nCreate batch call from given calls vector.\nRuntime call of this transaction.\nBasic runtime calls.\nReturns <code>true</code> if version guard can be started.\nDefined chain runtime version\nGet the description of the underlying stream\nReturns error if client has no connected peers or it …\nSet transaction era.\nTransaction era used by the chain.\nReturns weight of the given transaction.\nReturn encoded block extrinsics.\nConstructs <code>FailedStateCall</code> variant.\nConstructs <code>FailedToGetPendingExtrinsics</code> variant.\nConstructs <code>FailedToGetSystemHealth</code> variant.\nConstructs <code>FailedToProveStorage</code> variant.\nConstructs <code>FailedToReadBestFinalizedHeaderHash</code> variant.\nConstructs <code>FailedToReadBestHeader</code> variant.\nConstructs <code>FailedToReadBlockByHash</code> variant.\nConstructs <code>FailedToReadHeaderByHash</code> variant.\nConstructs <code>FailedToReadHeaderHashByNumber</code> variant.\nConstructs <code>FailedToReadRuntimeVersion</code> variant.\nConstructs <code>FailedToReadStorageValue</code> variant.\nConstructs <code>FailedToSubmitTransaction</code> variant.\nConstructs <code>FailedToSubscribeBestHeaders</code> variant.\nConstructs <code>FailedToSubscribeFinalizedHeaders</code> variant.\nConstructs <code>FailedToSubscribeJustifications</code> variant.\nReturns era that is used by FRAME-based runtimes.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCreate a new instance of <code>SimpleRuntimeVersion</code> from a …\nGenerates a proof of key ownership for the given authority …\nReturn hash of the genesis block.\nHash of the genesis block.\nPallet provides a set of guard functions that are running …\nReturn block header.\nGet header by hash.\nGet header by number.\nGet header by number.\nGet header hash by number.\nWebsocket server host name.\nCreate new immortal transaction era.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nExtracts wrapped header from self.\nReturns <code>true</code> if we think that the state is already …\nReturn block justification, if known.\nGet the maximum size (in bytes) of a Normal extrinsic at …\nGet the maximum weight (compute time) that a Normal …\nContains several Substrate-specific metrics that may be …\nReturns mortality period if transaction is mortal.\nReturns nested error reference.\nCreates new RPC client with caching support.\nCreate transaction tracker.\nCreate new unsigned transaction with given call, nonce, …\nPrepare transaction era, based on mortality period and …\nCreate a new instance of <code>StreamDescription</code>.\nCreate new broadcasted subscription.\nCreate new forwarded subscription.\nTransaction nonce.\nWebsocket endpoint path at server.\nReturns pending extrinsics from transaction pool.\nWebsocket server TCP port.\nReturns storage proof of given storage keys and state root.\nExecute runtime call at given block.\nRead raw value from runtime storage.\nReconnects the client.\nGet runtime version of the connected chain.\nUse secure websocket connection.\nCreate transaction for given runtime call, signed by given …\nReturns header hash that needs to be included in the …\nSigner account\nGet partial runtime version, to use when signing …\nVersion of the runtime specification.\nVersion of the runtime specification.\nExecute runtime call at given block, provided the input …\nExecute runtime call at given block, provided the input …\nRead and decode value from runtime storage double map.\nRead and decode value from runtime storage double map.\nRead and decode value from runtime storage map.\nRead and decode value from runtime storage map.\nRead and decode value from runtime storage.\nRead and decode value from runtime storage.\nDoes exactly the same as <code>submit_signed_extrinsic</code>, but …\nSubmit an extrinsic signed by given account.\nSubmit unsigned extrinsic for inclusion in a block.\nSubscribe to BEEFY finality justifications.\nSubscribe to new best headers.\nSubscribe to new finalized headers.\nSubscribe to GRANDPA finality justifications.\nConvert to the transaction of the other compatible chain.\nConverts self into tracker with different environment.\nPallet provides a set of guard functions that are running …\nSet transaction tip.\nTip included into transaction.\nReturn <code>tokenDecimals</code> property from the set of chain …\nReturns stall timeout for relay loop.\nTransaction version\nAll existing dispatches are fully compatible when this …\nConstructs <code>Un</code>\nWebsocket endpoint URL. Overrides all other URL components …\nValidate transaction at given block.\nActual runtime version.\nEncoded method arguments.\nName of the chain where the error has happened.\nName of the chain where the error has happened.\nName of the chain where the error has happened.\nName of the chain where the error has happened.\nName of the chain where the error has happened.\nName of the chain where the error has happened.\nName of the chain where the error has happened.\nName of the chain where the error has happened.\nName of the chain where the error has happened.\nName of the chain where the error has happened.\nName of the chain where the error has happened.\nName of the chain where the error has happened.\nName of the chain where the error has happened.\nName of the chain where the error has happened.\nName of the chain where the error has happened.\nName of the chain where the error has happened.\nName of the chain where the error has happened.\nUnderlying error.\nUnderlying error.\nUnderlying error.\nUnderlying error.\nUnderlying error.\nUnderlying error.\nUnderlying error.\nUnderlying error.\nUnderlying error.\nUnderlying error.\nUnderlying error.\nUnderlying error.\nUnderlying error.\nUnderlying error.\nUnderlying error.\nExpected runtime version.\nFinality proof submission extras.\nHash of the header we’ve tried to read.\nHash of the header we’ve tried to read.\nHash of the block we’ve tried to read value from.\nHash of the block we’ve tried to call at.\nHash of the block we’ve tried to prove keys at.\nRuntime storage key\nRuntime API method.\nNew finalized header number.\nNumber of the header we’ve tried to read.\nPreviously finalized header number.\nStorage keys we have tried to prove.\nA minimized version of <code>pallet-sudo::Call</code> that can be used …\nA minimized version of <code>frame-system::Call</code> that can be used …\nA minimized version of <code>pallet-utility::Call</code> that can be …\nA minimized version of <code>pallet-xcm::Call</code>, that can be used …\n<code>pallet-utility::Call::batch_all</code>\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\n<code>frame-system::Call::remark</code>\n<code>pallet-xcm::Call::send</code>\n<code>pallet-sudo::Call::sudo</code>\nGuards environment.\nError type.\nAbort current process. Called when guard condition check …\nAbort when runtime spec version is different from …\nReturn current time.\nReturn current runtime version.\nSleep given amount of time.\nImplementation of <code>FloatStorageValue</code> that expects encoded …\nFied-point storage value and the way it is decoded from …\nMetric that represents fixed-point runtime storage value …\nType of the value.\nTry to decode value from the raw storage value.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate new metric.\nGet shared reference to metric value.\nChain that may be used in tests.\nParachain that may be used in tests.\nPrimitives-level parachain that may be used in tests.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.")