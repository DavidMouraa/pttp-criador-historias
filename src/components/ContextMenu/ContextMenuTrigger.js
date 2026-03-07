import { IoIosArrowForward } from "react-icons/io";

import ContextMenuItem from "./ContextMenuItem"
import ContextMenu from "./ContextMenu";

export default function ContextMenuTrigger({ children, label }) {
  return (
    <div className="group/trigger relative">
      <div className="flex justify-between items-center gap-1 pr-2 hover:text-flow-context-menu-hover-text">
        <ContextMenuItem
        className={"pr-0"}
        label={label} />
        <IoIosArrowForward />
      </div>
      <div className="absolute top-0 left-[97%] hidden group-hover/trigger:block">
        <ContextMenu>
          {children}
        </ContextMenu>
      </div>
    </div>
  )
}