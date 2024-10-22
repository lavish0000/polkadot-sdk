searchState.loadedDescShard("sc_network_types", 0, "Identifier of a peer of the network.\nEasy way for a user to create a <code>Multiaddr</code>.\nEd25519 keys.\nReturns the argument unchanged.\nParses a <code>PeerId</code> from bytes.\nGet <code>PeerId</code> from ed25519 public key bytes.\nTries to turn a <code>Multihash</code> into a <code>PeerId</code>.\nCalls <code>U::from(self)</code>.\nConvert <code>PeerId</code> into ed25519 public key bytes.\n<code>Multihash</code> implemenattion used by substrate. Currently it’…\nGenerate random peer ID.\nReturns a base-58 encoded string of this <code>PeerId</code>.\nReturns a raw bytes representation of this <code>PeerId</code>.\nTry to extract <code>PeerId</code> from <code>Multiaddr</code>.\nError when decoding <code>ed25519</code>-related types.\nAn Ed25519 keypair.\nAn Ed25519 public key.\nAn Ed25519 secret key.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGenerate a new random Ed25519 keypair.\nGenerate a new Ed25519 secret key.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nGet the public key of this keypair.\nGet the secret key of this keypair.\nSign a message using the private key of this keypair.\nConvert the keypair into a byte array by concatenating the …\nConvert the public key to a byte array in compressed form, …\nConvert public key to <code>PeerId</code>.\nTry to parse a keypair from the binary format produced by …\nTry to parse a public key from a byte array containing the …\nTry to parse an Ed25519 secret key from a byte slice …\nVerify the Ed25519 signature on a message using the public …\nLess data provided than indicated by length.\nInvalid multiaddress.\nInvalid protocol specification.\nFailed to decode unsigned varint.\nIterator over <code>Multiaddr</code> <code>Protocol</code>s.\nContains the “port” to contact. Similar to TCP or UDP, …\n<code>Multiaddr</code> type used in Substrate. Converted to libp2p’s …\nError when parsing a <code>Multiaddr</code> from string.\nOther error emitted when parsing into the wrapped type.\n<code>Protocol</code> describes all possible multiaddress protocols.\nUnknown protocol numeric id.\nUnknown protocol string identifier.\nCreate a new, empty multiaddress.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the components of this multiaddress.\nEasy way for a user to create a <code>Multiaddr</code>.\nPops the last <code>Protocol</code> of this multiaddr, or <code>None</code> if the …\nAdds an address component to the end of this multiaddr.\nReturn a copy of this <code>Multiaddr</code>’s byte representation.\nLike <code>Multiaddr::push</code> but consumes <code>self</code>.\nDefault <code>Multihash</code> implementations. Only hashes used by …\nError generated when converting to <code>Code</code>.\nIdentity hasher.\nInvalid multihash size.\nCatch-all for other errors emitted when converting <code>u64</code> …\nSHA-256 (32-byte hash size).\nThe multihash code is not supported.\nMultihash code.\nCalculate digest using this <code>Code</code>’s hashing algorithm.\nMultihash digest.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nParses a multihash from bytes.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the bytes of a multihash.\nWraps the digest in a multihash.")