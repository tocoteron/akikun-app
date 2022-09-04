export interface Channel {
  id: string
  url: string
  name: string
  icon: string
}

export interface Video {
  id: string
  url: string
  title: string
  description: string
  thumbnail: string
  date: string
  channel: Channel
}
