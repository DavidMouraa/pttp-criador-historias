import { Handle } from "@xyflow/react";

export default function BaseHandle({ children, type, position, id }) {
  return (
    <Handle
      className={`relative! left-auto! top-auto! transform-none! w-auto! h-auto! flex justify-center items-center rounded-none! border-none! bg-transparent!`}
      type={type}
      position={position}
      id={id}
    >
      {children}
    </Handle>
  )
}