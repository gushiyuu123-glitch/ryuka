// src/pages/Home.jsx
import React, { useEffect } from "react";
import "../styles/base.css";
import "../styles/home.css";
import { initParallax } from "../scripts/parallax.js";
import { initProductMotion } from "../scripts/productMotion.js"; // ← 商品モーション追加
import { initPageTransition } from "../scripts/pageTransition.js";
import { initHeroMotion } from "../scripts/heroMotion.js"; // ← ここ追加！

export default function Home() {
  useEffect(() => {
    // ページロード時に演出系を初期化
    initParallax();        // 背景のゆるい動き
    initProductMotion();   // 商品カードの3Dモーション
    initPageTransition(); // ←追加
    initHeroMotion(); // ← ここで呼ぶ！
  }, []);

  return (
    <main className="home">
      {/* ===== Hero Section ===== */}
{/* ===== Hero Section ===== */}
  <section className="hero">
    <div className="hero-inner">
      <h1>琉香 — RYUKA</h1>
      <p>光と静寂のあいだに香る。</p>
    </div>

    <div className="hero-scent"></div>
    <div className="hero-vapor"></div>

    {/* 泡を増量：淡いピンク、水色、白を混ぜる */}
    <div className="hero-bubbles">
      <span></span><span></span><span></span><span></span><span></span>
      <span></span><span></span><span></span><span></span><span></span>
      <span></span><span></span><span></span><span></span><span></span>
    </div>

    <div className="hero-bokeh"></div>
    <div className="hero-glow"></div>
    <div className="hero-scroll">scroll</div>
  </section>


      {/* ===== Lead Section ===== */}
      <section className="lead">
        <div className="lead-glow"></div>
        <div className="lead-scent"></div>

        <div className="lead-inner">
          <span className="en">about 琉香</span>
          <h2>沖縄の自然が香る、静かな時間。</h2>
          <p>
            琉香（RYUKA）は、沖縄の素材と香りを活かした
            アロマ・キャンドル・ディフューザーのブランドです。
            光と香りの調和で、穏やかな空間をつくります。
          </p>
        </div>
      </section>

      {/* ===== Store Section ===== */}
      <section className="store">
        <div className="store-bg"></div>
        <div className="store-inner">
          <h2>RYUKA OKINAWA STORE</h2>
          <p>
            光と風が通り抜ける琉香の直営店。<br />
            沖縄の海と自然をそのまま感じる香り空間です。
          </p>
          <a href="#" className="btn">店舗を見る</a>
        </div>
      </section>

      {/* ===== Product Section ===== */}
 <section className="products">
  {/* 背景動画（淡い光煙） */}
  <video className="product-bg" autoPlay muted loop playsInline>
    <source src="/videos/light-smoke.mp4" type="video/mp4" />
  </video>

  <div className="scent-smoke"></div>
  <h2>商品ラインナップ</h2>
  <div className="product-grid">

          <div className="product-card">
            <img src="/images/goya.jpg" alt="Gōya Mist" />
            <h3>Gōya Mist</h3>
            <p className="subtitle">沖縄の太陽を閉じ込めたような、苦みと清涼の香り。</p>
            <p className="desc">
              朝露のゴーヤーを思わせる爽やかなグリーンノート。
              ミントとシークヮーサーをブレンドし、心の霧を晴らすような清々しさを演出。
            </p>
          </div>

          <div className="product-card">
            <img src="/images/hibiscus.jpg" alt="Hibiscus Candle" />
            <h3>Hibiscus Candle</h3>
            <p className="subtitle">南風に揺れる花びらのように、静かな情熱を灯す。</p>
            <p className="desc">
              ハイビスカスの甘さと湿った空気感を再現。
              琉球ガラスの赤〜ピンクのグラデーション容器に宿る静かな炎。
            </p>
          </div>

          <div className="product-card">
            <img src="/images/getto.jpg" alt="Gettō Perfume" />
            <h3>Gettō Perfume</h3>
            <p className="subtitle">古くから「守りの香り」として愛されてきた月桃の神秘。</p>
            <p className="desc">
              ウッディな月桃にベルガモットを重ね、
              記憶の奥で静かに呼吸するような余韻を残す琉香の象徴的フレグランス。
            </p>
          </div>

          <div className="product-card">
            <img src="/images/sugarcane.jpg" alt="Sugar Cane Candle" />
            <h3>Sugar Cane Candle</h3>
            <p className="subtitle">大地の甘みと、炎のぬくもり。</p>
            <p className="desc">
              黒糖のような甘く香ばしいトーン。灯すたびに、懐かしい島の夜を思い出す。
            </p>
          </div>

          <div className="product-card">
            <img src="/images/seaglass.jpg" alt="Sea Glass Diffuser" />
            <h3>Sea Glass Diffuser</h3>
            <p className="subtitle">海辺で拾った記憶を、部屋に飾る。</p>
            <p className="desc">
              琉球の海色を閉じ込めたホワイトティーと潮風の香り。
              光に透かすと海ガラスのように揺らめくブルー。
            </p>
          </div>

        </div>
      </section>

      {/* ===== Postcard Section ===== */}
      <section className="postcard">
        <div className="postcard-inner">
          <div className="postcard-image"></div>
          <div className="postcard-text">
            <h2>香りの記憶を届けるポストカード</h2>
            <p>
              沖縄の風景や香りを封じ込めた、琉香オリジナルのアロマポストカード。
              手に取った瞬間、光と香りがやさしく広がります。
            </p>
            <a href="#" className="btn">詳細を見る</a>
          </div>
        </div>
      </section>
    </main>
  );
}
