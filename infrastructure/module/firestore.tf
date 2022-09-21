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
  fields      = <<EOT
    {
        "id": {
            "stringValue": "958696012998037504"
        },
        "author_id": {
            "stringValue":"958675678689243137"
        },
        "text": {
            "stringValue": "はじめまして！\n鈴谷アキです😊\n\n始めたばかりでわからないことだらけだから…いろんなこと教えて欲しいな♪\n\nよろしくお願いします！\n\n#はじめてのツイート #にじさんじ"
        },
        "created_at": {
            "timestampValue":"2018-01-31T13:38:35Z"
        }
    }
    EOT
}

resource "google_firestore_document" "akikun_twitter_accounts" {
  project     = var.project
  collection  = "${google_firestore_document.akikun_twitter.path}/accounts"
  document_id = "958675678689243137"
  fields      = <<EOT
    {
        "id": {
            "stringValue": "958675678689243137"
        },
        "username": {
            "stringValue": "aki_suzuya"
        },
        "name": {
            "stringValue": "鈴谷アキ🐈にじさんじ所属"
        }
    }
    EOT
}
