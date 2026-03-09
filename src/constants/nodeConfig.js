import { Position } from "@xyflow/react";

export const NODE_CONFIGS = {
  text: {
    label: "Texto",
    content: "Olá, Mundo!",
    input: [
      { type: "source", position: Position.Right },
    ],
    output: [
      { type: "target", position: Position.Left },
    ],
  }
}
