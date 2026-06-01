import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { LineButton } from "@/components/LineButton";
import { Reveal } from "@/components/Reveal";
import eggRollsPoster from "@/assets/egg-rolls-poster.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <Story />
      <Products />
      <GroupBuy />
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
          <img
            src="https://res.cloudinary.com/dyd43a6jy/image/upload/v1780298016/Gemini_Generated_Image_j75yprj75yprj75y-removebg-preview_buh5md.png"
            alt="張醫師的快樂農場"
            className="h-16 w-auto object-contain "
          />
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#story" className="hover:text-primary transition-colors">品牌故事</a>
          <a href="#products" className="hover:text-primary transition-colors">商品</a>
          <a href="#groupbuy" className="hover:text-primary transition-colors">團購方案</a>
          <a href="#promise" className="hover:text-primary transition-colors">我們的承諾</a>
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <LineButton size="md">LINE 訂購</LineButton>
          </div>
          <MobileMenu />
        </div>
      </div>
    </motion.header>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen((s) => !s)}
        aria-label="Toggle menu"
        className="md:hidden inline-flex items-center justify-center p-2 rounded-lg bg-background/60 border border-border text-foreground"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm p-6">
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <img
                  src="https://res.cloudinary.com/dyd43a6jy/image/upload/v1780298016/Gemini_Generated_Image_j75yprj75yprj75y-removebg-preview_buh5md.png"
                  alt="張醫師的快樂農場"
                  className="h-16 w-auto object-contain "
                />
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2">
                ✕
              </button>
            </div>

            <nav className="flex flex-col gap-6 text-lg font-medium">
              <a onClick={() => setOpen(false)} href="#story" className="block">品牌故事</a>
              <a onClick={() => setOpen(false)} href="#products" className="block">商品</a>
              <a onClick={() => setOpen(false)} href="#groupbuy" className="block">團購方案</a>
              <a onClick={() => setOpen(false)} href="#promise" className="block">我們的承諾</a>
            </nav>

            <div className="mt-8">
              <LineButton size="lg">LINE 訂購</LineButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section
      ref={ref}
      className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 overflow-hidden"
    >
      {/* video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://res.cloudinary.com/dyd43a6jy/video/upload/v1780297177/157263-814315674_1_z3sktg.mp4" type="video/mp4" />
      </video>
      {/* dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div style={{ y, opacity }} className="relative z-10 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            經典平飼・自然產出
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] text-white"
          >
            張醫師的
            <br />
            <span className="text-gradient-sun">快樂農場</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-white/85 max-w-lg leading-relaxed"
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
            className="mt-12 flex items-center gap-8 text-sm text-white/80"
          >
            <Stat n="100%" label="平飼自然" />
            <div className="w-px h-10 bg-white/30" />
            <Stat n="0" label="抗生素" />
            <div className="w-px h-10 bg-white/30" />
            <Stat n="日日" label="新鮮直送" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-2xl font-bold text-white">{n}</div>
      <div className="text-xs uppercase tracking-wider mt-1">{label}</div>
    </div>
  );
}

function Story() {
  return (
    <section id="story" className="py-20 sm:py-28 px-4 sm:px-6 bg-gradient-warm">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <Reveal className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-warm">
            <img src="https://digitner-bucket.s3.ap-south-1.amazonaws.com/image/1780287819505_Gemini_Generated_Image_h3miwnh3miwnh3mi__1_.png" alt="張醫師" className="w-full h-full object-cover" />
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
            這就是快樂農場想傳遞給每個家庭的，簡單而真誠的美味。
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const products = [
  {
    img: "https://digitner-bucket.s3.ap-south-1.amazonaws.com/image/1779936796688_Gemini_Generated_Image_5fvnwp5fvnwp5fvn.png",
    tag: "農場直送",
    title: "經典平飼特色蛋",
    desc: "嚴選自然放牧鮮蛋，蛋黃飽滿、蛋香濃郁，每日新鮮現撿，產地直送到府。",
    features: ["10入 / 20入 裝", "禮盒包裝可選", "冷藏宅配"],
  },
  {
    img: "https://digitner-bucket.s3.ap-south-1.amazonaws.com/image/1779936858254_Gemini_Generated_Image_m480y5m480y5m480.png",
    tag: "人氣手作",
    title: "經典手工蛋捲",
    desc: "以自家鮮蛋慢火烘烤，層層酥脆、蛋香四溢，一試便深深「捲」戀的療癒滋味。",
    features: ["原味 / 海苔 / 芝麻", "玻璃罐裝保存", "節慶禮盒組合"],
  },
];

function Products() {
  return (
    <section id="products" className="py-20 sm:py-28 px-4 sm:px-6">
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

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-warm border border-border h-full flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <motion.img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <span className="self-start text-xs font-bold px-3 py-1 rounded-full bg-secondary/50 text-accent">
                    {p.tag}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-bold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                    {p.desc}
                  </p>
                  <ul className="mt-4 space-y-1.5 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-border">
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

const groupBuyTiers = [
  {
    size: "10+",
    title: "小團輕鬆組",
    perks: ["免運門檻達成", "贈送限量小蛋捲", "專屬團主回饋"],
    accent: "from-secondary/40 to-secondary/10",
  },
  {
    size: "30+",
    title: "人氣團購組",
    perks: ["95 折優惠價", "加贈手工蛋捲一罐", "團主回饋 5%"],
    accent: "from-primary/30 to-primary/5",
    featured: true,
  },
  {
    size: "50+",
    title: "企業團購組",
    perks: ["9 折優惠價", "客製化禮盒包裝", "團主回饋 8%", "可開立發票"],
    accent: "from-accent/30 to-accent/5",
  },
];

function GroupBuy() {
  return (
    <section id="groupbuy" className="py-20 sm:py-28 px-4 sm:px-6 bg-gradient-warm relative overflow-hidden">
      <motion.div
        className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 text-primary text-sm font-semibold mb-5">
              <span className="text-base">🛒</span> Group Buy・揪團優惠
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
              一起揪團，<span className="text-gradient-sun">越多越優惠</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              無論是辦公室同事、社區鄰居或好友家人，揪團一起訂購農場特色蛋與手工蛋捲，
              享受超值團購價，還能成為團主獲得專屬回饋。透過 LINE 一鍵開團，輕鬆又方便。
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {groupBuyTiers.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`relative h-full rounded-3xl p-7 border ${
                  t.featured
                    ? "border-primary/40 bg-card shadow-warm"
                    : "border-border bg-card/70 backdrop-blur-sm shadow-soft"
                }`}
              >
                {t.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-wider">
                    最熱門
                  </div>
                )}
                <div className={`inline-flex items-baseline gap-1 px-4 py-2 rounded-2xl bg-gradient-to-br ${t.accent} mb-4`}>
                  <span className="font-display text-4xl font-bold text-accent">{t.size}</span>
                  <span className="text-sm text-muted-foreground">人成團</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">{t.title}</h3>
                <ul className="space-y-2.5">
                  {t.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2.5 text-sm text-foreground/80">
                      <span className="mt-1 w-4 h-4 rounded-full bg-primary/15 text-primary grid place-items-center text-[10px] font-bold flex-shrink-0">✓</span>
                      {perk}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <LineButton>LINE 私訊開團</LineButton>
            <p className="text-sm text-muted-foreground">
              開團團主請於 LINE 留言「我要開團」，將有專人為您服務
            </p>
          </div>
        </Reveal>
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
    <section id="promise" className="py-20 sm:py-28 px-4 sm:px-6 bg-gradient-deep text-primary-foreground relative overflow-hidden">
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
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
    <section className="py-20 sm:py-28 px-4 sm:px-6">
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
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-accent-foreground leading-tight">
                準備好嚐一口
                <br />
                快樂的滋味了嗎？
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
          <img
            src="https://res.cloudinary.com/dyd43a6jy/image/upload/v1780298016/Gemini_Generated_Image_j75yprj75yprj75y-removebg-preview_buh5md.png"
            alt="張醫師的快樂農場"
            className="h-12 w-auto object-contain "
          />
        </div>
        <div>© {new Date().getFullYear()} 快樂農場・經典平飼特色蛋</div>
        <a
          href="https://13.63.69.9.nip.io/lineapp/"
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
