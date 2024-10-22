(function() {var type_impls = {
"polkadot_node_subsystem_util":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MetricVec%3CCounterVecBuilder%3CP%3E%3E\" class=\"impl\"><a href=\"#impl-MetricVec%3CCounterVecBuilder%3CP%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P&gt; <a class=\"struct\" href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/struct.MetricVec.html\" title=\"struct polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::MetricVec\">MetricVec</a>&lt;CounterVecBuilder&lt;P&gt;&gt;<span class=\"where fmt-newline\">where\n    P: <a class=\"trait\" href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/trait.Atomic.html\" title=\"trait polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::Atomic\">Atomic</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/struct.MetricVec.html#tymethod.new\" class=\"fn\">new</a>(\n    opts: <a class=\"struct\" href=\"polkadot_node_subsystem_util/metrics/prometheus/struct.Opts.html\" title=\"struct polkadot_node_subsystem_util::metrics::prometheus::Opts\">Opts</a>,\n    label_names: &amp;[&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>]\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/struct.MetricVec.html\" title=\"struct polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::MetricVec\">MetricVec</a>&lt;CounterVecBuilder&lt;P&gt;&gt;, <a class=\"enum\" href=\"polkadot_node_subsystem_util/metrics/prometheus/enum.PrometheusError.html\" title=\"enum polkadot_node_subsystem_util::metrics::prometheus::PrometheusError\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Create a new <a href=\"polkadot_node_subsystem_util/metrics/prometheus/type.CounterVec.html\" title=\"type polkadot_node_subsystem_util::metrics::prometheus::CounterVec\"><code>GenericCounterVec</code></a> based on the provided\n<a href=\"polkadot_node_subsystem_util/metrics/prometheus/struct.Opts.html\" title=\"struct polkadot_node_subsystem_util::metrics::prometheus::Opts\"><code>Opts</code></a> and partitioned by the given label names. At least one label name must be\nprovided.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.local\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/struct.MetricVec.html#tymethod.local\" class=\"fn\">local</a>(&amp;self) -&gt; <a class=\"struct\" href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/struct.GenericLocalCounterVec.html\" title=\"struct polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::GenericLocalCounterVec\">GenericLocalCounterVec</a>&lt;P&gt;</h4></section></summary><div class=\"docblock\"><p>Return a <a href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/struct.GenericLocalCounterVec.html\" title=\"struct polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::GenericLocalCounterVec\"><code>GenericLocalCounterVec</code></a> for single thread usage.</p>\n</div></details></div></details>",0,"polkadot_node_subsystem_util::metrics::prometheus::CounterVec","polkadot_node_subsystem_util::metrics::prometheus::prometheus::CounterVec","polkadot_node_subsystem_util::metrics::prometheus::prometheus::IntCounterVec"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MetricVec%3CGaugeVecBuilder%3CP%3E%3E\" class=\"impl\"><a href=\"#impl-MetricVec%3CGaugeVecBuilder%3CP%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P&gt; <a class=\"struct\" href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/struct.MetricVec.html\" title=\"struct polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::MetricVec\">MetricVec</a>&lt;GaugeVecBuilder&lt;P&gt;&gt;<span class=\"where fmt-newline\">where\n    P: <a class=\"trait\" href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/trait.Atomic.html\" title=\"trait polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::Atomic\">Atomic</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/struct.MetricVec.html#tymethod.new\" class=\"fn\">new</a>(\n    opts: <a class=\"struct\" href=\"polkadot_node_subsystem_util/metrics/prometheus/struct.Opts.html\" title=\"struct polkadot_node_subsystem_util::metrics::prometheus::Opts\">Opts</a>,\n    label_names: &amp;[&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>]\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/struct.MetricVec.html\" title=\"struct polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::MetricVec\">MetricVec</a>&lt;GaugeVecBuilder&lt;P&gt;&gt;, <a class=\"enum\" href=\"polkadot_node_subsystem_util/metrics/prometheus/enum.PrometheusError.html\" title=\"enum polkadot_node_subsystem_util::metrics::prometheus::PrometheusError\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Create a new <a href=\"polkadot_node_subsystem_util/metrics/prometheus/type.GaugeVec.html\" title=\"type polkadot_node_subsystem_util::metrics::prometheus::GaugeVec\"><code>GenericGaugeVec</code></a> based on the provided\n<a href=\"polkadot_node_subsystem_util/metrics/prometheus/struct.Opts.html\" title=\"struct polkadot_node_subsystem_util::metrics::prometheus::Opts\"><code>Opts</code></a> and partitioned by the given label names. At least one label name must\nbe provided.</p>\n</div></details></div></details>",0,"polkadot_node_subsystem_util::metrics::prometheus::GaugeVec","polkadot_node_subsystem_util::metrics::prometheus::prometheus::GaugeVec","polkadot_node_subsystem_util::metrics::prometheus::prometheus::IntGaugeVec"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MetricVec%3CHistogramVecBuilder%3E\" class=\"impl\"><a href=\"#impl-MetricVec%3CHistogramVecBuilder%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/struct.MetricVec.html\" title=\"struct polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::MetricVec\">MetricVec</a>&lt;HistogramVecBuilder&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/struct.MetricVec.html#tymethod.new\" class=\"fn\">new</a>(\n    opts: <a class=\"struct\" href=\"polkadot_node_subsystem_util/metrics/prometheus/struct.HistogramOpts.html\" title=\"struct polkadot_node_subsystem_util::metrics::prometheus::HistogramOpts\">HistogramOpts</a>,\n    label_names: &amp;[&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>]\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/struct.MetricVec.html\" title=\"struct polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::MetricVec\">MetricVec</a>&lt;HistogramVecBuilder&gt;, <a class=\"enum\" href=\"polkadot_node_subsystem_util/metrics/prometheus/enum.PrometheusError.html\" title=\"enum polkadot_node_subsystem_util::metrics::prometheus::PrometheusError\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Create a new <a href=\"polkadot_node_subsystem_util/metrics/prometheus/type.HistogramVec.html\" title=\"type polkadot_node_subsystem_util::metrics::prometheus::HistogramVec\"><code>HistogramVec</code></a> based on the provided\n<a href=\"polkadot_node_subsystem_util/metrics/prometheus/struct.HistogramOpts.html\" title=\"struct polkadot_node_subsystem_util::metrics::prometheus::HistogramOpts\"><code>HistogramOpts</code></a> and partitioned by the given label names. At least\none label name must be provided.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.local\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/struct.MetricVec.html#tymethod.local\" class=\"fn\">local</a>(&amp;self) -&gt; <a class=\"struct\" href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/local/struct.LocalHistogramVec.html\" title=\"struct polkadot_node_subsystem_util::metrics::prometheus::prometheus::local::LocalHistogramVec\">LocalHistogramVec</a></h4></section></summary><div class=\"docblock\"><p>Return a <code>LocalHistogramVec</code> for single thread usage.</p>\n</div></details></div></details>",0,"polkadot_node_subsystem_util::metrics::prometheus::HistogramVec"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MetricVec%3CT%3E\" class=\"impl\"><a href=\"#impl-MetricVec%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"struct\" href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/struct.MetricVec.html\" title=\"struct polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::MetricVec\">MetricVec</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/trait.MetricVecBuilder.html\" title=\"trait polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::MetricVecBuilder\">MetricVecBuilder</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.create\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/struct.MetricVec.html#tymethod.create\" class=\"fn\">create</a>(\n    metric_type: <a class=\"enum\" href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/proto/enum.MetricType.html\" title=\"enum polkadot_node_subsystem_util::metrics::prometheus::prometheus::proto::MetricType\">MetricType</a>,\n    new_metric: T,\n    opts: &lt;T as <a class=\"trait\" href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/trait.MetricVecBuilder.html\" title=\"trait polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::MetricVecBuilder\">MetricVecBuilder</a>&gt;::<a class=\"associatedtype\" href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/trait.MetricVecBuilder.html#associatedtype.P\" title=\"type polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::MetricVecBuilder::P\">P</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/struct.MetricVec.html\" title=\"struct polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::MetricVec\">MetricVec</a>&lt;T&gt;, <a class=\"enum\" href=\"polkadot_node_subsystem_util/metrics/prometheus/enum.PrometheusError.html\" title=\"enum polkadot_node_subsystem_util::metrics::prometheus::PrometheusError\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p><code>create</code> creates a MetricVec with description <code>desc</code>, a metric type <code>metric_type</code> and\na MetricVecBuilder <code>new_metric</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_metric_with_label_values\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/struct.MetricVec.html#tymethod.get_metric_with_label_values\" class=\"fn\">get_metric_with_label_values</a>(\n    &amp;self,\n    vals: &amp;[&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>]\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;T as <a class=\"trait\" href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/trait.MetricVecBuilder.html\" title=\"trait polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::MetricVecBuilder\">MetricVecBuilder</a>&gt;::<a class=\"associatedtype\" href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/trait.MetricVecBuilder.html#associatedtype.M\" title=\"type polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::MetricVecBuilder::M\">M</a>, <a class=\"enum\" href=\"polkadot_node_subsystem_util/metrics/prometheus/enum.PrometheusError.html\" title=\"enum polkadot_node_subsystem_util::metrics::prometheus::PrometheusError\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p><code>get_metric_with_label_values</code> returns the <a href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/trait.Metric.html\" title=\"trait polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::Metric\"><code>Metric</code></a> for the given slice\nof label values (same order as the VariableLabels in Desc). If that combination of\nlabel values is accessed for the first time, a new <a href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/trait.Metric.html\" title=\"trait polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::Metric\"><code>Metric</code></a> is created.</p>\n<p>It is possible to call this method without using the returned <a href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/trait.Metric.html\" title=\"trait polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::Metric\"><code>Metric</code></a>\nto only create the new <a href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/trait.Metric.html\" title=\"trait polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::Metric\"><code>Metric</code></a> but leave it at its start value (e.g. a\n<a href=\"polkadot_node_subsystem_util/metrics/prometheus/struct.Histogram.html\" title=\"struct polkadot_node_subsystem_util::metrics::prometheus::Histogram\"><code>Histogram</code></a> without any observations).</p>\n<p>Keeping the <a href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/trait.Metric.html\" title=\"trait polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::Metric\"><code>Metric</code></a> for later use is possible (and should be considered\nif performance is critical), but keep in mind that Reset, DeleteLabelValues and Delete can\nbe used to delete the <a href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/trait.Metric.html\" title=\"trait polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::Metric\"><code>Metric</code></a> from the MetricVec. In that case, the\n<a href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/trait.Metric.html\" title=\"trait polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::Metric\"><code>Metric</code></a> will still exist, but it will not be exported anymore, even if a\n<a href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/trait.Metric.html\" title=\"trait polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::Metric\"><code>Metric</code></a> with the same label values is created later. See also the\nCounterVec example.</p>\n<p>An error is returned if the number of label values is not the same as the\nnumber of VariableLabels in Desc.</p>\n<p>Note that for more than one label value, this method is prone to mistakes\ncaused by an incorrect order of arguments. Consider get_metric_with(labels) as\nan alternative to avoid that type of mistake. For higher label numbers, the\nlatter has a much more readable (albeit more verbose) syntax, but it comes\nwith a performance overhead (for creating and processing the Labels map).</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_metric_with\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/struct.MetricVec.html#tymethod.get_metric_with\" class=\"fn\">get_metric_with</a>(\n    &amp;self,\n    labels: &amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/std/collections/hash/map/struct.HashMap.html\" title=\"struct std::collections::hash::map::HashMap\">HashMap</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>, &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;T as <a class=\"trait\" href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/trait.MetricVecBuilder.html\" title=\"trait polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::MetricVecBuilder\">MetricVecBuilder</a>&gt;::<a class=\"associatedtype\" href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/trait.MetricVecBuilder.html#associatedtype.M\" title=\"type polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::MetricVecBuilder::M\">M</a>, <a class=\"enum\" href=\"polkadot_node_subsystem_util/metrics/prometheus/enum.PrometheusError.html\" title=\"enum polkadot_node_subsystem_util::metrics::prometheus::PrometheusError\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p><code>get_metric_with</code> returns the <a href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/trait.Metric.html\" title=\"trait polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::Metric\"><code>Metric</code></a> for the given Labels map (the\nlabel names must match those of the VariableLabels in Desc). If that label map is\naccessed for the first time, a new <a href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/trait.Metric.html\" title=\"trait polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::Metric\"><code>Metric</code></a> is created. Implications of\ncreating a <a href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/trait.Metric.html\" title=\"trait polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::Metric\"><code>Metric</code></a> without using it and keeping the\n<a href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/trait.Metric.html\" title=\"trait polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::Metric\"><code>Metric</code></a> for later use are the same as for GetMetricWithLabelValues.</p>\n<p>An error is returned if the number and names of the Labels are inconsistent\nwith those of the VariableLabels in Desc.</p>\n<p>This method is used for the same purpose as\n<code>get_metric_with_label_values</code>. See there for pros and cons of the two\nmethods.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_label_values\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/struct.MetricVec.html#tymethod.with_label_values\" class=\"fn\">with_label_values</a>(&amp;self, vals: &amp;[&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>]) -&gt; &lt;T as <a class=\"trait\" href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/trait.MetricVecBuilder.html\" title=\"trait polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::MetricVecBuilder\">MetricVecBuilder</a>&gt;::<a class=\"associatedtype\" href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/trait.MetricVecBuilder.html#associatedtype.M\" title=\"type polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::MetricVecBuilder::M\">M</a></h4></section></summary><div class=\"docblock\"><p><code>with_label_values</code> works as <code>get_metric_with_label_values</code>, but panics if an error\noccurs.</p>\n<h5 id=\"examples\"><a href=\"#examples\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>prometheus::{CounterVec, Opts};\n<span class=\"kw\">let </span>vec = CounterVec::new(\n    Opts::new(<span class=\"string\">&quot;requests_total&quot;</span>, <span class=\"string\">&quot;Number of requests.&quot;</span>),\n    <span class=\"kw-2\">&amp;</span>[<span class=\"string\">&quot;code&quot;</span>, <span class=\"string\">&quot;http_method&quot;</span>]\n).unwrap();\nvec.with_label_values(<span class=\"kw-2\">&amp;</span>[<span class=\"string\">&quot;404&quot;</span>, <span class=\"string\">&quot;POST&quot;</span>]).inc()</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/struct.MetricVec.html#tymethod.with\" class=\"fn\">with</a>(&amp;self, labels: &amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/std/collections/hash/map/struct.HashMap.html\" title=\"struct std::collections::hash::map::HashMap\">HashMap</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>, &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>&gt;) -&gt; &lt;T as <a class=\"trait\" href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/trait.MetricVecBuilder.html\" title=\"trait polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::MetricVecBuilder\">MetricVecBuilder</a>&gt;::<a class=\"associatedtype\" href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/trait.MetricVecBuilder.html#associatedtype.M\" title=\"type polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::MetricVecBuilder::M\">M</a></h4></section></summary><div class=\"docblock\"><p><code>with</code> works as <code>get_metric_with</code>, but panics if an error occurs. The method allows\nneat syntax like:\nhttpReqs.with(Labels{“status”:“404”, “method”:“POST”}).inc()</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.remove_label_values\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/struct.MetricVec.html#tymethod.remove_label_values\" class=\"fn\">remove_label_values</a>(&amp;self, vals: &amp;[&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"polkadot_node_subsystem_util/metrics/prometheus/enum.PrometheusError.html\" title=\"enum polkadot_node_subsystem_util::metrics::prometheus::PrometheusError\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p><code>remove_label_values</code> removes the metric where the variable labels are the same\nas those passed in as labels (same order as the VariableLabels in Desc). It\nreturns true if a metric was deleted.</p>\n<p>It returns an error if the number of label values is not the same as the\nnumber of VariableLabels in Desc.</p>\n<p>Note that for more than one label value, this method is prone to mistakes\ncaused by an incorrect order of arguments. Consider delete(labels) as an\nalternative to avoid that type of mistake. For higher label numbers, the\nlatter has a much more readable (albeit more verbose) syntax, but it comes\nwith a performance overhead (for creating and processing the Labels map).</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.remove\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/struct.MetricVec.html#tymethod.remove\" class=\"fn\">remove</a>(&amp;self, labels: &amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/std/collections/hash/map/struct.HashMap.html\" title=\"struct std::collections::hash::map::HashMap\">HashMap</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>, &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"polkadot_node_subsystem_util/metrics/prometheus/enum.PrometheusError.html\" title=\"enum polkadot_node_subsystem_util::metrics::prometheus::PrometheusError\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p><code>remove</code> removes the metric where the variable labels are the same as those\npassed in as labels. It returns true if a metric was deleted.</p>\n<p>It returns an error if the number and names of the Labels are inconsistent\nwith those of the VariableLabels in the Desc of the MetricVec.</p>\n<p>This method is used for the same purpose as <code>delete_label_values</code>. See\nthere for pros and cons of the two methods.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.reset\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/struct.MetricVec.html#tymethod.reset\" class=\"fn\">reset</a>(&amp;self)</h4></section></summary><div class=\"docblock\"><p><code>reset</code> deletes all metrics in this vector.</p>\n</div></details></div></details>",0,"polkadot_node_subsystem_util::metrics::prometheus::CounterVec","polkadot_node_subsystem_util::metrics::prometheus::GaugeVec","polkadot_node_subsystem_util::metrics::prometheus::prometheus::CounterVec","polkadot_node_subsystem_util::metrics::prometheus::prometheus::IntCounterVec","polkadot_node_subsystem_util::metrics::prometheus::prometheus::GaugeVec","polkadot_node_subsystem_util::metrics::prometheus::prometheus::IntGaugeVec","polkadot_node_subsystem_util::metrics::prometheus::HistogramVec"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-MetricVec%3CT%3E\" class=\"impl\"><a href=\"#impl-Debug-for-MetricVec%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/struct.MetricVec.html\" title=\"struct polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::MetricVec\">MetricVec</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/trait.MetricVecBuilder.html\" title=\"trait polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::MetricVecBuilder\">MetricVecBuilder</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","polkadot_node_subsystem_util::metrics::prometheus::CounterVec","polkadot_node_subsystem_util::metrics::prometheus::GaugeVec","polkadot_node_subsystem_util::metrics::prometheus::prometheus::CounterVec","polkadot_node_subsystem_util::metrics::prometheus::prometheus::IntCounterVec","polkadot_node_subsystem_util::metrics::prometheus::prometheus::GaugeVec","polkadot_node_subsystem_util::metrics::prometheus::prometheus::IntGaugeVec","polkadot_node_subsystem_util::metrics::prometheus::HistogramVec"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-MetricVec%3CT%3E\" class=\"impl\"><a href=\"#impl-Clone-for-MetricVec%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/struct.MetricVec.html\" title=\"struct polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::MetricVec\">MetricVec</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/trait.MetricVecBuilder.html\" title=\"trait polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::MetricVecBuilder\">MetricVecBuilder</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/struct.MetricVec.html\" title=\"struct polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::MetricVec\">MetricVec</a>&lt;T&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","polkadot_node_subsystem_util::metrics::prometheus::CounterVec","polkadot_node_subsystem_util::metrics::prometheus::GaugeVec","polkadot_node_subsystem_util::metrics::prometheus::prometheus::CounterVec","polkadot_node_subsystem_util::metrics::prometheus::prometheus::IntCounterVec","polkadot_node_subsystem_util::metrics::prometheus::prometheus::GaugeVec","polkadot_node_subsystem_util::metrics::prometheus::prometheus::IntGaugeVec","polkadot_node_subsystem_util::metrics::prometheus::HistogramVec"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Collector-for-MetricVec%3CT%3E\" class=\"impl\"><a href=\"#impl-Collector-for-MetricVec%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/trait.Collector.html\" title=\"trait polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::Collector\">Collector</a> for <a class=\"struct\" href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/struct.MetricVec.html\" title=\"struct polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::MetricVec\">MetricVec</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/trait.MetricVecBuilder.html\" title=\"trait polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::MetricVecBuilder\">MetricVecBuilder</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.desc\" class=\"method trait-impl\"><a href=\"#method.desc\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/trait.Collector.html#tymethod.desc\" class=\"fn\">desc</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;&amp;<a class=\"struct\" href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/struct.Desc.html\" title=\"struct polkadot_node_subsystem_util::metrics::prometheus::prometheus::core::Desc\">Desc</a>&gt;</h4></section></summary><div class='docblock'>Return descriptors for metrics.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.collect\" class=\"method trait-impl\"><a href=\"#method.collect\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/core/trait.Collector.html#tymethod.collect\" class=\"fn\">collect</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"polkadot_node_subsystem_util/metrics/prometheus/prometheus/proto/struct.MetricFamily.html\" title=\"struct polkadot_node_subsystem_util::metrics::prometheus::prometheus::proto::MetricFamily\">MetricFamily</a>&gt;</h4></section></summary><div class='docblock'>Collect metrics.</div></details></div></details>","Collector","polkadot_node_subsystem_util::metrics::prometheus::CounterVec","polkadot_node_subsystem_util::metrics::prometheus::GaugeVec","polkadot_node_subsystem_util::metrics::prometheus::prometheus::CounterVec","polkadot_node_subsystem_util::metrics::prometheus::prometheus::IntCounterVec","polkadot_node_subsystem_util::metrics::prometheus::prometheus::GaugeVec","polkadot_node_subsystem_util::metrics::prometheus::prometheus::IntGaugeVec","polkadot_node_subsystem_util::metrics::prometheus::HistogramVec"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()