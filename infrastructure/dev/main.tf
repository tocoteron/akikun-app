locals {
  project = "akikun-dev"
  region  = "asia-northeast1"
}

terraform {
  backend "gcs" {
    bucket = "akikun-dev-tfstate"
  }
}

module "main" {
  source  = "../module"
  project = local.project
  region  = local.region
}
