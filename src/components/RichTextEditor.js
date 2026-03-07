import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { IoClose } from "react-icons/io5";


export default function RichTextEditor({ node, onClose, onSave }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: node.data.content,
    autofocus: true,
    editable: true,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: "prose prose-slate max-w-none w-full h-full focus:outline-none p-2.5"
      }
    },
    onUpdate: ({ editor }) => {
      onSave(editor.getHTML())
    },
  })

  return (
    <div className="z-10 absolute top-1/4 left-1/4 w-96 h-125 rounded-sm bg-white">
      <div className="flex justify-end bg-flow-node-text-header-bg rounded-t-sm overflow-clip">
        <button
          className="h-full cursor-pointer bg-red-500" 
          onClick={onClose}
        >
          <IoClose className="w-5 h-5" />
        </button>
      </div>
      <EditorContent editor={editor} className="h-full" />
    </div>
  )
}