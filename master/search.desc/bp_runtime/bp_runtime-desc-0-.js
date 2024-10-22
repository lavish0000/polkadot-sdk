searchState.loadedDescShard("bp_runtime", 0, "Primitives that may be used at (bridges) runtime level.\nThe user account identifier type for the runtime.\nAccount id type used by the chain.\nAccount public type used by the chain.\nBalance of an account in native tokens.\nBalance type used by the chain.\nBasic operating modes for a bridges module (Normal/Halted).\nA type that fulfills the abstract idea of what a Substrate …\nBlock number used by the chain.\nA bounded runtime storage value.\nMinimal Substrate-based chain representation that may be …\nUnderlying chain type.\nUnique identifier of the chain.\nError decoding value associated to a provided key.\nThe decoded call.\nThe proof contains duplicate nodes. (for non-compact …\nThe value associated to the provided key is <code>None</code>.\nThe call that is SCALE-encoded.\nChain call, that is either SCALE-encoded, or decoded.\nAll pallet operations are halted.\nThe pallet is halted. All operations (except operating …\nA type that fulfills the abstract idea of what a Substrate …\nHash type used by the chain.\nA type that fulfills the abstract idea of what a Substrate …\nThe same as <code>StorageMap::Hasher1</code>.\nThe same as <code>StorageDoubleMap::Hasher1</code>.\nThe same as <code>StorageDoubleMap::Hasher2</code>.\nHasher type used by the chain.\nA type that fulfills the abstract idea of what a Substrate …\nGeneric header Id.\nHeader id used by the chain.\nGeneric header id provider.\nHeader type used by the chain.\nChain id.\nTransaction is immortal.\nTransaction is immortal.\nCall to <code>verify_trie_proof()</code> failed.\nThe same as <code>StorageMap::Key1</code>.\nThe same as <code>StorageDoubleMap::Key1</code>.\nThe same as <code>StorageDoubleMap::Key2</code>.\nThe target that will be used when publishing logs related …\nThe name of the variable that holds the <code>StorageMap</code>.\nThe name of the variable that holds the <code>StorageDoubleMap</code>.\nMaximal size of the parachain header.\nTransaction is valid for a given number of blocks, …\nTransaction is valid for a given number of blocks, …\nUse this when something must be shared among all instances.\nNonce of a transaction used by the chain.\nTransaction nonce type used by the chain.\nNormal mode, when all operations are allowed.\nOperating mode for a bridge module.\nOperating mode type of the pallet.\nA storage value that holds the pallet operating mode.\nBridge module that has owner and operating mode\nError generated by the <code>OwnedBridgeModule</code> trait.\nA storage entry that holds the module <code>Owner</code> account.\nParachain identifier.\nMinimal parachain representation that may be used from …\nAdapter for <code>Get&lt;u32&gt;</code> to access <code>PARACHAIN_ID</code> from …\nPre-computed size.\nA trait defining helper methods for <code>RangeInclusive</code> …\nRaw storage proof type (just raw trie nodes).\nVersion of the state implementation used by this chain. …\nStatic string.\nSignature type, used on this chain.\nSignature type used by the chain.\nAnything that has size.\nTrait that provides a static <code>str</code>.\nCan be used to access the runtime storage key of a …\nCan be use to access the runtime storage key of a …\nThis struct is used to read storage values from a subset …\nErrors that can occur when interacting with …\nExpected storage root is missing from the proof. (for …\nUnable to reach expected storage value using provided trie …\nEra of specific transaction.\nTransaction era used by the chain.\nCall to <code>generate_trie_proof()</code> failed.\nThe provided key wasn’t found.\nUnderlying chain type.\nA trait that provides the type of the underlying chain.\nThe <code>Vec</code> entries weren’t sorted as expected.\nAt least one key or node wasn’t read.\nStorage values size requirements.\nThe same as <code>StorageMap::Value</code>.\nThe same as <code>StorageDoubleMap::Value</code>.\nAll extra operations with weights that we need in bridges.\nComputes the length of the <code>RangeInclusive</code>, checking for …\nReturn valid storage proof and state root.\nExpected storage proof size in bytes.\nConvenience macro that declares bridge finality runtime …\nConvenience macro that declares bridge messages runtime …\nConvenience macro that declares bridge finality runtime …\nReturns error if the proof has some nodes that are left …\nEnsure that the module is not halted.\nEnsure that the origin is either root, or <code>PalletOwner</code>.\nPrimitives that may be used for creating signed extensions …\nThis is a copy of the …\nThis is a copy of the …\nReturns era that is used by FRAME-based runtimes.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nMake storage proof parameters that require proof of at …\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nA macro that generates <code>StaticStrProvider</code> with the string …\nInsert values in the provided trie at common-prefix keys …\nAdd extra data to the storage value so that it’ll be of …\nReturn header hash.\nGet the header id.\nCreate new immortal transaction era.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConverts self to decoded call.\nConverts self to encoded call.\nConvert into the inner type\nReturns true if the bridge module is halted.\nCheck if the module is halted.\nGet the maximum size (in bytes) of a Normal extrinsic at …\nGet the maximum weight (compute time) that a Normal …\nPrimitives that may be used by different message delivery …\nChecked division of individual components of two weights.\nReturns mortality period if transaction is mortal.\nConstructs a new storage proof checker.\nPrepare transaction era, based on mortality period and …\nReturn header number.\nGet the header id for the parent block.\nCalculates size for <code>RawStorageProof</code>.\nReads and decodes a value from the available subset of …\nReads and decodes a value from the available subset of …\nReads and decodes a value from the available subset of …\nReads a value from the available subset of storage. If the …\nRecord all keys for a given root.\nComputes the length of the <code>RangeInclusive</code>, saturating in …\nHalt or resume all/some module operations.\nChange the owner of the module.\nReturns header hash that needs to be included in the …\nReturn size of this object (in bytes).\nThis is a copy of the …\nReturns the storage prefix for a specific pallet name and …\nThis is how a storage key of storage value is computed.\nReturns decoded call.\nConstruct <code>BoundedStorageValue</code> from the underlying <code>value</code> …\nThe <code>TransactionExtensionSchema</code> for …\nThe <code>TransactionExtensionSchema</code> for …\nThe <code>TransactionExtensionSchema</code> for <code>frame_system::CheckEra</code>.\nThe <code>TransactionExtensionSchema</code> for …\nThe <code>TransactionExtensionSchema</code> for …\nThe <code>TransactionExtensionSchema</code> for <code>frame_system::CheckNonce</code>…\nThe <code>TransactionExtensionSchema</code> for …\nThe <code>TransactionExtensionSchema</code> for …\nThe <code>TransactionExtensionSchema</code> for …\nA simplified version of signed extensions meant for …\nAn implementation of <code>TransactionExtensionSchema</code> using …\nParameters which are part of the payload used to produce …\nA type of the data encoded as part of the transaction.\nThe <code>TransactionExtensionSchema</code> for …\nThe <code>TransactionExtensionSchema</code> for …\nTrait that describes some properties of a …\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate new <code>GenericTransactionExtension</code> object.\nA payload that is included in the transaction.\nMessage dispatch result.\nFine-grained result of single message dispatch (for better …\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nUnspent dispatch weight. This weight that will be deducted …")