export default function ContextMenu({ children, className, x, y }) {

  return (
    <ul
    className={`group z-1000 fixed flex flex-col rounded-sm bg-flow-context-menu-bg shadow-[0_0_10px_0px_rgba(0,0,0,.4)] ${className}`}
    style={{
      top: y,
      left: x,
    }}
    >
      {children}
    </ul>
  )
}
