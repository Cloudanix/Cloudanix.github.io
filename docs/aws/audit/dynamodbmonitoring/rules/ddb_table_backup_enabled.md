---
slug: ddb_table_backup_enabled
title: DynamoDB Tables Should Have Continuous Backup Enabled
sidebar_label: DynamoDB Tables Should Have Continuous Backup Enabled
---
> [Back](../../dynamodbmonitoring)

### More Info:
DynamoDB table without backup can result in accidental data loss. Your AWS DynamoDB tables should make use of Point-in-time Recovery (PITR) feature in order to automatically take continuous backups of your DynamoDB data.

### Risk Level
Medium

### Address
Reliability

### Compliance Standards
SOC2, CBP, PCIDSS

### Additional Reading:
- [https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/PointInTimeRecovery.html](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/PointInTimeRecovery.html) 
