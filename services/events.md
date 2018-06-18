| Action | Description | Resource | Condition |
| --- | --- | --- | --- |
| [events:DeleteRule](http://docs.aws.amazon.com/AmazonCloudWatchEvents/latest/APIReference/API_DeleteRule.html) | Deletes a rule. | arn:$partition:events:$region:$account:rule/$rulename | ??? |
| [events:DescribeRule](http://docs.aws.amazon.com/AmazonCloudWatchEvents/latest/APIReference/API_DescribeRule.html) | Describes the details of the specified rule. | arn:$partition:events:$region:$account:rule/$rulename | ??? |
| [events:DisableRule](http://docs.aws.amazon.com/AmazonCloudWatchEvents/latest/APIReference/API_DisableRule.html) | Disables a rule. | arn:$partition:events:$region:$account:rule/$rulename | ??? |
| [events:EnableRule](http://docs.aws.amazon.com/AmazonCloudWatchEvents/latest/APIReference/API_EnableRule.html) | Enables a rule. | arn:$partition:events:$region:$account:rule/$rulename | ??? |
| [events:ListRuleNamesByTarget](http://docs.aws.amazon.com/AmazonCloudWatchEvents/latest/APIReference/API_ListRuleNamesByTarget.html) | Lists the names of the rules that the given target is put to. | arn:$partition:events:$region:$account:rule/$rulename | ??? |
| [events:ListRules](http://docs.aws.amazon.com/AmazonCloudWatchEvents/latest/APIReference/API_ListRules.html) | Lists the Amazon CloudWatch Events rules in your account. | arn:$partition:events:$region:$account:rule/$rulename | ??? |
| [events:ListTargetsByRule](http://docs.aws.amazon.com/AmazonCloudWatchEvents/latest/APIReference/API_ListTargetsByRule.html) | Lists of targets assigned to the rule. | arn:$partition:events:$region:$account:rule/$rulename | ??? |
| [events:PutEvents](http://docs.aws.amazon.com/AmazonCloudWatchEvents/latest/APIReference/API_PutEvents.html) | Sends custom events to Amazon CloudWatch Events so that they can be matched to rules. | * | ??? |
| [events:PutRule](http://docs.aws.amazon.com/AmazonCloudWatchEvents/latest/APIReference/API_PutRule.html) | Creates or updates a rule. | * | events:source, events:detail-type, events:detail.userIdentity.principalId, events:TargetArn |
| [events:PutTargets](http://docs.aws.amazon.com/AmazonCloudWatchEvents/latest/APIReference/API_PutTargets.html) | Adds target(s) to a rule. | * | ??? |
| [events:RemoveTargets](http://docs.aws.amazon.com/AmazonCloudWatchEvents/latest/APIReference/API_RemoveTargets.html) | Removes target(s) from a rule so that when the rule is triggered, those targets will no longer be invoked. | arn:$partition:events:$region:$account:rule/$rulename | ??? |
| [events:TestEventPattern](http://docs.aws.amazon.com/AmazonCloudWatchEvents/latest/APIReference/API_TestEventPattern.html) | Tests whether an event pattern matches the provided event. | * | ??? |
