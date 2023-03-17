---
slug: cloudfront_origin_access_s3_origins
title: Origin Access Identity Should Be Enabled For CloudFront Distributions
sidebar_label: Origin Access Identity Should Be Enabled For CloudFront Distributions
---
> [Back](../../cloudfrontmonitoring)

### More Info:
The origin access identity feature should be enabled for all your AWS Cloudfront CDN distributions that utilize an S3 bucket as an origin in order to restrict any direct access to your objects through Amazon S3 URLs.

### Risk Level
Medium

### Address
Security

### Compliance Standards
CBP

### Additional Reading:
- [https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html)