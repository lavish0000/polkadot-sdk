(function() {var implementors = {
"cumulus_test_client":[],
"node_testing":[],
"polkadot_test_client":[],
"sc_basic_authorship":[["impl&lt;A, Block, C, PR&gt; Proposer&lt;Block&gt; for <a class=\"struct\" href=\"sc_basic_authorship/struct.Proposer.html\" title=\"struct sc_basic_authorship::Proposer\">Proposer</a>&lt;Block, C, A, PR&gt;<div class=\"where\">where\n    A: TransactionPool&lt;Block = Block&gt; + 'static,\n    Block: BlockT,\n    C: HeaderBackend&lt;Block&gt; + ProvideRuntimeApi&lt;Block&gt; + CallApiAt&lt;Block&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,\n    C::Api: ApiExt&lt;Block&gt; + BlockBuilderApi&lt;Block&gt;,\n    PR: ProofRecording,</div>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()