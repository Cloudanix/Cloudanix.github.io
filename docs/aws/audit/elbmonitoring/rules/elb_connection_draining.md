---
slug: elb_connection_draining
title: ELBs Should Have Connection Draining Enabled
sidebar_label: ELBs Should Have Connection Draining Enabled
---
> [Back](../../elbmonitoring)

### More Info:
Elastic Load Balancer should not send any new requests to the unhealthy instance if an EC2 backend instance fails health checks

### Risk Level
Medium

### Address
Reliability

### Compliance Standards
CBP

### Additional Reading:
- [https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-conn-drain.html](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-conn-drain.html) 