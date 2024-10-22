(function() {var type_impls = {
"polkadot_node_subsystem":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Sender%3CT%3E\" class=\"impl\"><a href=\"#impl-Sender%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"struct\" href=\"polkadot_node_subsystem/gen/futures/channel/oneshot/struct.Sender.html\" title=\"struct polkadot_node_subsystem::gen::futures::channel::oneshot::Sender\">Sender</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.send\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"polkadot_node_subsystem/gen/futures/channel/oneshot/struct.Sender.html#tymethod.send\" class=\"fn\">send</a>(self, t: T) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, T&gt;</h4></section></summary><div class=\"docblock\"><p>Completes this oneshot with a successful result.</p>\n<p>This function will consume <code>self</code> and indicate to the other end, the\n<a href=\"polkadot_node_subsystem/gen/futures/channel/oneshot/struct.Receiver.html\" title=\"struct polkadot_node_subsystem::gen::futures::channel::oneshot::Receiver\"><code>Receiver</code></a>, that the value provided is the result of the computation\nthis represents.</p>\n<p>If the value is successfully enqueued for the remote end to receive,\nthen <code>Ok(())</code> is returned. If the receiving end was dropped before\nthis function was called, however, then <code>Err(t)</code> is returned.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.poll_canceled\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"polkadot_node_subsystem/gen/futures/channel/oneshot/struct.Sender.html#tymethod.poll_canceled\" class=\"fn\">poll_canceled</a>(&amp;mut self, cx: &amp;mut <a class=\"struct\" href=\"polkadot_node_subsystem/gen/struct.Context.html\" title=\"struct polkadot_node_subsystem::gen::Context\">Context</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"polkadot_node_subsystem/gen/enum.Poll.html\" title=\"enum polkadot_node_subsystem::gen::Poll\">Poll</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Polls this <code>Sender</code> half to detect whether its associated\n<a href=\"polkadot_node_subsystem/gen/futures/channel/oneshot/struct.Receiver.html\" title=\"struct polkadot_node_subsystem::gen::futures::channel::oneshot::Receiver\"><code>Receiver</code></a> has been dropped.</p>\n<h5 id=\"return-values\"><a href=\"#return-values\">Return values</a></h5>\n<p>If <code>Ready(())</code> is returned then the associated <code>Receiver</code> has been\ndropped, which means any work required for sending should be canceled.</p>\n<p>If <code>Pending</code> is returned then the associated <code>Receiver</code> is still\nalive and may be able to receive a message if sent. The current task,\nhowever, is scheduled to receive a notification if the corresponding\n<code>Receiver</code> goes away.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.cancellation\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"polkadot_node_subsystem/gen/futures/channel/oneshot/struct.Sender.html#tymethod.cancellation\" class=\"fn\">cancellation</a>(&amp;mut self) -&gt; <a class=\"struct\" href=\"polkadot_node_subsystem/gen/futures/channel/oneshot/struct.Cancellation.html\" title=\"struct polkadot_node_subsystem::gen::futures::channel::oneshot::Cancellation\">Cancellation</a>&lt;'_, T&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Cancellation&lt;&#39;_, T&gt;\">ⓘ</a></h4></section></summary><div class=\"docblock\"><p>Creates a future that resolves when this <code>Sender</code>’s corresponding\n<a href=\"polkadot_node_subsystem/gen/futures/channel/oneshot/struct.Receiver.html\" title=\"struct polkadot_node_subsystem::gen::futures::channel::oneshot::Receiver\"><code>Receiver</code></a> half has hung up.</p>\n<p>This is a utility wrapping <a href=\"polkadot_node_subsystem/gen/futures/channel/oneshot/struct.Sender.html#method.poll_canceled\" title=\"method polkadot_node_subsystem::gen::futures::channel::oneshot::Sender::poll_canceled\"><code>poll_canceled</code></a>\nto expose a <a href=\"polkadot_node_subsystem/gen/trait.Future.html\" title=\"trait polkadot_node_subsystem::gen::Future\"><code>Future</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_canceled\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"polkadot_node_subsystem/gen/futures/channel/oneshot/struct.Sender.html#tymethod.is_canceled\" class=\"fn\">is_canceled</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Tests to see whether this <code>Sender</code>’s corresponding <code>Receiver</code>\nhas been dropped.</p>\n<p>Unlike <a href=\"polkadot_node_subsystem/gen/futures/channel/oneshot/struct.Sender.html#method.poll_canceled\" title=\"method polkadot_node_subsystem::gen::futures::channel::oneshot::Sender::poll_canceled\"><code>poll_canceled</code></a>, this function does not\nenqueue a task for wakeup upon cancellation, but merely reports the\ncurrent state, which may be subject to concurrent modification.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_connected_to\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"polkadot_node_subsystem/gen/futures/channel/oneshot/struct.Sender.html#tymethod.is_connected_to\" class=\"fn\">is_connected_to</a>(&amp;self, receiver: &amp;<a class=\"struct\" href=\"polkadot_node_subsystem/gen/futures/channel/oneshot/struct.Receiver.html\" title=\"struct polkadot_node_subsystem::gen::futures::channel::oneshot::Receiver\">Receiver</a>&lt;T&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Tests to see whether this <code>Sender</code> is connected to the given <code>Receiver</code>. That is, whether\nthey were created by the same call to <code>channel</code>.</p>\n</div></details></div></details>",0,"polkadot_node_subsystem::messages::ChainApiResponseChannel","polkadot_node_subsystem::messages::RuntimeApiSender"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Sender%3CT%3E\" class=\"impl\"><a href=\"#impl-Debug-for-Sender%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"polkadot_node_subsystem/gen/futures/channel/oneshot/struct.Sender.html\" title=\"struct polkadot_node_subsystem::gen::futures::channel::oneshot::Sender\">Sender</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","polkadot_node_subsystem::messages::ChainApiResponseChannel","polkadot_node_subsystem::messages::RuntimeApiSender"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-Sender%3CT%3E\" class=\"impl\"><a href=\"#impl-Drop-for-Sender%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"polkadot_node_subsystem/gen/futures/channel/oneshot/struct.Sender.html\" title=\"struct polkadot_node_subsystem::gen::futures::channel::oneshot::Sender\">Sender</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html#tymethod.drop\">Read more</a></div></details></div></details>","Drop","polkadot_node_subsystem::messages::ChainApiResponseChannel","polkadot_node_subsystem::messages::RuntimeApiSender"],["<section id=\"impl-Unpin-for-Sender%3CT%3E\" class=\"impl\"><a href=\"#impl-Unpin-for-Sender%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"polkadot_node_subsystem/gen/futures/channel/oneshot/struct.Sender.html\" title=\"struct polkadot_node_subsystem::gen::futures::channel::oneshot::Sender\">Sender</a>&lt;T&gt;</h3></section>","Unpin","polkadot_node_subsystem::messages::ChainApiResponseChannel","polkadot_node_subsystem::messages::RuntimeApiSender"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()