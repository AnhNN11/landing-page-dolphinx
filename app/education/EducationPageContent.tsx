"use client";

import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  Check,
  Code2,
  Gamepad2,
  GraduationCap,
  Layers3,
  Laptop2,
  MessageCircleMore,
  Rocket,
  ShieldCheck,
  Smartphone,
  UsersRound,
} from "lucide-react";
import { ServiceFooter, ServiceNav } from "../components/MarketingChrome";
import { useLocale } from "../components/LocaleProvider";
import { StableLink as Link } from "../components/StableLink";

const courses = [
  {
    id: "coding-starter",
    index: "01",
    icon: Gamepad2,
    name: "Coding Starter",
    audienceVi: "Dành cho trẻ 8–10 tuổi bắt đầu làm quen với tư duy máy tính.",
    audienceEn: "For children aged 8–10 beginning with computational thinking.",
    resultVi: "Tự tạo một câu chuyện tương tác và trò chơi nhỏ bằng các khối lệnh trực quan.",
    resultEn: "Create an interactive story and a small game with visual coding blocks.",
    stack: ["Tư duy logic", "Scratch", "Kể chuyện số", "An toàn số"],
    image: "/images/education/girl-coding-tablet.jpg",
    imagePosition: "center 52%",
    imageAltVi: "Trẻ em thao tác với bài học lập trình trực quan trên máy tính bảng",
    imageAltEn: "A child exploring visual coding on a tablet",
    color: "from-[#fff6dc] via-white to-[#eefbff]",
    accent: "#e07a19",
  },
  {
    id: "web-game-lab",
    index: "02",
    icon: Code2,
    name: "Web & Game Lab",
    audienceVi: "Dành cho trẻ 11–13 tuổi muốn hiểu cách một website và trò chơi hoạt động.",
    audienceEn: "For children aged 11–13 curious about how websites and games work.",
    resultVi: "Hoàn thiện một website cá nhân và trò chơi web có thể chia sẻ cho gia đình.",
    resultEn: "Finish a personal website and a web game ready to share with family.",
    stack: ["HTML · CSS", "JavaScript", "Thiết kế giao diện", "Web game"],
    image: "/images/education/kids-computer-classroom.jpg",
    imagePosition: "center 46%",
    imageAltVi: "Các em nhỏ thực hành lập trình trên máy tính trong lớp học",
    imageAltEn: "Children practising coding on computers in a classroom",
    color: "from-[#e8f4ff] via-white to-[#eefbff]",
    accent: "#075fc2",
  },
  {
    id: "teen-app-builder",
    index: "03",
    icon: Smartphone,
    name: "Teen App Builder",
    audienceVi: "Dành cho thiếu niên 14–16 tuổi sẵn sàng xây sản phẩm bằng code thực tế.",
    audienceEn: "For teens aged 14–16 ready to build a product with real code.",
    resultVi: "Xây một web app nhỏ có giao diện, dữ liệu và bản demo để thuyết trình cuối khóa.",
    resultEn: "Build a small web app with UI, data and a final demo presentation.",
    stack: ["JavaScript", "React", "Python cơ bản", "Demo sản phẩm"],
    image: "/images/education/teen-coding.jpg",
    imagePosition: "center 48%",
    imageAltVi: "Thiếu niên tập trung viết mã trên máy tính trong không gian học tại nhà",
    imageAltEn: "A teenager focused on coding at a computer",
    color: "from-[#eef0ff] via-white to-[#e9fbff]",
    accent: "#6257e8",
  },
];

const technologies = [
  { icon: "/images/tech/html5.svg", name: "HTML", noteVi: "Cấu trúc web", noteEn: "Web structure" },
  { icon: "/images/tech/css3.svg", name: "CSS", noteVi: "Giao diện", noteEn: "Interface" },
  { icon: "/images/tech/javascript.svg", name: "JavaScript", noteVi: "Tương tác", noteEn: "Interaction" },
  { icon: "/images/tech/typescript.svg", name: "TypeScript", noteVi: "Code bền vững", noteEn: "Maintainable code" },
  { icon: "/images/tech/react.svg", name: "React", noteVi: "Ứng dụng web", noteEn: "Web apps" },
  { icon: "/images/tech/nodejs.svg", name: "Node.js", noteVi: "Máy chủ", noteEn: "Server" },
  { icon: "/images/tech/python.svg", name: "Python", noteVi: "Logic & dữ liệu", noteEn: "Logic & data" },
  { icon: "/images/tech/flutter.svg", name: "Flutter", noteVi: "Ứng dụng mobile", noteEn: "Mobile apps" },
];

const learningSteps = [
  ["01", "Hiểu nền tảng", "Understand", "Khái niệm được giải thích bằng ví dụ trực quan, vừa đủ để bắt đầu làm.", "Concepts are explained visually, with just enough theory to start building.", BookOpenCheck],
  ["02", "Làm cùng mentor", "Build with a mentor", "Mỗi phần học đều đi kèm bài thực hành và phản hồi trực tiếp.", "Every topic includes hands-on practice and direct feedback.", UsersRound],
  ["03", "Xây dự án thật", "Create a real project", "Học viên ghép từng kỹ năng thành sản phẩm có thể trình bày và sử dụng.", "Learners combine skills into a presentable, usable product.", Rocket],
  ["04", "Review & cải tiến", "Review and improve", "Code, trải nghiệm và cách trình bày được review trước khi hoàn thiện.", "Code, experience and presentation are reviewed before completion.", BadgeCheck],
] as const;

export function EducationPageContent() {
  const { locale, t } = useLocale();

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#071c4b]">
      <ServiceNav />

      <section className="relative bg-[#f8fbff] px-4 pb-16 pt-14 md:pb-24 md:pt-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(19,199,233,.2),transparent_32%),radial-gradient(circle_at_8%_72%,rgba(7,95,194,.1),transparent_30%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(7,95,194,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(7,95,194,.045)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />
        <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-[.95fr_1.05fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-2 text-[9px] font-black tracking-[.16em] text-[#075fc2] shadow-sm"><GraduationCap size={15} /> DXACADEMY · LEARN BY BUILDING</span>
            <h1 className="dx-vietnamese-title mt-7 max-w-3xl font-[family-name:var(--display)] text-[clamp(46px,6.4vw,82px)] font-semibold leading-[1.08] tracking-[-.055em]">
              <span className="text-[#0b1220]">{t("Trẻ em học công nghệ", "Children learn technology")}</span>{" "}
              <span className="dx-gradient-text">{t("bằng cách tạo sản phẩm.", "by creating products.")}</span>
            </h1>
            <p className="mt-7 max-w-xl text-sm leading-7 text-slate-600 md:text-base">
              {t("Lộ trình công nghệ dành cho trẻ 8–16 tuổi, học theo nhóm nhỏ và đi từ tư duy logic đến website, trò chơi hoặc ứng dụng có thể tự mình trình bày.", "Technology pathways for ages 8–16, taught in small groups—from logical thinking to a website, game or app they can proudly present.")}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href="/#contact" className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#075fc2] px-6 text-xs font-bold !text-white shadow-xl shadow-[#075fc2]/20" style={{ backgroundColor: "#075fc2", color: "#ffffff" }}><span className="!text-white">{t("Nhận tư vấn lộ trình", "Get pathway advice")}</span><ArrowRight size={17} className="text-white" /></Link>
              <Link href="#courses" className="inline-flex items-center gap-2 text-xs font-bold text-[#075fc2]">{t("Xem các khóa học", "Explore courses")}<ArrowRight size={16} /></Link>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 overflow-hidden rounded-2xl border border-blue-100 bg-white/85 shadow-[0_18px_50px_rgba(7,45,102,.07)] backdrop-blur">
              {[["8–16", t("độ tuổi", "age range")], ["1:6", t("nhóm học nhỏ", "small groups")], ["100%", t("học qua dự án", "project based")]].map(([number, label], index) => <div key={number} className={`p-4 md:p-5 ${index ? "border-l border-blue-100" : ""}`}><b className="dx-gradient-text block font-[family-name:var(--display)] text-xl tracking-[-.05em] md:text-2xl">{number}</b><span className="mt-1 block text-[7px] font-black uppercase tracking-[.08em] text-slate-500 md:text-[8px]">{label}</span></div>)}
            </div>
          </div>

          <div className="relative min-h-[560px] md:min-h-[650px]">
            <div className="absolute inset-x-0 top-0 h-[92%] overflow-hidden rounded-[34px] bg-[#071c4b] shadow-[0_42px_100px_rgba(7,45,102,.2)]">
              <Image
                src="/images/education/kids-computer-classroom.jpg"
                alt={t("Các em nhỏ thực hành kỹ năng số trên máy tính trong lớp học", "Children practising digital skills on computers in a classroom")}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061634]/95 via-[#061634]/10 to-transparent" />
              <div className="absolute bottom-8 right-5 max-w-[48%] text-white md:right-8">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#061634]/65 px-3 py-2 text-[8px] font-black tracking-[.14em] backdrop-blur-xl"><i className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_#6ee7b7]" /> {t("LỚP NHỎ · HỌC QUA THỰC HÀNH", "SMALL GROUPS · HANDS-ON LEARNING")}</span>
                <h2 className="mt-4 hidden max-w-md font-[family-name:var(--display)] text-2xl font-semibold leading-[1.18] tracking-[-.025em] text-white md:block">{t("Mỗi buổi học đều có một sản phẩm nhỏ để trẻ nhìn thấy tiến bộ của mình.", "Every class ends with something children can build, show and improve.")}</h2>
              </div>
            </div>

            <div className="absolute -bottom-1 left-4 w-[52%] overflow-hidden rounded-[24px] border-[6px] border-white bg-white shadow-[0_24px_60px_rgba(7,45,102,.24)] md:left-[-24px] md:w-[48%]">
              <div className="relative aspect-[4/3]">
                <Image src="/images/education/girl-coding-tablet.jpg" alt={t("Trẻ em học lập trình trực quan trên máy tính bảng", "A child learning visual coding on a tablet")} fill sizes="(max-width: 1024px) 52vw, 26vw" className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061634]/85 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 text-[8px] font-black tracking-[.12em] text-white"><Gamepad2 size={15} className="text-cyan-200" /> CREATIVE CODING</span>
              </div>
            </div>

            <div className="absolute bottom-6 right-4 max-w-[48%] rounded-2xl border border-white/70 bg-white/90 p-4 shadow-[0_20px_50px_rgba(7,45,102,.18)] backdrop-blur-xl md:right-[-18px] md:p-5">
              <div className="flex items-center gap-3"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cyan-100 text-[#075fc2]"><ShieldCheck size={19} /></span><div><small className="block text-[7px] font-black tracking-[.12em] text-[#0b88b5]">PROJECT-BASED</small><b className="mt-1 block text-[10px] leading-4 text-[#071c4b] md:text-xs">{t("Làm thật · Review thật", "Build for real · Real reviews")}</b></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-blue-100 bg-white px-4 py-12 md:py-16">
        <div className="mx-auto max-w-[1240px]">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div><span className="inline-flex items-center gap-2 text-[9px] font-black tracking-[.16em] text-[#075fc2]"><Layers3 size={15} /> TECHNOLOGY DOCK</span><h2 className="mt-3 font-[family-name:var(--display)] text-3xl font-semibold tracking-[-.045em] text-[#0b1220] md:text-4xl">{t("Công nghệ học viên sẽ trực tiếp sử dụng", "Technologies learners use hands-on")}</h2></div>
            <p className="max-w-lg text-xs leading-6 text-slate-500">{t("Không học tên công cụ để ghi nhớ. Mỗi công nghệ xuất hiện đúng lúc trong một sản phẩm đang được xây dựng.", "Tools are not memorized in isolation. Each technology appears at the right moment in a product being built.")}</p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {technologies.map((technology) => <div key={technology.name} className="group rounded-[20px] border border-slate-200 bg-white p-3 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(7,45,102,.1)]"><span className="grid h-11 w-11 place-items-center rounded-[14px] bg-[#f4f8fd] p-2"><Image src={technology.icon} alt={`${technology.name} logo`} width={30} height={30} className="h-8 w-8 object-contain" /></span><b className="mt-4 block text-[11px] text-[#071c4b]">{technology.name}</b><small className="mt-1 block text-[8px] leading-4 text-slate-500">{locale === "vi" ? technology.noteVi : technology.noteEn}</small></div>)}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:py-28" id="courses">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <div><span className="text-[10px] font-black tracking-[.18em] text-[#075fc2]">DXACADEMY · 8–16 TUỔI</span><h2 className="dx-vietnamese-title mt-5 font-[family-name:var(--display)] text-5xl font-semibold leading-[1.08] tracking-[-.05em] md:text-7xl"><span className="text-[#0b1220]">{t("Đúng độ tuổi.", "Right for their age.")}</span> <span className="dx-gradient-text">{t("Đúng cách học.", "The right way to learn.")}</span></h2></div>
            <p className="max-w-xl justify-self-end text-sm leading-7 text-slate-600">{t("Ba cấp độ được thiết kế theo khả năng tập trung và tư duy của từng độ tuổi. Phụ huynh nhận được mục tiêu rõ ràng, sản phẩm cuối kỳ và phản hồi tiến bộ.", "Three levels match each age group's attention and thinking skills. Parents receive clear goals, a final project and progress feedback.")}</p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {courses.map((course) => {
              const Icon = course.icon;
              return <article key={course.id} id={course.id} className={`group relative flex min-h-[710px] scroll-mt-28 flex-col overflow-hidden rounded-[30px] border border-slate-200 bg-gradient-to-br ${course.color} shadow-[0_24px_70px_rgba(7,45,102,.08)]`}>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image src={course.image} alt={locale === "vi" ? course.imageAltVi : course.imageAltEn} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-[1.035]" style={{ objectPosition: course.imagePosition }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061634]/70 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-white shadow-lg" style={{ color: course.accent }}><Icon size={23} /></span><span className="rounded-full border border-white/30 bg-[#061634]/55 px-3 py-2 text-[8px] font-black tracking-[.12em] text-white backdrop-blur-md">PATH {course.index}</span></div>
                </div>
                <div className="relative flex flex-1 flex-col p-7 md:p-8">
                  <span className="absolute right-5 top-1 font-[family-name:var(--display)] text-[96px] font-black leading-none tracking-[-.08em] text-[#075fc2]/[.045]">{course.index}</span>
                  <h3 className="relative font-[family-name:var(--display)] text-4xl font-semibold tracking-[-.055em] text-[#071c4b]">{course.name}</h3>
                  <p className="relative mt-4 text-xs font-semibold leading-6 text-slate-600">{locale === "vi" ? course.audienceVi : course.audienceEn}</p>
                  <div className="relative mt-6 rounded-2xl border border-white bg-white/80 p-5"><span className="text-[8px] font-black tracking-[.14em]" style={{ color: course.accent }}>{t("SẢN PHẨM CUỐI LỘ TRÌNH", "FINAL PATHWAY PROJECT")}</span><p className="mt-3 text-xs leading-6 text-slate-600">{locale === "vi" ? course.resultVi : course.resultEn}</p></div>
                  <div className="relative mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">{course.stack.map(item => <span key={item} className="flex items-center gap-2 text-[10px] font-bold text-slate-600"><i className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white" style={{ color: course.accent }}><Check size={12} strokeWidth={3} /></i>{item}</span>)}</div>
                  <Link href="/#contact" className="relative mt-auto inline-flex items-center gap-2 pt-8 text-[10px] font-black uppercase tracking-[.1em]" style={{ color: course.accent }}>{t("Tư vấn lộ trình này", "Ask about this pathway")}<ArrowRight size={15} /></Link>
                </div>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#061634] px-4 py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div><span className="text-[10px] font-black tracking-[.18em] text-cyan-300">LEARNING EXPERIENCE</span><h2 className="dx-gradient-text-light mt-5 font-[family-name:var(--display)] text-5xl font-semibold leading-[1.02] tracking-[-.06em] md:text-7xl">{t("Không học để nhớ. Học để làm được.", "Do not learn to memorize. Learn to build.")}</h2><p className="mt-7 max-w-lg text-sm leading-7 text-slate-300">{t("Nội dung được chia thành các vòng ngắn: hiểu, thực hành, nhận phản hồi và cải tiến. Mentor nhìn vào cách học viên giải quyết vấn đề, không chỉ kết quả cuối.", "Learning happens in short loops: understand, practice, receive feedback and improve. Mentors look at the problem-solving process, not only the final result.")}</p></div>
            <div className="grid gap-3 sm:grid-cols-2">
              {learningSteps.map(([index, vi, en, detailVi, detailEn, StepIcon]) => <article key={index} className="rounded-[24px] border border-white/10 bg-white/[.055] p-7 backdrop-blur-sm"><div className="flex items-center justify-between"><StepIcon size={22} className="text-cyan-300" /><span className="text-[9px] font-black tracking-[.13em] text-slate-500">{index} / 04</span></div><h3 className="mt-8 font-[family-name:var(--display)] text-2xl font-semibold tracking-[-.04em]">{locale === "vi" ? vi : en}</h3><p className="mt-4 text-xs leading-6 text-slate-400">{locale === "vi" ? detailVi : detailEn}</p></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:py-28">
        <div className="mx-auto grid max-w-[1200px] overflow-hidden rounded-[34px] border border-blue-100 bg-gradient-to-br from-[#edf7ff] via-white to-[#ebfbf7] lg:grid-cols-[1.1fr_.9fr]">
          <div className="p-8 md:p-14"><span className="inline-flex items-center gap-2 text-[10px] font-black tracking-[.16em] text-[#075fc2]"><Laptop2 size={16} /> {t("HỌC TẠI QUẢNG NGÃI & TRỰC TUYẾN", "LEARN IN QUANG NGAI & ONLINE")}</span><h2 className="mt-6 font-[family-name:var(--display)] text-4xl font-semibold leading-tight tracking-[-.055em] md:text-6xl"><span className="text-[#0b1220]">{t("Chưa biết bắt đầu từ đâu?", "Not sure where to begin?")}</span> <span className="dx-gradient-text">{t("Hãy bắt đầu bằng một cuộc trao đổi.", "Start with a conversation.")}</span></h2><p className="mt-6 max-w-xl text-sm leading-7 text-slate-600">{t("DolphinX sẽ tìm hiểu mục tiêu, nền tảng hiện tại và thời gian học phù hợp trước khi đề xuất lộ trình. Với học viên nhỏ tuổi, phụ huynh được trao đổi rõ về nội dung và cách đồng hành.", "DolphinX first learns about your goal, current foundation and available time before suggesting a pathway. For younger learners, parents receive clear guidance on content and support.")}</p><Link href="/#contact" className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#075fc2] px-6 text-xs font-bold !text-white shadow-xl shadow-[#075fc2]/20" style={{ backgroundColor: "#075fc2", color: "#ffffff" }}><MessageCircleMore size={17} className="text-white" /><span className="!text-white">{t("Đăng ký nhận tư vấn", "Request a consultation")}</span><ArrowRight size={17} className="text-white" /></Link></div>
          <div className="dx-code-stage relative min-h-[480px] overflow-hidden bg-[#071c4b] p-4 sm:p-7 md:p-9">
            <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:44px_44px]" />
            <div className="dx-code-glow absolute -left-20 top-10 h-56 w-56 rounded-full bg-cyan-400/20 blur-[80px]" />
            <div className="dx-terminal-window relative flex min-h-[410px] flex-col overflow-hidden rounded-[22px] border border-white/15 bg-[#06162b]/95 shadow-[0_30px_80px_rgba(0,0,0,.35)]">
              <div className="flex min-h-12 items-center justify-between border-b border-white/10 bg-white/[.045] px-4">
                <div className="flex items-center gap-2" aria-hidden="true"><i className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" /><i className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" /><i className="h-2.5 w-2.5 rounded-full bg-[#28c840]" /></div>
                <span className="font-mono text-[9px] font-bold tracking-[.12em] text-slate-400">DOLPHINX · LEARN TERMINAL</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-2 py-1 font-mono text-[7px] font-bold text-emerald-300"><i className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_#6ee7b7]" /> LIVE</span>
              </div>

              <div className="flex-1 p-4 font-mono text-[10px] leading-5 sm:p-5 sm:text-[11px]">
                <p className="text-slate-500">{"// "}{t("Mỗi dòng code là một bước nhỏ để tạo sản phẩm", "Every line of code is a small step toward a real product")}</p>
                <p className="mt-3 flex min-w-0 items-center gap-2 text-cyan-300"><span className="shrink-0 text-emerald-300">➜</span><span className="shrink-0 text-blue-300">~/my-first-app</span><span className="dx-terminal-command min-w-0 overflow-hidden whitespace-nowrap">npm run learn</span><i className="dx-terminal-cursor h-4 w-1.5 shrink-0 bg-cyan-300" /></p>
                <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-3 text-slate-300 sm:p-4">
                  <div className="grid grid-cols-[22px_1fr] gap-x-2"><span className="select-none text-right text-slate-600">1</span><code><span className="text-fuchsia-300">const</span> <span className="text-blue-200">idea</span> <span className="text-slate-500">=</span> <span className="text-amber-200">{t("\"Ứng dụng từ vựng\"", "\"Vocabulary app\"")}</span>;</code></div>
                  <div className="grid grid-cols-[22px_1fr] gap-x-2"><span className="select-none text-right text-slate-600">2</span><code><span className="text-fuchsia-300">const</span> <span className="text-blue-200">learner</span> <span className="text-slate-500">=</span> <span className="text-slate-200">&#123;</span> <span className="text-cyan-200">age</span>: <span className="text-orange-200">12</span>, <span className="text-cyan-200">mode</span>: <span className="text-amber-200">&quot;build&quot;</span> <span className="text-slate-200">&#125;</span>;</code></div>
                  <div className="grid grid-cols-[22px_1fr] gap-x-2"><span className="select-none text-right text-slate-600">3</span><code>&nbsp;</code></div>
                  <div className="grid grid-cols-[22px_1fr] gap-x-2"><span className="select-none text-right text-slate-600">4</span><code><span className="text-fuchsia-300">function</span> <span className="text-cyan-200">BuildProject</span>() <span className="text-slate-200">&#123;</span></code></div>
                  <div className="grid grid-cols-[22px_1fr] gap-x-2"><span className="select-none text-right text-slate-600">5</span><code className="pl-3"><span className="text-fuchsia-300">return</span> <span className="text-slate-200">&lt;</span><span className="text-blue-200">App</span> <span className="text-cyan-200">idea</span>=&#123;idea&#125; <span className="text-slate-200">/&gt;</span>;</code></div>
                  <div className="grid grid-cols-[22px_1fr] gap-x-2"><span className="select-none text-right text-slate-600">6</span><code><span className="text-slate-200">&#125;</span></code></div>
                </div>

                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  <div className="rounded-xl border border-cyan-300/15 bg-cyan-300/[.065] p-3"><span className="block text-[7px] font-black tracking-[.14em] text-cyan-300">MENTOR REVIEW</span><p className="mt-1 font-sans text-[10px] font-semibold leading-4 text-white">{t("Logic tốt — thử đặt tên biến rõ hơn nhé!", "Great logic — now make the variable names clearer!")}</p></div>
                  <div className="rounded-xl border border-emerald-300/15 bg-emerald-300/[.065] p-3"><span className="block text-[7px] font-black tracking-[.14em] text-emerald-300">BUILD STATUS</span><p className="mt-1 flex items-center gap-2 font-sans text-[10px] font-semibold leading-4 text-white"><i className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_10px_#6ee7b7]" /> {t("Sản phẩm đã sẵn sàng để demo", "Project is ready to demo")}</p></div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 bg-white/[.035] px-4 py-3 font-mono text-[8px] text-slate-500"><span>main*</span><span className="text-emerald-300">✓ 0 errors · 1 project shipped</span></div>
            </div>
          </div>
        </div>
      </section>

      <ServiceFooter />
    </main>
  );
}
