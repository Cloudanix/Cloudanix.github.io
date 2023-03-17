---
slug: ec2_instances_exist_with_default_groups_and_public
title: Default Security Group Should Not Be Publicly Accessible
sidebar_label: Default Security Group Should Not Be Publicly Accessible
---
> [Back](../../sgaudit)

### More Info:
Default security groups should block all traffic by default. EC2 instances should not be associated with default security groups with public access.

### Risk Level
Medium

### Address
Security

### Compliance Standards
CBP, NIST, MAS, APRA

### Additional Reading:
- [http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html#default-security-group](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html#default-security-group) 
