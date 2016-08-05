| Action | Description | Resource | Condition |
| --- | --- | --- | --- |
| [ses:CloneReceiptRuleSet](http://docs.aws.amazon.com/ses/latest/APIReference/API_CloneReceiptRuleSet.html) | Creates a receipt rule set by cloning an existing one. | ??? | - |
| [ses:CreateReceiptFilter](http://docs.aws.amazon.com/ses/latest/APIReference/API_CreateReceiptFilter.html) | Creates a new IP address filter. | ??? | - |
| [ses:CreateReceiptRule](http://docs.aws.amazon.com/ses/latest/APIReference/API_CreateReceiptRule.html) | Creates a receipt rule. | ??? | - |
| [ses:CreateReceiptRuleSet](http://docs.aws.amazon.com/ses/latest/APIReference/API_CreateReceiptRuleSet.html) | Creates an empty receipt rule set. | ??? | - |
| [ses:DeleteIdentity](http://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteIdentity.html) | Deletes the specified identity (an email address or a domain) from the list of verified identities. | ??? | - |
| [ses:DeleteIdentityPolicy](http://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteIdentityPolicy.html) | Deletes the specified sending authorization policy for the given identity (an email address or a domain). | ??? | - |
| [ses:DeleteReceiptFilter](http://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteReceiptFilter.html) | Deletes the specified IP address filter. | ??? | - |
| [ses:DeleteReceiptRule](http://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteReceiptRule.html) | Deletes the specified receipt rule. | ??? | - |
| [ses:DeleteReceiptRuleSet](http://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteReceiptRuleSet.html) | Deletes the specified receipt rule set and all of the receipt rules it contains. | ??? | - |
| [ses:DeleteVerifiedEmailAddress](http://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteVerifiedEmailAddress.html) | Deletes the specified email address from the list of verified addresses. | ??? | - |
| [ses:DescribeActiveReceiptRuleSet](http://docs.aws.amazon.com/ses/latest/APIReference/API_DescribeActiveReceiptRuleSet.html) | Returns the metadata and receipt rules for the receipt rule set that is currently active. | ??? | - |
| [ses:DescribeReceiptRule](http://docs.aws.amazon.com/ses/latest/APIReference/API_DescribeReceiptRule.html) | Returns the details of the specified receipt rule. | ??? | - |
| [ses:DescribeReceiptRuleSet](http://docs.aws.amazon.com/ses/latest/APIReference/API_DescribeReceiptRuleSet.html) | Returns the details of the specified receipt rule set. | ??? | - |
| [ses:GetIdentityDkimAttributes](http://docs.aws.amazon.com/ses/latest/APIReference/API_GetIdentityDkimAttributes.html) | Returns the current status of Easy DKIM signing for an entity. | ??? | - |
| [ses:GetIdentityNotificationAttributes](http://docs.aws.amazon.com/ses/latest/APIReference/API_GetIdentityNotificationAttributes.html) | Given a list of verified identities (email addresses and/or domains), returns a structure describing identity notification attributes. | ??? | - |
| [ses:GetIdentityPolicies](http://docs.aws.amazon.com/ses/latest/APIReference/API_GetIdentityPolicies.html) | Returns the requested sending authorization policies for the given identity (an email address or a domain). | ??? | - |
| [ses:GetIdentityVerificationAttributes](http://docs.aws.amazon.com/ses/latest/APIReference/API_GetIdentityVerificationAttributes.html) | Given a list of identities (email addresses and/or domains), returns the verification status and (for domain identities) the verification token for each identity. | ??? | - |
| [ses:GetSendQuota](http://docs.aws.amazon.com/ses/latest/APIReference/API_GetSendQuota.html) | Returns the user's current sending limits. | ??? | - |
| [ses:GetSendStatistics](http://docs.aws.amazon.com/ses/latest/APIReference/API_GetSendStatistics.html) | Returns the user's sending statistics. | ??? | - |
| [ses:ListIdentities](http://docs.aws.amazon.com/ses/latest/APIReference/API_ListIdentities.html) | Returns a list containing all of the identities (email addresses and domains) for your AWS account, regardless of verification status. | ??? | - |
| [ses:ListIdentityPolicies](http://docs.aws.amazon.com/ses/latest/APIReference/API_ListIdentityPolicies.html) | Returns a list of sending authorization policies that are attached to the given identity (an email address or a domain). | ??? | - |
| [ses:ListReceiptFilters](http://docs.aws.amazon.com/ses/latest/APIReference/API_ListReceiptFilters.html) | Lists the IP address filters associated with your AWS account. | ??? | - |
| [ses:ListReceiptRuleSets](http://docs.aws.amazon.com/ses/latest/APIReference/API_ListReceiptRuleSets.html) | Lists the receipt rule sets that exist under your AWS account. | ??? | - |
| [ses:ListVerifiedEmailAddresses](http://docs.aws.amazon.com/ses/latest/APIReference/API_ListVerifiedEmailAddresses.html) | Returns a list containing all of the email addresses that have been verified. | ??? | - |
| [ses:PutIdentityPolicy](http://docs.aws.amazon.com/ses/latest/APIReference/API_PutIdentityPolicy.html) | Adds or updates a sending authorization policy for the specified identity (an email address or a domain). | ??? | - |
| [ses:ReorderReceiptRuleSet](http://docs.aws.amazon.com/ses/latest/APIReference/API_ReorderReceiptRuleSet.html) | Reorders the receipt rules within a receipt rule set. | ??? | - |
| [ses:SendBounce](http://docs.aws.amazon.com/ses/latest/APIReference/API_SendBounce.html) | Generates and sends a bounce message to the sender of an email you received through Amazon SES. | ??? | ses:FromAddress |
| [ses:SendEmail](http://docs.aws.amazon.com/ses/latest/APIReference/API_SendEmail.html) | Composes an email message based on input data, and then immediately queues the message for sending. | arn:aws:ses:$region:$account-id:identity/$identity | ses:Recipients, ses:FromAddress, ses:FromDisplayName, ses:FeedbackAddress |
| [ses:SendRawEmail](http://docs.aws.amazon.com/ses/latest/APIReference/API_SendRawEmail.html) | Sends an email message, with header and content specified by the client. | arn:aws:ses:$region:$account-id:identity/$identity | ses:Recipients, ses:FromAddress, ses:FromDisplayName, ses:FeedbackAddress |
| [ses:SetActiveReceiptRuleSet](http://docs.aws.amazon.com/ses/latest/APIReference/API_SetActiveReceiptRuleSet.html) | Sets the specified receipt rule set as the active receipt rule set. | ??? | - |
| [ses:SetIdentityDkimEnabled](http://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityDkimEnabled.html) | ??? | ??? | - |
| [ses:SetIdentityNotificationTopic](http://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityNotificationTopic.html) | Given an identity (an email address or a domain), sets the Amazon Simple Notification Service (Amazon SNS) topic to which Amazon SES will publish bounce, complaint, and/or delivery notifications for emails sent with that identity as the Source. | ??? | - |
| [ses:SetIdentityFeedbackForwardingEnabled](http://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityFeedbackForwardingEnabled.html) | Given an identity (an email address or a domain), enables or disables whether Amazon SES forwards bounce and complaint notifications as email. | ??? | - |
| [ses:SetReceiptRulePosition](http://docs.aws.amazon.com/ses/latest/APIReference/API_SetReceiptRulePosition.html) | Sets the position of the specified receipt rule in the receipt rule set. | ??? | - |
| [ses:UpdateReceiptRule](http://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateReceiptRule.html) | Updates a receipt rule. | ??? | - |
| [ses:VerifyDomainDkim](http://docs.aws.amazon.com/ses/latest/APIReference/API_VerifyDomainDkim.html) | Returns a set of DKIM tokens for a domain. | ??? | - |
| [ses:VerifyDomainIdentity](http://docs.aws.amazon.com/ses/latest/APIReference/API_VerifyDomainIdentity.html) | Verifies a domain. | ??? | - |
| [ses:VerifyEmailAddress](http://docs.aws.amazon.com/ses/latest/APIReference/API_VerifyEmailAddress.html) | Verifies an email address. | ??? | - |
| [ses:VerifyEmailIdentity](http://docs.aws.amazon.com/ses/latest/APIReference/API_VerifyEmailIdentity.html) | Verifies an email address. | ??? | -|

