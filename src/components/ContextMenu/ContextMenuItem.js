export default function ContextMenuItem({ label, onClick, className }) {
  
  return (
    <li>
      <button 
      className={`w-full flex px-2 py-0.5 hover:text-flow-context-menu-hover-text ${className}`}
      onClick={onClick}
      >{label}</button>
    </li>
  )
}