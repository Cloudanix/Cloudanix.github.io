---
slug: azure_audit_monitor_alerts_for_vm_delete_events
title: Setup Alerts for Delete Virtual Machine Events
sidebar_label: Setup Alerts for Delete Virtual Machine Events
---
> [Back](../../azuremonitoraudit)

### More Info:
Ensure that a Microsoft Azure activity log alert is fired whenever a 'Delete Virtual Machine' event is triggered within your cloud account. An Azure activity log alert fires each time the action event that matches the condition specified in the alert configuration is triggered. The alert condition that this rule searches for is `Whenever the Administrative Activity Log 'Delete Virtual Machine (Microsoft.Compute/virtualMachines)' has 'any' level, with 'any' status and event is initiated by 'any'`

### Risk Level
High

### Address
Security

### Compliance Standards
CBP, CISMicrosoftAzureFoundations

### Additional Reading:
- [https://docs.microsoft.com/en-us/azure/azure-monitor/platform/alerts-activity-log](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/alerts-activity-log) 
- [https://docs.microsoft.com/en-us/azure/azure-monitor/platform/alerts-log](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/alerts-log) 