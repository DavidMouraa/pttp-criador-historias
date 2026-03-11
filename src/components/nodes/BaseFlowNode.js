import BaseNode from "./BaseNode"
import { FaGear } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";


export default function BaseFlowNode({ children, selected, icon, label, colors }) {

  const buttons = [
    { icon: <FaGear /> },
    { icon: <FaRegTrashAlt /> },
  ]

  return (
    <BaseNode
      selected={selected}
      icon={icon}
      label={label}
      colors={colors}
      buttons={buttons}
    >
      <div className={`flex items-center gap-2.5 px-1 py-2 bg-flow-node-bg`}>
        {children}
      </div>
    </BaseNode>
  )
}