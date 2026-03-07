'use client'

import { useState, useCallback } from "react"
import { 
  Background, 
  Controls,
  ReactFlow, 
  useEdgesState, 
  useNodesState,
  useReactFlow,
  addEdge,
} from "@xyflow/react"
import "@xyflow/react/dist/style.css"
import TextNode from "./TextNode"
import ContextMenu from "./ContextMenu/ContextMenu"
import ContextMenuItem from "./ContextMenu/ContextMenuItem"
import ContextMenuTrigger from "./ContextMenu/ContextMenuTrigger"
import RichTextEditor from "./RichTextEditor"
import { NODE_CONFIGS } from "@/constants/nodeConfig"

const nodeTypes = {
  text: TextNode,
}

export default function Flow() {
  const [menu, setMenu] = useState(null)
  const [editingNode, setEditingNode] = useState(null)

  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])

  const { screenToFlowPosition } = useReactFlow()

  // Controle do menu de contexto
  const onPaneContextMenu = useCallback((event) => {
    event.preventDefault();

    setMenu({
      id: "pane-menu",
      x: event.clientX,
      y: event.clientY,
    })
  }, [setMenu])

  const onNodeContextMenu = useCallback((event, node) => {
    event.preventDefault();

    setMenu({
      id: "node-menu",
      x: event.clientX,
      y: event.clientY,
      node
    })
  }, [setMenu])

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
  
  // Funções das opções do menu de contexto
  // Painel
  const addNode = useCallback((x, y, type) => {
    const position = screenToFlowPosition({ x, y })
    
    const newNode = {
      id: `node_${Date.now()}`,
      type,
      position,
      data: { 
        label: type,
        content: "",
        inputs: [
          { id: `in-${Date.now()}`, type: "source", label: "Text", action: (node) => setEditingNode(node) }
        ]
      }
    }
    
    setNodes((nodes) => nodes.concat(newNode))
    setMenu(null)
  }, [screenToFlowPosition, setNodes, setMenu, setEditingNode])
  
  // Nodes
  const deleteNode = useCallback((id) => {
    setNodes((nodes) => nodes.filter((node) => node.id != id))
    setEdges((edges) => edges.filter((edge) => edge.source !== id && edge.target !== id))
    
    setMenu(null)
  }, [setNodes, setEdges, setMenu])

  // Funções do RichTextEditor
  const updateNodeData = (nodeId, newContent) => {
    setNodes((nodes) => nodes.map((node) => {
      if (node.id === nodeId) {
        return {
          ...node, data: {
            ...node.data, content: newContent
          }
        }
      }
      return node
    }))
  }
  
  // Eventos de click
  const onPaneClick = useCallback(() => setMenu(null), [setMenu])
  const onNodeClick = useCallback(() => setMenu(null), [setMenu])
  const onNodeDoubleClick = useCallback((event, node) => setEditingNode(node))

  return (
    <div className="w-full h-full">
      <ReactFlow
        className="bg-flow-bg!"
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onPaneContextMenu={onPaneContextMenu}
        onNodeContextMenu={onNodeContextMenu}
        onPaneClick={onPaneClick}
        onNodeClick={onNodeClick}
        onNodeDoubleClick={onNodeDoubleClick}
        fitView
      >
        <Background
          color="#fff"
          gap={20}
          variant="dots"
        />

        <Controls />
        {menu && (
          <ContextMenu
          x={menu.x}
          y={menu.y}>
            {menu.id === "pane-menu" ? (
              <>
                <ContextMenuTrigger
                  label={"Adicionar Node"}
                >
                  <ContextMenuItem 
                    label={"Texto"}
                    onClick={() => addNode(menu.x, menu.y, "text")}
                  />
                </ContextMenuTrigger>
              </>
            ) : (
              <>
                <ContextMenuItem
                label={"Excluir node"}
                onClick={() => deleteNode(menu.node.id)} />
              </>
            )}
          </ContextMenu>
        )}

        {editingNode && (
          <RichTextEditor
            node={editingNode}
            onSave={(content) => updateNodeData(editingNode.id, content)}
            onClose={() => setEditingNode(null)}
          />
        )}

      </ReactFlow>
    </div>
  );
}