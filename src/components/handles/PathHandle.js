import { FaCaretRight } from "react-icons/fa6";
import BaseHandle from "./BaseHandle";

export default function PathHandle({ position, type }) {
  return(
    <BaseHandle
      position={position}
      type={type}
    >
      <FaCaretRight className="relative w-3.5 h-3.5" />
    </BaseHandle>
  )
}