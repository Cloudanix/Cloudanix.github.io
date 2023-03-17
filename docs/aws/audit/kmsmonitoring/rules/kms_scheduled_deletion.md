---
slug: kms_scheduled_deletion
title: KMS Keys Scheduled For Deletion Should Be Recovered
sidebar_label: KMS Keys Scheduled For Deletion Should Be Recovered
---
> [Back](../../kmsmonitoring)

### More Info:
Any disabled AWS KMS Customer Master Keys (CMK) that have been accidentally or intentionally scheduled for deletion should be recovered in order to prevent losing any data encrypted with these keys.

### Risk Level
Medium

### Address
Reliability

### Compliance Standards
APRA, MAS, NIST

### Additional Reading:
- [http://docs.aws.amazon.com/kms/latest/developerguide/deleting-keys.html](http://docs.aws.amazon.com/kms/latest/developerguide/deleting-keys.html) 
