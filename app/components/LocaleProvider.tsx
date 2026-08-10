"use client";

import { Check, ChevronDown, Languages } from "lucide-react";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, useSyncExternalStore, type ReactNode } from "react";

export type Locale = "vi" | "en";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (vi: string, en: string) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);
const STORAGE_KEY = "dolphinx-locale";
const LOCALE_EVENT = "dolphinx-locale-change";

function readLocale(): Locale {
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === "en" ? "en" : "vi";
}

function subscribeLocale(listener: () => void) {
  window.addEventListener("storage", listener);
  window.addEventListener(LOCALE_EVENT, listener);
  return () => {
    window.removeEventListener("storage", listener);
    window.removeEventListener(LOCALE_EVENT, listener);
  };
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribeLocale, readLocale, () => "vi");
  const setLocale = useCallback((nextLocale: Locale) => {
    window.localStorage.setItem(STORAGE_KEY, nextLocale);
    window.dispatchEvent(new Event(LOCALE_EVENT));
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo<LocaleContextValue>(() => ({
    locale,
    setLocale,
    t: (vi, en) => locale === "vi" ? vi : en,
  }), [locale, setLocale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const value = useContext(LocaleContext);
  if (!value) throw new Error("useLocale must be used inside LocaleProvider");
  return value;
}

export function LanguageSwitch({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);
  const options: Array<{ id: Locale; code: string; label: string; helper: string }> = [
    { id: "vi", code: "VI", label: "Tiếng Việt", helper: "Ngôn ngữ mặc định" },
    { id: "en", code: "EN", label: "English", helper: "International" },
  ];
  const activeOption = options.find((option) => option.id === locale) ?? options[0];

  useEffect(() => {
    const closeOnOutside = (event: PointerEvent) => {
      if (!pickerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", closeOnOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <div ref={pickerRef} className={`language-picker ${open ? "is-open" : ""}`}>
      <button
        type="button"
        className="language-picker-trigger"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t(`Ngôn ngữ hiện tại: ${activeOption.label}`, `Current language: ${activeOption.label}`)}
      >
        <span className="language-picker-globe" aria-hidden="true"><Languages size={16} /></span>
        <span className={`language-picker-flag language-country-flag flag-${activeOption.id}`} aria-hidden="true" />
        <span className="language-picker-code">{activeOption.code}</span>
        {!compact && <span className="language-picker-name">{activeOption.label}</span>}
        <ChevronDown className="language-picker-chevron" size={14} aria-hidden="true" />
      </button>

      {open && (
        <div className="language-picker-menu" role="listbox" aria-label={t("Chọn ngôn ngữ", "Choose language")}>
          <div className="language-picker-heading">
            <span>{t("NGÔN NGỮ", "LANGUAGE")}</span>
            <small>{t("Chọn ngôn ngữ hiển thị", "Choose display language")}</small>
          </div>
          <div className="language-picker-options">
            {options.map((option) => (
              <button
                key={option.id}
                type="button"
                role="option"
                className={locale === option.id ? "is-active" : ""}
                onClick={() => {
                  setLocale(option.id);
                  setOpen(false);
                }}
                aria-selected={locale === option.id}
              >
                <span className={`language-option-flag language-country-flag flag-${option.id}`} aria-hidden="true" />
                <span className="language-option-copy"><b>{option.label}</b><small>{option.helper}</small></span>
                <span className="language-option-code">{option.code}</span>
                {locale === option.id && <Check className="language-option-check" size={15} strokeWidth={3} aria-hidden="true" />}
              </button>
            ))}
          </div>
          <p className="language-picker-note"><i /> {t("Lựa chọn được ghi nhớ trên thiết bị này", "Your choice is saved on this device")}</p>
        </div>
      )}
    </div>
  );
}
