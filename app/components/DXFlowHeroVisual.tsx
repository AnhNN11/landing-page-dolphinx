"use client";

import {
  Background,
  BackgroundVariant,
  Handle,
  MarkerType,
  Position,
  ReactFlow,
  type Edge,
  type Node,
  type NodeProps,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Bot, Check, Clock3, Database, GitBranch, MessageSquareText, Sparkles, Zap } from "lucide-react";
import styles from "./DXFlowHeroVisual.module.css";

type FlowNodeData = {
  eyebrow: string;
  title: string;
  detail: string;
  variant: "source" | "condition" | "action" | "nurture" | "output";
};

type FlowNode = Node<FlowNodeData, "flowStep">;

const nodes: FlowNode[] = [
  {
    id: "source",
    type: "flowStep",
    position: { x: 16, y: 24 },
    data: { eyebrow: "01 · NGUỒN DỮ LIỆU", title: "Lead mới", detail: "Website · Zalo · Ads", variant: "source" },
  },
  {
    id: "condition",
    type: "flowStep",
    position: { x: 18, y: 226 },
    data: { eyebrow: "02 · ĐIỀU KIỆN", title: "Kiểm tra nhu cầu", detail: "Ngân sách ≥ 20 triệu", variant: "condition" },
  },
  {
    id: "action",
    type: "flowStep",
    position: { x: 255, y: 65 },
    data: { eyebrow: "03 · TỰ ĐỘNG", title: "Tạo cơ hội CRM", detail: "Gán sales & lịch nhắc", variant: "action" },
  },
  {
    id: "nurture",
    type: "flowStep",
    position: { x: 255, y: 260 },
    data: { eyebrow: "04 · CHĂM SÓC", title: "Bổ sung thông tin", detail: "Gửi câu hỏi tự động", variant: "nurture" },
  },
  {
    id: "output",
    type: "flowStep",
    position: { x: 500, y: 108 },
    data: { eyebrow: "KẾT QUẢ TRỰC TIẾP", title: "FlowOps", detail: "Pipeline đang hoạt động", variant: "output" },
  },
];

const edgeLabel = {
  labelStyle: { fill: "#52657c", fontSize: 6, fontWeight: 800 },
  labelBgStyle: { fill: "#ffffff", fillOpacity: 0.94, stroke: "#dce7f1", strokeWidth: 0.5 },
  labelBgPadding: [5, 3] as [number, number],
  labelBgBorderRadius: 5,
};

const edges: Edge[] = [
  {
    ...edgeLabel,
    id: "source-action",
    source: "source",
    target: "action",
    type: "default",
    animated: true,
    label: "Đã chuẩn hoá",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#13a9d2" },
    style: { stroke: "#13a9d2", strokeWidth: 1.8 },
  },
  {
    ...edgeLabel,
    id: "condition-action",
    source: "condition",
    sourceHandle: "qualified",
    target: "action",
    type: "default",
    animated: true,
    label: "Đủ điều kiện",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#075fc2" },
    style: { stroke: "#075fc2", strokeWidth: 1.8 },
  },
  {
    ...edgeLabel,
    id: "condition-nurture",
    source: "condition",
    sourceHandle: "review",
    target: "nurture",
    type: "default",
    label: "Cần bổ sung",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#f0a43c" },
    style: { stroke: "#f0a43c", strokeWidth: 1.8, strokeDasharray: "5 4" },
  },
  {
    id: "action-output",
    source: "action",
    target: "output",
    targetHandle: "primary",
    type: "default",
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed, color: "#13a9d2" },
    style: { stroke: "#13a9d2", strokeWidth: 2 },
  },
  {
    id: "nurture-output",
    source: "nurture",
    target: "output",
    targetHandle: "secondary",
    type: "default",
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed, color: "#7d91aa" },
    style: { stroke: "#7d91aa", strokeWidth: 1.6, strokeDasharray: "5 4" },
  },
];

function FlowStepNode({ data }: NodeProps<FlowNode>) {
  const Icon = data.variant === "source" ? Database : data.variant === "condition" ? GitBranch : data.variant === "action" ? Zap : data.variant === "nurture" ? MessageSquareText : Bot;

  return (
    <article className={`${styles.node} ${styles[data.variant]}`}>
      {data.variant !== "source" && data.variant !== "output" && <Handle type="target" position={Position.Left} className={styles.handle}/>} 
      {data.variant === "output" && <><Handle id="primary" type="target" position={Position.Left} className={styles.handle} style={{ top: "35%" }}/><Handle id="secondary" type="target" position={Position.Left} className={styles.handle} style={{ top: "76%" }}/></>}
      <header><span><Icon size={13}/>{data.eyebrow}</span>{data.variant === "output" && <i><Check size={11}/></i>}</header>
      <strong>{data.title}</strong>
      <small>{data.detail}</small>
      {data.variant === "source" && <div className={styles.sourceMeta}><span>Web form</span><time><Clock3 size={9}/>10:42</time></div>}
      {data.variant === "condition" && <div className={styles.conditionRows}><span><i/>Đủ điều kiện<b>68%</b></span><span><i/>Cần bổ sung<b>32%</b></span></div>}
      {data.variant === "action" && <><div className={styles.actionMeta}><span>Sales Team</span><b>Tự động</b></div><div className={styles.actionTrack}><i/><i/><i/></div></>}
      {data.variant === "nurture" && <div className={styles.nurtureMeta}><span><MessageSquareText size={10}/>Bộ câu hỏi 03 bước</span><time><Clock3 size={9}/>Sau 2 phút</time></div>}
      {data.variant === "output" && <div className={styles.outputGrid}><span><b>24</b><small>Lead mới</small></span><span><b>08</b><small>Đang xử lý</small></span><span><b>92%</b><small>Đúng SLA</small></span></div>}
      {data.variant !== "output" && data.variant !== "condition" && <Handle type="source" position={Position.Right} className={styles.handle}/>} 
      {data.variant === "condition" && <><Handle id="qualified" type="source" position={Position.Right} className={styles.handle} style={{ top: "56%" }}/><Handle id="review" type="source" position={Position.Right} className={styles.handle} style={{ top: "82%", background: "#f0a43c" }}/></>}
    </article>
  );
}

const nodeTypes = { flowStep: FlowStepNode };

export function DXFlowHeroVisual() {
  return (
    <div className={styles.shell} aria-label="Sơ đồ tự động hoá DXFlow từ dữ liệu đầu vào đến kết quả vận hành">
      <div className={styles.topbar}><span><i/>DXFLOW AUTOMATION <em>05 node · 04 tác vụ</em></span><b><Sparkles size={12}/> Workflow đang chạy</b></div>
      <div className={styles.mobileFlow}>
        <article className={`${styles.mobileNode} ${styles.mobileSource}`}><span><Database size={12}/>01 · NGUỒN DỮ LIỆU</span><b>Lead mới</b><small>Website · Zalo · Ads</small></article>
        <i className={styles.mobileConnector}/>
        <article className={`${styles.mobileNode} ${styles.mobileCondition}`}><span><GitBranch size={12}/>02 · ĐIỀU KIỆN</span><b>Kiểm tra nhu cầu</b><small>Ngân sách ≥ 20 triệu</small><div><em>Đủ điều kiện <strong>68%</strong></em><em>Cần bổ sung <strong>32%</strong></em></div></article>
        <i className={styles.mobileConnector}/>
        <div className={styles.mobileBranch}>
          <article className={`${styles.mobileNode} ${styles.mobileAction}`}><span><Zap size={12}/>03 · TỰ ĐỘNG</span><b>Tạo cơ hội CRM</b><small>Gán sales & lịch nhắc</small></article>
          <article className={`${styles.mobileNode} ${styles.mobileNurture}`}><span><MessageSquareText size={12}/>04 · CHĂM SÓC</span><b>Bổ sung thông tin</b><small>Gửi câu hỏi tự động</small></article>
        </div>
        <i className={`${styles.mobileConnector} ${styles.mobileJoin}`}/>
        <article className={`${styles.mobileNode} ${styles.mobileOutput}`}><span><Bot size={12}/>KẾT QUẢ TRỰC TIẾP</span><b>FlowOps đang hoạt động</b><div><em><strong>24</strong> lead mới</em><em><strong>08</strong> đang xử lý</em><em><strong>92%</strong> đúng SLA</em></div></article>
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: .1 }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        nodesFocusable={false}
        edgesFocusable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        preventScrolling={false}
        proOptions={{ hideAttribution: true }}
      >
        <Background variant={BackgroundVariant.Dots} color="#aec5df" gap={21} size={1.15}/>
      </ReactFlow>
      <div className={styles.legend}><span><i/>Đầu vào</span><span><i/>Tự động</span><span><i/>Chăm sóc</span></div>
      <div className={styles.liveBadge}><i/>3 tác vụ vừa hoàn tất</div>
    </div>
  );
}
