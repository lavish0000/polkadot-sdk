searchState.loadedDescShard("sc_transaction_pool_api", 0, "Transaction pool client facing API.\nBlock type.\nBlock type.\nBlock hash type for a pool.\nThe transaction has been broadcast to the given peers.\nEvents that the transaction pool listens for.\nTransaction has been dropped from the pool because of the …\nError type.\nError type.\nTransaction has been received externally.\nMaximum number of finality watchers has been reached, old …\nTransaction has been finalized by a finality-gadget, e.g. …\nAn existing block has been finalized.\nTransaction is part of the future queue.\nTransaction hash type.\nTransaction hash type.\nTransaction hash type.\nThe import notification event stream.\nTransaction has been included in block with given hash at …\nTransaction is already included in block.\nIn-pool transaction interface.\nIn-pool transaction type.\nTransaction is no longer valid in the current state.\nTransaction is coming from a local source.\nTransaction type for a local pool.\nTransaction pool interface for submitting local …\nTrait for transaction pool maintenance.\nNew best block have been added to the chain.\nFactory for creating <code>TransactionPoolExt</code>s.\nTypical future type used in transaction pool api.\nTransaction pool status.\nTransaction is part of the ready queue.\nAn iterator of ready transactions.\nTransaction pool that rejects all submitted transactions.\nThe block this transaction was included in has been …\nTransaction type.\nTransaction type for a pool.\nMinimum number of blocks a transaction will remain valid …\nTransaction pool interface.\nPriority for a transaction. Additive. Higher is better.\nThe source of the transaction.\nPossible transaction status events.\nThe stream of transaction events.\nType of transactions event stream for a pool.\nTag for a transaction. No two transactions with the same …\nTransaction hash type for a pool.\nTransaction’s index within the block in which it was …\nTransaction has been replaced in the pool, by another …\nGet the reference to the transaction data.\nTransaction pool errors.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nNumber of transactions in the future queue.\nSum of bytes of ready transaction encodings.\nGet futures transaction list.\nGet hash of the transaction.\nReturns the block hash associated to the event.\nReturns transaction hash\nReturn an event stream of transactions imported to the …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true if there are no transactions in the pool.\nReturns true if this is the last event emitted by …\nIs <code>self == Self::Finalized</code>?\nReturn a flag indicating if the transaction should be …\nReturns true if the transaction could be re-submitted to …\nGet longevity of the transaction.\nPerform maintenance\nCreates a new instance using the given <code>tx_pool</code>.\nReturns an instance of <code>TransactionPoolExt</code> bound to the …\nNotify the pool about transactions broadcast.\nGet priority of the transaction.\nGet tags that transaction provides.\nGet an iterator for ready transactions ordered by priority.\nNumber of transactions in the ready queue.\nGet an iterator for ready transactions ordered by priority.\nReturns set of ready transaction at given block within …\nSum of bytes of ready transaction encodings.\nReturn specific ready transaction by hash, if there is one.\nRemove transactions identified by given hashes (and …\nReport given transaction as invalid.\nGet transaction dependencies.\nReturns pool status.\nReturns a future that imports a single transaction and …\nReturns a future that imports a bunch of unverified …\nSubmits the given local unverified transaction to the pool …\nReturns a future that imports one unverified transaction …\nHash of the block.\nHash of just finalized block.\nTree route from old best to new best parent that was …\nPath from old finalized to new finalized parent.\nContains the error value\nTransaction pool error type.\nTransaction pool error conversion.\nThe transaction validity returned no “provides” tag.\nContains the success value\nTransaction pool result.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nTry to extract original <code>Error</code>\nReturns true if the transaction could be re-submitted to …\nTransaction entering the pool.\nTransaction already in the pool.")