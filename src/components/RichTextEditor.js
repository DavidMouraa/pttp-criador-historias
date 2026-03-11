import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Modal from "./Modal"

export default function RichTextEditor({ node, onSave }) {
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
    <Modal>
      <EditorContent editor={editor} className="h-full rounded-b-sm bg-white" />
    </Modal>
  )
}