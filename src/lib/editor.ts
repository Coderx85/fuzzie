import { ConnectionProviderProps } from '@/providers/connections-provider'
import { EditorCanvasCardType } from './types'

export const onDragStart = (
  event: any,
  nodeType: EditorCanvasCardType['type']
) => {
  event.dataTransfer.setData('application/reactflow', nodeType)
  event.dataTransfer.effectAllowed = 'move'
}

export const onNotionContent = (
  nodeConnection: ConnectionProviderProps,
  event: React.ChangeEvent<HTMLInputElement>
) => {
  nodeConnection.setNotionNode((prev: any) => ({
    ...prev,
    content: event.target.value,
  }))
}

export const onAddTemplateSlack = (
  nodeConnection: ConnectionProviderProps,
  template: string
) => {
  nodeConnection.setSlackNode((prev: any) => ({
    ...prev,
    content: `${prev.content} ${template}`,
  }))
}

export const onAddTemplateDiscord = (
  nodeConnection: ConnectionProviderProps,
  template: string
) => {
  nodeConnection.setDiscordNode((prev: any) => ({
    ...prev,
    content: `${prev.content} ${template}`,
  }))
}

export const onAddTemplate = (
  nodeConnection: ConnectionProviderProps,
  title: string,
  template: string
) => {
  if (title === 'Slack') {
    onAddTemplateSlack(nodeConnection, template)
  } else if (title === 'Discord') {
    onAddTemplateDiscord(nodeConnection, template)
  }
}