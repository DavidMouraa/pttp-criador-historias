import { nanoid } from "nanoid";

export const NODE_CONFIGS = {
  text: {
    label: "Texto",
    content: "",
    inputs: [
      { id: `handle_${nanoid(10)}`, type: "target" },
    ],
    outputs: [
      { id: `handle_${nanoid(10)}`, type: "source" },
    ],
  }
}
