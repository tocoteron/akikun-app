locals {
  project = "akikun-prd"
  region  = "asia-northeast1"
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
}
