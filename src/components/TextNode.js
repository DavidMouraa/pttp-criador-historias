import { Position } from "@xyflow/react"
import BaseNode from "./BaseNode"
import PathHandle from "./handles/PathHandle"
import { CiEdit } from "react-icons/ci";

export default function TextNode({ data, selected }) {

  return (
    <BaseNode
      selected={selected}
      color={"bg-flow-text-node-header"}
      title={data.label}
    >
      <div className="flex justify-center items-center gap-1">
        <PathHandle
          position={Position.Left}
          type={"target"}
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <input 
          className="max-w-15 focus:outline-none border-b border-transparent focus:border-flow-node-input-border truncate"
          type="text" 
          placeholder="Título"
        />
        <button className="flex justify-center items-center w-full h-5 cursor-pointer rounded-sm bg-flow-node-edit-button-bg text-black">
          <CiEdit className="text-sm" />
        </button>
      </div>
      <div>
        <PathHandle
          position={Position.Right}
          type={"source"}
        />
      </div>
    </BaseNode>
  )
}