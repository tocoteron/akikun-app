resource "google_firestore_document" "akikun_twitter" {
  project     = var.project
  collection  = "akikun"
  document_id = "twitter"
  fields      = "{}"
}

resource "google_firestore_document" "akikun_twitter_tweets" {
  project     = var.project
  collection  = "${google_firestore_document.akikun_twitter.path}/tweets"
  document_id = "958696012998037504"
  fields      = "{\"id\":{\"stringValue\":\"958696012998037504\"},\"author_id\":{\"stringValue\":\"958675678689243137\"},\"text\":{\"stringValue\":\"はじめまして！\\n鈴谷アキです😊\\n\\n始めたばかりでわからないことだらけだから…いろんなこと教えて欲しいな♪\\n\\nよろしくお願いします！\\n\\n#はじめてのツイート #にじさんじ\"},\"created_at\":{\"stringValue\":\"2018-01-31T13:38:35.000Z\"}}"
}
