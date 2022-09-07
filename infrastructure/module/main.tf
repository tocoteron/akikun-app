resource "google_app_engine_application" "web_frontend" {
  project     = var.project
  location_id = var.region
}
