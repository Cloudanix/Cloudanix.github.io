---
slug: s3_encrypted_with_cmks
title: S3 Buckets Should Be Encrypted with Customer-Provided CMKs
sidebar_label: S3 Buckets Should Be Encrypted with Customer-Provided CMKs
---
> [Back](../../s3publiccheck)

### More Info:
AWS S3 buckets should be configured to use Server-Side Encryption with customer managed CMKs instead of S3-Managed Keys (SSE-S3) in order to obtain a fine-grained control over Amazon S3 data-at-rest encryption and decryption process.

### Risk Level
Medium

### Address
Security

### Compliance Standards
GDPR, APRA, NIST

### Additional Reading:
- [https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html) 
