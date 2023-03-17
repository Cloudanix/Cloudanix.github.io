---
slug: serial_ports_disabled
title: Serial Ports Connection Should Be Disabled
sidebar_label: Serial Ports Connection Should Be Disabled
---
> [Back](../../gcpcomputemonitoring)

### More Info:
Serial ports connection should not be enabled for VM instances. As serial console does not allow restricting IP Addresses, so then it allows any IP address to connect to instance and should therefore be disabled.

### Risk Level
Low

### Address
Security

### Compliance Standards
ARPA, MAS, CIS

### Additional Reading:
- [https://cloud.google.com/compute/docs/instances/interacting-with-serial-console](https://cloud.google.com/compute/docs/instances/interacting-with-serial-console) 