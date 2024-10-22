searchState.loadedDescShard("sc_network_test", 0, "A test block.\nImplements <code>BlockImport</code> for any <code>Transaction</code>. Internally the …\nGenerates <code>Extrinsic</code>\nConfiguration for a full peer.\nA simple hash type for all our hashing.\nA test block’s header.\nA Verifier that accepts all blocks and passes them on with …\nA test client with default backend.\nA <code>TestClient</code> with <code>test-runtime</code> builder.\nA <code>test-runtime</code> extensions to <code>TestClientBuilder</code>.\nTransfer used in test substrate pallet. Extrinsic is …\nAdd an extra value into the genesis storage.\nAdd an extra child value into the genesis storage.\nAdd a full peer.\nAmount of transfer\nAnnounces an important block on the network.\nBlock announce validator.\nTest helper to compare the blockchain state of multiple …\nCount the total number of imported blocks.\nPruning window size.\nBuild <code>Extrinsic</code> using embedded parameters\nBuild the test client.\nBuild the test client and the backend.\nBuild the test client and longest chain selector.\nGet a reference to the client.\nThe indices of the peers the peer should be connected to.\nA chain-specific digest of data useful for light clients …\nExtra genesis storage.\nThe accompanying extrinsics.\nThe merkle root of the extrinsics.\nReturn a collection of block hashes that failed …\nForce genesis even in case of warp &amp; light state sync.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nTransfer sender and signer of created extrinsic\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nAdd blocks to the peer – edit the block before adding\nAdd blocks to the peer – edit the block before adding. …\nAdd blocks to the peer – edit the block before adding …\nReturns a mutable reference to the genesis parameters.\nThe block header.\nGet this peer ID.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConvert into a signed unchecked extrinsic.\nWhether the full peer should have the authority role.\nReturns true if we’re major syncing.\nReturns true if we have no peer.\nGet custom block import handle for fresh client, along …\nThis one needs to be implemented!\nMetadata hash to put into the signed data of the extrinsic.\nGet a reference to the network worker.\nGet a reference to the network service.\nCreate builder for given <code>RuntimeCall</code>. By default <code>Extrinsic</code> …\nCreate a new instance.\nCreate a new instance of <code>Self::Full</code>.\nCreate new test network with this many peers.\nCreate builder for <code>pallet_call::bench_transfer</code> from given …\nCreate builder for <code>PalletCall::call_do_not_propagate</code> call …\nCreate builder for <code>PalletCall::call_with_priority</code> call …\nCreate builder for <code>PalletCall::new_deposit_log_digest_item</code> …\nCreate builder for …\nCreate builder for <code>PalletCall::include_data</code> call using …\nCreate builder for <code>PalletCall::indexed_call</code> call using …\nCreate builder for <code>PalletCall::offchain_index_clear</code> call …\nCreate builder for <code>PalletCall::offchain_index_set</code> call …\nCreate builder for <code>PalletCall::read</code> call using given …\nCreate builder for <code>PalletCall::read</code> call using given …\nCreate builder for <code>PalletCall::storage_change</code> call using …\nCreate builder for given <code>Transfer</code>. Transfer <code>nonce</code> will be …\nCreate builder for given <code>RuntimeCall</code>. <code>Extrinsic</code> will be …\nGiven <code>nonce</code> will be set in <code>Extrinsic</code>\nSender’s account nonce at which transfer is valid\nList of notification protocols that the network must …\nReturns the number of downloaded blocks.\nReturns the number of peers we’re connected to.\nThe block number.\nThe parent hash.\nGet reference to peer.\nPolls the testnet. Processes all the pending actions.\nPush blocks to the peer (simplified: with or without a TX)\nPush blocks to the peer (simplified: with or without a TX) …\nPush blocks to the peer (simplified: with or without a TX) …\nPush blocks to the peer (simplified: with or without a TX) …\nPush blocks to the peer (simplified: with or without a TX)\nRequest a justification for the given block.\nList of request-response protocols that the network must …\nRun the network until all peers are connected to each …\nRun the network until there are no pending packets.\nBlocks the current thread until we are sync’ed. Wait …\nOverride the default value for Wasm heap pages.\nRequest explicit fork sync.\nExtrinsic will be signed by <code>signer</code>\nUsed to spawn background tasks, e.g. the block request …\nThe state trie merkle root\nEnable transaction indexing.\nSyncing mode\nGet <code>SyncingService</code>.\nTake notification handle for enabled protocol.\nOptional target block header to sync to\nThe recipient of the transfer\nUnsigned <code>Extrinsic</code> will be created")