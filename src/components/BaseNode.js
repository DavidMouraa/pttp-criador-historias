export default function BaseNode({ children, title, color }) {

  return (
    <div className={`z-10 w-max h-max text-xxs text-flow-node-text`}>
      <div className={`flex px-1.5 py-0.5 rounded-t-sm font-semibold ${color}`}>
        {title}
      </div>
      <div className={`flex items-center gap-2.5 px-1 py-2 rounded-b-sm bg-flow-node-bg`}>
        {children}
      </div>
    </div>
  )
}