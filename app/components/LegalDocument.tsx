"use client";

import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  FileText,
  MapPin,
  MessageCircleMore,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { useLocale } from "./LocaleProvider";
import { ServiceFooter, ServiceNav } from "./MarketingChrome";
import { StableLink as Link } from "./StableLink";

export type LocalizedLegalText = {
  vi: string;
  en: string;
};

export type LegalSection = {
  id: string;
  title: LocalizedLegalText;
  paragraphs: LocalizedLegalText[];
  items?: LocalizedLegalText[];
  note?: LocalizedLegalText;
};

export type LegalDocumentData = {
  kind: "privacy" | "terms";
  eyebrow: LocalizedLegalText;
  title: LocalizedLegalText;
  summary: LocalizedLegalText;
  effectiveDate: LocalizedLegalText;
  sibling: {
    href: string;
    label: LocalizedLegalText;
  };
  sections: LegalSection[];
};

const companyName = "CÔNG TY TNHH MTV DOLPHINX STUDIO";
const companyAddress = "60 Nguyễn Trường Tộ, Phường Đăk Cấm, Tỉnh Quảng Ngãi, Việt Nam";

export function LegalDocument({ data }: { data: LegalDocumentData }) {
  const { t } = useLocale();
  const DocumentIcon = data.kind === "privacy" ? ShieldCheck : Scale;

  return (
    <main className="min-h-screen bg-white text-[#071c4b]">
      <ServiceNav />

      <section className="relative overflow-hidden border-b border-blue-100 bg-[#f7fbff] px-4 pb-16 pt-16 md:pb-24 md:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(19,199,233,.2),transparent_30%),radial-gradient(circle_at_12%_72%,rgba(7,95,194,.1),transparent_34%)]" />
        <div className="pointer-events-none absolute -right-24 top-8 h-72 w-72 rounded-full border border-cyan-200/60" />
        <div className="pointer-events-none absolute -right-10 top-24 h-44 w-44 rounded-full border border-dashed border-blue-300/50" />

        <div className="relative mx-auto grid max-w-[1200px] items-end gap-10 lg:grid-cols-[1fr_300px]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-[9px] font-black tracking-[.14em] text-[#075fc2] shadow-sm">
              <DocumentIcon size={14} /> {t(data.eyebrow.vi, data.eyebrow.en)}
            </span>
            <h1 className="mt-7 max-w-4xl font-[family-name:var(--display)] text-[clamp(44px,7vw,84px)] font-semibold leading-[.98] tracking-[-.065em]">
              {t(data.title.vi, data.title.en)}
            </h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              {t(data.summary.vi, data.summary.en)}
            </p>
          </div>

          <div className="rounded-[24px] border border-blue-100 bg-white/90 p-6 shadow-[0_24px_60px_rgba(7,45,102,.08)] backdrop-blur">
            <span className="text-[9px] font-black tracking-[.13em] text-slate-400">
              {t("CẬP NHẬT LẦN CUỐI", "LAST UPDATED")}
            </span>
            <b className="mt-2 block font-[family-name:var(--display)] text-lg">
              {t(data.effectiveDate.vi, data.effectiveDate.en)}
            </b>
            <Link href={data.sibling.href} className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#075fc2]">
              {t(data.sibling.label.vi, data.sibling.label.en)} <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16">
          <aside className="self-start lg:sticky lg:top-28">
            <div className="rounded-[22px] border border-slate-200 bg-[#f8fafc] p-5">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-[#075fc2]"><FileText size={18} /></span>
                <div>
                  <b className="block text-sm">{t("Mục lục", "Contents")}</b>
                  <small className="mt-1 block text-[10px] text-slate-500">{data.sections.length} {t("nội dung chính", "main sections")}</small>
                </div>
              </div>
              <nav className="mt-4 grid gap-1" aria-label={t("Mục lục tài liệu", "Document contents")}>
                {data.sections.map((section, index) => (
                  <a key={section.id} href={`#${section.id}`} className="group flex items-start gap-3 rounded-xl px-3 py-2.5 text-xs leading-5 text-slate-600 transition hover:bg-white hover:text-[#075fc2] hover:shadow-sm">
                    <span className="mt-0.5 text-[9px] font-black text-slate-400 group-hover:text-[#13a6c8]">{String(index + 1).padStart(2, "0")}</span>
                    <span>{t(section.title.vi, section.title.en)}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <article className="min-w-0">
            <div className="rounded-[28px] border border-slate-200 bg-white px-6 py-2 shadow-[0_24px_70px_rgba(7,45,102,.055)] md:px-10">
              {data.sections.map((section, index) => (
                <section key={section.id} id={section.id} className="scroll-mt-28 border-b border-slate-100 py-9 last:border-0 md:py-11">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#075fc2] to-[#13a6c8] text-[10px] font-black text-white shadow-md shadow-blue-500/15">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h2 className="font-[family-name:var(--display)] text-2xl font-semibold leading-tight tracking-[-.035em] md:text-3xl">
                        {t(section.title.vi, section.title.en)}
                      </h2>
                      <div className="mt-5 grid gap-4 text-[15px] leading-8 text-slate-600">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph.vi}>{t(paragraph.vi, paragraph.en)}</p>
                        ))}
                      </div>

                      {section.items && (
                        <ul className="mt-5 grid gap-3">
                          {section.items.map((item) => (
                            <li key={item.vi} className="flex items-start gap-3 rounded-xl bg-[#f7fbff] px-4 py-3 text-sm leading-7 text-slate-600">
                              <CheckCircle2 className="mt-1 shrink-0 text-[#0aa9d2]" size={17} />
                              <span>{t(item.vi, item.en)}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.note && (
                        <div className="mt-6 rounded-2xl border border-cyan-200 bg-cyan-50/70 p-5 text-sm leading-7 text-slate-700">
                          {t(section.note.vi, section.note.en)}
                          {data.kind === "privacy" && section.id === "google-data" && (
                            <a className="ml-1 inline-flex items-center gap-1 font-bold text-[#075fc2] underline decoration-blue-200 underline-offset-4" href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noreferrer">
                              Google API Services User Data Policy <ExternalLink size={13} />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              ))}
            </div>

            <section id="contact" className="mt-8 overflow-hidden rounded-[28px] bg-gradient-to-br from-[#071c4b] via-[#075fc2] to-[#13a6c8] p-7 text-white shadow-[0_28px_70px_rgba(7,45,102,.2)] md:p-10">
              <span className="text-[9px] font-black tracking-[.14em] text-cyan-200">DOLPHINX LEGAL CONTACT</span>
              <h2 className="mt-4 font-[family-name:var(--display)] text-3xl font-semibold tracking-[-.04em]">
                {t("Bạn có câu hỏi hoặc yêu cầu về dữ liệu?", "Questions or data requests?")}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100">
                {t(
                  "Gửi yêu cầu qua biểu mẫu liên hệ và ghi rõ “Yêu cầu quyền riêng tư” hoặc “Yêu cầu xóa dữ liệu”. Chúng tôi sẽ xác minh danh tính và phản hồi trong phạm vi pháp luật áp dụng.",
                  "Use our contact form and include “Privacy request” or “Data deletion request”. We will verify your identity and respond within the timeframe required by applicable law.",
                )}
              </p>
              <div className="mt-7 grid gap-3 md:grid-cols-2">
                <Link href="/#contact" className="flex min-h-14 items-center gap-3 rounded-2xl bg-white px-5 text-sm font-bold text-[#071c4b] shadow-lg">
                  <MessageCircleMore size={19} className="text-[#075fc2]" /> {t("Mở biểu mẫu liên hệ", "Open contact form")} <ArrowRight className="ml-auto" size={17} />
                </Link>
                <div className="flex min-h-14 items-start gap-3 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-xs leading-6 text-blue-50 backdrop-blur">
                  <MapPin className="mt-0.5 shrink-0 text-cyan-200" size={18} />
                  <span><b className="block text-white">{companyName} · MST 6101312616</b>{t(companyAddress, "60 Nguyen Truong To, Dak Cam Ward, Quang Ngai Province, Vietnam")}</span>
                </div>
              </div>
            </section>
          </article>
        </div>
      </section>

      <ServiceFooter />
    </main>
  );
}
