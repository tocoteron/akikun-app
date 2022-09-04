export interface User {
  id: string
  icon: string
  userName: string
  displayName: string
}

export interface Tweet {
  id: string
  content: string
  date: string
  author: User
}
