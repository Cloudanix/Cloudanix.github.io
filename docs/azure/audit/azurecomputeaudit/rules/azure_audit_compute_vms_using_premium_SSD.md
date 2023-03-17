---
slug: azure_audit_compute_vms_using_premium_SSD
title: Virtual Machines should user Standard SSD for Cost Effective storage
sidebar_label: Virtual Machines should user Standard SSD for Cost Effective storage
---
> [Back](../../azurecomputeaudit)

### More Info:
Ensure that your Microsoft Azure virtual machines (VMs) are using Standard SSD disk volumes instead of Premium SSD volumes for cost-effective storage that fits a broad range of workloads from web servers to enterprise applications that need consistent performance at lower IOPS levels. Unless you are running mission-critical applications or performance sensitive workloads that need more than 6000 IOPS or 750 MiB/s of throughput per VM disk volume, it's recommends converting your Premium SSD volumes to Standard SSD in order to lower the cost of your Azure monthly bill.

### Risk Level
High

### Address
Cost Optimization

### Compliance Standards
CBP, CISMicrosoftAzureFoundations

### Additional Reading:
- [https://docs.microsoft.com/en-us/azure/virtual-machines/windows/convert-disk-storage](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/convert-disk-storage) 
