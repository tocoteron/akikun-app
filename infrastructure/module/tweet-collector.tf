resource "google_cloud_run_service" "tweet_collector" {
  name     = "tweet-collector"
  location = var.region

  template {
    spec {
      containers {
        image = "us-docker.pkg.dev/cloudrun/container/hello"
      }
    }
  }
}

resource "google_cloud_run_service_iam_policy" "tweet_collector_noauth" {
  location = google_cloud_run_service.tweet_collector.location
  project  = google_cloud_run_service.tweet_collector.project
  service  = google_cloud_run_service.tweet_collector.name

  policy_data = data.google_iam_policy.cloud_run_noauth.policy_data
}

resource "google_cloud_scheduler_job" "tweet_collector_invocation" {
  name        = "tweet-collector-invocation"
  schedule    = "0 * * * *"
  time_zone   = "Asia/Tokyo"

  http_target {
    http_method = "POST"
    uri         = "${google_cloud_run_service.tweet_collector.status[0].url}/tweets"
  }
}