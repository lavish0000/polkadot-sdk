(function() {var type_impls = {
"pallet_xcm_bridge_hub":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ExportXcm-for-HaulBlobExporter%3CBridge,+BridgedNetwork,+DestinationVersion,+Price%3E\" class=\"impl\"><a href=\"#impl-ExportXcm-for-HaulBlobExporter%3CBridge,+BridgedNetwork,+DestinationVersion,+Price%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Bridge, BridgedNetwork, DestinationVersion, Price&gt; ExportXcm for HaulBlobExporter&lt;Bridge, BridgedNetwork, DestinationVersion, Price&gt;<div class=\"where\">where\n    Bridge: HaulBlob,\n    BridgedNetwork: Get&lt;Location&gt;,\n    DestinationVersion: GetVersion,\n    Price: Get&lt;Assets&gt;,</div></h3></section></summary><div class=\"docblock\"><p><code>ExportXcm</code> implementation for <code>HaulBlobExporter</code>.</p>\n<h4 id=\"type-parameters\"><a class=\"doc-anchor\" href=\"#type-parameters\">§</a>Type Parameters</h4><div class=\"example-wrap\"><pre class=\"language-text\"><code>- Bridge: Implements `HaulBlob`.\n- BridgedNetwork: The relative location of the bridged consensus system with the expected `GlobalConsensus` junction.\n- DestinationVersion: Implements `GetVersion` for retrieving XCM version for the destination.\n- Price: potential fees for exporting.\n</code></pre></div></div><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Ticket\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Ticket\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Ticket</a> = (<a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>&gt;, [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.array.html\">32</a>])</h4></section></summary><div class='docblock'>Intermediate value which connects the two phases of the export operation.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.validate\" class=\"method trait-impl\"><a href=\"#method.validate\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">validate</a>(\n    network: NetworkId,\n    _channel: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u32.html\">u32</a>,\n    universal_source: &amp;mut <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Junctions&gt;,\n    destination: &amp;mut <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Junctions&gt;,\n    message: &amp;mut <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Xcm&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.unit.html\">()</a>&gt;&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;((<a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>&gt;, [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.array.html\">32</a>]), Assets), SendError&gt;</h4></section></summary><div class='docblock'>Check whether the given <code>message</code> is deliverable to the given <code>destination</code> on <code>network</code>,\nspoofing its source as <code>universal_source</code> and if so determine the cost which will be paid by\nthis chain to do so, returning a <code>Ticket</code> token which can be used to enact delivery. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deliver\" class=\"method trait-impl\"><a href=\"#method.deliver\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">deliver</a>(_: (<a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>&gt;, [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.array.html\">32</a>])) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.array.html\">32</a>], SendError&gt;</h4></section></summary><div class='docblock'>Actually carry out the delivery operation for a previously validated message sending. <a>Read more</a></div></details></div></details>","ExportXcm","pallet_xcm_bridge_hub::exporter::PalletAsHaulBlobExporter"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()