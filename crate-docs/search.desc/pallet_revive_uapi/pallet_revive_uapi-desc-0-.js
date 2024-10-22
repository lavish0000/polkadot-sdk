searchState.loadedDescShard("pallet_revive_uapi", 0, "External C API to communicate with substrate contracts …\nAllow the callee to reenter into the current contract.\nIdentical to <code>Self::FORWARD_INPUT</code> but without consuming the …\nFlags used to change the behaviour of <code>seal_call</code> and …\nThe call dispatched by <code>call_runtime</code> was executed but …\nThe called function ran to completion but decided to …\nThe called function trapped and has its state changes …\nNo code could be found at the supplied code hash.\nECDSA public key recovery failed. Most probably wrong …\nForward the input of current function to the callee.\nDefines all the host apis available to contracts.\nImplements <code>HostFn</code> when compiled on supported architectures …\nThe passed key does not exist in storage.\nThe call to <code>debug_message</code> had no effect because debug …\nThe account that was called is no contract.\nIndicates that the callee is restricted from modifying the …\nIf this bit is set all changes made by the contract …\nThe raw return code returned by the host side.\nEvery error that can be returned to a contract when it …\nFlags used by a contract to customize exit behaviour.\nsr25519 signature verification failed.\nFlags used by a contract to customize storage behaviour.\nAPI call successful.\nDo not return from the call but rather return the result …\nAccess the transient storage instead of the persistent one.\nTransfer failed for other not further specified reason. …\nReturns if an unknown error was received from the host …\nThe <code>xcm_execute</code> call failed.\nThe <code>xcm_send</code> call failed.\nStores the address of the current contract into the …\nReturns the set containing all flags.\nReturns the set containing all flags.\nReturns the set containing all flags.\nStores the <strong>reducible</strong> balance of the current account into …\nStores the <strong>reducible</strong> balance of the supplied address into …\nReturns the intersection between the two sets of flags.\nReturns the intersection between the two sets of flags.\nReturns the intersection between the two sets of flags.\nDisables all flags disabled in the set.\nDisables all flags disabled in the set.\nDisables all flags disabled in the set.\nReturns the union of the two sets of flags.\nReturns the union of the two sets of flags.\nReturns the union of the two sets of flags.\nAdds the set of flags.\nAdds the set of flags.\nAdds the set of flags.\nReturns the raw value of the flags currently stored.\nReturns the raw value of the flags currently stored.\nReturns the raw value of the flags currently stored.\nReturns the left flags, but with all the right flags …\nReturns the left flags, but with all the right flags …\nReturns the left flags, but with all the right flags …\nToggles the set of flags.\nToggles the set of flags.\nToggles the set of flags.\nStores the current block number of the current contract …\nCall (possibly transferring some amount of funds) into the …\nCall into the chain extension provided by the chain if any.\nCall some dispatchable of the runtime.\nStores the address of the caller into the supplied buffer.\nChecks whether the caller of the current contract is the …\nChecks whether the caller of the current contract is root.\nReturns the EIP-155 chain ID.\nClear the value at the given key in the contract storage.\nRetrieve the code hash for a specified contract address.\nReturns the complement of this set of flags.\nReturns the complement of this set of flags.\nReturns the complement of this set of flags.\nReturns <code>true</code> if all of the flags in <code>other</code> are contained …\nReturns <code>true</code> if all of the flags in <code>other</code> are contained …\nReturns <code>true</code> if all of the flags in <code>other</code> are contained …\nChecks whether there is a value stored under the given key.\nEmit a custom debug message.\nExecute code in the context (storage, caller, value) of …\nDeposit a contract event with the data buffer and optional …\nReturns the difference between the flags in <code>self</code> and <code>other</code>.\nReturns the difference between the flags in <code>self</code> and <code>other</code>.\nReturns the difference between the flags in <code>self</code> and <code>other</code>.\nRecovers the ECDSA public key from the given message hash …\nCalculates Ethereum address from the ECDSA compressed …\nReturns an empty set of flags.\nReturns an empty set of flags.\nReturns an empty set of flags.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert from underlying bit representation, unless that …\nConvert from underlying bit representation, unless that …\nConvert from underlying bit representation, unless that …\nConvert from underlying bit representation, dropping any …\nConvert from underlying bit representation, dropping any …\nConvert from underlying bit representation, dropping any …\nConvert from underlying bit representation, preserving all …\nConvert from underlying bit representation, preserving all …\nConvert from underlying bit representation, preserving all …\nRetrieve the value under the given key from storage.\nComputes the blake2_128 16-bit hash on the given input …\nComputes the blake2_256 32-bit hash on the given input …\nComputes the keccak_256 32-bit hash on the given input …\nComputes the sha2_256 32-bit hash on the given input …\nStores the input passed by the caller into the supplied …\nInserts the specified flags in-place.\nInserts the specified flags in-place.\nInserts the specified flags in-place.\nInstantiate a contract with the specified code hash.\nReturns the intersection between the flags in <code>self</code> and …\nReturns the intersection between the flags in <code>self</code> and …\nReturns the intersection between the flags in <code>self</code> and …\nReturns <code>true</code> if there are flags common to both <code>self</code> and …\nReturns <code>true</code> if there are flags common to both <code>self</code> and …\nReturns <code>true</code> if there are flags common to both <code>self</code> and …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the underlying <code>u32</code> converted into <code>bool</code>.\nReturns the raw underlying <code>u32</code> representation.\nReturns <code>true</code> if all flags are currently set.\nReturns <code>true</code> if all flags are currently set.\nReturns <code>true</code> if all flags are currently set.\nChecks whether a specified address belongs to a contract.\nReturns <code>true</code> if no flags are currently stored.\nReturns <code>true</code> if no flags are currently stored.\nReturns <code>true</code> if no flags are currently stored.\nLock a new delegate dependency to the contract.\nStores the minimum balance (a.k.a. existential deposit) …\nReturns the complement of this set of flags.\nReturns the complement of this set of flags.\nReturns the complement of this set of flags.\nLoad the latest block timestamp into the supplied buffer\nRetrieve the code hash of the currently executing contract.\nRemoves the specified flags in-place.\nRemoves the specified flags in-place.\nRemoves the specified flags in-place.\nStores the returned data of the last contract call or …\nStores the size of the returned data of the last contract …\nCease contract execution and save a data buffer as a …\nInserts or removes the specified flags depending on the …\nInserts or removes the specified flags depending on the …\nInserts or removes the specified flags depending on the …\nReplace the contract code at the specified address with …\nSet the value at the given key in the contract storage.\nVerify a sr25519 signature\nReturns the set difference of the two sets of flags.\nReturns the set difference of the two sets of flags.\nReturns the set difference of the two sets of flags.\nDisables all flags enabled in the set.\nDisables all flags enabled in the set.\nDisables all flags enabled in the set.\nReturns the symmetric difference between the flags in <code>self</code> …\nReturns the symmetric difference between the flags in <code>self</code> …\nReturns the symmetric difference between the flags in <code>self</code> …\nRetrieve and remove the value under the given key from …\nRemove the calling account and transfer remaining <strong>free</strong> …\nToggles the specified flags in-place.\nToggles the specified flags in-place.\nToggles the specified flags in-place.\nTransfer some amount of funds into the specified account.\nReturns the union of between the flags in <code>self</code> and <code>other</code>.\nReturns the union of between the flags in <code>self</code> and <code>other</code>.\nReturns the union of between the flags in <code>self</code> and <code>other</code>.\nRemoves the delegate dependency from the contract.\nStores the value transferred along with this …\nStores the amount of weight left into the supplied buffer. …\nStores the price for the specified amount of gas into the …\nExecute an XCM program locally, using the contract’s …\nSend an XCM program from the contract to the specified …")