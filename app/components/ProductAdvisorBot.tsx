"use client";

import Image from "next/image";
import { ArrowRight, Bot, ExternalLink, MessageCircleMore, Send, Sparkles, X } from "lucide-react";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { useLocale } from "./LocaleProvider";
import { StableLink as Link } from "./StableLink";

type Topic = "website" | "zalo" | "mobile" | "software" | "contact" | "timeline" | "general";

type Message = {
  id: number;
  role: "bot" | "user";
  text: string;
  topic?: Topic;
};

const prompts = [
  { label: "Chi phí Website", labelEn: "Website cost", query: "Cách tính chi phí Website" },
  { label: "Chi phí Zalo Mini App", labelEn: "Zalo Mini App cost", query: "Cách tính chi phí Zalo Mini App" },
  { label: "Chi phí Mobile App", labelEn: "Mobile App cost", query: "Cách tính chi phí Mobile App" },
  { label: "Chi phí Web App", labelEn: "Web App cost", query: "Cách tính chi phí Web App và phần mềm" },
  { label: "Cách liên hệ", labelEn: "Contact options", query: "Liên hệ DolphinX bằng cách nào?" },
];

function normalize(value: string) {
  return value.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
}

function getTopic(value: string): Topic {
  const text = normalize(value);
  if (/lien he|contact|facebook|dia chi|address|gap|tu van/.test(text)) return "contact";
  if (/bao lau|thoi gian|tien do/.test(text)) return "timeline";
  if (/zalo|mini app/.test(text)) return "zalo";
  if (/mobile|ios|android|ung dung/.test(text)) return "mobile";
  if (/web app|crm|phan mem|software|dashboard/.test(text)) return "software";
  if (/website|landing|seo|trang web/.test(text)) return "website";
  return "general";
}

const answersVi: Record<Topic, string> = {
  website: "Chi phí Website được tính theo số trang và section, nội dung, mức độ thiết kế riêng, bán hàng và các tích hợp cần thiết. DolphinX sẽ cùng bạn chọn phạm vi rồi gửi bảng chi phí từng hạng mục.",
  zalo: "Chi phí Zalo Mini App phụ thuộc số module, hành trình thành viên, loyalty, đặt hàng hoặc đặt lịch, API và hạ tầng. Phí dịch vụ Zalo hoặc bên thứ ba luôn được tách riêng để dễ kiểm soát.",
  mobile: "Chi phí Mobile App được tính theo số màn hình, iOS hoặc Android, backend, API, kiểm thử và yêu cầu đưa ứng dụng lên store. DolphinX sẽ thảo luận phạm vi trước khi chốt ngân sách.",
  software: "Chi phí Web App, CRM và phần mềm quản lý phụ thuộc số vai trò người dùng, độ sâu quy trình, báo cáo, tự động hoá, tích hợp và hạ tầng. Mọi hạng mục được liệt kê sau buổi khảo sát nghiệp vụ.",
  contact: "Bạn có thể mở biểu mẫu Liên hệ ngay trên website hoặc nhắn Facebook DolphinX Studio. Văn phòng tại 60 Nguyễn Trường Tộ, Phường Đăk Cấm, Tỉnh Quảng Ngãi, Việt Nam.",
  timeline: "Website cơ bản thường khoảng 5–7 ngày, gói tăng trưởng khoảng 7–12 ngày. Mini App và phần mềm sẽ có tiến độ riêng sau khi làm rõ nghiệp vụ, dữ liệu và tích hợp.",
  general: "Mình có thể tư vấn nhanh về Website, Zalo Mini App, Mobile App, Web App, phần mềm theo yêu cầu, cách tính chi phí và cách liên hệ. Hãy chọn một câu hỏi bên dưới hoặc nhập nhu cầu của bạn.",
};

const answersEn: Record<Topic, string> = {
  website: "Website cost is based on pages and sections, content, custom art direction, commerce and required integrations. DolphinX defines the scope with you and provides an itemized cost breakdown.",
  zalo: "Zalo Mini App cost depends on modules, membership journeys, loyalty, ordering or booking, APIs and infrastructure. Zalo and third-party fees are always separated.",
  mobile: "Mobile App cost depends on screen count, iOS or Android platforms, backend, APIs, testing and store submission. DolphinX discusses scope before confirming the budget.",
  software: "Web App, CRM and management software cost depends on user roles, workflow depth, reports, automation, integrations and infrastructure. Every item is listed after business discovery.",
  contact: "Use the contact section on this website or message DolphinX Studio on Facebook. Our office is at 60 Nguyen Truong To, Dak Cam Ward, Quang Ngai Province, Vietnam.",
  timeline: "A basic website typically takes 5–7 days and a growth website around 7–12 days. Mini Apps and software receive a tailored timeline after workflow and integration discovery.",
  general: "I can help with Websites, Zalo Mini Apps, Mobile Apps, Web Apps, custom software, reference pricing and contact options. Choose a question below or describe what you need.",
};

export function ProductAdvisorBot() {
  const { locale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const nextId = useRef(2);
  const replyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const messagesRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, role: "bot", text: "Xin chào! Mình là Cá Xanh, trợ lý sản phẩm của DolphinX. Bạn muốn hỏi về dịch vụ hay cách tính chi phí?", topic: "general" },
  ]);
  const answers = locale === "vi" ? answersVi : answersEn;

  useEffect(() => () => {
    if (replyTimer.current) clearTimeout(replyTimer.current);
  }, []);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      messagesRef.current?.scrollTo({ top: messagesRef.current.scrollHeight, behavior: "smooth" });
    });
    return () => cancelAnimationFrame(frame);
  }, [messages, thinking]);

  const visibleMessages = useMemo(() => messages.map((message) => {
    if (message.role !== "bot") return message;
    if (message.id === 1) return locale === "en" ? { ...message, text: "Hi! I’m Blue Whale, DolphinX’s product guide. What would you like to know about our services or pricing?" } : message;
    return message.topic ? { ...message, text: answers[message.topic] } : message;
  }), [answers, locale, messages]);

  const ask = (question: string) => {
    const clean = question.trim();
    if (!clean || thinking) return;
    const topic = getTopic(clean);
    const userId = nextId.current++;
    setMessages((current) => [...current, { id: userId, role: "user", text: clean }]);
    setInput("");
    setThinking(true);
    replyTimer.current = setTimeout(() => {
      const botId = nextId.current++;
      setMessages((current) => [...current, { id: botId, role: "bot", text: answers[topic], topic }]);
      setThinking(false);
      replyTimer.current = null;
    }, 850);
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    ask(input);
  };

  const lastTopic = [...visibleMessages].reverse().find((message) => message.role === "bot")?.topic;

  return (
    <div className={`advisor-shell ${open ? "is-open" : ""}`}>
      {open && <section className="advisor-panel" role="dialog" aria-modal="false" aria-label={t("Trợ lý sản phẩm DolphinX", "DolphinX product guide")}>
        <header className="advisor-header">
          <div className="advisor-avatar"><Image src="/images/dolphinx-ai-advisor-circle-256.webp" alt="" fill sizes="52px"/></div>
          <div><small>DX PRODUCT GUIDE</small><b>{t("Cá Heo Xanh · Trợ lý sản phẩm", "Blue Dolphin · Product guide")}</b><span><i/>{t("Dữ liệu đã được kiểm duyệt", "Curated answers")}</span></div>
          <button type="button" onClick={() => setOpen(false)} aria-label={t("Đóng trợ lý", "Close guide")}><X size={18}/></button>
        </header>
        <div ref={messagesRef} className="advisor-messages" aria-live="polite">
          {visibleMessages.map((message) => <div key={message.id} className={`advisor-message ${message.role}`}>
            {message.role === "bot" && <Bot size={14}/>}<p>{message.text}</p>
          </div>)}
          {thinking && <div className="advisor-message bot advisor-thinking" role="status" aria-label={t("Cá Heo Xanh đang suy nghĩ", "Blue Dolphin is thinking")}>
            <Bot size={14}/><span>{t("Đang suy nghĩ", "Thinking")}</span><i/><i/><i/>
          </div>}
          {lastTopic === "contact" && <div className="advisor-actions"><Link href="/#contact" onClick={() => setOpen(false)}>{t("Mở phần liên hệ", "Open contact section")} <ArrowRight size={13}/></Link><a href="https://www.facebook.com/profile.php?id=61565408955535&locale=vi_VN" target="_blank" rel="noreferrer">Facebook <ExternalLink size={13}/></a></div>}
          {["website","zalo","mobile","software"].includes(lastTopic ?? "") && <div className="advisor-actions"><Link href={lastTopic === "website" ? "/website#pricing" : lastTopic === "zalo" ? "/zalo-mini-app#pricing" : lastTopic === "mobile" ? "/mobile-app#pricing" : "/web-app#pricing"} onClick={() => setOpen(false)}>{t("Xem cách tính chi phí", "View cost drivers")} <ArrowRight size={13}/></Link></div>}
        </div>
        <div className="advisor-prompts">{prompts.map((prompt) => <button key={prompt.query} type="button" disabled={thinking} onClick={() => ask(locale === "vi" ? prompt.query : prompt.labelEn)}>{locale === "vi" ? prompt.label : prompt.labelEn}</button>)}</div>
        <form className="advisor-form" onSubmit={submit}><input value={input} disabled={thinking} onChange={(event) => setInput(event.target.value)} placeholder={thinking ? t("Cá Heo Xanh đang suy nghĩ...", "Blue Dolphin is thinking...") : t("Nhập câu hỏi về dịch vụ, giá...", "Ask about services or pricing...")} aria-label={t("Câu hỏi cho trợ lý", "Question for product guide")}/><button type="submit" disabled={thinking || !input.trim()} aria-label={t("Gửi câu hỏi", "Send question")}><Send size={16}/></button></form>
        <footer><Sparkles size={12}/>{t("Trả lời từ dữ liệu dịch vụ công khai của DolphinX", "Answers use DolphinX’s published service data")}</footer>
      </section>}
      <button type="button" className="advisor-trigger" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={t("Hỏi Cá Heo Xanh về sản phẩm và giá", "Ask Blue Dolphin about products and pricing")}>
        <Image src="/images/dolphinx-ai-advisor-circle-256.webp" alt="" fill sizes="78px"/>
        {!open && <><i className="advisor-trigger-status" aria-hidden="true"/><span className="advisor-trigger-tooltip"><MessageCircleMore size={14}/>{t("Hỏi Cá Heo Xanh", "Ask Blue Dolphin")}</span></>}
      </button>
    </div>
  );
}
