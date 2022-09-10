locals {
  project = "akikun-dev"
  region  = "asia-northeast1"
  domain  = "dev.akikun.app"
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
  domain  = local.domain
}
