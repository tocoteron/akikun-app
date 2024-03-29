import { Tweet, User } from '~/models/twitter'

export const akikun: User = {
  id: '958675678689243137',
  userName: 'aki_suzuya',
  displayName: '鈴谷アキ🐈にじさんじ所属',
  icon: 'https://pbs.twimg.com/profile_images/1377456301379264514/ZaLQ0oQh_400x400.jpg',
}

export const tweets: Tweet[] = [
  {
    id: '958696012998037504',
    content:
      'はじめまして！\n鈴谷アキです😊\n\n始めたばかりでわからないことだらけだから…いろんなこと教えて欲しいな♪\n\nよろしくお願いします！\n\n#はじめてのツイート #にじさんじ',
    date: '2018/01/31 22:38',
    author: akikun,
  },
  {
    id: '958869017757851648',
    content:
      'おはよう☀\nにじさんじ公式のお兄ちゃんお姉ちゃん達もTwitter始めてるよ！よかったらみんなフォローしてね😊 #にじさんじ',
    date: '2018/02/01 10:06',
    author: akikun,
  },
  {
    id: '959038518818324486',
    content:
      'ふわあ〜\n今日は寒いね😵\n雪が降るところもあるんだって。\n\nみんな風邪ひかないように\nあったかくするんだよ〜😷',
    date: '2018/02/01 21:19',
    author: akikun,
  },
  {
    id: '959173636262313984',
    content:
      'わ、チャンネル登録ありがとうございます！URL載せたよ〜って言う前にしてくださってるなんて何だか感動…✨\n\n今日も一日頑張るぞい😊',
    date: '2018/02/02 06:16',
    author: akikun,
  },
  {
    id: '959397299750350849',
    content:
      'ツインテールの日かぁ\nかわいいよね、ツインテール☺️\n\nボクもしてみよっかな！\nこの長さじゃ難しいかも…？',
    date: '2018/02/02 21:05',
    author: akikun,
  },
  {
    id: '959434943402143747',
    content:
      'あわわ、もうこんな時間だ😵\nいい夢見られますように！\n\nおやすみなさーい🌙',
    date: '2018/02/02 23:34',
    author: akikun,
  },
  {
    id: '959631260653006848',
    content: '鬼はーそとー！\n福はーうちー！！',
    date: '2018/02/03 12:34',
    author: akikun,
  },
  {
    id: '959700315850162178',
    content:
      'あわわ、すごい勢いでフォロワーさんが増えていく…😵\n\n期待に応えられるように\nボク、一生懸命頑張るね！\n\nフォローありがとうございます！！！🙏🏻',
    date: '2018/02/03 17:09',
    author: akikun,
  },
]

export const tweet = tweets[0]
