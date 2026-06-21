"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

const benefits = [
  ["出品简单", "开袋、加水、煮开即可，不依赖复杂研发和专业师傅。"],
  ["轻油感", "相比传统油茶的厚重印象，口感更清爽，适合现代餐饮场景。"],
  ["风味独特", "紫苏、姜与茶香融合，区别于常见奶茶、果茶和酸梅汤。"],
  ["视觉好看", "青翠色泽适合拍照、菜单展示、欢迎饮和茶歇场景。"],
  ["冷热皆宜", "热饮温润，冰饮清爽，可做早餐热饮，也可做夏季冰饮。"],
  ["工厂直发", "按需采购，降低囤货压力，适合先试饮再上架。"],
];

const scenes = [
  ["酒店早餐", "在豆浆、牛奶、咖啡之外，增加一款广西特色热饮。"],
  ["大堂欢迎饮", "小杯出品，颜色青翠，适合作为入住迎宾饮品。"],
  ["餐厅佐餐", "为广西菜、特色餐厅和包厢茶水增加记忆点。"],
  ["会议茶歇", "热饮或冷饮皆可，适合企业会议、培训和活动现场。"],
  ["茶饮新品", "可延展为冰紫苏油茶、紫苏油茶拿铁、紫苏燕麦油茶。"],
  ["民宿文旅", "作为地方体验饮或伴手礼，增强游客对广西风味的记忆。"],
];

const menuItems = [
  "广西紫苏油茶",
  "冰镇紫苏油茶",
  "紫苏油茶拿铁",
  "紫苏燕麦油茶",
  "紫苏油茶欢迎饮",
  "紫苏油茶茶歇桶",
  "紫苏油茶伴手礼",
];

const cooperationSteps = [
  "提交试样申请",
  "获取样品和出品建议",
  "安排门店试饮或试销",
  "根据反馈确认采购",
  "工厂直发，按需补货",
];

const standardNotes = [
  ["器具建议", "建议使用玻璃锅、不锈钢锅等稳定器具，避免影响颜色与口感。"],
  ["煮制节奏", "水开后加入油茶膏，煮开后及时关火，保持风味清爽。"],
  ["浓度控制", "可按门店杯型调整水量，早餐热饮与冰饮茶底可使用不同浓度。"],
  ["前台表达", "可配合产品小卡片，让服务员用一句话讲清产区、原料和青绿色来源。"],
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f3e9] text-[#10251d]">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/40 bg-[#f7f3e9]/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a className="text-sm font-semibold tracking-[0.22em] text-[#14382b]" href="#top">
            紫苏油茶
          </a>
          <div className="hidden items-center gap-8 text-sm text-[#395447] md:flex">
            <a href="#product">产品</a>
            <a href="#standard">出品</a>
            <a href="#scenes">场景</a>
            <a href="#sample">试样</a>
          </div>
          <a
            className="rounded-full bg-[#123b2d] px-5 py-2.5 text-sm font-medium text-[#fffaf0] shadow-sm transition hover:bg-[#0d2d22]"
            href="#sample"
          >
            申请试样
          </a>
        </nav>
      </header>

      <section id="top" className="relative pt-28 sm:pt-36">
        <div className="absolute inset-x-0 top-0 h-[720px] bg-[radial-gradient(circle_at_72%_20%,rgba(198,169,78,0.24),transparent_32%),linear-gradient(180deg,#fbf8ef_0%,#f7f3e9_76%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-24 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:pb-32">
          <div className="max-w-2xl">
            <p className="mb-7 inline-flex rounded-full border border-[#cfbd85]/60 bg-white/45 px-4 py-2 text-xs font-medium tracking-[0.2em] text-[#526251]">
              广西特色饮品｜轻油感｜冷热皆宜｜开袋即煮
            </p>
            <h1 className="text-balance text-5xl font-semibold leading-[1.04] tracking-normal text-[#0c261d] sm:text-6xl lg:text-7xl">
              一杯来自广西的紫苏油茶
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#53685d] sm:text-xl">
              为酒店、餐饮、茶饮与文旅空间，提供一款有地方风味、有视觉记忆点、出品简单的特色饮品方案。
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-full bg-[#123b2d] px-7 py-4 text-center text-base font-medium text-[#fffaf0] shadow-[0_18px_44px_rgba(18,59,45,0.18)] transition hover:-translate-y-0.5 hover:bg-[#0d2f24]"
                href="#cooperation"
              >
                查看合作方案
              </a>
              <a
                className="rounded-full border border-[#123b2d]/20 bg-white/45 px-7 py-4 text-center text-base font-medium text-[#123b2d] transition hover:-translate-y-0.5 hover:bg-white/70"
                href="#sample"
              >
                申请试样
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[620px] lg:max-w-none">
            <div className="absolute -inset-5 rounded-[42px] bg-[#d5bf73]/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[36px] bg-[#e8efdf] shadow-[0_36px_90px_rgba(25,63,48,0.18)]">
              <Image
                src={`${basePath}/zisu-oil-tea-hero.png`}
                alt="一杯青绿色紫苏油茶，旁边有紫苏叶和姜片"
                width={1200}
                height={1200}
                priority
                className="aspect-[4/5] w-full object-cover object-center sm:aspect-[5/4] lg:aspect-[1/1.05]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <p className="text-sm font-medium tracking-[0.2em] text-[#9b7f2f]">MARKET INSIGHT</p>
        <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
          当餐饮饮品越来越相似，门店需要一个新的记忆点
        </h2>
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-[#5f7067]">
          消费者已经熟悉酸梅汤、玉米汁、柠檬茶、奶茶和咖啡。对酒店、餐饮和文旅空间来说，一款好的饮品，不只是解渴，更应该成为体验的一部分。它要有地方特色，有视觉记忆点，也要足够容易落地。
        </p>
      </section>

      <section id="product" className="bg-[#0d261d] text-[#fffaf0]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-medium tracking-[0.2em] text-[#cfbd85]">PRODUCT</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">紫苏油茶是什么？</h2>
          </div>
          <p className="text-lg leading-9 text-[#d8e2d9]">
            紫苏油茶是一款以茶、紫苏、姜和辛香植物为基础的广西特色饮品。产品采用铝箔袋包装，商家只需开袋、加水、加热，即可快速出品。热饮温润，冰饮清爽；青翠色泽具有视觉记忆点，适合酒店早餐、餐厅佐餐、会议茶歇、民宿欢迎饮和茶饮新品开发。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-medium tracking-[0.2em] text-[#9b7f2f]">NATURAL COLOR</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
              这抹青绿色，本身就是记忆点
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-9 text-[#5f7067]">
            <p>
              聊天里反复提到，紫苏油茶的青绿色容易让第一次接触的人好奇。它来自紫苏焯水、茶底和绿色辛香植物共同形成的自然色泽，并不是为了迎合市场刻意调色。
            </p>
            <p>
              对门店来说，这反而是一个值得讲清楚的卖点：真实食材、透明工艺、颜色有辨识度。配合菜单图、欢迎饮小杯和产品介绍卡，可以让顾客更容易记住这杯饮品。
            </p>
          </div>
        </div>
      </section>

      <section id="standard" className="bg-[#fbf8ef]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-medium tracking-[0.2em] text-[#9b7f2f]">STANDARD SERVICE</p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
                开袋、加水、煮开，即可出品
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#607067]">
                从聊天记录看，门店真正关心的是稳定：颜色稳定、口感稳定、员工容易学会。我们把出品动作拆成可执行的标准建议，降低新品上架压力。
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {standardNotes.map(([title, text]) => (
                <article key={title} className="rounded-[28px] bg-white/75 p-7 shadow-[0_20px_60px_rgba(21,52,39,0.07)]">
                  <h3 className="text-xl font-semibold text-[#153f30]">{title}</h3>
                  <p className="mt-4 leading-7 text-[#607067]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="cooperation" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="max-w-3xl">
          <p className="text-sm font-medium tracking-[0.2em] text-[#9b7f2f]">B2B VALUE</p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">为商家降低新品上架成本</h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map(([title, text]) => (
            <article key={title} className="rounded-[28px] bg-white/75 p-7 shadow-[0_20px_60px_rgba(21,52,39,0.07)]">
              <h3 className="text-xl font-semibold text-[#153f30]">{title}</h3>
              <p className="mt-4 leading-7 text-[#607067]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="scenes" className="bg-[#e9efe2]/70">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-medium tracking-[0.2em] text-[#9b7f2f]">SCENES</p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">一款产品，多种场景</h2>
            </div>
            <p className="max-w-sm text-lg leading-8 text-[#607067]">
              从早餐到茶歇，从欢迎饮到新品菜单，同一款茶底适配不同门店节奏。
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {scenes.map(([title, text]) => (
              <article key={title} className="group rounded-[28px] bg-[#fbf8ef]/80 p-7 transition hover:-translate-y-1 hover:bg-white">
                <h3 className="text-xl font-semibold text-[#153f30]">{title}</h3>
                <p className="mt-4 leading-7 text-[#607067]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#10251d] text-[#fffaf0]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-medium tracking-[0.2em] text-[#cfbd85]">MENU EXTENSION</p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">不止一杯热油茶</h2>
              <p className="mt-7 text-lg leading-8 text-[#dce5dd]">
                同一款茶底，可根据不同渠道延展成热饮、冰饮、拿铁、茶歇和伴手礼。
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {menuItems.map((item) => (
                <div key={item} className="rounded-full border border-white/12 bg-white/[0.06] px-6 py-4 text-lg text-[#f7f0df]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-medium tracking-[0.2em] text-[#9b7f2f]">INGREDIENTS</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">认真做好一杯传统风味</h2>
          </div>
          <div className="space-y-7 text-lg leading-9 text-[#5f7067]">
            <p>
              老板在聊天里多次强调，做入口的东西，首先要自己愿意给家人喝。紫苏、姜、茶和辛香植物原料都要认真筛选，不能只做一个好看的概念。
            </p>
            <p>
              创始人高兴是桂林本地人，从小熟悉油茶，也更懂一杯油茶应该有的味道。她选择云南小黄姜、自家种植的双面紫苏，并持续优化嫩叶采摘、研磨细度和出品稳定性，希望把传统油茶做得更干净、更稳定，也更适合现代餐饮场景。
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fbf8ef]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-medium tracking-[0.2em] text-[#9b7f2f]">SALES SUPPORT</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">不只是供货，也帮门店讲清楚</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["产品小卡片", "标注产区、原料、轻油感和青绿色来源，让顾客一眼理解。"],
              ["员工话术", "用简短表达讲清“这是什么、怎么喝、适合什么场景”。"],
              ["扫码申请", "后续可把名片、菜单和桌牌接入网页，方便客户申请样品。"],
            ].map(([title, text]) => (
              <article key={title} className="rounded-[28px] bg-white/75 p-7 shadow-[0_20px_60px_rgba(21,52,39,0.06)]">
                <h3 className="text-xl font-semibold text-[#153f30]">{title}</h3>
                <p className="mt-4 leading-7 text-[#607067]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <p className="text-sm font-medium tracking-[0.2em] text-[#9b7f2f]">COOPERATION</p>
        <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">轻量合作，低门槛试用</h2>
        <div className="mt-12 grid gap-4 lg:grid-cols-5">
          {cooperationSteps.map((item, index) => (
            <div key={item} className="rounded-[26px] bg-white/75 p-6 shadow-[0_20px_60px_rgba(21,52,39,0.06)]">
              <span className="text-sm font-medium text-[#b08b2d]">0{index + 1}</span>
              <p className="mt-8 text-lg font-semibold leading-7 text-[#153f30]">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="sample" className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-medium tracking-[0.2em] text-[#9b7f2f]">SAMPLE REQUEST</p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
            想为你的门店增加一款广西特色饮品？
          </h2>
          <p className="mt-7 text-lg leading-8 text-[#607067]">
            欢迎南宁青秀区酒店、餐饮、茶饮、民宿、健康生活方式空间申请试样或预约试饮。
          </p>
          <div className="mt-10 rounded-[30px] bg-[#123b2d] p-8 text-[#fffaf0]">
            <div className="flex aspect-square max-w-[180px] items-center justify-center rounded-[24px] bg-[#fffaf0] text-center text-sm leading-6 text-[#123b2d]">
              微信二维码占位
            </div>
            <h3 className="mt-7 text-2xl font-semibold">南宁青秀区渠道合作</h3>
            <p className="mt-3 leading-7 text-[#dce5dd]">添加微信，获取样品、报价与出品建议。</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[34px] bg-white/78 p-5 shadow-[0_30px_90px_rgba(18,59,45,0.1)] sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="商家名称" name="business" />
            <Field label="商家类型" name="type" placeholder="酒店 / 餐饮 / 茶饮 / 民宿" />
            <Field label="联系人" name="contact" />
            <Field label="电话/微信" name="phone" />
            <Field label="门店地址" name="address" className="sm:col-span-2" />
            <Field label="想使用的场景" name="scene" placeholder="早餐 / 欢迎饮 / 茶歇 / 佐餐" className="sm:col-span-2" />
            <label className="flex items-center gap-3 rounded-[22px] bg-[#f3efe3] px-4 py-4 text-sm text-[#50665a] sm:col-span-2">
              <input className="h-5 w-5 accent-[#123b2d]" type="checkbox" name="visit" />
              是否需要上门试饮
            </label>
            <label className="sm:col-span-2">
              <span className="mb-2 block text-sm font-medium text-[#50665a]">备注</span>
              <textarea
                name="note"
                rows={4}
                className="w-full resize-none rounded-[22px] border border-[#e2d9bd] bg-[#fffdf7] px-4 py-3 outline-none transition focus:border-[#123b2d]"
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-7 w-full rounded-full bg-[#123b2d] px-7 py-4 text-base font-medium text-[#fffaf0] transition hover:bg-[#0d2f24]"
          >
            申请试样
          </button>
          {submitted ? (
            <p className="mt-5 rounded-[20px] bg-[#e8efe1] px-5 py-4 text-center font-medium text-[#123b2d]">
              申请已收到，请添加微信获取样品与出品建议。
            </p>
          ) : null}
        </form>
      </section>

      <footer className="border-t border-[#d7ceb2] px-5 py-10 text-center text-sm text-[#607067] sm:px-8">
        广西紫苏油茶｜酒店餐饮特色饮品方案
      </footer>
    </main>
  );
}

function Field({
  label,
  name,
  placeholder,
  className = "",
}: {
  label: string;
  name: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <label className={className}>
      <span className="mb-2 block text-sm font-medium text-[#50665a]">{label}</span>
      <input
        name={name}
        placeholder={placeholder}
        className="h-12 w-full rounded-full border border-[#e2d9bd] bg-[#fffdf7] px-4 outline-none transition placeholder:text-[#9aa79f] focus:border-[#123b2d]"
      />
    </label>
  );
}
