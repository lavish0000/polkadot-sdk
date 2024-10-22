(function() {var type_impls = {
"polkadot_node_subsystem":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-GenericLocalCounter%3CP%3E\" class=\"impl\"><a href=\"#impl-Clone-for-GenericLocalCounter%3CP%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/core/struct.GenericLocalCounter.html\" title=\"struct polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::core::GenericLocalCounter\">GenericLocalCounter</a>&lt;P&gt;<div class=\"where\">where\n    P: <a class=\"trait\" href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/core/trait.Atomic.html\" title=\"trait polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::core::Atomic\">Atomic</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/core/struct.GenericLocalCounter.html\" title=\"struct polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::core::GenericLocalCounter\">GenericLocalCounter</a>&lt;P&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.81.0/src/core/clone.rs.html#172\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::local::LocalCounter","polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::local::LocalIntCounter"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CounterWithValueType-for-GenericLocalCounter%3CP%3E\" class=\"impl\"><a href=\"#impl-CounterWithValueType-for-GenericLocalCounter%3CP%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P&gt; <a class=\"trait\" href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/local/trait.CounterWithValueType.html\" title=\"trait polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::local::CounterWithValueType\">CounterWithValueType</a> for <a class=\"struct\" href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/core/struct.GenericLocalCounter.html\" title=\"struct polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::core::GenericLocalCounter\">GenericLocalCounter</a>&lt;P&gt;<div class=\"where\">where\n    P: <a class=\"trait\" href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/core/trait.Atomic.html\" title=\"trait polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::core::Atomic\">Atomic</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.ValueType\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.ValueType\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/local/trait.CounterWithValueType.html#associatedtype.ValueType\" class=\"associatedtype\">ValueType</a> = P</h4></section></summary><div class='docblock'>the exact type which implements Atomic</div></details></div></details>","CounterWithValueType","polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::local::LocalCounter","polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::local::LocalIntCounter"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-GenericLocalCounter%3CP%3E\" class=\"impl\"><a href=\"#impl-Debug-for-GenericLocalCounter%3CP%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/core/struct.GenericLocalCounter.html\" title=\"struct polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::core::GenericLocalCounter\">GenericLocalCounter</a>&lt;P&gt;<div class=\"where\">where\n    P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/core/trait.Atomic.html\" title=\"trait polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::core::Atomic\">Atomic</a>,\n    &lt;P as <a class=\"trait\" href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/core/trait.Atomic.html\" title=\"trait polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::core::Atomic\">Atomic</a>&gt;::<a class=\"associatedtype\" href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/core/trait.Atomic.html#associatedtype.T\" title=\"type polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::core::Atomic::T\">T</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::local::LocalCounter","polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::local::LocalIntCounter"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GenericLocalCounter%3CP%3E\" class=\"impl\"><a href=\"#impl-GenericLocalCounter%3CP%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P&gt; <a class=\"struct\" href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/core/struct.GenericLocalCounter.html\" title=\"struct polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::core::GenericLocalCounter\">GenericLocalCounter</a>&lt;P&gt;<div class=\"where\">where\n    P: <a class=\"trait\" href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/core/trait.Atomic.html\" title=\"trait polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::core::Atomic\">Atomic</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.inc_by\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/core/struct.GenericLocalCounter.html#tymethod.inc_by\" class=\"fn\">inc_by</a>(&amp;self, v: &lt;P as <a class=\"trait\" href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/core/trait.Atomic.html\" title=\"trait polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::core::Atomic\">Atomic</a>&gt;::<a class=\"associatedtype\" href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/core/trait.Atomic.html#associatedtype.T\" title=\"type polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::core::Atomic::T\">T</a>)</h4></section></summary><div class=\"docblock\"><p>Increase the given value to the local counter.</p>\n<h5 id=\"panics\"><a class=\"doc-anchor\" href=\"#panics\">§</a>Panics</h5>\n<p>Panics in debug build if the value is &lt; 0.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.inc\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/core/struct.GenericLocalCounter.html#tymethod.inc\" class=\"fn\">inc</a>(&amp;self)</h4></section></summary><div class=\"docblock\"><p>Increase the local counter by 1.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/core/struct.GenericLocalCounter.html#tymethod.get\" class=\"fn\">get</a>(&amp;self) -&gt; &lt;P as <a class=\"trait\" href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/core/trait.Atomic.html\" title=\"trait polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::core::Atomic\">Atomic</a>&gt;::<a class=\"associatedtype\" href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/core/trait.Atomic.html#associatedtype.T\" title=\"type polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::core::Atomic::T\">T</a></h4></section></summary><div class=\"docblock\"><p>Return the local counter value.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.reset\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/core/struct.GenericLocalCounter.html#tymethod.reset\" class=\"fn\">reset</a>(&amp;self)</h4></section></summary><div class=\"docblock\"><p>Restart the counter, resetting its value back to 0.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.flush\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/core/struct.GenericLocalCounter.html#tymethod.flush\" class=\"fn\">flush</a>(&amp;self)</h4></section></summary><div class=\"docblock\"><p>Flush the local metrics to the <a href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/type.Counter.html\" title=\"type polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::Counter\"><code>Counter</code></a>.</p>\n</div></details></div></details>",0,"polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::local::LocalCounter","polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::local::LocalIntCounter"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-LocalMetric-for-GenericLocalCounter%3CP%3E\" class=\"impl\"><a href=\"#impl-LocalMetric-for-GenericLocalCounter%3CP%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P&gt; <a class=\"trait\" href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/local/trait.LocalMetric.html\" title=\"trait polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::local::LocalMetric\">LocalMetric</a> for <a class=\"struct\" href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/core/struct.GenericLocalCounter.html\" title=\"struct polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::core::GenericLocalCounter\">GenericLocalCounter</a>&lt;P&gt;<div class=\"where\">where\n    P: <a class=\"trait\" href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/core/trait.Atomic.html\" title=\"trait polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::core::Atomic\">Atomic</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.flush\" class=\"method trait-impl\"><a href=\"#method.flush\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/local/trait.LocalMetric.html#tymethod.flush\" class=\"fn\">flush</a>(&amp;self)</h4></section></summary><div class=\"docblock\"><p>Flush the local metrics to the <a href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/type.Counter.html\" title=\"type polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::Counter\"><code>Counter</code></a>.</p>\n</div></details></div></details>","LocalMetric","polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::local::LocalCounter","polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::local::LocalIntCounter"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()