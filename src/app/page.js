import Flow from "@/components/Flow";
import { ReactFlowProvider } from "@xyflow/react";

export default function Home() {

  return (
    <div className="w-screen h-screen">
      <ReactFlowProvider>
        <Flow />
      </ReactFlowProvider>
    </div>
  );
}
