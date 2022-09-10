locals {
  project = "akikun-prd"
  region  = "asia-northeast1"
  domain  = "akikun.app"
}

terraform {
  backend "gcs" {
    bucket = "akikun-prd-tfstate"
  }
}

module "main" {
  source  = "../module"
  project = local.project
  region  = local.region
  domain  = local.domain
}
