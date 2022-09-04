import { Tweet, User } from '~/models/twitter'

export const akikun: User = {
  userName: 'aki_suzuya',
  displayName: '鈴谷アキ🐈にじさんじ所属',
  icon: 'https://pbs.twimg.com/profile_images/1377456301379264514/ZaLQ0oQh_400x400.jpg',
}

export const tweets: Tweet[] = [
  {
    author: akikun,
    content:
      'はじめまして！\n鈴谷アキです😊\n\n始めたばかりでわからないことだらけだから…いろんなこと教えて欲しいな♪\n\nよろしくお願いします！\n\n#はじめてのツイート #にじさんじ',
    date: '2018/01/31 22:38',
  },
  {
    author: akikun,
    content:
      'おはよう☀\nにじさんじ公式のお兄ちゃんお姉ちゃん達もTwitter始めてるよ！よかったらみんなフォローしてね😊 #にじさんじ',
    date: '2018/02/01 10:06',
  },
  {
    author: akikun,
    content:
      'ふわあ〜\n今日は寒いね😵\n雪が降るところもあるんだって。\n\nみんな風邪ひかないように\nあったかくするんだよ〜😷',
    date: '2018/02/01 21:19',
  },
  {
    author: akikun,
    content:
      'わ、チャンネル登録ありがとうございます！URL載せたよ〜って言う前にしてくださってるなんて何だか感動…✨\n\n今日も一日頑張るぞい😊',
    date: '2018/02/02 06:16',
  },
  {
    author: akikun,
    content:
      'ツインテールの日かぁ\nかわいいよね、ツインテール☺️\n\nボクもしてみよっかな！\nこの長さじゃ難しいかも…？',
    date: '2018/02/02 21:05',
  },
  {
    author: akikun,
    content:
      'あわわ、もうこんな時間だ😵\nいい夢見られますように！\n\nおやすみなさーい🌙',
    date: '2018/02/02 23:34',
  },
  {
    author: akikun,
    content: '鬼はーそとー！\n福はーうちー！！',
    date: '2018/02/03 12:34',
  },
  {
    author: akikun,
    content:
      'あわわ、すごい勢いでフォロワーさんが増えていく…😵\n\n期待に応えられるように\nボク、一生懸命頑張るね！\n\nフォローありがとうございます！！！🙏🏻',
    date: '2018/02/03 17:09',
  },
]

export const tweet = tweets[0]
