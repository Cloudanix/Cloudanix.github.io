---
slug: multiple_functions_with_same_iam
title: Multiple Functions Should Not Have The Same IAM Role
sidebar_label: Multiple Functions Should Not Have The Same IAM Role
---
> [Back](../../lambdamonitoring)

### More Info:
Amazon Lambda functions should not share the same AWS IAM execution role in order to promote the Principle of Least Privilege (POLP) by providing each individual function the minimal amount of access required to perform its tasks.

### Risk Level
High

### Address
Security

### Compliance Standards
CBP

### Additional Reading:
- [https://docs.aws.amazon.com/lambda/latest/dg/lambda-permissions.html](https://docs.aws.amazon.com/lambda/latest/dg/lambda-permissions.html) 

