(function() {var type_impls = {
"sp_state_machine":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-TrieDBMut%3C'a,+L%3E\" class=\"impl\"><a href=\"#impl-Drop-for-TrieDBMut%3C'a,+L%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for TrieDBMut&lt;'a, L&gt;<div class=\"where\">where\n    L: TrieLayout,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a href=\"https://doc.rust-lang.org/1.81.0/core/ops/drop/trait.Drop.html#tymethod.drop\">Read more</a></div></details></div></details>","Drop","sp_state_machine::TrieDBMutV0","sp_state_machine::TrieDBMutV1"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TrieDBMut%3C'a,+L%3E\" class=\"impl\"><a href=\"#impl-TrieDBMut%3C'a,+L%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, L&gt; TrieDBMut&lt;'a, L&gt;<div class=\"where\">where\n    L: TrieLayout,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.db\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">db</a>(&amp;self) -&gt; &amp;dyn HashDB&lt;&lt;L as TrieLayout&gt;::Hash, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Get the backing database.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.db_mut\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">db_mut</a>(&amp;mut self) -&gt; &amp;mut dyn HashDB&lt;&lt;L as TrieLayout&gt;::Hash, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Get the backing database mutably.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.commit\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">commit</a>(&amp;mut self)</h4></section></summary><div class=\"docblock\"><p>Commit the in-memory changes to disk, freeing their storage and\nupdating the state root.</p>\n</div></details></div></details>",0,"sp_state_machine::TrieDBMutV0","sp_state_machine::TrieDBMutV1"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TrieMut%3CL%3E-for-TrieDBMut%3C'a,+L%3E\" class=\"impl\"><a href=\"#impl-TrieMut%3CL%3E-for-TrieDBMut%3C'a,+L%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, L&gt; <a class=\"trait\" href=\"sp_state_machine/trait.TrieMut.html\" title=\"trait sp_state_machine::TrieMut\">TrieMut</a>&lt;L&gt; for TrieDBMut&lt;'a, L&gt;<div class=\"where\">where\n    L: TrieLayout,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.root\" class=\"method trait-impl\"><a href=\"#method.root\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_state_machine/trait.TrieMut.html#tymethod.root\" class=\"fn\">root</a>(&amp;mut self) -&gt; &amp;&lt;&lt;L as TrieLayout&gt;::Hash as Hasher&gt;::Out</h4></section></summary><div class='docblock'>Return the root of the trie.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_empty\" class=\"method trait-impl\"><a href=\"#method.is_empty\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_state_machine/trait.TrieMut.html#tymethod.is_empty\" class=\"fn\">is_empty</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Is the trie empty?</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get\" class=\"method trait-impl\"><a href=\"#method.get\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_state_machine/trait.TrieMut.html#tymethod.get\" class=\"fn\">get</a>&lt;'x, 'key&gt;(\n    &amp;'x self,\n    key: &amp;'key [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>],\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>&gt;&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;TrieError&lt;&lt;&lt;L as TrieLayout&gt;::Hash as Hasher&gt;::Out, &lt;&lt;L as TrieLayout&gt;::Codec as NodeCodec&gt;::Error&gt;&gt;&gt;<div class=\"where\">where\n    'x: 'key,</div></h4></section></summary><div class='docblock'>What is the value of the given key in this trie?</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.insert\" class=\"method trait-impl\"><a href=\"#method.insert\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_state_machine/trait.TrieMut.html#tymethod.insert\" class=\"fn\">insert</a>(\n    &amp;mut self,\n    key: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>],\n    value: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>],\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Value&lt;L&gt;&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;TrieError&lt;&lt;&lt;L as TrieLayout&gt;::Hash as Hasher&gt;::Out, &lt;&lt;L as TrieLayout&gt;::Codec as NodeCodec&gt;::Error&gt;&gt;&gt;</h4></section></summary><div class='docblock'>Insert a <code>key</code>/<code>value</code> pair into the trie. An empty value is equivalent to removing\n<code>key</code> from the trie. Returns the old value associated with this key, if it existed.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.remove\" class=\"method trait-impl\"><a href=\"#method.remove\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_state_machine/trait.TrieMut.html#tymethod.remove\" class=\"fn\">remove</a>(\n    &amp;mut self,\n    key: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>],\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Value&lt;L&gt;&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;TrieError&lt;&lt;&lt;L as TrieLayout&gt;::Hash as Hasher&gt;::Out, &lt;&lt;L as TrieLayout&gt;::Codec as NodeCodec&gt;::Error&gt;&gt;&gt;</h4></section></summary><div class='docblock'>Remove a <code>key</code> from the trie. Equivalent to making it equal to the empty\nvalue. Returns the old value associated with this key, if it existed.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.contains\" class=\"method trait-impl\"><a href=\"#method.contains\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_state_machine/trait.TrieMut.html#method.contains\" class=\"fn\">contains</a>(\n    &amp;self,\n    key: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>],\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.bool.html\">bool</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;TrieError&lt;&lt;&lt;L as TrieLayout&gt;::Hash as Hasher&gt;::Out, &lt;&lt;L as TrieLayout&gt;::Codec as NodeCodec&gt;::Error&gt;&gt;&gt;</h4></section></summary><div class='docblock'>Does the trie contain a given key?</div></details></div></details>","TrieMut<L>","sp_state_machine::TrieDBMutV0","sp_state_machine::TrieDBMutV1"]],
"sp_trie":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-TrieDBMut%3C'a,+L%3E\" class=\"impl\"><a href=\"#impl-Drop-for-TrieDBMut%3C'a,+L%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for TrieDBMut&lt;'a, L&gt;<div class=\"where\">where\n    L: <a class=\"trait\" href=\"sp_trie/trait.TrieLayout.html\" title=\"trait sp_trie::TrieLayout\">TrieLayout</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a href=\"https://doc.rust-lang.org/1.81.0/core/ops/drop/trait.Drop.html#tymethod.drop\">Read more</a></div></details></div></details>","Drop","sp_trie::TrieDBMut"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TrieDBMut%3C'a,+L%3E\" class=\"impl\"><a href=\"#impl-TrieDBMut%3C'a,+L%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, L&gt; TrieDBMut&lt;'a, L&gt;<div class=\"where\">where\n    L: <a class=\"trait\" href=\"sp_trie/trait.TrieLayout.html\" title=\"trait sp_trie::TrieLayout\">TrieLayout</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.db\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">db</a>(&amp;self) -&gt; &amp;dyn <a class=\"trait\" href=\"sp_trie/trait.HashDBT.html\" title=\"trait sp_trie::HashDBT\">HashDB</a>&lt;&lt;L as <a class=\"trait\" href=\"sp_trie/trait.TrieLayout.html\" title=\"trait sp_trie::TrieLayout\">TrieLayout</a>&gt;::<a class=\"associatedtype\" href=\"sp_trie/trait.TrieLayout.html#associatedtype.Hash\" title=\"type sp_trie::TrieLayout::Hash\">Hash</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Get the backing database.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.db_mut\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">db_mut</a>(&amp;mut self) -&gt; &amp;mut dyn <a class=\"trait\" href=\"sp_trie/trait.HashDBT.html\" title=\"trait sp_trie::HashDBT\">HashDB</a>&lt;&lt;L as <a class=\"trait\" href=\"sp_trie/trait.TrieLayout.html\" title=\"trait sp_trie::TrieLayout\">TrieLayout</a>&gt;::<a class=\"associatedtype\" href=\"sp_trie/trait.TrieLayout.html#associatedtype.Hash\" title=\"type sp_trie::TrieLayout::Hash\">Hash</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Get the backing database mutably.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.commit\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">commit</a>(&amp;mut self)</h4></section></summary><div class=\"docblock\"><p>Commit the in-memory changes to disk, freeing their storage and\nupdating the state root.</p>\n</div></details></div></details>",0,"sp_trie::TrieDBMut"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TrieMut%3CL%3E-for-TrieDBMut%3C'a,+L%3E\" class=\"impl\"><a href=\"#impl-TrieMut%3CL%3E-for-TrieDBMut%3C'a,+L%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, L&gt; <a class=\"trait\" href=\"sp_trie/trait.TrieMut.html\" title=\"trait sp_trie::TrieMut\">TrieMut</a>&lt;L&gt; for TrieDBMut&lt;'a, L&gt;<div class=\"where\">where\n    L: <a class=\"trait\" href=\"sp_trie/trait.TrieLayout.html\" title=\"trait sp_trie::TrieLayout\">TrieLayout</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.root\" class=\"method trait-impl\"><a href=\"#method.root\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_trie/trait.TrieMut.html#tymethod.root\" class=\"fn\">root</a>(&amp;mut self) -&gt; &amp;&lt;&lt;L as <a class=\"trait\" href=\"sp_trie/trait.TrieLayout.html\" title=\"trait sp_trie::TrieLayout\">TrieLayout</a>&gt;::<a class=\"associatedtype\" href=\"sp_trie/trait.TrieLayout.html#associatedtype.Hash\" title=\"type sp_trie::TrieLayout::Hash\">Hash</a> as Hasher&gt;::Out</h4></section></summary><div class='docblock'>Return the root of the trie.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_empty\" class=\"method trait-impl\"><a href=\"#method.is_empty\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_trie/trait.TrieMut.html#tymethod.is_empty\" class=\"fn\">is_empty</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Is the trie empty?</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get\" class=\"method trait-impl\"><a href=\"#method.get\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_trie/trait.TrieMut.html#tymethod.get\" class=\"fn\">get</a>&lt;'x, 'key&gt;(\n    &amp;'x self,\n    key: &amp;'key [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>],\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>&gt;&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;TrieError&lt;&lt;&lt;L as <a class=\"trait\" href=\"sp_trie/trait.TrieLayout.html\" title=\"trait sp_trie::TrieLayout\">TrieLayout</a>&gt;::<a class=\"associatedtype\" href=\"sp_trie/trait.TrieLayout.html#associatedtype.Hash\" title=\"type sp_trie::TrieLayout::Hash\">Hash</a> as Hasher&gt;::Out, &lt;&lt;L as <a class=\"trait\" href=\"sp_trie/trait.TrieLayout.html\" title=\"trait sp_trie::TrieLayout\">TrieLayout</a>&gt;::<a class=\"associatedtype\" href=\"sp_trie/trait.TrieLayout.html#associatedtype.Codec\" title=\"type sp_trie::TrieLayout::Codec\">Codec</a> as NodeCodec&gt;::Error&gt;&gt;&gt;<div class=\"where\">where\n    'x: 'key,</div></h4></section></summary><div class='docblock'>What is the value of the given key in this trie?</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.insert\" class=\"method trait-impl\"><a href=\"#method.insert\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_trie/trait.TrieMut.html#tymethod.insert\" class=\"fn\">insert</a>(\n    &amp;mut self,\n    key: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>],\n    value: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>],\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Value&lt;L&gt;&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;TrieError&lt;&lt;&lt;L as <a class=\"trait\" href=\"sp_trie/trait.TrieLayout.html\" title=\"trait sp_trie::TrieLayout\">TrieLayout</a>&gt;::<a class=\"associatedtype\" href=\"sp_trie/trait.TrieLayout.html#associatedtype.Hash\" title=\"type sp_trie::TrieLayout::Hash\">Hash</a> as Hasher&gt;::Out, &lt;&lt;L as <a class=\"trait\" href=\"sp_trie/trait.TrieLayout.html\" title=\"trait sp_trie::TrieLayout\">TrieLayout</a>&gt;::<a class=\"associatedtype\" href=\"sp_trie/trait.TrieLayout.html#associatedtype.Codec\" title=\"type sp_trie::TrieLayout::Codec\">Codec</a> as NodeCodec&gt;::Error&gt;&gt;&gt;</h4></section></summary><div class='docblock'>Insert a <code>key</code>/<code>value</code> pair into the trie. An empty value is equivalent to removing\n<code>key</code> from the trie. Returns the old value associated with this key, if it existed.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.remove\" class=\"method trait-impl\"><a href=\"#method.remove\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_trie/trait.TrieMut.html#tymethod.remove\" class=\"fn\">remove</a>(\n    &amp;mut self,\n    key: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>],\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Value&lt;L&gt;&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;TrieError&lt;&lt;&lt;L as <a class=\"trait\" href=\"sp_trie/trait.TrieLayout.html\" title=\"trait sp_trie::TrieLayout\">TrieLayout</a>&gt;::<a class=\"associatedtype\" href=\"sp_trie/trait.TrieLayout.html#associatedtype.Hash\" title=\"type sp_trie::TrieLayout::Hash\">Hash</a> as Hasher&gt;::Out, &lt;&lt;L as <a class=\"trait\" href=\"sp_trie/trait.TrieLayout.html\" title=\"trait sp_trie::TrieLayout\">TrieLayout</a>&gt;::<a class=\"associatedtype\" href=\"sp_trie/trait.TrieLayout.html#associatedtype.Codec\" title=\"type sp_trie::TrieLayout::Codec\">Codec</a> as NodeCodec&gt;::Error&gt;&gt;&gt;</h4></section></summary><div class='docblock'>Remove a <code>key</code> from the trie. Equivalent to making it equal to the empty\nvalue. Returns the old value associated with this key, if it existed.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.contains\" class=\"method trait-impl\"><a href=\"#method.contains\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_trie/trait.TrieMut.html#method.contains\" class=\"fn\">contains</a>(\n    &amp;self,\n    key: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>],\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.bool.html\">bool</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;TrieError&lt;&lt;&lt;L as <a class=\"trait\" href=\"sp_trie/trait.TrieLayout.html\" title=\"trait sp_trie::TrieLayout\">TrieLayout</a>&gt;::<a class=\"associatedtype\" href=\"sp_trie/trait.TrieLayout.html#associatedtype.Hash\" title=\"type sp_trie::TrieLayout::Hash\">Hash</a> as Hasher&gt;::Out, &lt;&lt;L as <a class=\"trait\" href=\"sp_trie/trait.TrieLayout.html\" title=\"trait sp_trie::TrieLayout\">TrieLayout</a>&gt;::<a class=\"associatedtype\" href=\"sp_trie/trait.TrieLayout.html#associatedtype.Codec\" title=\"type sp_trie::TrieLayout::Codec\">Codec</a> as NodeCodec&gt;::Error&gt;&gt;&gt;</h4></section></summary><div class='docblock'>Does the trie contain a given key?</div></details></div></details>","TrieMut<L>","sp_trie::TrieDBMut"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()