"use client";

import { Background, MarkerType, ReactFlow, type Edge, type Node } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const nodes: Node[] = [
  { id: "discover", position: { x: 20, y: 105 }, data: { label: <div className="flow-node"><span>01</span><b>Khám phá</b><small>Bài toán & mục tiêu</small></div> } },
  { id: "design", position: { x: 245, y: 15 }, data: { label: <div className="flow-node"><span>02</span><b>Thiết kế</b><small>UX/UI & prototype</small></div> } },
  { id: "build", position: { x: 245, y: 195 }, data: { label: <div className="flow-node"><span>03</span><b>Phát triển</b><small>Code theo sprint</small></div> } },
  { id: "launch", position: { x: 480, y: 105 }, data: { label: <div className="flow-node"><span>04</span><b>Vận hành</b><small>Bàn giao & mở rộng</small></div> } },
];

const edges: Edge[] = [
  { id: "d-design", source: "discover", target: "design", animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: "#13c7e9" }, style: { stroke: "#13c7e9" } },
  { id: "d-build", source: "discover", target: "build", animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: "#075fc2" }, style: { stroke: "#075fc2" } },
  { id: "design-launch", source: "design", target: "launch", animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: "#13c7e9" }, style: { stroke: "#13c7e9" } },
  { id: "build-launch", source: "build", target: "launch", animated: true, markerEnd: { type: MarkerType.ArrowClosed, color: "#075fc2" }, style: { stroke: "#075fc2" } },
];

export function HomeWorkflowCanvas() {
  return (
    <div className="workflow-canvas" aria-label="Quy trình phát triển sản phẩm DolphinX">
      <ReactFlow nodes={nodes} edges={edges} fitView nodesDraggable={false} nodesConnectable={false} elementsSelectable={false} panOnDrag={false} zoomOnScroll={false} zoomOnPinch={false} zoomOnDoubleClick={false} preventScrolling={false} proOptions={{ hideAttribution: true }}>
        <Background color="rgba(117,164,220,.25)" gap={26} size={1} />
      </ReactFlow>
    </div>
  );
}
