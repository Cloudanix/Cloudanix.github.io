---
slug: kms_web_tier
title: Web-tier KMS Key Should Be In Use
sidebar_label: Web-tier KMS Key Should Be In Use
---
> [Back](../../kmsmonitoring)

### More Info:
There should be one Amazon KMS Customer Master Key (CMK) created in your AWS account for the web tier in order to protect data that transits your AWS web stack, have full control over data encryption/decryption process, and meet compliance requirements.

### Risk Level
Medium

### Address
Security

### Compliance Standards
APRA, MAS

### Additional Reading:
- [https://docs.aws.amazon.com/kms/latest/developerguide/best-practices.html](https://docs.aws.amazon.com/kms/latest/developerguide/best-practices.html) 
