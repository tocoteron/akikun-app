export const akikun = {
  userName: 'aki_suzuya',
  displayName: '鈴谷アキ🐈にじさんじ所属',
  icon: 'https://pbs.twimg.com/profile_images/1377456301379264514/ZaLQ0oQh_400x400.jpg',
}

interface Tweet {
  content: string
  date: string
}

export const tweets: Tweet[] = [
  {
    content: 'はじめまして！\n鈴谷アキです😊\n\n始めたばかりでわからないことだらけだから…いろんなこと教えて欲しいな♪\n\nよろしくお願いします！\n\n#はじめてのツイート #にじさんじ',
    date: '2018/01/31 22:38'
  },
  {
    content: 'おはよう☀\nにじさんじ公式のお兄ちゃんお姉ちゃん達もTwitter始めてるよ！よかったらみんなフォローしてね😊 #にじさんじ',
    date: '2018/02/01 10:06'
  }
]

export const tweet = tweets[0]
