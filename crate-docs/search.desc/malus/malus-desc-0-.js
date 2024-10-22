searchState.loadedDescShard("malus", 0, "A malus or nemesis node launch code.\nBack a candidate with a specifically crafted proof of …\nDelayed disputing of ancestors that are perfectly fine.\nDelayed disputing of finalized candidates.\nDefine the different variants of behavior.\nSpam many request statements instead of sending a single …\nSuggest a candidate with an invalid proof of validity.\nSupport disabled validators in backing and statement …\nSets the minimum delay between the best and finalized …\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nA small set of wrapping types to cover most of our …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nLaunch a malus node.\nCollection of behavior variants.\n<code>approval_voting_params</code>\nMinimum version to enable asynchronous backing: …\nThe vote was accepted and should be propagated onwards.\nThe vote was accepted and should be propagated onwards.\nThe vote was valid but duplicate and should not be …\nFetch a list of all active disputes that the coordinator …\nExtends the known validators set with new peers we already …\nGenerated message type wrapper over all possible messages …\nA collection of ancestor candidates of a parachain.\nRequest the <code>k</code> ancestor block hashes of a block with the …\nThe error result type of …\nThe result type of <code>ApprovalVotingMessage::ImportApproval</code> …\nGets mapped into …\nApproval checking lag update measured in blocks.\nMessage to the Approval Distribution subsystem.\nMessage to the Approval Voting subsystem.\nMessage to the approval voting parallel subsystem running …\nApproval voting params <code>V10</code>\nSignal to the chain selection subsystem that a specific …\nGets mapped into <code>ApprovalVotingMessage::ApprovedAncestor</code>\nReturns the highest possible ancestor hash of the provided …\nThe error result type of …\nThe result type of <code>ApprovalVotingMessage::ImportAssignment</code> …\nGet the persisted validation data for a particular para …\nGet candidate’s acceptance limitations for asynchronous …\nGet the next, current and some previous authority …\nGet information on all availability cores.\nAvailability Distribution Message.\nAvailability Recovery Message.\nAvailability store subsystem message.\nThe candidate received enough validity votes from the …\nThe Candidate Backing subsystem believes that this …\nThe vote was bad and should be ignored, reporting the peer …\nThe vote was bad and should be ignored, reporting the peer …\nDelayed report for other actions.\nRequest the best leaf containing the given block in its …\nThis bitfield indicates the availability of various …\nBitfield distribution message.\nA dummy implementation to satisfy the current internal …\nDescribes a relay-chain block by the para-chain candidates …\nRequest the block header by hash. Returns <code>None</code> if a block …\nRequest the block number by hash. Returns <code>None</code> if a block …\nGet the cumulative weight of the given block, by hash. If …\n<code>candidates_pending_availability</code>\n<code>ClaimQueue</code>\nRequest the subsystem to check whether it’s allowed to …\nA request to the candidate backing subsystem to check …\nInform the Prospective Parachains Subsystem that a …\nMessages received by the Candidate Backing subsystem.\nGet all events concerning candidates (backing, inclusion, …\nGet the candidate pending availability for a particular …\nMessages received by the Validation subsystem.\nGet the candidates pending availability for a particular …\nChain API request subsystem message.\nA response channel for the result of a chain API request.\nChain selection subsystem messages\nSends back <code>true</code> if the validation outputs pass all …\nA checked indirect assignment, the crypto for the cert has …\nA checked indirect signed approval vote.\nFetch the <code>ClaimQueue</code> from scheduler pallet <code>V11</code>\nSignal to the collator protocol that it should connect to …\nMessage to the Collation Generation subsystem.\nMessages received by the Collator Protocol subsystem.\nSome other <code>Subsystem</code>’s message.\nA complete candidate.\nAlternative to <code>ConnectToValidators</code> in case you already …\nConnect to peers who represent the given <code>validator_ids</code>.\nGet information about the BABE epoch the block was …\n<code>DisabledValidators</code>\nRuntime version requirements for each message <code>Disputes</code>\nDetermine the highest undisputed block within the given …\nReturns all disabled validators at a given block height.\nDisconnect a peer from the given peer-set without …\nDisputes trigger a broad dispute resolution process.\nMessages received by the dispute coordinator subsystem.\nMessages going to the dispute distribution subsystem.\nReturns all on-chain disputes at given block number. …\nGets mapped into …\nDistribute an approval vote for the local validator. The …\nGets mapped into …\nDistribute an assignment cert from the local validator. …\nDistribute a bitfield via gossip to other validators.\nProvide a collation to distribute to validators with an …\nGet all the pending inbound messages in the downward …\n<code>ExecutorParams</code>\nThis variant is used when the PVF cannot be compiled but …\nGet all disputes in relation to a relay parent.\nInstruct availability distribution to fetch a remote PoV.\nRequest the finalized block hash by number. Returns <code>None</code> …\nRequest the last finalized block number. This request …\nSpecialized message type originating from the overseer.\nGets mapped into …\nGet all approval signatures for all chains a candidate …\nGets mapped into …\nRetrieve all available approval signatures for a candidate …\nRequests a set of backable candidates attested by the …\nTry getting N backable candidate hashes along with their …\nGet the hypothetical or actual membership of candidates …\nGet the minimum accepted relay-parent number for each para …\nGet the validation data of some prospective candidate. The …\nMessage to the Gossip Support subsystem.\nResponse type to <code>ApprovalVotingMessage::ApprovedAncestor</code>.\nA hypothetical candidate to be evaluated for …\nIndicates the relay-parents whose fragment chain a …\nRequest specifying which candidates are either already …\nWhen sending a request, what to do on a disconnected …\nJust fail if the destination is not yet connected.\nImport an approval vote into approval-voting database\nImport an assignment into the approval-voting database.\nImport statements by validators about a candidate.\nThe result of <code>DisputeCoordinatorMessage::ImportStatements</code>.\nGet the contents of all channels addressed to the given …\nAn incomplete candidate.\nInitialize the collation generation subsystem.\nA subsystem context, that filters the outgoing messages.\nA sender with the outgoing messages filtered.\nA subsystem to which incoming and outgoing filters are …\nInform the Prospective Parachains Subsystem of a new …\nRequest introduction of a seconded candidate into the …\nThe PVF could not be compiled. This variant is used when …\nWe recommended a particular candidate to be seconded, but …\nImport was invalid (candidate was not available)  and the …\nSign and issue local dispute votes. A value of <code>true</code> …\n<code>KeyOwnershipProof</code>\nReturns a merkle proof of a validator session key. <code>V5</code>\nRequest the leaves in descending order by score.\n<code>MinimumBackingVotes</code>\nThe message type the original subsystem handles incoming.\nFilter incoming and outgoing messages.\nGet the minimum required backing votes.\nMisbehavior reports are self-contained proofs of validator …\n<code>Node features</code>\nEvents from network.\nMessages received from other subsystems.\nMessages received from other subsystems by the network …\nGet a network bridge update.\nEvent from the network bridge.\nEvent from the network bridge.\nAn update from the network bridge, gets mapped into …\nAn update from the network bridge.\nDummy constructor, so we can receive networking events.\nGets mapped into <code>ApprovalDistributionMessage::NewBlocks</code>\nNotify the <code>ApprovalDistribution</code> subsystem about new blocks …\nOur neighbors in the new gossip topology for the session. …\nInform the distribution subsystems about the new gossip …\nGet the node features.\nParent head-data hash.\nOur view has changed.\nGet the backing state of the given para.\nThe parent head-data hash with optional data itself.\nA peer has connected.\nA peer has disconnected.\nPeer has sent a message.\nPeer’s <code>View</code> has changed.\nGet the persisted validation data for a particular para, …\nTry to compile the given validation code and send back the …\nThe outcome of the candidate-validation’s PVF pre-check …\nMessages sent to the Prospective Parachains subsystem.\nA request for the persisted validation data stored in the …\nThis data becomes intrinsics or extrinsics which should be …\nThis data should become part of a relay chain block\nInherent data returned by the provisioner\nMessage to the Provisioner.\nA dummy implementation to satisfy the current internal …\nReturns code hashes of PVFs that require pre-checking by …\nQuery all chunks that we have for the given candidate hash.\nQuery a <code>AvailableData</code> from the AV store.\nGet candidate votes for a candidate.\nQuery an <code>ErasureChunk</code> from the AV store by the candidate …\nQuery whether an <code>ErasureChunk</code> exists within the AV Store.\nGet the size of an <code>ErasureChunk</code> from the AV store by the …\nQuery whether a <code>AvailableData</code> exists within the AV Store.\nFetch a list of all recent disputes the coordinator is …\nRecover available data from validators on the network.\nReinitialize the collation generation subsystem, …\nReport a collator as having provided an invalid collation. …\nReport a peer for their actions.\nType of peer reporting\nMake a request of the runtime API against the post-state …\nThis message allows external subsystems to request the set …\nThe passed blocks must be marked as reverted, and their …\nA message to the Runtime API subsystem.\nA request to the Runtime API subsystem.\nA sender for the result of a runtime API request.\n<code>SubmitReportDisputeLost</code>\nNote that the Candidate Backing subsystem should second …\nThe candidate we recommended to be seconded was validated …\nSend a message to one or more peers on the collation …\nSend a batch of collation messages.\nTell dispute distribution to distribute an explicit …\nSend requests via substrate request/response. Second …\nSend a message to one or more peers on the validation …\nSend a batch of validation messages.\nGet the execution environment parameter set by session …\nGet the session index that a child of the block will have.\nGet the session info for the given session, if stored.\nWe have originated a signed statement in the context of …\nSignal from the <code>Orchestra</code>.\nSingle peer report about malicious actions which should be …\nNote a validator’s statement about a particular …\nStatement distribution message.\nComputes and checks the erasure root of <code>AvailableData</code> …\nThe error result type of a …\nStore an <code>ErasureChunk</code> in the AV store.\nSubmit a collation to the subsystem. This will package it …\nSubmits a PVF pre-checking statement into the transaction …\nSubmits an unsigned extrinsic to slash validator who lost …\nThe vote was valid but too far in the future to accept …\nTry to connect to the peer.\n<code>UnappliedSlashes</code>\nReturns a list of validators that lost a past session …\nThe authority discovery session key has been rotated.\nInform the distribution subsystems about …\nThe PVF has been compiled successfully within the given …\nImport was valid and can be confirmed to peer.\nValidate a candidate with provided parameters using …\nValidate a candidate with provided, exhaustive parameters …\nGet the validation code for a para, taking the given …\nGet validation code by its hash, either past, current or …\nGet the validation code used by the specified para, taking …\nBlanket error for validation failing for internal reasons.\nGet the validator groups and group rotation info.\nGet the current validator set.\nGet the version of the runtime API, if any.\nParent head-data along with its hash.\nReturns the indirect assignment.\nBacked candidates.\nSigned bitfields.\nThe relay-chain block hash.\nGet the <code>CandidateHash</code> of the hypothetical candidate.\nHash of the candidate.\nReturns the candidate bitfield claimed by the assignment.\nGet the <code>ParaId</code> of the hypothetical candidate.\nThe para-id of the candidate.\nPara id of the candidate.\nThe candidate receipt itself.\nThe relay-parent of the candidate.\nThe relay-parent of the candidate.\nThe set of para-chain candidates.\nCandidates, in arbitrary order, which should be checked for\nGet the candidate commitments, if the candidate is …\nBlock descriptions in the direct path between the …\nDispute statement sets.\nFocus an overarching network-bridge event into some more …\nEither a specific fragment chain to check, otherwise all.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nBuilds a checked assignment from an assignment that was …\nBuilds a checked vote from a vote that was checked to be …\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nReturn the hash of the parent head-data.\nThe block hash of the highest viable ancestor.\nFilter messages that are to be received by the subsystem.\nSend modified message instead of the original one\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nSpecifies if we need to replace some outgoing message with …\nNetwork events as transmitted to other subsystems, wrapped …\nThe block number of the highest viable ancestor.\nGet the output head data hash, if the candidate is …\nThe para-id of the candidate.\nThe parent head-data.\nGet parent head data hash of the hypothetical candidate.\nParent head data hash.\nGet the persisted validation data, if the candidate is …\nThe persisted validation data of the candidate.\nGet candidate’s relay parent.\nThe session index of this block.\nShall we connect to a disconnected peer?\nReturns the tranche this assignment is claimed at.\nGet the validation code hash, if the candidate is complete.\nCandidate hash to fetch the PoV for.\nValidator to fetch the PoV from.\nThe id of the parachain that produced this PoV. This field …\nExpected hash of the PoV, a PoV not matching this hash …\nThe relay parent giving the necessary context.\nSender for getting back the result of this fetch.\nThe <code>AvailableData</code> itself.\nA hash of the candidate this chunk belongs to.\nA hash of the candidate this <code>available_data</code> belongs to.\nThe chunk itself.\nCore index where the candidate was backed.\nErasure root we expect to get after chunking.\nThe number of validators in the session.\nNode features at the candidate relay parent. Used for …\nSending side of the channel to send result to.\nSending side of the channel to send result to.\nValidator index. May not be equal to the chunk index.\nThe candidate receipt\nThe candidate receipt\nExecution kind, used for timeouts and retries …\nExecution kind, used for timeouts and retries …\nSession’s executor parameters\nSession’s executor parameters\nThe proof-of-validity\nThe proof-of-validity\nRelay-parent\nThe sending side of the response channel\nThe sending side of the response channel\nThe sending side of the response channel\nValidation code\nValidation code hash\nPersisted validation data\nThe hash of the block in question.\nThe number of ancestors to request.\nThe response channel.\nThe receipt of the candidate.\nThe core index where the candidate should be backed.\nThis parent head-data is needed for elastic scaling.\nThe hash of the parent head-data. Here to avoid computing …\nProof of validity.\nThe result sender should be informed when at least one …\nThe lowest possible block to vote on.\nDescriptions of all the blocks counting upwards from the …\nThe candidate receipt itself.\nInform the requester once we finished importing (if a …\nThe session the candidate appears in.\nStatements, with signatures checked, by validators …\nThe block to vote on, might be base in case there is no …\nContained message\nThe hash of the candidate.\nThe claimed hash of the candidate.\nThe claimed para-ID of the candidate.\nThe claimed relay parent of the candidate.\nThe claimed head-data hash of the candidate.\nThe persisted validation data of the candidate.\nThe receipt of the candidate.\nThe updated authority discovery keys of the peer.\nThe canonical shuffling of validators for the session.\nOur validator index in the session, if any.\nThe <code>PeerId</code> of the peer that updated its …\nThe session info this gossip topology is concerned with.\nThe reverse mapping of <code>canonical_shuffling</code>: from validator …\nSends back the number of <code>AuthorityDiscoveryId</code>s which …\nThe underlying protocol to use for this request.\nThe peer set we want the connection on.\nThe peer set we want the connection on.\nEach entry corresponds to the addresses of an already …\nEach entry corresponds to the addresses of an already …\nIds of the validators to connect to.\nParent head-data hash.\nThis will be provided for collations with elastic scaling …\nEvents from network.\nA struct indicating new gossip topology.\nOur neighbors in the new gossip topology for the session. …\nOur view has changed.\nA peer has connected.\nA peer has disconnected.\nIdentifier of a peer of the network.\nPeer has sent a message.\nPeer’s <code>View</code> has changed.\nDescription of a reputation adjustment for a node.\nThe authority discovery session key has been rotated.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nParses a <code>PeerId</code> from bytes.\nGet <code>PeerId</code> from ed25519 public key bytes.\nTries to turn a <code>Multihash</code> into a <code>PeerId</code>.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConvert <code>PeerId</code> into ed25519 public key bytes.\nThe local validator index, if any.\nNew reputation change with given delta and reason.\nNew reputation change that forces minimum possible …\nGenerate random peer ID.\nReason for reputation change.\nThe session index this topology corresponds to.\nReturns a base-58 encoded string of this <code>PeerId</code>.\nReturns a raw bytes representation of this <code>PeerId</code>.\nThe topology itself.\nTry to extract <code>PeerId</code> from <code>Multiaddr</code>.\nReputation delta.\nLaunch a service task for each item in the provided queue.\nThis variant of Malus backs/approves all malicious …\nImplements common code for nemesis. Currently, only …\nA malicious node variant that attempts to dispute …\nA malicious node that replaces approvals with invalid …\nA malicious node variant that attempts spam statement …\nA malicious node that stores bogus availability chunks, …\nThis variant of Malus overrides the <code>disabled_validators</code> …\nGenerates an overseer that replaces the candidate …\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe probability of behaving maliciously.\nDetermines the percentage of garbage candidates that …\nInvalid relay chain parent.\nValidation function returned invalid data.\nBad collator signature.\nValidation code hash does not match.\nCode size is over the limit.\nFailed to execute.<code>validate_block</code>. This includes function …\nCandidate invalidity details\nValidation outputs check doesn’t pass.\nPoV does not decompress correctly.\nPOV hash does not match.\nPara head hash does not match.\nValidation input is over the limit.\nAn interceptor which fakes validation result with a …\nExecution timeout.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreates and sends the validation response for a given …\nWraps around ApprovalVotingSubsystem and replaces it. …\nDisputeFinalizedCandidates implementation wrapper which …\nrelative depth of the disputed block to the finalized …\nrelative depth of the disputed block to the finalized …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nIntercept incoming `OverseerSignal::BlockFinalized’ and …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nFake validation config (applies to disputes as well).\nMalicious candidate validation subsystem configuration. …\nFake validation error config.\nApplies only when <code>--fake-validation</code> is configured to …\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe probability of behaving maliciously.\nDetermines the percentage of candidates that should be …\nWraps around network bridge and replaces it.\nSpamStatementRequests implementation wrapper which …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nIntercept NetworkBridgeTxMessage::SendRequests with …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nHow many statement distribution requests to send.\nHow many statement distribution requests to send.\nReplace outgoing approval messages with disputes.\nGarbage candidate implementation wrapper which implements …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nIntercept incoming <code>Second</code> requests from the …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe probability of behaving maliciously.\nDetermines the percentage of malicious candidates that are …\nGenerates an overseer with a custom runtime API subsystem.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nIntercept incoming runtime api requests.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.")