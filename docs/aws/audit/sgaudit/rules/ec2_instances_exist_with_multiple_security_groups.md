---
slug: ec2_instances_exist_with_multiple_security_groups
title: Excessive Number of Security Groups Should Not Be Present
sidebar_label: Excessive Number of Security Groups Should Not Be Present
---
> [Back](../../sgaudit)

### More Info:
There should not be an excessive number of security groups in the account. AWS applies the most permissive rule amongst all the Security Groups assigned to any EC2 instance.

### Risk Level
Medium

### Address
Security

### Compliance Standards
CBP, NIST, MAS, APRA

### Additional Reading:
- [http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/authorizing-access-to-an-instance.html](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/authorizing-access-to-an-instance.html) 
