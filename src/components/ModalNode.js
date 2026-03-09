import { IoMdClose } from "react-icons/io";

export default function ModalNode() {
  
  
  return (
    <div className="">
      <div className="flex justify-end w-full text-sm bg-white rounded-t-sm">
        <button className="p-0.5 rounded-tr-sm bg-red-500">
          <IoMdClose />
        </button>
      </div>
      <div>
        conteudo
      </div>
    </div>
  )
}