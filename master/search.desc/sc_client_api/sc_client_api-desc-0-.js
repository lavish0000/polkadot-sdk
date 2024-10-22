searchState.loadedDescShard("sc_client_api", 0, "Substrate client interfaces.\nInformation related to a child state.\nStorage proof in compact form.\nBlockchain database header backend. Does not perform any …\nThis is the one used by default.\nStorage key of a child trie, it contains the prefix to the …\nStorage data associated to a <code>StorageKey</code>.\nStorage key.\nA proof that some set of key-value pairs are included in …\nUsage Information Provider interface\nSubstrate Client data backend\nConvert an arbitrary block ID into a block hash.\nConvert an arbitrary block ID into a block hash.\nA method call executor interface.\nReturns the type for this child info.\nA set of APIs supported by the client along with their …\nReturns a new empty proof.\nReturns the estimated encoded size of the compact proof.\nExecution extensions for runtime calls.\nConvert an arbitrary block ID into a block hash. Returns …\nConvert an arbitrary block ID into a block number. Returns …\nGet block header. Returns <code>UnknownBlock</code> error if block is …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet block hash by number. Returns <code>None</code> if the header is …\nGet block header. Returns <code>None</code> if block is not found.\nIn memory client backend\nGet blockchain info.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nEncode as a compact proof with default trie layout.\nGet inner key, this should only be needed when writing …\nConvert into an iterator over encoded trie nodes in …\nCreates a <code>MemoryDB</code> from <code>Self</code>.\nConvert into plain node vector.\nReturns the full location in the direct parent of this …\nReturns whether this is an empty proof.\nReturn an iterator on the compact encoded nodes.\nCreate an iterator over encoded trie nodes in …\nReturns byte sequence (keyspace) that can be use by …\nHelper for managing the set of available leaves in the …\nReturns the number of nodes in the proof.\nMerges multiple storage proofs covering potentially …\nCreate a prefixed storage key from its byte array …\nConstructs a storage proof from a subset of encoded trie …\nInstantiates child information for a default child trie of …\nSame as <code>new_default</code> but with <code>Vec&lt;u8&gt;</code> as input.\nCreate a prefixed storage key reference.\nConstructs a storage proof from a subset of encoded trie …\nStorage notifications\nGet block number by hash. Returns <code>None</code> if the header is …\nReturn the full location in the direct parent of this trie.\nProof utilities\nGet block status.\nReturns a reference to the location in the direct parent of\nEncode as a compact proof with default trie layout.\nCreates a <code>MemoryDB</code> from <code>Self</code> reference.\nConvert self into a <code>MemoryDB</code>.\nDecode to a full storage_proof.\nTry to update with another instance, return false if both …\nGet usage info about current client.\nUtility methods for the client.\nProvides access to an auxiliary database.\nClient backend.\nThe transaction type used by <code>Backend</code>.\nNew best block.\nBlock insertion operation.\nAssociated block insertion operation type.\nAssociated blockchain backend type.\nBoth block import notifications above should be fired.\nImport operation wrapper.\nAn error type when fetching data is not possible.\nNotify for every single block no matter what the sync …\nNewly finalized block (implicitly best).\nFinalization operation summary.\nFinalize Facilities\nThe merkle value is the hash of the node.\nDescribes which block import notification stream should be …\nImport operation summary.\nMultiple key value state. States are ordered by root …\nAn <code>Iterator</code> that iterates keys in a given block under a …\nMark for all Backend implementations, that are making use …\nInterface for performing operations on the backend.\nEither the <code>hash</code> or <code>value</code> of a node depending on its size.\nState of a new block.\nThe merkle value is the node data itself when the node …\nNo block import notification should be fired.\nNormal block.\nOffchain workers local storage.\nAn <code>Iterator</code> that iterates keys and values in a given block …\nType of the raw storage iterator.\nNotify only when the node has synced to the tip or there …\nAssociated state backend type.\nAssociated state backend type.\nA state backend is used to read state data and can have …\nExtracts the state backend type for the given backend.\nProvides access to storage primitives\nType of trie backend storage.\nAppend justification to the block with the given <code>hash</code>.\nHelper function to apply auxiliary data insertion into an …\nMark all blocks up to given as finalized in operation.\nBegin a new block insertion transaction with given parent …\nNote an operation to contain state transition.\nReturns reference to blockchain backend.\nGet the child merkle value or None if there is nothing …\nGiven a block’s <code>Hash</code>, a key and a child storage key, …\nGet child keyed child storage or None if there is nothing …\nGiven a block’s <code>Hash</code>, a key and a child storage key, …\nGet child keyed storage value hash or None if there is …\nGiven a block’s <code>Hash</code>, a key and a child storage key, …\nGiven a block’s <code>Hash</code> and a key <code>prefix</code> and a child …\nCalculate the child storage root, with given delta over …\nGet the merkle value or None if there is nothing …\nGiven a block’s <code>Hash</code> and a key, return the closest …\nCommit given transaction to storage.\nCommit block insertion.\ntrue if a key exists in child storage.\ntrue if a key exists in storage.\nFinalize a block.\nFinalize block with given <code>hash</code>.\nBlocks that were finalized. The last entry is the one that …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalculate the storage root, with given delta over what is …\nQuery auxiliary data from key-value store.\nQuery auxiliary data from key-value store.\nGain access to the import lock around this backend.\nExtend storage info for benchmarking db\nGet the whitelist for tracking db reads/writes\nBlock hash of the imported block.\nReturns true if state for given block is available.\nHeader of the imported block.\nLast finalized block header.\nWhat notify action to take for this import.\nInsert auxiliary keys.\nInsert auxiliary data into key-value store.\nInsert auxiliary data into key-value store.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWhether this block is the new best block.\nWhether this block is considered final.\nIs this block a new best block.\nGet an iterator over keys.\nReturn total number of key values in states.\nLock the import lock, and run operations inside.\nMark a block as finalized, if multiple blocks are …\nMark a block as new head. If both block import and set …\nCreate a new iterator over storage keys.\nCreate a new iterator over storage key and value pairs.\nCreate a new iterator over a child storage’s keys.\nReturn the next key in child storage in lexicographic …\nReturn the next key in storage in lexicographic order or …\nSummary of finalized block.\nSummary of imported block.\nReturns a handle to offchain storage.\nDB Operation.\nImport origin.\nGet an iterator over key/value pairs.\nPin the block to keep body, justification and state …\nEstimate proof size\nReturns a lifetimeless raw storage iterator.\nGet the read/write count of the db\nRegister stats from overlay of state machine.\nDiscard non-best, unfinalized leaf block.\nTells whether the backend requires full-sync mode.\nGet the read/write count of the db\nInject storage data into the database replacing any …\nAttempts to revert the chain by <code>n</code> blocks. If …\nAppend block data to the transaction.\nConfigure whether to create a block gap if newly imported …\nSet genesis state. If <code>commit</code> is <code>false</code> the state is saved …\nUpdate the whitelist for tracking db reads/writes\nHeads that became stale during this finalization operation.\nReturns pending state.\nReturns state backend with post-state of given block.\nGet keyed storage or None if there is nothing associated.\nGiven a block’s <code>Hash</code> and a key, return the value under …\nOptional storage changes.\nGet keyed storage value hash or None if there is nothing …\nGiven a block’s <code>Hash</code> and a key, return the value under …\nGiven a block’s <code>Hash</code> and a key prefix, returns a <code>KeysIter</code>…\nGiven a block’s <code>Hash</code> and a key prefix, returns an …\nCalculate the storage root, with given delta over what is …\nTree route from old best to new best.\nUnpin the block to allow pruning.\nInject storage data into the database.\nUpdate last keys accessed from this state.\nWrite offchain storage changes to the database.\nSet storage changes.\nAdd a transaction index operation.\nQuery backend usage statistics (i/o, memory)\nReturns current usage statistics.\nWipe the state database.\nThe backend used by the node.\nMethod call executor.\nExternalities error type.\nexecutor instance\nExecutor Provider\nExecute a call to a contract on top of state in a block of …\nExecute a contextual call on top of state in a block of a …\nGet a reference to the execution extensions.\nReturns the <code>ExecutionExtensions</code>.\nGet call executor reference.\nProve the execution of the given <code>method</code>.\nExtract RuntimeVersion of given block\nShould be sent when a import or finality notification is …\nList of operations to be performed on storage aux data. …\nKnown bad block hashes.\nInterface for fetching block data.\nSummary of an imported block\nFigure out the block type for a given type (for now, just …\nA source of blockchain events.\nClient info\nSummary of a finalized block.\nA stream of block finality notifications.\nExpected hashes of blocks at given heights.\nType that implements <code>futures::Stream</code> of block import …\nI/O statistics for client instance.\nMemory statistics for client instance.\nA wrapper to store the size of some memory.\nNo value.\nNo value.\nCallback invoked before committing the operations created …\nCallback invoked before committing the operations created …\nInterface to perform auxiliary actions before committing a …\nProvide a list of potential uncle headers for a given …\nSome value of type <code>T</code>.\nSome value of type <code>T</code>.\nThe type of the block.\nShould be sent when a import or finality notification is …\nKeeps a specific block pinned while the handle is alive. …\nSends a message to the pinning-worker once dropped to …\nMessage that signals notification-based pinning actions to …\nUsage statistics for running client instance.\nReturns the memory size as bytes.\nAverage size of the transaction.\nGet full block by hash.\nGet block body by ID. Returns <code>None</code> if the body is not …\nGet block hash by number.\nGet all indexed transactions for a block, including …\nGet block status by block hash.\nTotal bytes read from disk.\nTotal bytes written to disk.\nBest block hash.\nSize of backend database cache.\nGet a stream of every imported block.\nGet a stream of finality notifications. Not guaranteed to …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates <code>Self</code> from the given <code>bytes</code> size.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCreate finality notification from finality summary.\nCreate finality notification from finality summary.\nCheck if transaction index exists.\nHash of the block this handle is unpinning on drop\nImported block header hash.\nFinalized block header hash.\nImported block header.\nFinalized block header.\nGet block import event stream.\nGet single indexed transaction by content hash.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConsume this notification and extract the unpin handle.\nConsume this notification and extract the unpin handle.\nI/O statistics.\nIs this the new best block.\nGet block justifications for the block with the given hash.\nMemory statistics.\nCreate a new <code>UnpinHandleInner</code>\nCreate a new <code>UnpinHandle</code>\nCreate new notification\nImported block origin.\nTotal key reads from disk.\nActions to be performed on block finalization.\nActions to be performed on block import.\nTells whether the current client configuration requires …\nStale branches heads.\nSize of state cache.\nState reads (keys)\nState reads (keys) from cache.\nState reads (keys)\nState write (keys) already cached.\nState write (trie nodes) to backend db.\nGet storage changes event stream.\nNumber of transactions.\nTree route from old best to new best parent.\nPath from the old finalized to new finalized parent …\nGets the uncles of the block with <code>target_hash</code> going back …\nUsage info, if backend supports this.\nTotal key writes to disk.\nA producer of execution extensions for offchain calls.\nAn <code>ExtensionsFactory</code> that registers an <code>Extension</code> before a …\nGenerate the starting set of <code>Extensions</code>.\nProduces default extensions based on the input parameters.\nCreate <code>Extensions</code> for the given input.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate the extension factory.\nCreate new <code>ExecutionExtensions</code> given an <code>extensions_factory</code>.\nSet the new extensions_factory\nIn-memory backend. Keeps all states and blocks in memory.\nIn-memory operation.\nIn-memory blockchain. Supports concurrent reads.\nGet total number of blocks.\nCompare canonical chain to other canonical chain.\nCheck that genesis storage is valid.\nCompare this blockchain with another in-mem blockchain\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet header hash of given block.\nInsert a block header and associated data.\nInsert header CHT root.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a new instance of in-mem backend.\nCreate new in-memory blockchain storage.\nReturn the number of references active for a pinned block.\nSet an existing block as head.\nRemoved leaves after a finalization action.\nInserted and removed leaves after an import action.\nlist of leaf hashes ordered by number (descending). stored …\nInserted and removed leaves after a remove action.\nHelper for undoing operations.\nCheck if given block is a leaf.\nNumber of known leaves.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nreturns an iterator over all hashes in the leaf set …\nReturns the highest leaf and all hashes associated to it.\nUpdate the leaf list on import.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConstructor\nConstruct a new, blank leaf set.\nWrite the leaf list to the database transaction.\nRead the leaf list from the DB, using given prefix for …\nUpdate the leaf list on removal.\nRemove all leaves displaced by the last block finalization.\nRevert to the given block height by dropping all leaves in …\nUndo all pending operations.\nUndo a finalization operation by providing the displaced …\nUndo an imported block by providing the import operation …\nUndo a removed block by providing the displaced leaf. No …\nStorage change set\nType that implements <code>futures::Stream</code> of storage change …\nA type of a message delivered to the subscribers\nManages storage listeners.\nThe hash of the block\nThe set of changes\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConvert the change set into iterator over storage items.\nStart listening for particular storage keys.\nInitialize a new StorageNotifications optionally pass a …\nTrigger notification to all listeners.\nInterface for providing block proving utilities.\nExecute a call to a contract on top of state in a block of …\nReads child storage value at a given block + storage_key + …\nReads storage value at a given block + key, returning read …\nGiven a <code>Hash</code> iterate over all storage values starting at …\nGiven a <code>Hash</code> iterate over all storage values starting at …\nVerify read storage proof for a set of keys. Returns …\nReturns a function for checking block ancestry, the …")