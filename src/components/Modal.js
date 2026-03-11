import { useEditingNodeStore } from "@/store/useEditingNodeStore"
import { IoClose } from "react-icons/io5";

export default function Modal({ children }) {
  const { clearEditingNode } = useEditingNodeStore()

  return (
    <div className="z-10 absolute top-1/4 left-1/4 w-96 h-125 rounded-sm">
      <div className="flex justify-end  rounded-t-sm overflow-clip bg-amber-700">
        <button
          className="h-full cursor-pointer bg-red-500" 
          onClick={clearEditingNode}
        >
          <IoClose className="w-5 h-5" />
        </button>
      </div>
      { children }
    </div>
  )
}