resource "google_app_engine_application" "web_frontend" {
  project     = var.project
  location_id = var.region
}

resource "google_cloud_run_service" "web_backend" {
  name = "web-backend"
  project = var.project
  location = var.region
}