searchState.loadedDescShard("bp_polkadot_core", 0, "Primitives of the Polkadot-like chains.\nAverage header size in <code>votes_ancestries</code> field of …\nAll Polkadot-like chains assume that an on-initialize …\nAddress of account on Polkadot-like chains.\nId of account on Polkadot-like chains.\nProvides a storage key for account data.\nPublic key of account on Polkadot-like chains.\nAccount address, used by the Polkadot-like chain.\nIt’s a 20 byte representation.\nIt’s a 20 byte representation.\nIt’s a 32 byte representation.\nIt’s a 32 byte representation.\nThe balance of an account on Polkadot-like chain.\nBlock type of Polkadot-like chains.\nAll Polkadot-like chains have maximal block size set to …\nBlock number type used in Polkadot-like chains.\nAll Polkadot-like chains have the same block weights.\nSigned extension that is used by most chains.\nExtra signed extension data that is used by most chains.\nInfallible conversion trait. Generic over both source and …\nNumber of extra bytes (excluding size of storage value …\nAn ECDSA/SECP256k1 signature.\nAn Ed25519 signature.\nTime to execute a NO-OP extrinsic, for example …\nHash type used in Polkadot-like chains.\nThe type of object that can produce hashes on …\nHashing type.\nThe header type used by Polkadot-like chains.\nIt’s an account ID (pubkey).\nIt’s an account ID (pubkey).\nIt’s an account index.\nIt’s an account index.\nAll Polkadot-like chains allow 2 seconds of compute with a …\nMaximal number of GRANDPA authorities at Polkadot-like …\nApproximate maximal header size on Polkadot-like chains.\nMaximal number of messages in single delivery transaction.\nNonce of a transaction on the Polkadot-like chains.\nA type that can be used as a parameter in a dispatchable …\nA fixed point representation of a number in the range [0, 1…\nReasonable number of headers in the <code>votes_ancestries</code> on …\nIt’s some arbitrary raw bytes.\nIt’s some arbitrary raw bytes.\nSignature type used by Polkadot-like chains.\nPolkadot-like block signed with a Justification.\nAn Sr25519 signature.\nExtra signed extension data that starts with …\nHelper trait to define some extra methods on …\nMaximal number of bytes, included in the signed …\nUnchecked Extrinsic type.\nFull block.\nMake conversion.\nSee <code>PerThing::deconstruct</code>.\nConsume self and return the number of parts per thing.\nA chain-specific digest of data useful for light clients …\nThe accompanying extrinsics.\nThe merkle root of the extrinsics.\nReturn storage key for given account data.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nSee <code>PerThing::from_float</code>.\nNOTE: saturate to 0 or 1 if x is beyond <code>[0, 1]</code>\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nCreate signed extension from its components.\nBuild this type from a number of parts per thing.\nFrom an explicitly defined number of parts per maximum of …\nConverts a percent into <code>Self</code>. Equal to <code>x / 100</code>.\nConverts a percent into <code>Self</code>. Equal to <code>x / 1000</code>.\nSee <code>PerThing::from_rational</code>.\nSee <code>PerThing::from_rational</code>.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nThe function that should be called.\nReturns the value of this parameter type.\nReturns the value of this parameter type.\nReturns the value of this parameter type.\nThe block header.\nInteger division with another value, rounding down.\nInteger multiplication with another value, saturating at 1.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nSee <code>PerThing::is_one</code>.\nSee <code>PerThing::is_zero</code>.\nBlock justification.\nReturns maximal extrinsic size on all Polkadot-like chains.\nReturns maximal extrinsic weight on all Polkadot-like …\nSee <code>PerThing::mul_ceil</code>.\nSee <code>PerThing::mul_floor</code>.\nReturn transaction nonce.\nThe block number.\nSee <code>PerThing::one</code>\nPrimitives of polkadot-like chains, that are related to …\nThe parent hash.\nA payload that is included in the transaction.\nA payload that is included in the transaction.\nSaturating addition. Compute <code>self + rhs</code>, saturating at the …\nSaturating division. Compute <code>self / rhs</code>, saturating at one …\nSaturating multiply. Compute <code>self * rhs</code>, saturating at the …\nSaturating exponentiation. Computes <code>self.pow(exp)</code>, …\nSee <code>PerThing::saturating_reciprocal_mul</code>.\nSee <code>PerThing::saturating_reciprocal_mul_ceil</code>.\nSee <code>PerThing::saturating_reciprocal_mul_floor</code>.\nSaturating subtraction. Compute <code>self - rhs</code>, saturating at …\nThe signature, address, number of extrinsics have come …\nSee <code>PerThing::square</code>.\nThe state trie merkle root\nHuman readable time units defined in terms of number of …\nReturn transaction tip.\nSee <code>PerThing::zero</code>.\nParachain head hash.\nParachain head hasher.\nParachain head.\nRaw storage proof of parachain heads, stored in …\nParachain id.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nReturns the hash of this head data.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nUnverified storage proof of finalized parachain heads.\nA day, expressed in Polkadot-like chain blocks.\nA hour, expressed in Polkadot-like chain blocks.\nMilliseconds between Polkadot-like chain blocks.\nA minute, expressed in Polkadot-like chain blocks.\nSlot duration in Polkadot-like chain consensus algorithms.")