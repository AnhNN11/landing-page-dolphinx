"use client";

import Image from "next/image";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  ArrowLeft,
  BarChart3,
  Check,
  ChevronDown,
  ChevronUp,
  Columns3,
  Copy,
  Download,
  Eye,
  GripVertical,
  Heading1,
  ImageIcon,
  LayoutTemplate,
  Link2,
  Monitor,
  MousePointer2,
  Palette,
  Plus,
  Quote,
  Redo2,
  Save,
  Search,
  Shapes,
  Smartphone,
  Sparkles,
  Tablet,
  Trash2,
  Type,
  Undo2,
  Upload,
  X,
} from "lucide-react";
import type { ChangeEvent, CSSProperties, DragEvent } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { StableLink } from "../components/StableLink";
import styles from "./studio.module.css";
import { BrandLogo } from "../components/BrandLogo";

type BlockKind = "hero" | "heading" | "text" | "button" | "image" | "features" | "stats" | "testimonial" | "spacer";
type Alignment = "left" | "center" | "right";
type Viewport = "desktop" | "tablet" | "mobile";
type ToolTab = "templates" | "elements" | "text" | "brand" | "uploads";

type SiteBlock = {
  id: string;
  kind: BlockKind;
  title: string;
  text: string;
  label?: string;
  image?: string;
  background: string;
  color: string;
  accent: string;
  align: Alignment;
  padding: number;
  radius: number;
  fontSize: number;
};

type SiteDocument = {
  name: string;
  pageBackground: string;
  fontFamily: string;
  blocks: SiteBlock[];
};

type Template = {
  id: string;
  name: string;
  category: string;
  colors: [string, string, string];
  document: SiteDocument;
};

const STORAGE_KEY = "dolphinx-web-studio-v1";
const newId = () => `block-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;

function block(kind: BlockKind, patch: Partial<SiteBlock> = {}): SiteBlock {
  const defaults: Record<BlockKind, Partial<SiteBlock>> = {
    hero: { title: "Sản phẩm tốt xứng đáng có một website thật khác biệt.", text: "Thiết kế trải nghiệm rõ ràng, thuyết phục và sẵn sàng tăng trưởng cùng doanh nghiệp của bạn.", label: "BẮT ĐẦU TỪ MỘT Ý TƯỞNG", image: "/images/startup-meeting-pexels.jpg", background: "#071c4b", color: "#ffffff", accent: "#13c7e9", padding: 76, radius: 0, fontSize: 58 },
    heading: { title: "Một tiêu đề tạo ấn tượng", text: "", background: "#ffffff", color: "#071c4b", accent: "#075fc2", padding: 42, radius: 0, fontSize: 42 },
    text: { title: "", text: "Viết câu chuyện thương hiệu của bạn tại đây. Nội dung ngắn gọn, chân thật và tập trung vào điều khách hàng nhận được.", background: "#ffffff", color: "#475569", accent: "#075fc2", padding: 34, radius: 0, fontSize: 17 },
    button: { title: "Khám phá ngay", text: "#", background: "#ffffff", color: "#ffffff", accent: "#075fc2", padding: 30, radius: 12, fontSize: 14 },
    image: { title: "Không gian làm việc của đội ngũ", text: "Hình ảnh thương hiệu", image: "/images/software-team-pexels.jpg", background: "#f1f5f9", color: "#071c4b", accent: "#075fc2", padding: 20, radius: 22, fontSize: 16 },
    features: { title: "Mọi thứ bạn cần để bắt đầu", text: "Chiến lược rõ ràng|Thiết kế theo thương hiệu|Tối ưu trên mọi thiết bị", background: "#f3f8ff", color: "#071c4b", accent: "#075fc2", padding: 62, radius: 0, fontSize: 38 },
    stats: { title: "Những con số biết nói", text: "98%|Khách hàng hài lòng|3x|Tăng tốc triển khai|24/7|Sẵn sàng hỗ trợ", background: "#ffffff", color: "#071c4b", accent: "#13a9d2", padding: 54, radius: 0, fontSize: 36 },
    testimonial: { title: "“DolphinX giúp chúng tôi biến một ý tưởng rời rạc thành trải nghiệm số rõ ràng và đáng tin cậy.”", text: "Nguyễn Minh · Founder, Local Brand", background: "#eaf6ff", color: "#071c4b", accent: "#075fc2", padding: 64, radius: 24, fontSize: 30 },
    spacer: { title: "", text: "", background: "#ffffff", color: "#071c4b", accent: "#075fc2", padding: 34, radius: 0, fontSize: 16 },
  };
  return { id: newId(), kind, align: "left", ...(defaults[kind] as Omit<SiteBlock, "id" | "kind" | "align">), ...patch } as SiteBlock;
}

const templates: Template[] = [
  {
    id: "saas",
    name: "Nova SaaS",
    category: "Startup",
    colors: ["#071c4b", "#075fc2", "#13c7e9"],
    document: {
      name: "Nova SaaS Landing Page",
      pageBackground: "#ffffff",
      fontFamily: '"Plus Jakarta Sans Variable", sans-serif',
      blocks: [
        block("hero"),
        block("features", { title: "Từ ý tưởng đến sản phẩm trong một luồng làm việc." }),
        block("stats"),
        block("testimonial"),
      ],
    },
  },
  {
    id: "coffee",
    name: "Mộc Coffee",
    category: "F&B",
    colors: ["#241a14", "#aa6a3b", "#efe2cf"],
    document: {
      name: "Mộc Coffee Website",
      pageBackground: "#fbf7f1",
      fontFamily: '"Manrope Variable", sans-serif',
      blocks: [
        block("hero", { label: "ROASTED WITH CARE", title: "Một khoảng dừng, một tách cà phê thật.", text: "Hạt được chọn theo mùa, rang chậm tại Quảng Ngãi và phục vụ bằng sự tử tế.", image: "/images/project-cafe-unsplash.jpg", background: "#241a14", accent: "#d49a65", fontSize: 62 }),
        block("heading", { title: "Menu nhỏ, hương vị được chọn lọc.", background: "#fbf7f1", color: "#241a14" }),
        block("features", { title: "Cà phê cho từng nhịp sống", text: "Espresso đậm vị|Cold brew thanh mát|Hạt rang mang về", background: "#efe2cf", color: "#241a14", accent: "#aa6a3b" }),
        block("image", { image: "/images/project-cafe-unsplash.jpg", title: "Từ nông trại đến tách cà phê", background: "#fbf7f1" }),
      ],
    },
  },
  {
    id: "agency",
    name: "Axis Studio",
    category: "Agency",
    colors: ["#101010", "#ffffff", "#b7ff37"],
    document: {
      name: "Axis Creative Studio",
      pageBackground: "#f6f6f3",
      fontFamily: '"Inter Variable", sans-serif',
      blocks: [
        block("hero", { label: "INDEPENDENT DIGITAL STUDIO", title: "We turn brave ideas into useful digital products.", text: "Strategy, identity and experiences built for ambitious teams.", image: "/images/software-team-pexels.jpg", background: "#101010", accent: "#b7ff37", fontSize: 64 }),
        block("stats", { background: "#b7ff37", color: "#101010", accent: "#101010", text: "24|Sản phẩm ra mắt|08|Lĩnh vực phục vụ|04|Quốc gia" }),
        block("features", { title: "Strategy meets craft.", background: "#f6f6f3", color: "#101010", accent: "#101010", text: "Product strategy|Brand systems|Web experiences" }),
        block("testimonial", { background: "#101010", color: "#ffffff", accent: "#b7ff37" }),
      ],
    },
  },
  {
    id: "blank",
    name: "Trang trắng",
    category: "Tự do",
    colors: ["#ffffff", "#075fc2", "#13c7e9"],
    document: {
      name: "Website chưa đặt tên",
      pageBackground: "#eef2f7",
      fontFamily: '"Plus Jakarta Sans Variable", sans-serif',
      blocks: [block("heading", { title: "Bắt đầu thiết kế của bạn", align: "center", padding: 90 })],
    },
  },
];

const elementCatalog: Array<{ kind: BlockKind; name: string; description: string; icon: typeof Shapes }> = [
  { kind: "hero", name: "Hero", description: "Tiêu đề, mô tả và ảnh", icon: LayoutTemplate },
  { kind: "features", name: "Tính năng", description: "Ba lợi ích nổi bật", icon: Columns3 },
  { kind: "image", name: "Hình ảnh", description: "Ảnh lớn có chú thích", icon: ImageIcon },
  { kind: "stats", name: "Số liệu", description: "Ba chỉ số quan trọng", icon: BarChart3 },
  { kind: "testimonial", name: "Đánh giá", description: "Trích dẫn khách hàng", icon: Quote },
  { kind: "button", name: "Nút bấm", description: "Lời kêu gọi hành động", icon: Link2 },
  { kind: "spacer", name: "Khoảng trống", description: "Tạo nhịp cho bố cục", icon: Shapes },
];

const fontChoices = [
  { label: "Plus Jakarta Sans", value: '"Plus Jakarta Sans Variable", sans-serif' },
  { label: "Inter", value: '"Inter Variable", sans-serif' },
  { label: "Manrope", value: '"Manrope Variable", sans-serif' },
  { label: "Editorial Serif", value: 'Georgia, "Times New Roman", serif' },
];

const viewportWidths: Record<Viewport, number> = { desktop: 1080, tablet: 768, mobile: 390 };

function cloneDocument(document: SiteDocument): SiteDocument {
  return { ...document, blocks: document.blocks.map((item) => ({ ...item, id: newId() })) };
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#039;", '"': "&quot;" })[character] ?? character);
}

export function StudioEditor() {
  const [document, setDocument] = useState<SiteDocument>(() => cloneDocument(templates[0].document));
  const [history, setHistory] = useState<SiteDocument[]>([]);
  const [future, setFuture] = useState<SiteDocument[]>([]);
  const [activeTab, setActiveTab] = useState<ToolTab>("templates");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [viewport, setViewport] = useState<Viewport>("desktop");
  const [zoom, setZoom] = useState(74);
  const [preview, setPreview] = useState(false);
  const [saved, setSaved] = useState(false);
  const [search, setSearch] = useState("");
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const uploadRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored) setDocument(JSON.parse(stored) as SiteDocument);
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      }
      setHydrated(true);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    const timer = window.setTimeout(() => window.localStorage.setItem(STORAGE_KEY, JSON.stringify(document)), 350);
    return () => window.clearTimeout(timer);
  }, [document, hydrated]);

  const selected = useMemo(() => document.blocks.find((item) => item.id === selectedId) ?? null, [document.blocks, selectedId]);

  const commit = (producer: (current: SiteDocument) => SiteDocument) => {
    setDocument((current) => {
      const next = producer(current);
      setHistory((items) => [...items.slice(-39), current]);
      setFuture([]);
      return next;
    });
    setSaved(false);
  };

  const applyTemplate = (template: Template) => {
    const next = cloneDocument(template.document);
    commit(() => next);
    setSelectedId(next.blocks[0]?.id ?? null);
  };

  const addBlock = (kind: BlockKind, patch: Partial<SiteBlock> = {}) => {
    const nextBlock = block(kind, patch);
    commit((current) => ({ ...current, blocks: [...current.blocks, nextBlock] }));
    setSelectedId(nextBlock.id);
  };

  const updateSelected = (patch: Partial<SiteBlock>) => {
    if (!selectedId) return;
    commit((current) => ({ ...current, blocks: current.blocks.map((item) => item.id === selectedId ? { ...item, ...patch } : item) }));
  };

  const deleteSelected = () => {
    if (!selectedId) return;
    commit((current) => ({ ...current, blocks: current.blocks.filter((item) => item.id !== selectedId) }));
    setSelectedId(null);
  };

  const duplicateSelected = () => {
    if (!selected) return;
    const duplicate = { ...selected, id: newId() };
    commit((current) => {
      const index = current.blocks.findIndex((item) => item.id === selected.id);
      const blocks = [...current.blocks];
      blocks.splice(index + 1, 0, duplicate);
      return { ...current, blocks };
    });
    setSelectedId(duplicate.id);
  };

  const moveSelected = (direction: -1 | 1) => {
    if (!selectedId) return;
    commit((current) => {
      const index = current.blocks.findIndex((item) => item.id === selectedId);
      const nextIndex = Math.max(0, Math.min(current.blocks.length - 1, index + direction));
      if (index === nextIndex) return current;
      const blocks = [...current.blocks];
      const [item] = blocks.splice(index, 1);
      blocks.splice(nextIndex, 0, item);
      return { ...current, blocks };
    });
  };

  const dropBlock = (event: DragEvent, targetId: string) => {
    event.preventDefault();
    if (!draggingId || draggingId === targetId) return;
    commit((current) => {
      const blocks = [...current.blocks];
      const sourceIndex = blocks.findIndex((item) => item.id === draggingId);
      const targetIndex = blocks.findIndex((item) => item.id === targetId);
      const [item] = blocks.splice(sourceIndex, 1);
      blocks.splice(targetIndex, 0, item);
      return { ...current, blocks };
    });
    setDraggingId(null);
  };

  const undo = () => {
    const previous = history.at(-1);
    if (!previous) return;
    setFuture((items) => [document, ...items]);
    setDocument(previous);
    setHistory((items) => items.slice(0, -1));
    setSelectedId(null);
  };

  const redo = () => {
    const next = future[0];
    if (!next) return;
    setHistory((items) => [...items, document]);
    setDocument(next);
    setFuture((items) => items.slice(1));
    setSelectedId(null);
  };

  const saveDraft = () => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(document));
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2200);
  };

  const uploadImage = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => addBlock("image", { image: String(reader.result), title: file.name.replace(/\.[^.]+$/, "") });
    reader.readAsDataURL(file);
    event.target.value = "";
  };

  const exportHtml = () => {
    const sections = document.blocks.map((item) => {
      const style = `background:${item.background};color:${item.color};padding:${item.padding}px;text-align:${item.align};border-radius:${item.radius}px`;
      if (item.kind === "image") return `<section style="${style}"><img src="${escapeHtml(item.image ?? "")}" alt="${escapeHtml(item.title)}" style="width:100%;border-radius:${item.radius}px"><h2>${escapeHtml(item.title)}</h2></section>`;
      if (item.kind === "button") return `<section style="${style}"><a href="${escapeHtml(item.text)}" style="display:inline-block;background:${item.accent};color:${item.color};padding:14px 22px;border-radius:${item.radius}px;text-decoration:none">${escapeHtml(item.title)}</a></section>`;
      return `<section style="${style}"><h2 style="font-size:${item.fontSize}px">${escapeHtml(item.title)}</h2><p>${escapeHtml(item.text)}</p></section>`;
    }).join("\n");
    const html = `<!doctype html><html lang="vi"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${escapeHtml(document.name)}</title><body style="margin:0;background:${document.pageBackground};font-family:${document.fontFamily}">${sections}</body></html>`;
    const url = URL.createObjectURL(new Blob([html], { type: "text/html" }));
    const link = window.document.createElement("a");
    link.href = url;
    link.download = `${document.name.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "website"}.html`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const renderBlock = (item: SiteBlock) => {
    const style = { background: item.background, color: item.color, padding: `${item.padding}px`, textAlign: item.align, borderRadius: `${item.radius}px`, "--accent": item.accent } as CSSProperties;
    const titleStyle = { fontSize: `clamp(${Math.max(22, item.fontSize * .55)}px, 5vw, ${item.fontSize}px)` };
    if (item.kind === "hero") return <section className={styles.heroBlock} style={style}><div><span className={styles.eyebrow} style={{ color: item.accent }}>{item.label}</span><h1 style={titleStyle}>{item.title}</h1><p>{item.text}</p><button style={{ background: item.accent }}>Khám phá ngay</button></div><div className={styles.heroImage}>{item.image && <Image src={item.image} alt="" fill sizes="440px" unoptimized={item.image.startsWith("data:")} />}</div></section>;
    if (item.kind === "heading") return <section className={styles.headingBlock} style={style}><h2 style={titleStyle}>{item.title}</h2></section>;
    if (item.kind === "text") return <section className={styles.textBlock} style={style}><p style={{ fontSize: item.fontSize }}>{item.text}</p></section>;
    if (item.kind === "button") return <section className={styles.buttonBlock} style={style}><button style={{ background: item.accent, color: item.color, borderRadius: item.radius }}>{item.title}</button></section>;
    if (item.kind === "image") return <section className={styles.imageBlock} style={style}><div>{item.image && <Image src={item.image} alt={item.title} fill sizes="900px" unoptimized={item.image.startsWith("data:")} />}</div><p>{item.title}</p></section>;
    if (item.kind === "features") return <section className={styles.featuresBlock} style={style}><h2 style={titleStyle}>{item.title}</h2><div>{item.text.split("|").slice(0, 3).map((feature, index) => <article key={`${feature}-${index}`}><span style={{ color: item.accent }}>0{index + 1}</span><b>{feature}</b><p>Trình bày lợi ích rõ ràng để khách hàng hiểu giá trị ngay lập tức.</p></article>)}</div></section>;
    if (item.kind === "stats") { const parts = item.text.split("|"); return <section className={styles.statsBlock} style={style}><h2>{item.title}</h2><div>{[0, 2, 4].map((index) => <article key={index}><strong style={{ color: item.accent }}>{parts[index] ?? "—"}</strong><span>{parts[index + 1] ?? "Chỉ số"}</span></article>)}</div></section>; }
    if (item.kind === "testimonial") return <section className={styles.quoteBlock} style={style}><Quote size={28} style={{ color: item.accent }}/><blockquote style={titleStyle}>{item.title}</blockquote><p>{item.text}</p></section>;
    return <div className={styles.spacerBlock} style={style}><span>Khoảng trống · {item.padding}px</span></div>;
  };

  const filteredElements = elementCatalog.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  if (preview) {
    return (
      <main className={styles.previewMode} style={{ background: document.pageBackground, fontFamily: document.fontFamily }}>
        <div className={styles.previewBar}><span><Eye size={15}/> Chế độ xem trước</span><div>{(["desktop", "tablet", "mobile"] as Viewport[]).map((item) => <button key={item} className={viewport === item ? styles.active : ""} onClick={() => setViewport(item)}>{item === "desktop" ? <Monitor size={16}/> : item === "tablet" ? <Tablet size={16}/> : <Smartphone size={16}/>}</button>)}<button className={styles.closePreview} onClick={() => setPreview(false)}><X size={16}/> Quay lại chỉnh sửa</button></div></div>
        <div className={styles.previewStage}><div className={styles.previewPage} style={{ width: viewportWidths[viewport], fontFamily: document.fontFamily }}>{document.blocks.map((item) => <div key={item.id}>{renderBlock(item)}</div>)}</div></div>
      </main>
    );
  }

  return (
    <main className={styles.editor}>
      <header className={styles.topbar}>
        <div className={styles.topLeft}><StableLink href="/" className={styles.backButton} aria-label="Về trang chủ"><ArrowLeft size={18}/></StableLink><span className={styles.logo}><BrandLogo size="sm" /></span><span className={styles.topDivider}/><input value={document.name} onChange={(event) => commit((current) => ({ ...current, name: event.target.value }))} aria-label="Tên thiết kế"/></div>
        <div className={styles.topCenter}><button onClick={undo} disabled={!history.length} aria-label="Hoàn tác"><Undo2 size={17}/></button><button onClick={redo} disabled={!future.length} aria-label="Làm lại"><Redo2 size={17}/></button><span className={styles.topDivider}/>{(["desktop", "tablet", "mobile"] as Viewport[]).map((item) => <button key={item} onClick={() => setViewport(item)} className={viewport === item ? styles.active : ""} aria-label={`Khung ${item}`}>{item === "desktop" ? <Monitor size={17}/> : item === "tablet" ? <Tablet size={17}/> : <Smartphone size={17}/>}</button>)}</div>
        <div className={styles.topActions}><span className={styles.autosave}><Check size={13}/> Tự động lưu</span><button className={styles.secondaryButton} onClick={() => setPreview(true)}><Eye size={16}/> Xem trước</button><button className={styles.secondaryButton} onClick={exportHtml}><Download size={16}/> Xuất HTML</button><button className={styles.primaryButton} onClick={saveDraft}>{saved ? <Check size={16}/> : <Save size={16}/>} {saved ? "Đã lưu" : "Lưu bản nháp"}</button></div>
      </header>

      <div className={styles.workspace}>
        <aside className={styles.rail} aria-label="Công cụ thiết kế">
          {([
            ["templates", LayoutTemplate, "Mẫu"],
            ["elements", Shapes, "Khối"],
            ["text", Type, "Chữ"],
            ["brand", Palette, "Thương hiệu"],
            ["uploads", Upload, "Tải lên"],
          ] as Array<[ToolTab, typeof Shapes, string]>).map(([id, Icon, label]) => <button key={id} onClick={() => setActiveTab(id)} className={activeTab === id ? styles.active : ""}><Icon size={20}/><span>{label}</span></button>)}
        </aside>

        <aside className={styles.library}>
          {activeTab === "templates" && <><div className={styles.panelHeading}><span>Mẫu website</span><Sparkles size={17}/></div><div className={styles.search}><Search size={15}/><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Tìm theo ngành..."/></div><div className={styles.templateList}>{templates.filter((item) => `${item.name} ${item.category}`.toLowerCase().includes(search.toLowerCase())).map((template) => <button key={template.id} onClick={() => applyTemplate(template)} className={styles.templateCard}><div className={styles.templateVisual} style={{ background: template.colors[0] }}><span style={{ background: template.colors[2] }}/><strong style={{ color: template.colors[1] }}>Aa</strong><i style={{ background: template.colors[1] }}/></div><span><b>{template.name}</b><small>{template.category}</small></span></button>)}</div></>}
          {activeTab === "elements" && <><div className={styles.panelHeading}><span>Khối nội dung</span><Plus size={17}/></div><div className={styles.search}><Search size={15}/><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Tìm khối..."/></div><div className={styles.elementList}>{filteredElements.map(({ kind, name, description, icon: Icon }) => <button key={kind} onClick={() => addBlock(kind)}><span><Icon size={18}/></span><div><b>{name}</b><small>{description}</small></div><Plus size={15}/></button>)}</div></>}
          {activeTab === "text" && <><div className={styles.panelHeading}><span>Văn bản</span><Type size={17}/></div><button className={styles.addText} onClick={() => addBlock("heading")}><Heading1 size={20}/><span><b>Thêm tiêu đề</b><small>Tiêu đề lớn của section</small></span></button><button className={styles.addText} onClick={() => addBlock("text")}><Type size={20}/><span><b>Thêm đoạn văn</b><small>Nội dung mô tả chi tiết</small></span></button><div className={styles.fontPreview}><small>Gợi ý kết hợp font</small><strong>Build something meaningful.</strong><span>Plus Jakarta Sans + Inter</span></div></>}
          {activeTab === "brand" && <><div className={styles.panelHeading}><span>Thương hiệu</span><Palette size={17}/></div><label className={styles.field}><span>Font toàn trang</span><select value={document.fontFamily} onChange={(event) => commit((current) => ({ ...current, fontFamily: event.target.value }))}>{fontChoices.map((font) => <option key={font.label} value={font.value}>{font.label}</option>)}</select></label><label className={styles.field}><span>Nền trang</span><span className={styles.colorField}><input type="color" value={document.pageBackground} onChange={(event) => commit((current) => ({ ...current, pageBackground: event.target.value }))}/><input value={document.pageBackground} onChange={(event) => commit((current) => ({ ...current, pageBackground: event.target.value }))}/></span></label><div className={styles.brandPalette}><small>Bảng màu DolphinX</small>{["#071c4b", "#075fc2", "#13c7e9", "#eef7ff", "#ffffff"].map((color) => <button key={color} style={{ background: color }} onClick={() => selected ? updateSelected({ accent: color }) : commit((current) => ({ ...current, pageBackground: color }))} aria-label={`Dùng màu ${color}`}/>)}</div></>}
          {activeTab === "uploads" && <><div className={styles.panelHeading}><span>Tải lên</span><Upload size={17}/></div><button className={styles.uploadArea} onClick={() => uploadRef.current?.click()}><span><Upload size={21}/></span><b>Tải ảnh của bạn lên</b><small>PNG, JPG hoặc WEBP</small></button><input className={styles.hiddenInput} ref={uploadRef} type="file" accept="image/png,image/jpeg,image/webp" onChange={uploadImage}/><small className={styles.uploadNote}>Ảnh chỉ được dùng trong bản nháp trên thiết bị này.</small></>}
        </aside>

        <section className={styles.stage} onClick={() => setSelectedId(null)}>
          <div className={styles.stageHint}><MousePointer2 size={14}/> Chọn một khối để chỉnh sửa · Kéo để đổi vị trí</div>
          <div className={styles.canvasWrap} style={{ width: viewportWidths[viewport] * zoom / 100 }}>
            <div className={styles.canvas} style={{ width: viewportWidths[viewport], transform: `scale(${zoom / 100})`, background: document.pageBackground, fontFamily: document.fontFamily }}>
              {document.blocks.map((item) => <div key={item.id} draggable onDragStart={() => setDraggingId(item.id)} onDragEnd={() => setDraggingId(null)} onDragOver={(event) => event.preventDefault()} onDrop={(event) => dropBlock(event, item.id)} onClick={(event) => { event.stopPropagation(); setSelectedId(item.id); }} className={`${styles.blockShell} ${selectedId === item.id ? styles.selected : ""} ${draggingId === item.id ? styles.dragging : ""}`}><div className={styles.blockLabel}><GripVertical size={13}/>{item.kind}</div>{selectedId === item.id && <div className={styles.blockActions}><button onClick={(event) => { event.stopPropagation(); moveSelected(-1); }} aria-label="Đưa lên"><ChevronUp size={14}/></button><button onClick={(event) => { event.stopPropagation(); moveSelected(1); }} aria-label="Đưa xuống"><ChevronDown size={14}/></button><button onClick={(event) => { event.stopPropagation(); duplicateSelected(); }} aria-label="Nhân bản"><Copy size={14}/></button><button onClick={(event) => { event.stopPropagation(); deleteSelected(); }} aria-label="Xoá"><Trash2 size={14}/></button></div>}{renderBlock(item)}</div>)}
              {!document.blocks.length && <button className={styles.emptyCanvas} onClick={(event) => { event.stopPropagation(); addBlock("hero"); }}><Plus size={22}/><b>Thêm section đầu tiên</b><span>Bắt đầu với Hero hoặc chọn template bên trái.</span></button>}
            </div>
          </div>
          <div className={styles.zoomControl}><button onClick={() => setZoom((value) => Math.max(35, value - 5))}>−</button><span>{zoom}%</span><input type="range" min="35" max="100" value={zoom} onChange={(event) => setZoom(Number(event.target.value))}/><button onClick={() => setZoom((value) => Math.min(100, value + 5))}>+</button></div>
        </section>

        <aside className={styles.inspector}>
          <div className={styles.panelHeading}><span>Tuỳ chỉnh</span>{selected && <button onClick={() => setSelectedId(null)}><X size={15}/></button>}</div>
          {!selected ? <div className={styles.noSelection}><span><MousePointer2 size={22}/></span><b>Chưa chọn thành phần</b><p>Chọn một khối trên trang để chỉnh nội dung, màu sắc và khoảng cách.</p></div> : <div className={styles.controls}><div className={styles.selectionName}><span>{selected.kind}</span><b>{selected.title || "Khối nội dung"}</b></div>{selected.kind !== "spacer" && <><label className={styles.field}><span>{selected.kind === "button" ? "Nội dung nút" : "Tiêu đề"}</span><textarea rows={3} value={selected.title} onChange={(event) => updateSelected({ title: event.target.value })}/></label>{selected.kind !== "heading" && selected.kind !== "button" && <label className={styles.field}><span>Nội dung phụ</span><textarea rows={4} value={selected.text} onChange={(event) => updateSelected({ text: event.target.value })}/></label>}</>}<div className={styles.controlGroup}><span>Căn chỉnh</span><div className={styles.segmented}>{(["left", "center", "right"] as Alignment[]).map((align) => <button key={align} className={selected.align === align ? styles.active : ""} onClick={() => updateSelected({ align })}>{align === "left" ? <AlignLeft size={16}/> : align === "center" ? <AlignCenter size={16}/> : <AlignRight size={16}/>}</button>)}</div></div><label className={styles.field}><span>Cỡ chữ <b>{selected.fontSize}px</b></span><input type="range" min="12" max="82" value={selected.fontSize} onChange={(event) => updateSelected({ fontSize: Number(event.target.value) })}/></label><label className={styles.field}><span>Khoảng cách <b>{selected.padding}px</b></span><input type="range" min="0" max="120" value={selected.padding} onChange={(event) => updateSelected({ padding: Number(event.target.value) })}/></label><label className={styles.field}><span>Bo góc <b>{selected.radius}px</b></span><input type="range" min="0" max="48" value={selected.radius} onChange={(event) => updateSelected({ radius: Number(event.target.value) })}/></label><div className={styles.colorGrid}><label><span>Nền</span><input type="color" value={selected.background} onChange={(event) => updateSelected({ background: event.target.value })}/></label><label><span>Chữ</span><input type="color" value={selected.color} onChange={(event) => updateSelected({ color: event.target.value })}/></label><label><span>Nhấn</span><input type="color" value={selected.accent} onChange={(event) => updateSelected({ accent: event.target.value })}/></label></div><div className={styles.inspectorActions}><button onClick={duplicateSelected}><Copy size={15}/> Nhân bản</button><button onClick={deleteSelected}><Trash2 size={15}/> Xoá</button></div></div>}
        </aside>
      </div>
    </main>
  );
}
