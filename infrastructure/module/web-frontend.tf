resource "google_app_engine_application" "web_frontend" {
  project     = var.project
  location_id = var.region

  database_type = "CLOUD_FIRESTORE"
}

resource "google_app_engine_domain_mapping" "web_frotnend_domain" {
  domain_name = var.domain

  ssl_settings {
    ssl_management_type = "AUTOMATIC"
  }
}