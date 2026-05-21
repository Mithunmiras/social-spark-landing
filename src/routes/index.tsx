import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LineButton } from "@/components/LineButton";
import { Reveal } from "@/components/Reveal";
import heroFarm from "@/assets/hero-farm.jpg";
import eggRollsPoster from "@/assets/egg-rolls-poster.jpg";
import giftBox from "@/assets/gift-box.jpg";
import drChang from "@/assets/dr-chang.jpg";
import eggRollJar from "@/assets/egg-roll-jar.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "張醫師的樂活農場 — 經典平飼特色蛋與手工蛋捲" },
      {
        name: "description",
        content:
          "來自張醫師的樂活農場，採平飼自然方式飼養，產出營養豐富的特色蛋與手工經典蛋捲。加入 LINE 立即訂購。",
      },
      { property: "og:title", content: "張醫師的樂活農場" },
      { property: "og:description", content: "平飼特色蛋・手工經典蛋捲・LINE 訂購" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <Story />
      <Products />
      <Promise />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-sun grid place-items-center shadow-soft">
            <span className="text-lg">🥚</span>
          </div>
          <span className="font-display font-bold text-lg text-accent">張醫師的樂活農場</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#story" className="hover:text-primary transition-colors">品牌故事</a>
          <a href="#products" className="hover:text-primary transition-colors">商品</a>
          <a href="#promise" className="hover:text-primary transition-colors">我們的承諾</a>
        </nav>
        <LineButton size="md">LINE 訂購</LineButton>
      </div>
    </motion.header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section ref={ref} className="relative pt-32 pb-24 px-6 overflow-hidden">
      {/* floating decorative eggs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-sun opacity-20 blur-sm"
          style={{
            width: 40 + i * 12,
            height: 50 + i * 14,
            left: `${10 + i * 18}%`,
            top: `${15 + (i % 2) * 60}%`,
          }}
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
        />
      ))}

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative">
        <motion.div style={{ y, opacity }} className="relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/40 border border-secondary text-secondary-foreground text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            經典平飼・自然產出
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold leading-[1.05] text-foreground"
          >
            張醫師的
            <br />
            <span className="text-gradient-sun">樂活農場</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
          >
            從自然中孕育，以醫者之心守護每一顆蛋。
            <br />
            經典平飼特色蛋・手工烘焙蛋捲，讓家裡的餐桌多一份安心與美味。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <LineButton>加入 LINE 立即訂購</LineButton>
            <a
              href="#products"
              className="px-6 py-4 rounded-full font-semibold text-accent hover:text-primary transition-colors"
            >
              探索商品 →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 flex items-center gap-8 text-sm text-muted-foreground"
          >
            <Stat n="100%" label="平飼自然" />
            <div className="w-px h-10 bg-border" />
            <Stat n="0" label="抗生素" />
            <div className="w-px h-10 bg-border" />
            <Stat n="日日" label="新鮮直送" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-warm">
            <img src={heroFarm} alt="樂活農場放牧雞群" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/40 via-transparent to-transparent" />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-warm border border-border max-w-[200px]"
          >
            <div className="text-xs text-muted-foreground">今日新鮮上架</div>
            <div className="font-display font-bold text-accent mt-1">經典特色蛋捲</div>
            <div className="text-xs text-primary mt-1">★★★★★ 顧客回購</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-2xl font-bold text-accent">{n}</div>
      <div className="text-xs uppercase tracking-wider mt-1">{label}</div>
    </div>
  );
}

function Story() {
  return (
    <section id="story" className="py-28 px-6 bg-gradient-warm">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <Reveal className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-warm">
            <img src={drChang} alt="張醫師" className="w-full h-full object-cover" />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute -top-6 -right-6 bg-card rounded-2xl px-5 py-4 shadow-warm border border-border"
          >
            <div className="font-display text-3xl text-primary font-bold">20+</div>
            <div className="text-xs text-muted-foreground">年醫者初心</div>
          </motion.div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="text-sm font-semibold tracking-[0.2em] text-primary uppercase mb-4">
            Our Story
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            一位醫師的<span className="text-gradient-sun">樂活</span>承諾
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
            從聽診器到牧場柵欄，張醫師將對健康的執著帶進每一片青草地。
            堅持平飼自然飼養、不使用抗生素，讓雞隻悠遊奔跑、自在啼鳴。
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
            我們相信，好食材來自善待生命的態度。
            這就是樂活農場想傳遞給每個家庭的，簡單而真誠的美味。
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const products = [
  {
    img: giftBox,
    tag: "禮盒首選",
    title: "經典平飼特色蛋禮盒",
    desc: "嚴選自然放牧鮮蛋，搭配精美提袋包裝，送禮自用兩相宜。",
  },
  {
    img: eggRollJar,
    tag: "人氣商品",
    title: "經典手工蛋捲",
    desc: "以鮮蛋慢火烘烤，層層酥脆、蛋香濃郁，一試便深深「捲」戀。",
  },
  {
    img: eggRollsPoster,
    tag: "節慶限定",
    title: "蛋捲禮籃組合",
    desc: "精緻竹籃包裝，乾燥花點綴，最暖心的節慶送禮選擇。",
  },
];

function Products() {
  return (
    <section id="products" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-sm font-semibold tracking-[0.2em] text-primary uppercase mb-4">
            Signature Products
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            來自農場的<span className="text-gradient-sun">經典美味</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            每一份都承載著土地的溫度與醫者的用心
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-warm border border-border h-full flex flex-col"
              >
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <motion.img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="self-start text-xs font-bold px-3 py-1 rounded-full bg-secondary/50 text-accent">
                    {p.tag}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-bold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground text-sm leading-relaxed flex-1">
                    {p.desc}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">LINE 訂購・宅配到府</span>
                    <span className="text-primary font-bold group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const promises = [
  { icon: "🌱", title: "平飼自然", desc: "雞隻自由奔跑、不擁擠飼養，回歸最自然的生活方式。" },
  { icon: "🚫", title: "零抗生素", desc: "嚴格把關飼料來源，全程不使用抗生素與生長劑。" },
  { icon: "👨‍⚕️", title: "醫者把關", desc: "張醫師親自監督生產流程，每一顆蛋都通過嚴格檢驗。" },
  { icon: "🚚", title: "新鮮直送", desc: "從產地到餐桌最短距離，鎖住風味與營養。" },
];

function Promise() {
  return (
    <section id="promise" className="py-28 px-6 bg-gradient-deep text-primary-foreground relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      <div className="max-w-6xl mx-auto relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-sm font-semibold tracking-[0.2em] text-secondary uppercase mb-4">
            Our Promise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            四個堅持，守護每一份美味
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {promises.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, rotate: -1 }}
                className="bg-card/10 backdrop-blur-sm border border-primary-foreground/15 rounded-2xl p-6 h-full"
              >
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="font-display text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-primary-foreground/75 leading-relaxed">{p.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="relative bg-gradient-sun rounded-[2.5rem] p-12 md:p-20 text-center overflow-hidden shadow-warm">
            <motion.div
              className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-card/20 blur-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-accent/30 blur-3xl"
              animate={{ scale: [1.2, 1, 1.2] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-bold text-accent-foreground leading-tight">
                準備好嚐一口
                <br />
                樂活的滋味了嗎？
              </h2>
              <p className="mt-6 text-lg text-accent-foreground/90 max-w-xl mx-auto">
                加入我們的 LINE 官方帳號，掌握最新優惠與新品上市，享受最便捷的訂購體驗。
              </p>
              <div className="mt-10 flex justify-center">
                <LineButton>加入 LINE 好友訂購</LineButton>
              </div>
              <p className="mt-6 text-sm text-accent-foreground/70">
                目前僅提供 LINE 訂購服務・客服時間 09:00–18:00
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gradient-sun grid place-items-center text-xs">🥚</div>
          <span className="font-display font-bold text-accent">張醫師的樂活農場</span>
        </div>
        <div>© {new Date().getFullYear()} 樂活農場・經典平飼特色蛋</div>
        <a
          href="https://line.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-line hover:underline font-semibold"
        >
          LINE 訂購 →
        </a>
      </div>
    </footer>
  );
}
