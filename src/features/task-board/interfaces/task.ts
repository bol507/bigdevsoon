export type Priority = 'HIGH' | 'MEDIUM' | 'LOW'

export interface Task {
  id: number
  title: string
  priority: Priority
  date: string
  image?: string
  content: string
}

