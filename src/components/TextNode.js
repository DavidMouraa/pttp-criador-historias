import { Position, useInternalNode, useNodeId } from "@xyflow/react"
import BaseNode from "./BaseNode"
import PathHandle from "./handles/PathHandle"
import { CiEdit } from "react-icons/ci";
import { useEditingNodeStore } from "@/store/useEditingNodeStore";
import { useEffect } from "react";

export default function TextNode({ id, data, selected }) {
  const setEditingNode = useEditingNodeStore((state) => state.setEditingNode)
  const currentNode = useInternalNode(id)

  useEffect(() => {
    console.log(currentNode)
  }, [])

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
        <button 
          className="flex justify-center items-center w-full h-5 cursor-pointer rounded-sm bg-flow-node-edit-button-bg text-black"
          onClick={() => setEditingNode(currentNode)}
        >
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
