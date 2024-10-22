(function() {var type_impls = {
"staging_xcm":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-VersionedInteriorLocation\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/lib.rs.html#355-365\">source</a><a href=\"#impl-VersionedInteriorLocation\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"enum\" href=\"staging_xcm/enum.VersionedInteriorLocation.html\" title=\"enum staging_xcm::VersionedInteriorLocation\">VersionedInteriorLocation</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.try_as\" class=\"method\"><a class=\"src rightside\" href=\"src/staging_xcm/lib.rs.html#355-365\">source</a><h4 class=\"code-header\">pub fn <a href=\"staging_xcm/enum.VersionedInteriorLocation.html#tymethod.try_as\" class=\"fn\">try_as</a>&lt;T&gt;(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;T</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt;<span class=\"where fmt-newline\">where\n    Self: <a class=\"trait\" href=\"staging_xcm/trait.TryAs.html\" title=\"trait staging_xcm::TryAs\">TryAs</a>&lt;T&gt;,</span></h4></section></div></details>",0,"staging_xcm::VersionedInteriorMultiLocation"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-VersionedInteriorLocation\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/lib.rs.html#355-365\">source</a><a href=\"#impl-Clone-for-VersionedInteriorLocation\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"staging_xcm/enum.VersionedInteriorLocation.html\" title=\"enum staging_xcm::VersionedInteriorLocation\">VersionedInteriorLocation</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm/lib.rs.html#355-365\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","staging_xcm::VersionedInteriorMultiLocation"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CT%3E-for-VersionedInteriorLocation\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/lib.rs.html#355-365\">source</a><a href=\"#impl-From%3CT%3E-for-VersionedInteriorLocation\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"type\" href=\"staging_xcm/v4/type.InteriorLocation.html\" title=\"type staging_xcm::v4::InteriorLocation\">InteriorLocation</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"enum\" href=\"staging_xcm/enum.VersionedInteriorLocation.html\" title=\"enum staging_xcm::VersionedInteriorLocation\">VersionedInteriorLocation</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm/lib.rs.html#355-365\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(x: T) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<T>","staging_xcm::VersionedInteriorMultiLocation"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MaxEncodedLen-for-VersionedInteriorLocation\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/lib.rs.html#355-365\">source</a><a href=\"#impl-MaxEncodedLen-for-VersionedInteriorLocation\" class=\"anchor\">§</a><h3 class=\"code-header\">impl MaxEncodedLen for <a class=\"enum\" href=\"staging_xcm/enum.VersionedInteriorLocation.html\" title=\"enum staging_xcm::VersionedInteriorLocation\">VersionedInteriorLocation</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.max_encoded_len\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm/lib.rs.html#355-365\">source</a><a href=\"#method.max_encoded_len\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">max_encoded_len</a>() -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Upper bound, in bytes, of the maximum encoded size of this item.</div></details></div></details>","MaxEncodedLen","staging_xcm::VersionedInteriorMultiLocation"],["<section id=\"impl-Eq-for-VersionedInteriorLocation\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/lib.rs.html#355-365\">source</a><a href=\"#impl-Eq-for-VersionedInteriorLocation\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"enum\" href=\"staging_xcm/enum.VersionedInteriorLocation.html\" title=\"enum staging_xcm::VersionedInteriorLocation\">VersionedInteriorLocation</a></h3></section>","Eq","staging_xcm::VersionedInteriorMultiLocation"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryAs%3CJunctions%3E-for-VersionedInteriorLocation\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/lib.rs.html#355-365\">source</a><a href=\"#impl-TryAs%3CJunctions%3E-for-VersionedInteriorLocation\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"staging_xcm/trait.TryAs.html\" title=\"trait staging_xcm::TryAs\">TryAs</a>&lt;<a class=\"enum\" href=\"staging_xcm/v4/enum.Junctions.html\" title=\"enum staging_xcm::v4::Junctions\">Junctions</a>&gt; for <a class=\"enum\" href=\"staging_xcm/enum.VersionedInteriorLocation.html\" title=\"enum staging_xcm::VersionedInteriorLocation\">VersionedInteriorLocation</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.try_as\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm/lib.rs.html#355-365\">source</a><a href=\"#method.try_as\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm/trait.TryAs.html#tymethod.try_as\" class=\"fn\">try_as</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&amp;<a class=\"type\" href=\"staging_xcm/v4/type.InteriorLocation.html\" title=\"type staging_xcm::v4::InteriorLocation\">InteriorLocation</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt;</h4></section></div></details>","TryAs<Junctions>","staging_xcm::VersionedInteriorMultiLocation"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeInfo-for-VersionedInteriorLocation\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/lib.rs.html#355-365\">source</a><a href=\"#impl-TypeInfo-for-VersionedInteriorLocation\" class=\"anchor\">§</a><h3 class=\"code-header\">impl TypeInfo for <a class=\"enum\" href=\"staging_xcm/enum.VersionedInteriorLocation.html\" title=\"enum staging_xcm::VersionedInteriorLocation\">VersionedInteriorLocation</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Identity\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Identity\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Identity</a> = <a class=\"enum\" href=\"staging_xcm/enum.VersionedInteriorLocation.html\" title=\"enum staging_xcm::VersionedInteriorLocation\">VersionedInteriorLocation</a></h4></section></summary><div class='docblock'>The type identifying for which type info is provided. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.type_info\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm/lib.rs.html#355-365\">source</a><a href=\"#method.type_info\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">type_info</a>() -&gt; Type</h4></section></summary><div class='docblock'>Returns the static type identifier for <code>Self</code>.</div></details></div></details>","TypeInfo","staging_xcm::VersionedInteriorMultiLocation"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-VersionedInteriorLocation\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/lib.rs.html#355-365\">source</a><a href=\"#impl-Debug-for-VersionedInteriorLocation\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"staging_xcm/enum.VersionedInteriorLocation.html\" title=\"enum staging_xcm::VersionedInteriorLocation\">VersionedInteriorLocation</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm/lib.rs.html#355-365\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, __f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","staging_xcm::VersionedInteriorMultiLocation"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryAs%3CJunctions%3E-for-VersionedInteriorLocation\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/lib.rs.html#355-365\">source</a><a href=\"#impl-TryAs%3CJunctions%3E-for-VersionedInteriorLocation\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"staging_xcm/trait.TryAs.html\" title=\"trait staging_xcm::TryAs\">TryAs</a>&lt;<a class=\"enum\" href=\"staging_xcm/v3/enum.Junctions.html\" title=\"enum staging_xcm::v3::Junctions\">Junctions</a>&gt; for <a class=\"enum\" href=\"staging_xcm/enum.VersionedInteriorLocation.html\" title=\"enum staging_xcm::VersionedInteriorLocation\">VersionedInteriorLocation</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.try_as\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm/lib.rs.html#355-365\">source</a><a href=\"#method.try_as\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm/trait.TryAs.html#tymethod.try_as\" class=\"fn\">try_as</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&amp;<a class=\"type\" href=\"staging_xcm/v3/type.InteriorMultiLocation.html\" title=\"type staging_xcm::v3::InteriorMultiLocation\">InteriorMultiLocation</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt;</h4></section></div></details>","TryAs<Junctions>","staging_xcm::VersionedInteriorMultiLocation"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-VersionedInteriorLocation\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/lib.rs.html#355-365\">source</a><a href=\"#impl-PartialEq-for-VersionedInteriorLocation\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"enum\" href=\"staging_xcm/enum.VersionedInteriorLocation.html\" title=\"enum staging_xcm::VersionedInteriorLocation\">VersionedInteriorLocation</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm/lib.rs.html#355-365\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/cmp.rs.html#239\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","staging_xcm::VersionedInteriorMultiLocation"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CJunctions%3E-for-VersionedInteriorLocation\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/lib.rs.html#355-365\">source</a><a href=\"#impl-From%3CJunctions%3E-for-VersionedInteriorLocation\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"staging_xcm/v2/enum.Junctions.html\" title=\"enum staging_xcm::v2::Junctions\">Junctions</a>&gt; for <a class=\"enum\" href=\"staging_xcm/enum.VersionedInteriorLocation.html\" title=\"enum staging_xcm::VersionedInteriorLocation\">VersionedInteriorLocation</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm/lib.rs.html#355-365\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(x: <a class=\"type\" href=\"staging_xcm/v2/type.InteriorMultiLocation.html\" title=\"type staging_xcm::v2::InteriorMultiLocation\">InteriorMultiLocation</a>) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Junctions>","staging_xcm::VersionedInteriorMultiLocation"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryAs%3CJunctions%3E-for-VersionedInteriorLocation\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/lib.rs.html#355-365\">source</a><a href=\"#impl-TryAs%3CJunctions%3E-for-VersionedInteriorLocation\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"staging_xcm/trait.TryAs.html\" title=\"trait staging_xcm::TryAs\">TryAs</a>&lt;<a class=\"enum\" href=\"staging_xcm/v2/enum.Junctions.html\" title=\"enum staging_xcm::v2::Junctions\">Junctions</a>&gt; for <a class=\"enum\" href=\"staging_xcm/enum.VersionedInteriorLocation.html\" title=\"enum staging_xcm::VersionedInteriorLocation\">VersionedInteriorLocation</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.try_as\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm/lib.rs.html#355-365\">source</a><a href=\"#method.try_as\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm/trait.TryAs.html#tymethod.try_as\" class=\"fn\">try_as</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&amp;<a class=\"type\" href=\"staging_xcm/v2/type.InteriorMultiLocation.html\" title=\"type staging_xcm::v2::InteriorMultiLocation\">InteriorMultiLocation</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt;</h4></section></div></details>","TryAs<Junctions>","staging_xcm::VersionedInteriorMultiLocation"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decode-for-VersionedInteriorLocation\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/lib.rs.html#355-365\">source</a><a href=\"#impl-Decode-for-VersionedInteriorLocation\" class=\"anchor\">§</a><h3 class=\"code-header\">impl Decode for <a class=\"enum\" href=\"staging_xcm/enum.VersionedInteriorLocation.html\" title=\"enum staging_xcm::VersionedInteriorLocation\">VersionedInteriorLocation</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm/lib.rs.html#355-365\">source</a><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode</a>&lt;__CodecInputEdqy: Input&gt;(\n    __codec_input_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut __CodecInputEdqy</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, Error&gt;</h4></section></summary><div class='docblock'>Attempt to deserialise the value from input.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode_into\" class=\"method trait-impl\"><a href=\"#method.decode_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode_into</a>&lt;I&gt;(\n    input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut I</a>,\n    dst: &amp;mut <a class=\"union\" href=\"https://doc.rust-lang.org/1.75.0/core/mem/maybe_uninit/union.MaybeUninit.html\" title=\"union core::mem::maybe_uninit::MaybeUninit\">MaybeUninit</a>&lt;Self&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;DecodeFinished, Error&gt;<span class=\"where fmt-newline\">where\n    I: Input,</span></h4></section></summary><div class='docblock'>Attempt to deserialize the value from input into a pre-allocated piece of memory. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.skip\" class=\"method trait-impl\"><a href=\"#method.skip\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">skip</a>&lt;I&gt;(input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut I</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, Error&gt;<span class=\"where fmt-newline\">where\n    I: Input,</span></h4></section></summary><div class='docblock'>Attempt to skip the encoded value from input. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_fixed_size\" class=\"method trait-impl\"><a href=\"#method.encoded_fixed_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_fixed_size</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class='docblock'>Returns the fixed encoded size of the type. <a>Read more</a></div></details></div></details>","Decode","staging_xcm::VersionedInteriorMultiLocation"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encode-for-VersionedInteriorLocation\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/lib.rs.html#355-365\">source</a><a href=\"#impl-Encode-for-VersionedInteriorLocation\" class=\"anchor\">§</a><h3 class=\"code-header\">impl Encode for <a class=\"enum\" href=\"staging_xcm/enum.VersionedInteriorLocation.html\" title=\"enum staging_xcm::VersionedInteriorLocation\">VersionedInteriorLocation</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.size_hint\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm/lib.rs.html#355-365\">source</a><a href=\"#method.size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">size_hint</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>If possible give a hint of expected size of the encoding. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode_to\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm/lib.rs.html#355-365\">source</a><a href=\"#method.encode_to\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode_to</a>&lt;__CodecOutputEdqy: Output + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt;(\n    &amp;self,\n    __codec_dest_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut __CodecOutputEdqy</a>\n)</h4></section></summary><div class='docblock'>Convert self to a slice and append it to the destination.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode\" class=\"method trait-impl\"><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Vec&lt;u8&gt;\">ⓘ</a></h4></section></summary><div class='docblock'>Convert self to an owned vector.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.using_encoded\" class=\"method trait-impl\"><a href=\"#method.using_encoded\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">using_encoded</a>&lt;R, F&gt;(&amp;self, f: F) -&gt; R<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]) -&gt; R,</span></h4></section></summary><div class='docblock'>Convert self to a slice and then invoke the given closure with it.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_size\" class=\"method trait-impl\"><a href=\"#method.encoded_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Calculates the encoded size. <a>Read more</a></div></details></div></details>","Encode","staging_xcm::VersionedInteriorMultiLocation"],["<section id=\"impl-EncodeLike-for-VersionedInteriorLocation\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/lib.rs.html#355-365\">source</a><a href=\"#impl-EncodeLike-for-VersionedInteriorLocation\" class=\"anchor\">§</a><h3 class=\"code-header\">impl EncodeLike for <a class=\"enum\" href=\"staging_xcm/enum.VersionedInteriorLocation.html\" title=\"enum staging_xcm::VersionedInteriorLocation\">VersionedInteriorLocation</a></h3></section>","EncodeLike","staging_xcm::VersionedInteriorMultiLocation"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IntoVersion-for-VersionedInteriorLocation\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/lib.rs.html#355-365\">source</a><a href=\"#impl-IntoVersion-for-VersionedInteriorLocation\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"staging_xcm/trait.IntoVersion.html\" title=\"trait staging_xcm::IntoVersion\">IntoVersion</a> for <a class=\"enum\" href=\"staging_xcm/enum.VersionedInteriorLocation.html\" title=\"enum staging_xcm::VersionedInteriorLocation\">VersionedInteriorLocation</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_version\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm/lib.rs.html#355-365\">source</a><a href=\"#method.into_version\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm/trait.IntoVersion.html#tymethod.into_version\" class=\"fn\">into_version</a>(self, n: <a class=\"type\" href=\"staging_xcm/type.Version.html\" title=\"type staging_xcm::Version\">Version</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class='docblock'>Consume <code>self</code> and return same value expressed in some particular <code>version</code> of XCM.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_latest\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm/lib.rs.html#70-72\">source</a><a href=\"#method.into_latest\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm/trait.IntoVersion.html#method.into_latest\" class=\"fn\">into_latest</a>(self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class='docblock'>Consume <code>self</code> and return same value expressed the latest version of XCM.</div></details></div></details>","IntoVersion","staging_xcm::VersionedInteriorMultiLocation"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()