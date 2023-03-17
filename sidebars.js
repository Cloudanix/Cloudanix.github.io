/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  sidebar: {
    'Getting Started': ['home'],
    AWS: [
      {
        "type": "category",
        "label": "Introduction",
        "items":['aws/aws-authentication'],
      },
      {
        "type": "category",
        "label": "Audit",
        "items":[
          'aws/audit/aws-audit',
          'aws/audit/aws-audit-permissions',
          'aws/audit/audit-manual-run',
          'aws/audit/apigatewaymonitoring',
          'aws/audit/cloudformationmonitoring',
          'aws/audit/cloudfrontmonitoring',
          'aws/audit/cloudtrailmonitoring',
          'aws/audit/cloudwatchmonitoring',
          'aws/audit/dynamodbmonitoring',
          'aws/audit/ec2monitoring',
          'aws/audit/esmonitoring',
          'aws/audit/elbmonitoring',
          'aws/audit/iamcompliance',
          'aws/audit/kmsmonitoring',
          'aws/audit/kubernetesmonitoring',
          'aws/audit/lambdamonitoring',
          'aws/audit/rdsmonitoring',
          'aws/audit/redshiftmonitoring',
          'aws/audit/route53monitoring',
          'aws/audit/s3publiccheck',
          'aws/audit/sgaudit',
          'aws/audit/sesmonitoring',
          'aws/audit/snsmonitoring'],
      },
      {
        "type": "category",
        "label": "Resources",
        "items":['aws/aws-resources-for-pricing'],
      }
    ],
    Azure: [
      {
        "type": "category",
        "label": "Introduction",
        "items":['azure/azure-authentication'],
      },
      {
        "type": "category",
        "label": "Audit",
        "items":[
          'azure/audit/azure-audit',
          'azure/audit/azureappserviceaudit',
          'azure/audit/azurecomputeaudit',
          'azure/audit/azureiamaudit',
          'azure/audit/azurenetworkaudit',
          'azure/audit/azuresecuritycenteraudit',
          'azure/audit/azuresqlaudit',
          'azure/audit/azurestorageaudit',
          'azure/audit/azurekeyvaultaudit',
          'azure/audit/azuremonitoraudit'
          ],
      },
      {
        "type": "category",
        "label": "Resources",
        "items":['azure/azure-resources-for-pricing'],
      }
    ],
    GCP: [
      {
        "type": "category",
        "label": "Introduction",
        "items":['gcp/gcp-authentication'],
      },
      {
        "type": "category",
        "label": "Audit",
        "items":[
          'gcp/audit/gcp-audit',
          'gcp/audit/gcpsqlmonitoring',
          'gcp/audit/gcpcomputemonitoring',
          'gcp/audit/gcpiamcompliance',
          'gcp/audit/gcpkubemonitoring',
          'gcp/audit/gcpstoragemonitoring',
          'gcp/audit/gcpvpcmonitoring'
          ],
      },
      {
        "type": "category",
        "label": "Resources",
        "items":['gcp/gcp-resources-for-pricing'],
      }
    ],
    Github: [
      {
        "type": "category",
        "label": "Introduction",
        "items":['github/github-authentication'],
      },
      {
        "type": "category",
        "label": "Recipes",
        "items":['github/audit/github-audit','github/audit/ghiam']
      }
    ],
    Features: [{
      "type": "category",
      "label": "Collaboration",
      "items":['features/collaboration/team'],
    },],
    'Release': ['release/updates'],
  },
};
