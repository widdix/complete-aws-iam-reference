| Action | Description | Resource | Condition |
| --- | --- | --- | - |
| [cloudtrail:AddTags](http://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_AddTags.html) | Adds one or more tags to a trail, up to a limit of 50. | ??? | - |
| [cloudtrail:CreateTrail](http://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_CreateTrail.html) | Creates a trail that specifies the settings for delivery of log data to an Amazon S3 bucket. | ??? | - |
| [cloudtrail:DeleteTrail](http://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DeleteTrail.html) | Deletes a trail. | ??? | - |
| [cloudtrail:DescribeTrails](http://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DescribeTrails.html) | Retrieves settings for the trail associated with the current region for your account. | ??? | - |
| [cloudtrail:GetTrailStatus](http://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetTrailStatus.html) | Returns a JSON-formatted list of information about the specified trail. | ??? | - |
| [cloudtrail:ListPublicKeys](http://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListPublicKeys.html) | Returns all public keys whose private keys were used to sign the digest files within the specified time range. | ??? | - |
| [cloudtrail:ListTags](http://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListTags.html) | Lists the tags for the trail in the current region. | ??? | - |
| [cloudtrail:LookupEvents](http://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_LookupEvents.html) | Looks up API activity events captured by CloudTrail that create, update, or delete resources in your account. | ??? | - |
| [cloudtrail:RemoveTags](http://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_RemoveTags.html) | Removes the specified tags from a trail. | ??? | - |
| [cloudtrail:StartLogging](http://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_StartLogging.html) | Starts the recording of AWS API calls and log file delivery for a trail. | arn:aws:cloudtrail:$region:$account:trail/$trailname | - |
| [cloudtrail:StopLogging](http://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_StopLogging.html) | Suspends the recording of AWS API calls and log file delivery for the specified trail. | arn:aws:cloudtrail:$region:$account:trail/$trailname | - |
| [cloudtrail:UpdateTrail](http://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_UpdateTrail.html) | Updates the settings that specify delivery of log files. | ??? | - |
