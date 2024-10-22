searchState.loadedDescShard("sc_transaction_pool", 0, "Substrate transaction pool implementation.\nBasic implementation of transaction pool that can be …\nBlock type.\nBody future (since block body might be remote)\nBuilder allowing to create specific instance of …\nConcrete extrinsic validation and query logic.\nError type.\nFork-aware transaction pool\nThe fork-aware transaction pool.\nFork aware transaction pool task, that needs to be polled.\nFull revalidation type.\nThe transaction pool logic for full client.\nLog target for transaction pool.\nLight revalidation type.\nPool configuration options.\nExtrinsics pool that performs validation.\nQueue limits\nType of revalidation.\nSingle-state transaction pool\nThe public type alias for the actual type providing the …\nTransaction pool options.\nThe type of transaction pool.\nThe wrapper for actual object providing implementation of …\nValidate transaction future.\nProvides a number of views at the tips of the forks.\nGet access to the underlying api\nGet access to the underlying api\nHow long the extrinsic is banned for.\nReturns a block body given the block.\nReturns a block header given the block id.\nReturns a block hash given the block id.\nReturns a block number given the block id.\nCreates an instance of transaction pool.\nClears the recently pruned transactions in validated pool.\nMaximal number of transactions in the queue.\nDeep clones the pool.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nFuture queue limits.\nReturns a list of future transactions in the pool.\nChecks if there is a view at the tip of the fork with …\nReturns hash and encoding length of the extrinsic.\nReturns the hash of a given transaction.\nReturns transaction hash\nReturn an event stream of notifications when transactions …\nProvides a number of views at the tips of the forks.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true if any of the provided values exceeds the …\nExecutes the maintainance for the given chain event.\nReturns a number of unwatched and watched transactions in …\nCreates new instance of <code>Builder</code>\nCreate new transaction pool logic.\nCreate a new transaction pool.\nCreates predefined options for benchmarking\nCreate new fork aware transaction pool for a full node …\nCreate new basic transaction pool for a full node with the …\nCreate new fork aware transaction pool with provided …\nCreate new basic transaction pool with provided api, for …\nCreate new fork aware transaction pool with given limits …\nCreates new fork aware transaction pool with the …\nCreates the options for the transaction pool using given …\nInform the transaction pool about imported and finalized …\nNotifies the pool about the broadcasting status of …\nGets shared reference to the underlying pool.\nPrunes ready transactions.\nPrunes known ready transactions.\nPrunes ready transactions that provide given list of tags.\nReturns an iterator for ready transactions, ordered by …\nReady queue limits.\nReturns an iterator for ready transactions at a specific …\nReturns a best-effort set of ready transactions for a …\nReturns a set of ready transactions at a given block …\nReturn specific ready transaction by hash, if there is one.\nReject future transactions.\nIntended to remove transactions identified by the given …\nResolves block number by id.\nResolves block number by id.\nResubmit some transaction that were validated elsewhere.\nResubmit the given extrinsics to the pool.\nReturns the pool status which includes information like …\nProvides a status for all views at the tips of the forks.\nSubmits a transaction and starts to watch its progress in …\nImport a single extrinsic and starts to watch its progress …\nSubmits multiple transactions and returns a future …\nImports a bunch of unverified extrinsics to the pool\nSubmits a single transaction and returns a future …\nImports one unverified extrinsic to the pool\nMaximal size of encodings of all transactions in the queue.\nCompute a tree-route between two blocks. See <code>TreeRoute</code> for …\nVerify extrinsic at given block.\nValidates a transaction by calling into the runtime, same …\nGet a reference to the underlying validated pool.\nSets the options used for creating a transaction pool …\nSets the prometheus endpoint used in a transaction pool …\nCreate new basic transaction pool with provided api and …")