import { useEditor } from '@/providers/editor-provider'
import React, { useMemo } from 'react'
import 'reactflow/dist/style.css'
import Reactflow from 'reactflow'
import EditorCanvasCardSingle from './editor-canvas-card-single'

type Props = {}

const EditorCanvas = (props: Props) => {
    const { dispatch, state } = useEditor()

    const nodeTypes = useMemo(
        () => ({
            Action: EditorCanvasCardSingle,
            Trigger: EditorCanvasCardSingle,
            Email: EditorCanvasCardSingle,
            Condition: EditorCanvasCardSingle,
            AI: EditorCanvasCardSingle,
            Slack: EditorCanvasCardSingle,
            'Google Drive': EditorCanvasCardSingle,
            Notion: EditorCanvasCardSingle,
            Discord: EditorCanvasCardSingle,
            'Custom Webhook': EditorCanvasCardSingle,
            'Google Calendar': EditorCanvasCardSingle,
            Wait: EditorCanvasCardSingle,
        })
    )
  return (
    <div>EditorCanvas</div>
  )
}

export default EditorCanvas