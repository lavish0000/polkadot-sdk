(function() {var type_impls = {
"asset_hub_rococo_runtime":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AssetExchange-for-SingleAssetExchangeAdapter%3CAssetConversion,+Fungibles,+Matcher,+AccountId%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/asset_exchange/single_asset_adapter/adapter.rs.html#44-54\">source</a><a href=\"#impl-AssetExchange-for-SingleAssetExchangeAdapter%3CAssetConversion,+Fungibles,+Matcher,+AccountId%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AssetConversion, Fungibles, Matcher, AccountId&gt; <a class=\"trait\" href=\"staging_xcm_executor/traits/asset_exchange/trait.AssetExchange.html\" title=\"trait staging_xcm_executor::traits::asset_exchange::AssetExchange\">AssetExchange</a> for <a class=\"struct\" href=\"staging_xcm_builder/asset_exchange/single_asset_adapter/adapter/struct.SingleAssetExchangeAdapter.html\" title=\"struct staging_xcm_builder::asset_exchange::single_asset_adapter::adapter::SingleAssetExchangeAdapter\">SingleAssetExchangeAdapter</a>&lt;AssetConversion, Fungibles, Matcher, AccountId&gt;<div class=\"where\">where\n    AssetConversion: <a class=\"trait\" href=\"pallet_asset_conversion/swap/trait.QuotePrice.html\" title=\"trait pallet_asset_conversion::swap::QuotePrice\">QuotePrice</a>&lt;Balance = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u128.html\">u128</a>, AssetKind = &lt;Fungibles as <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Inspect\">Inspect</a>&lt;AccountId&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html#associatedtype.AssetId\" title=\"type frame_support::traits::tokens::fungibles::regular::Inspect::AssetId\">AssetId</a>&gt; + <a class=\"trait\" href=\"pallet_asset_conversion/swap/trait.SwapCredit.html\" title=\"trait pallet_asset_conversion::swap::SwapCredit\">SwapCredit</a>&lt;AccountId, Balance = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u128.html\">u128</a>, AssetKind = &lt;Fungibles as <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Inspect\">Inspect</a>&lt;AccountId&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html#associatedtype.AssetId\" title=\"type frame_support::traits::tokens::fungibles::regular::Inspect::AssetId\">AssetId</a>, Credit = <a class=\"struct\" href=\"frame_support/traits/tokens/fungibles/imbalance/struct.Imbalance.html\" title=\"struct frame_support::traits::tokens::fungibles::imbalance::Imbalance\">Imbalance</a>&lt;&lt;Fungibles as <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Inspect\">Inspect</a>&lt;AccountId&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html#associatedtype.AssetId\" title=\"type frame_support::traits::tokens::fungibles::regular::Inspect::AssetId\">AssetId</a>, &lt;Fungibles as <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Inspect\">Inspect</a>&lt;AccountId&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html#associatedtype.Balance\" title=\"type frame_support::traits::tokens::fungibles::regular::Inspect::Balance\">Balance</a>, &lt;Fungibles as <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Balanced.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Balanced\">Balanced</a>&lt;AccountId&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Balanced.html#associatedtype.OnDropCredit\" title=\"type frame_support::traits::tokens::fungibles::regular::Balanced::OnDropCredit\">OnDropCredit</a>, &lt;Fungibles as <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Balanced.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Balanced\">Balanced</a>&lt;AccountId&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Balanced.html#associatedtype.OnDropDebt\" title=\"type frame_support::traits::tokens::fungibles::regular::Balanced::OnDropDebt\">OnDropDebt</a>&gt;&gt;,\n    Fungibles: <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Balanced.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Balanced\">Balanced</a>&lt;AccountId, Balance = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u128.html\">u128</a>&gt;,\n    Matcher: <a class=\"trait\" href=\"staging_xcm_executor/traits/token_matching/trait.MatchesFungibles.html\" title=\"trait staging_xcm_executor::traits::token_matching::MatchesFungibles\">MatchesFungibles</a>&lt;&lt;Fungibles as <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Inspect\">Inspect</a>&lt;AccountId&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html#associatedtype.AssetId\" title=\"type frame_support::traits::tokens::fungibles::regular::Inspect::AssetId\">AssetId</a>, &lt;Fungibles as <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Inspect\">Inspect</a>&lt;AccountId&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html#associatedtype.Balance\" title=\"type frame_support::traits::tokens::fungibles::regular::Inspect::Balance\">Balance</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.exchange_asset\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/asset_exchange/single_asset_adapter/adapter.rs.html#56-61\">source</a><a href=\"#method.exchange_asset\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm_executor/traits/asset_exchange/trait.AssetExchange.html#tymethod.exchange_asset\" class=\"fn\">exchange_asset</a>(\n    _: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>&gt;,\n    give: <a class=\"struct\" href=\"staging_xcm_executor/assets/struct.AssetsInHolding.html\" title=\"struct staging_xcm_executor::assets::AssetsInHolding\">AssetsInHolding</a>,\n    want: &amp;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Assets.html\" title=\"struct staging_xcm::v4::asset::Assets\">Assets</a>,\n    maximal: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.bool.html\">bool</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"staging_xcm_executor/assets/struct.AssetsInHolding.html\" title=\"struct staging_xcm_executor::assets::AssetsInHolding\">AssetsInHolding</a>, <a class=\"struct\" href=\"staging_xcm_executor/assets/struct.AssetsInHolding.html\" title=\"struct staging_xcm_executor::assets::AssetsInHolding\">AssetsInHolding</a>&gt;</h4></section></summary><div class='docblock'>Handler for exchanging an asset. <a href=\"staging_xcm_executor/traits/asset_exchange/trait.AssetExchange.html#tymethod.exchange_asset\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.quote_exchange_price\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/asset_exchange/single_asset_adapter/adapter.rs.html#156\">source</a><a href=\"#method.quote_exchange_price\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm_executor/traits/asset_exchange/trait.AssetExchange.html#tymethod.quote_exchange_price\" class=\"fn\">quote_exchange_price</a>(\n    give: &amp;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Assets.html\" title=\"struct staging_xcm::v4::asset::Assets\">Assets</a>,\n    want: &amp;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Assets.html\" title=\"struct staging_xcm::v4::asset::Assets\">Assets</a>,\n    maximal: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.bool.html\">bool</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Assets.html\" title=\"struct staging_xcm::v4::asset::Assets\">Assets</a>&gt;</h4></section></summary><div class='docblock'>Handler for quoting the exchange price of two asset collections. <a href=\"staging_xcm_executor/traits/asset_exchange/trait.AssetExchange.html#tymethod.quote_exchange_price\">Read more</a></div></details></div></details>","AssetExchange","asset_hub_rococo_runtime::xcm_config::PoolAssetsExchanger"]],
"asset_hub_westend_runtime":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AssetExchange-for-SingleAssetExchangeAdapter%3CAssetConversion,+Fungibles,+Matcher,+AccountId%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/asset_exchange/single_asset_adapter/adapter.rs.html#44-54\">source</a><a href=\"#impl-AssetExchange-for-SingleAssetExchangeAdapter%3CAssetConversion,+Fungibles,+Matcher,+AccountId%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AssetConversion, Fungibles, Matcher, AccountId&gt; <a class=\"trait\" href=\"staging_xcm_executor/traits/asset_exchange/trait.AssetExchange.html\" title=\"trait staging_xcm_executor::traits::asset_exchange::AssetExchange\">AssetExchange</a> for <a class=\"struct\" href=\"staging_xcm_builder/asset_exchange/single_asset_adapter/adapter/struct.SingleAssetExchangeAdapter.html\" title=\"struct staging_xcm_builder::asset_exchange::single_asset_adapter::adapter::SingleAssetExchangeAdapter\">SingleAssetExchangeAdapter</a>&lt;AssetConversion, Fungibles, Matcher, AccountId&gt;<div class=\"where\">where\n    AssetConversion: <a class=\"trait\" href=\"pallet_asset_conversion/swap/trait.QuotePrice.html\" title=\"trait pallet_asset_conversion::swap::QuotePrice\">QuotePrice</a>&lt;Balance = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u128.html\">u128</a>, AssetKind = &lt;Fungibles as <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Inspect\">Inspect</a>&lt;AccountId&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html#associatedtype.AssetId\" title=\"type frame_support::traits::tokens::fungibles::regular::Inspect::AssetId\">AssetId</a>&gt; + <a class=\"trait\" href=\"pallet_asset_conversion/swap/trait.SwapCredit.html\" title=\"trait pallet_asset_conversion::swap::SwapCredit\">SwapCredit</a>&lt;AccountId, Balance = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u128.html\">u128</a>, AssetKind = &lt;Fungibles as <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Inspect\">Inspect</a>&lt;AccountId&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html#associatedtype.AssetId\" title=\"type frame_support::traits::tokens::fungibles::regular::Inspect::AssetId\">AssetId</a>, Credit = <a class=\"struct\" href=\"frame_support/traits/tokens/fungibles/imbalance/struct.Imbalance.html\" title=\"struct frame_support::traits::tokens::fungibles::imbalance::Imbalance\">Imbalance</a>&lt;&lt;Fungibles as <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Inspect\">Inspect</a>&lt;AccountId&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html#associatedtype.AssetId\" title=\"type frame_support::traits::tokens::fungibles::regular::Inspect::AssetId\">AssetId</a>, &lt;Fungibles as <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Inspect\">Inspect</a>&lt;AccountId&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html#associatedtype.Balance\" title=\"type frame_support::traits::tokens::fungibles::regular::Inspect::Balance\">Balance</a>, &lt;Fungibles as <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Balanced.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Balanced\">Balanced</a>&lt;AccountId&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Balanced.html#associatedtype.OnDropCredit\" title=\"type frame_support::traits::tokens::fungibles::regular::Balanced::OnDropCredit\">OnDropCredit</a>, &lt;Fungibles as <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Balanced.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Balanced\">Balanced</a>&lt;AccountId&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Balanced.html#associatedtype.OnDropDebt\" title=\"type frame_support::traits::tokens::fungibles::regular::Balanced::OnDropDebt\">OnDropDebt</a>&gt;&gt;,\n    Fungibles: <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Balanced.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Balanced\">Balanced</a>&lt;AccountId, Balance = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u128.html\">u128</a>&gt;,\n    Matcher: <a class=\"trait\" href=\"staging_xcm_executor/traits/token_matching/trait.MatchesFungibles.html\" title=\"trait staging_xcm_executor::traits::token_matching::MatchesFungibles\">MatchesFungibles</a>&lt;&lt;Fungibles as <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Inspect\">Inspect</a>&lt;AccountId&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html#associatedtype.AssetId\" title=\"type frame_support::traits::tokens::fungibles::regular::Inspect::AssetId\">AssetId</a>, &lt;Fungibles as <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Inspect\">Inspect</a>&lt;AccountId&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html#associatedtype.Balance\" title=\"type frame_support::traits::tokens::fungibles::regular::Inspect::Balance\">Balance</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.exchange_asset\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/asset_exchange/single_asset_adapter/adapter.rs.html#56-61\">source</a><a href=\"#method.exchange_asset\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm_executor/traits/asset_exchange/trait.AssetExchange.html#tymethod.exchange_asset\" class=\"fn\">exchange_asset</a>(\n    _: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>&gt;,\n    give: <a class=\"struct\" href=\"staging_xcm_executor/assets/struct.AssetsInHolding.html\" title=\"struct staging_xcm_executor::assets::AssetsInHolding\">AssetsInHolding</a>,\n    want: &amp;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Assets.html\" title=\"struct staging_xcm::v4::asset::Assets\">Assets</a>,\n    maximal: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.bool.html\">bool</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"staging_xcm_executor/assets/struct.AssetsInHolding.html\" title=\"struct staging_xcm_executor::assets::AssetsInHolding\">AssetsInHolding</a>, <a class=\"struct\" href=\"staging_xcm_executor/assets/struct.AssetsInHolding.html\" title=\"struct staging_xcm_executor::assets::AssetsInHolding\">AssetsInHolding</a>&gt;</h4></section></summary><div class='docblock'>Handler for exchanging an asset. <a href=\"staging_xcm_executor/traits/asset_exchange/trait.AssetExchange.html#tymethod.exchange_asset\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.quote_exchange_price\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/asset_exchange/single_asset_adapter/adapter.rs.html#156\">source</a><a href=\"#method.quote_exchange_price\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm_executor/traits/asset_exchange/trait.AssetExchange.html#tymethod.quote_exchange_price\" class=\"fn\">quote_exchange_price</a>(\n    give: &amp;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Assets.html\" title=\"struct staging_xcm::v4::asset::Assets\">Assets</a>,\n    want: &amp;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Assets.html\" title=\"struct staging_xcm::v4::asset::Assets\">Assets</a>,\n    maximal: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.bool.html\">bool</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Assets.html\" title=\"struct staging_xcm::v4::asset::Assets\">Assets</a>&gt;</h4></section></summary><div class='docblock'>Handler for quoting the exchange price of two asset collections. <a href=\"staging_xcm_executor/traits/asset_exchange/trait.AssetExchange.html#tymethod.quote_exchange_price\">Read more</a></div></details></div></details>","AssetExchange","asset_hub_westend_runtime::xcm_config::PoolAssetsExchanger"]],
"penpal_runtime":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AssetExchange-for-SingleAssetExchangeAdapter%3CAssetConversion,+Fungibles,+Matcher,+AccountId%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/asset_exchange/single_asset_adapter/adapter.rs.html#44-54\">source</a><a href=\"#impl-AssetExchange-for-SingleAssetExchangeAdapter%3CAssetConversion,+Fungibles,+Matcher,+AccountId%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AssetConversion, Fungibles, Matcher, AccountId&gt; <a class=\"trait\" href=\"staging_xcm_executor/traits/asset_exchange/trait.AssetExchange.html\" title=\"trait staging_xcm_executor::traits::asset_exchange::AssetExchange\">AssetExchange</a> for <a class=\"struct\" href=\"staging_xcm_builder/asset_exchange/single_asset_adapter/adapter/struct.SingleAssetExchangeAdapter.html\" title=\"struct staging_xcm_builder::asset_exchange::single_asset_adapter::adapter::SingleAssetExchangeAdapter\">SingleAssetExchangeAdapter</a>&lt;AssetConversion, Fungibles, Matcher, AccountId&gt;<div class=\"where\">where\n    AssetConversion: <a class=\"trait\" href=\"pallet_asset_conversion/swap/trait.QuotePrice.html\" title=\"trait pallet_asset_conversion::swap::QuotePrice\">QuotePrice</a>&lt;Balance = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u128.html\">u128</a>, AssetKind = &lt;Fungibles as <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Inspect\">Inspect</a>&lt;AccountId&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html#associatedtype.AssetId\" title=\"type frame_support::traits::tokens::fungibles::regular::Inspect::AssetId\">AssetId</a>&gt; + <a class=\"trait\" href=\"pallet_asset_conversion/swap/trait.SwapCredit.html\" title=\"trait pallet_asset_conversion::swap::SwapCredit\">SwapCredit</a>&lt;AccountId, Balance = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u128.html\">u128</a>, AssetKind = &lt;Fungibles as <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Inspect\">Inspect</a>&lt;AccountId&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html#associatedtype.AssetId\" title=\"type frame_support::traits::tokens::fungibles::regular::Inspect::AssetId\">AssetId</a>, Credit = <a class=\"struct\" href=\"frame_support/traits/tokens/fungibles/imbalance/struct.Imbalance.html\" title=\"struct frame_support::traits::tokens::fungibles::imbalance::Imbalance\">Imbalance</a>&lt;&lt;Fungibles as <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Inspect\">Inspect</a>&lt;AccountId&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html#associatedtype.AssetId\" title=\"type frame_support::traits::tokens::fungibles::regular::Inspect::AssetId\">AssetId</a>, &lt;Fungibles as <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Inspect\">Inspect</a>&lt;AccountId&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html#associatedtype.Balance\" title=\"type frame_support::traits::tokens::fungibles::regular::Inspect::Balance\">Balance</a>, &lt;Fungibles as <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Balanced.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Balanced\">Balanced</a>&lt;AccountId&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Balanced.html#associatedtype.OnDropCredit\" title=\"type frame_support::traits::tokens::fungibles::regular::Balanced::OnDropCredit\">OnDropCredit</a>, &lt;Fungibles as <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Balanced.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Balanced\">Balanced</a>&lt;AccountId&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Balanced.html#associatedtype.OnDropDebt\" title=\"type frame_support::traits::tokens::fungibles::regular::Balanced::OnDropDebt\">OnDropDebt</a>&gt;&gt;,\n    Fungibles: <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Balanced.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Balanced\">Balanced</a>&lt;AccountId, Balance = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u128.html\">u128</a>&gt;,\n    Matcher: <a class=\"trait\" href=\"staging_xcm_executor/traits/token_matching/trait.MatchesFungibles.html\" title=\"trait staging_xcm_executor::traits::token_matching::MatchesFungibles\">MatchesFungibles</a>&lt;&lt;Fungibles as <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Inspect\">Inspect</a>&lt;AccountId&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html#associatedtype.AssetId\" title=\"type frame_support::traits::tokens::fungibles::regular::Inspect::AssetId\">AssetId</a>, &lt;Fungibles as <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Inspect\">Inspect</a>&lt;AccountId&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html#associatedtype.Balance\" title=\"type frame_support::traits::tokens::fungibles::regular::Inspect::Balance\">Balance</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.exchange_asset\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/asset_exchange/single_asset_adapter/adapter.rs.html#56-61\">source</a><a href=\"#method.exchange_asset\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm_executor/traits/asset_exchange/trait.AssetExchange.html#tymethod.exchange_asset\" class=\"fn\">exchange_asset</a>(\n    _: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>&gt;,\n    give: <a class=\"struct\" href=\"staging_xcm_executor/assets/struct.AssetsInHolding.html\" title=\"struct staging_xcm_executor::assets::AssetsInHolding\">AssetsInHolding</a>,\n    want: &amp;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Assets.html\" title=\"struct staging_xcm::v4::asset::Assets\">Assets</a>,\n    maximal: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.bool.html\">bool</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"staging_xcm_executor/assets/struct.AssetsInHolding.html\" title=\"struct staging_xcm_executor::assets::AssetsInHolding\">AssetsInHolding</a>, <a class=\"struct\" href=\"staging_xcm_executor/assets/struct.AssetsInHolding.html\" title=\"struct staging_xcm_executor::assets::AssetsInHolding\">AssetsInHolding</a>&gt;</h4></section></summary><div class='docblock'>Handler for exchanging an asset. <a href=\"staging_xcm_executor/traits/asset_exchange/trait.AssetExchange.html#tymethod.exchange_asset\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.quote_exchange_price\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/asset_exchange/single_asset_adapter/adapter.rs.html#156\">source</a><a href=\"#method.quote_exchange_price\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm_executor/traits/asset_exchange/trait.AssetExchange.html#tymethod.quote_exchange_price\" class=\"fn\">quote_exchange_price</a>(\n    give: &amp;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Assets.html\" title=\"struct staging_xcm::v4::asset::Assets\">Assets</a>,\n    want: &amp;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Assets.html\" title=\"struct staging_xcm::v4::asset::Assets\">Assets</a>,\n    maximal: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.bool.html\">bool</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Assets.html\" title=\"struct staging_xcm::v4::asset::Assets\">Assets</a>&gt;</h4></section></summary><div class='docblock'>Handler for quoting the exchange price of two asset collections. <a href=\"staging_xcm_executor/traits/asset_exchange/trait.AssetExchange.html#tymethod.quote_exchange_price\">Read more</a></div></details></div></details>","AssetExchange","penpal_runtime::xcm_config::PoolAssetsExchanger"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()