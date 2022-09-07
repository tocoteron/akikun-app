terraform {
  backend "gcs" {
    bucket = "akikun-dev-tfstate"
  }
}

provider "google" {
  project = "akikun-dev"
  region  = "asia-northeast1"
}
