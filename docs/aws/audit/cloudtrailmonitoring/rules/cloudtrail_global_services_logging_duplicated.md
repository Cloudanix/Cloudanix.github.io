---
slug: cloudtrail_global_services_logging_duplicated
title: Duplicate Entries Should Be Avoided In CloudTrail Logs
sidebar_label: Duplicate Entries Should Be Avoided In CloudTrail Logs
---
> [Back](../../cloudtrailmonitoring)

### More Info:
Only one trail within a CloudTrail multi-region logging configuration should have Include Global Services feature enabled in order to avoid duplicate log events being recorded for the AWS global services such as IAM, STS or Cloudfront.

### Risk Level
Medium

### Address
Security

### Compliance Standards
APRA, MAS, NIST

### Additional Reading:
- [https://aws.amazon.com/premiumsupport/knowledge-center/remove-duplicate-cloudtrail-events/](https://aws.amazon.com/premiumsupport/knowledge-center/remove-duplicate-cloudtrail-events/) 
