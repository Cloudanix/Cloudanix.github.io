---
slug: k8s_default_service_account
title: Default Service Accounts Should Not Be Used
sidebar_label: Default Service Accounts Should Not Be Used
---
> [Back](../../gcpkubemonitoring)

### More Info:
Ensure Kubernetes cluster nodes do use the default service account. Kubernetes cluster nodes should use customized service accounts that have minimal privileges to run. This reduces the attack surface in the case of a malicious attack on the cluster.

### Risk Level
High

### Address
Security

### Compliance Standards
PCIDSS, APRA, MAS

### Additional Reading:
- [https://cloud.google.com/container-optimized-os/](https://cloud.google.com/container-optimized-os/) 
