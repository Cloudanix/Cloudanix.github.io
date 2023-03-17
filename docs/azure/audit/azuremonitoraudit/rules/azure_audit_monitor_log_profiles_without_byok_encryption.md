---
slug: azure_audit_monitor_log_profiles_without_byok_encryption
title: Ensure Storage Account container containing the logs is encrypted with BYOK
sidebar_label: Ensure Storage Account container containing the logs is encrypted with BYOK
---
> [Back](../../azuremonitoraudit)

### More Info:
Configuring the storage account with the activity log export container to use BYOK (Use Your Own Key) provides additional confidentiality controls on log data as a given user must have read permission on the corresponding storage account and must be granted decrypt permission by the CMK.

### Risk Level
Low

### Address
Security, Operational Maturity

### Compliance Standards
CBP, CISMicrosoftAzureFoundations, NIST, SOC2, ISO27001, SOC1, HIPAA

### Additional Reading:
- [https://docs.microsoft.com/en-us/cli/azure/monitor/log-profiles?view=azure-cli-latest%23az-monitor-log-profiles-update](https://docs.microsoft.com/en-us/cli/azure/monitor/log-profiles?view=azure-cli-latest%23az-monitor-log-profiles-update) 
