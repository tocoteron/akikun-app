export interface User {
  icon: string
  userName: string
  displayName: string
}

export interface Tweet {
  author: User
  content: string
  date: string
}
