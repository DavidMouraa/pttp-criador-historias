import { Position, useInternalNode } from "@xyflow/react"
import BaseFlowNode from "./BaseFlowNode"
import PathHandle from "../handles/PathHandle"
import { CiEdit } from "react-icons/ci";
import { LuTextCursor } from "react-icons/lu";
import { useEditingNodeStore } from "@/store/useEditingNodeStore";

export default function TextNode({ id, data, selected }) {
  const { setEditingNode } = useEditingNodeStore()

  const currentNode = useInternalNode(id)

  return (
    <BaseFlowNode
      selected={selected}
      icon={<LuTextCursor />}
      label={data.label}
      colors={{
        bg: "bg-flow-text-node-header",
        border: "border-flow-text-node-border",
        borderSelected: "border-flow-text-selected-node-border"
      }}
    >
      <div className="flex justify-center items-center gap-1">
        {data.inputs.map((input) => (
          <PathHandle
            key={input.id}
            position={Position.Left}
            type={input.type}
          />
        ))}
      </div>
      <div className="flex flex-col items-center gap-2">
        <input 
          className="max-w-15 focus:outline-none border-b border-transparent focus:border-flow-node-input-border truncate"
          type="text" 
          placeholder="Título"
        />
        <button 
          className="flex justify-center items-center w-full h-5 cursor-pointer rounded-sm bg-flow-node-edit-button-bg text-black"
          onClick={() => setEditingNode(currentNode)}
        >
          <CiEdit className="text-sm" />
        </button>
      </div>
      <div>
        {data.outputs.map((output) => (
          <PathHandle
            key={output.id}
            position={Position.Right}
            type={"source"}
          />
        ))}
      </div>
    </BaseFlowNode>
  )
}
