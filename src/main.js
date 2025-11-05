import './style.css';
import { initParallax } from './scripts/parallax.js';
import { initParallax } from "./scripts/parallax.js";
initParallax();

// HTML構造を直接挿入（Hero→Lead→Store→Products）
document.querySelector('#app').innerHTML = `
  <section class="hero">
    <div class="hero-glow"></div>
    <div class="hero-scent"></div>
    <div class="hero-bokeh"></div>
    <div class="hero-inner">
      <h1>琉香 - Ryuka</h1>
      <p>香りが導く、琉球の静けさ</p>
    </div>
    <div class="hero-scroll">Scroll</div>
  </section>

  <section class="lead">
    <div class="lead-glow"></div>
    <div class="lead-scent"></div>
    <div class="lead-inner">
      <span class="en">Concept</span>
      <h2>香りが記憶になる — 沖縄の風とともに</h2>
      <p>穏やかな時間とともに香りが心をほどく。<br>琉球の自然をテーマにした、あなただけの空間を。</p>
    </div>
  </section>

  <section class="store">
    <div class="store-bg"></div>
    <div class="store-inner">
      <h2>直営店 — 琉香本店</h2>
      <p>那覇・首里の丘にある静かな香りのアトリエ。<br>試香と調香体験をお楽しみいただけます。</p>
      <a href="#" class="btn">店舗情報を見る</a>
    </div>
  </section>

  <section class="products">
    <h2>Products</h2>
    <div class="product-grid">
      <div class="product-card">
        <img src="/images/product1.jpg" alt="香水ボトル">
        <h3>琉海 - Ryuumi</h3>
        <p class="desc">透明な海をイメージしたフレッシュな香り。</p>
      </div>
      <div class="product-card">
        <img src="/images/product2.jpg" alt="アロマキャンドル">
        <h3>風花 - Kazahana</h3>
        <p class="desc">風に舞う花びらのようにやさしい香り。</p>
      </div>
    </div>
  </section>
`;

// パララックスを起動
initParallax();
console.log('✨ RYUKA Parallax active');
