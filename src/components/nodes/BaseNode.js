export default function BaseNode({ children, selected, icon, label, colors, buttons }) {

  return (
    <div className={`z-10 text-xxs text-flow-node-text border ${selected ? colors.borderSelected : colors.border} rounded-sm overflow-clip shadow-flow-node`}>
      <div className={`flex justify-between items-center p-1 ${colors.bg}`}>
        <div className={`flex items-center gap-1 font-semibold `}>
          {icon}
          {label}
        </div>
        <div className="flex gap-1">
          {buttons.map((button, index) => (
            <button 
              key={index}
              className="nodrag cursor-pointer"
            >{button.icon}</button>
          ))}
        </div>
      </div>
      <div className="nodrag cursor-default">
        {children}
      </div>
    </div>
  )
}