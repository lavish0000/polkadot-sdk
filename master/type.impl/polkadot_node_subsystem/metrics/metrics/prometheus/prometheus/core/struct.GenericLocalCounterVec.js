(function() {var type_impls = {
"polkadot_node_subsystem":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-GenericLocalCounterVec%3CP%3E\" class=\"impl\"><a href=\"#impl-Clone-for-GenericLocalCounterVec%3CP%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/core/struct.GenericLocalCounterVec.html\" title=\"struct polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::core::GenericLocalCounterVec\">GenericLocalCounterVec</a>&lt;P&gt;<div class=\"where\">where\n    P: <a class=\"trait\" href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/core/trait.Atomic.html\" title=\"trait polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::core::Atomic\">Atomic</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/core/struct.GenericLocalCounterVec.html\" title=\"struct polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::core::GenericLocalCounterVec\">GenericLocalCounterVec</a>&lt;P&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.81.0/src/core/clone.rs.html#172\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::local::LocalCounterVec","polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::local::LocalIntCounterVec"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-GenericLocalCounterVec%3CP%3E\" class=\"impl\"><a href=\"#impl-Debug-for-GenericLocalCounterVec%3CP%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/core/struct.GenericLocalCounterVec.html\" title=\"struct polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::core::GenericLocalCounterVec\">GenericLocalCounterVec</a>&lt;P&gt;<div class=\"where\">where\n    P: <a class=\"trait\" href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/core/trait.Atomic.html\" title=\"trait polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::core::Atomic\">Atomic</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::local::LocalCounterVec","polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::local::LocalIntCounterVec"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GenericLocalCounterVec%3CP%3E\" class=\"impl\"><a href=\"#impl-GenericLocalCounterVec%3CP%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P&gt; <a class=\"struct\" href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/core/struct.GenericLocalCounterVec.html\" title=\"struct polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::core::GenericLocalCounterVec\">GenericLocalCounterVec</a>&lt;P&gt;<div class=\"where\">where\n    P: <a class=\"trait\" href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/core/trait.Atomic.html\" title=\"trait polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::core::Atomic\">Atomic</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_label_values\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/core/struct.GenericLocalCounterVec.html#tymethod.with_label_values\" class=\"fn\">with_label_values</a>&lt;'a&gt;(\n    &amp;'a mut self,\n    vals: &amp;[&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.str.html\">str</a>],\n) -&gt; &amp;'a mut <a class=\"struct\" href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/core/struct.GenericLocalCounter.html\" title=\"struct polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::core::GenericLocalCounter\">GenericLocalCounter</a>&lt;P&gt;</h4></section></summary><div class=\"docblock\"><p>Get a <a href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/core/struct.GenericLocalCounter.html\" title=\"struct polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::core::GenericLocalCounter\"><code>GenericLocalCounter</code></a> by label values.\nSee more <a href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/core/struct.MetricVec.html#method.with_label_values\" title=\"method polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::core::MetricVec::with_label_values\">MetricVec::with_label_values</a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.remove_label_values\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/core/struct.GenericLocalCounterVec.html#tymethod.remove_label_values\" class=\"fn\">remove_label_values</a>(&amp;mut self, vals: &amp;[&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.str.html\">str</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"polkadot_node_subsystem/metrics/metrics/prometheus/enum.PrometheusError.html\" title=\"enum polkadot_node_subsystem::metrics::metrics::prometheus::PrometheusError\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Remove a <a href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/core/struct.GenericLocalCounter.html\" title=\"struct polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::core::GenericLocalCounter\"><code>GenericLocalCounter</code></a> by label values.\nSee more <a href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/core/struct.MetricVec.html#method.remove_label_values\" title=\"method polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::core::MetricVec::remove_label_values\">MetricVec::remove_label_values</a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.flush\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/core/struct.GenericLocalCounterVec.html#tymethod.flush\" class=\"fn\">flush</a>(&amp;self)</h4></section></summary><div class=\"docblock\"><p>Flush the local metrics to the <a href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/type.CounterVec.html\" title=\"type polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::CounterVec\"><code>CounterVec</code></a> metric.</p>\n</div></details></div></details>",0,"polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::local::LocalCounterVec","polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::local::LocalIntCounterVec"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-LocalMetric-for-GenericLocalCounterVec%3CP%3E\" class=\"impl\"><a href=\"#impl-LocalMetric-for-GenericLocalCounterVec%3CP%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P&gt; <a class=\"trait\" href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/local/trait.LocalMetric.html\" title=\"trait polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::local::LocalMetric\">LocalMetric</a> for <a class=\"struct\" href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/core/struct.GenericLocalCounterVec.html\" title=\"struct polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::core::GenericLocalCounterVec\">GenericLocalCounterVec</a>&lt;P&gt;<div class=\"where\">where\n    P: <a class=\"trait\" href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/core/trait.Atomic.html\" title=\"trait polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::core::Atomic\">Atomic</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.flush\" class=\"method trait-impl\"><a href=\"#method.flush\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/local/trait.LocalMetric.html#tymethod.flush\" class=\"fn\">flush</a>(&amp;self)</h4></section></summary><div class=\"docblock\"><p>Flush the local metrics to the <a href=\"polkadot_node_subsystem/metrics/metrics/prometheus/prometheus/type.CounterVec.html\" title=\"type polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::CounterVec\"><code>CounterVec</code></a> metric.</p>\n</div></details></div></details>","LocalMetric","polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::local::LocalCounterVec","polkadot_node_subsystem::metrics::metrics::prometheus::prometheus::local::LocalIntCounterVec"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()