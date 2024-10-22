(function() {var type_impls = {
"asset_hub_rococo_runtime":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ContainsPair%3CAsset,+Location%3E-for-RemoteAssetFromLocation%3CAssetsAllowedNetworks,+OriginLocation%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/assets_common/matching.rs.html#137-138\">source</a><a href=\"#impl-ContainsPair%3CAsset,+Location%3E-for-RemoteAssetFromLocation%3CAssetsAllowedNetworks,+OriginLocation%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AssetsAllowedNetworks, OriginLocation&gt; <a class=\"trait\" href=\"frame_support/traits/members/trait.ContainsPair.html\" title=\"trait frame_support::traits::members::ContainsPair\">ContainsPair</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Asset.html\" title=\"struct staging_xcm::v4::asset::Asset\">Asset</a>, <a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>&gt; for <a class=\"struct\" href=\"assets_common/matching/struct.RemoteAssetFromLocation.html\" title=\"struct assets_common::matching::RemoteAssetFromLocation\">RemoteAssetFromLocation</a>&lt;AssetsAllowedNetworks, OriginLocation&gt;<div class=\"where\">where\n    AssetsAllowedNetworks: <a class=\"trait\" href=\"frame_support/traits/members/trait.Contains.html\" title=\"trait frame_support::traits::members::Contains\">Contains</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>&gt;,\n    OriginLocation: Get&lt;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.contains\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/assets_common/matching.rs.html#140\">source</a><a href=\"#method.contains\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame_support/traits/members/trait.ContainsPair.html#tymethod.contains\" class=\"fn\">contains</a>(asset: &amp;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Asset.html\" title=\"struct staging_xcm::v4::asset::Asset\">Asset</a>, origin: &amp;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Return <code>true</code> if this “contains” the pair-value <code>(a, b)</code>.</div></details></div></details>","ContainsPair<Asset, Location>","asset_hub_rococo_runtime::xcm_config::bridging::to_westend::WestendOrEthereumAssetFromAssetHubWestend"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ContainsPair%3CL,+L%3E-for-RemoteAssetFromLocation%3CAssetsAllowedNetworks,+OriginLocation%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/assets_common/matching.rs.html#105-109\">source</a><a href=\"#impl-ContainsPair%3CL,+L%3E-for-RemoteAssetFromLocation%3CAssetsAllowedNetworks,+OriginLocation%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L, AssetsAllowedNetworks, OriginLocation&gt; <a class=\"trait\" href=\"frame_support/traits/members/trait.ContainsPair.html\" title=\"trait frame_support::traits::members::ContainsPair\">ContainsPair</a>&lt;L, L&gt; for <a class=\"struct\" href=\"assets_common/matching/struct.RemoteAssetFromLocation.html\" title=\"struct assets_common::matching::RemoteAssetFromLocation\">RemoteAssetFromLocation</a>&lt;AssetsAllowedNetworks, OriginLocation&gt;<div class=\"where\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/convert/trait.TryInto.html\" title=\"trait core::convert::TryInto\">TryInto</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    AssetsAllowedNetworks: <a class=\"trait\" href=\"frame_support/traits/members/trait.Contains.html\" title=\"trait frame_support::traits::members::Contains\">Contains</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>&gt;,\n    OriginLocation: Get&lt;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.contains\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/assets_common/matching.rs.html#111\">source</a><a href=\"#method.contains\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame_support/traits/members/trait.ContainsPair.html#tymethod.contains\" class=\"fn\">contains</a>(asset: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;L</a>, origin: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;L</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Return <code>true</code> if this “contains” the pair-value <code>(a, b)</code>.</div></details></div></details>","ContainsPair<L, L>","asset_hub_rococo_runtime::xcm_config::bridging::to_westend::WestendOrEthereumAssetFromAssetHubWestend"]],
"asset_hub_westend_runtime":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ContainsPair%3CAsset,+Location%3E-for-RemoteAssetFromLocation%3CAssetsAllowedNetworks,+OriginLocation%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/assets_common/matching.rs.html#137-138\">source</a><a href=\"#impl-ContainsPair%3CAsset,+Location%3E-for-RemoteAssetFromLocation%3CAssetsAllowedNetworks,+OriginLocation%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AssetsAllowedNetworks, OriginLocation&gt; <a class=\"trait\" href=\"frame_support/traits/members/trait.ContainsPair.html\" title=\"trait frame_support::traits::members::ContainsPair\">ContainsPair</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Asset.html\" title=\"struct staging_xcm::v4::asset::Asset\">Asset</a>, <a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>&gt; for <a class=\"struct\" href=\"assets_common/matching/struct.RemoteAssetFromLocation.html\" title=\"struct assets_common::matching::RemoteAssetFromLocation\">RemoteAssetFromLocation</a>&lt;AssetsAllowedNetworks, OriginLocation&gt;<div class=\"where\">where\n    AssetsAllowedNetworks: <a class=\"trait\" href=\"frame_support/traits/members/trait.Contains.html\" title=\"trait frame_support::traits::members::Contains\">Contains</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>&gt;,\n    OriginLocation: Get&lt;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.contains\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/assets_common/matching.rs.html#140\">source</a><a href=\"#method.contains\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame_support/traits/members/trait.ContainsPair.html#tymethod.contains\" class=\"fn\">contains</a>(asset: &amp;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Asset.html\" title=\"struct staging_xcm::v4::asset::Asset\">Asset</a>, origin: &amp;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Return <code>true</code> if this “contains” the pair-value <code>(a, b)</code>.</div></details></div></details>","ContainsPair<Asset, Location>","asset_hub_westend_runtime::xcm_config::bridging::to_rococo::RococoAssetFromAssetHubRococo"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ContainsPair%3CL,+L%3E-for-RemoteAssetFromLocation%3CAssetsAllowedNetworks,+OriginLocation%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/assets_common/matching.rs.html#105-109\">source</a><a href=\"#impl-ContainsPair%3CL,+L%3E-for-RemoteAssetFromLocation%3CAssetsAllowedNetworks,+OriginLocation%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L, AssetsAllowedNetworks, OriginLocation&gt; <a class=\"trait\" href=\"frame_support/traits/members/trait.ContainsPair.html\" title=\"trait frame_support::traits::members::ContainsPair\">ContainsPair</a>&lt;L, L&gt; for <a class=\"struct\" href=\"assets_common/matching/struct.RemoteAssetFromLocation.html\" title=\"struct assets_common::matching::RemoteAssetFromLocation\">RemoteAssetFromLocation</a>&lt;AssetsAllowedNetworks, OriginLocation&gt;<div class=\"where\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/convert/trait.TryInto.html\" title=\"trait core::convert::TryInto\">TryInto</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    AssetsAllowedNetworks: <a class=\"trait\" href=\"frame_support/traits/members/trait.Contains.html\" title=\"trait frame_support::traits::members::Contains\">Contains</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>&gt;,\n    OriginLocation: Get&lt;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.contains\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/assets_common/matching.rs.html#111\">source</a><a href=\"#method.contains\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame_support/traits/members/trait.ContainsPair.html#tymethod.contains\" class=\"fn\">contains</a>(asset: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;L</a>, origin: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;L</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Return <code>true</code> if this “contains” the pair-value <code>(a, b)</code>.</div></details></div></details>","ContainsPair<L, L>","asset_hub_westend_runtime::xcm_config::bridging::to_rococo::RococoAssetFromAssetHubRococo"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()