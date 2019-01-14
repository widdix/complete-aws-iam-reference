| Action | Description | Resource | Condition |
| --- | --- | --- | --- |
| [iot:AcceptCertificateTransfer](http://docs.aws.amazon.com/iot/latest/apireference/API_AcceptCertificateTransfer.html) | Accepts a pending certificate transfer. | ??? | - |
| [iot:AttachPrincipalPolicy](http://docs.aws.amazon.com/iot/latest/apireference/API_AttachPrincipalPolicy.html) | Attaches the specified policy to the specified principal (certificate or other credential). | ??? | - |
| [iot:AttachThingPrincipal](http://docs.aws.amazon.com/iot/latest/apireference/API_AttachThingPrincipal.html) | Attaches the specified principal to the specified thing. | ??? | - |
| [iot:CancelCertificateTransfer](http://docs.aws.amazon.com/iot/latest/apireference/API_CancelCertificateTransfer.html) | Cancels a pending transfer for the specified certificate. | ??? | - |
| [iot:Connect](http://docs.aws.amazon.com/iot/latest/apireference/API_Connect.html) | The Connect permission is checked every time a connect request is sent to the broker. The message broker does not allow two clients with the same client ID to stay connected at the same time. After the second client connects, the broker detects this case and disconnects one of the clients. The Connect permission can be used to ensure only authorized clients can connect using a specific client ID. | arn:aws:iot:$region:$account:client/${iot:ClientId}, arn:aws:iot:$region:$account:client/$client-id | - |
| [iot:CreateCertificateFromCsr](http://docs.aws.amazon.com/iot/latest/apireference/API_CreateCertificateFromCsr.html) | Creates an X. | ??? | - |
| [iot:CreateKeysAndCertificate](http://docs.aws.amazon.com/iot/latest/apireference/API_CreateKeysAndCertificate.html) | Creates a 2048-bit RSA key pair and issues an X. | ??? | - |
| [iot:CreatePolicy](http://docs.aws.amazon.com/iot/latest/apireference/API_CreatePolicy.html) | Creates an AWS IoT policy. | ??? | - |
| [iot:CreatePolicyVersion](http://docs.aws.amazon.com/iot/latest/apireference/API_CreatePolicyVersion.html) | Creates a new version of the specified AWS IoT policy. | ??? | - |
| [iot:CreateThing](http://docs.aws.amazon.com/iot/latest/apireference/API_CreateThing.html) | Creates a thing record in the thing registry. | ??? | - |
| [iot:CreateTopicRule](http://docs.aws.amazon.com/iot/latest/apireference/API_CreateTopicRule.html) | Creates a rule. | ??? | - |
| [iot:DeleteCertificate](http://docs.aws.amazon.com/iot/latest/apireference/API_DeleteCertificate.html) | Deletes the specified certificate. | ??? | - |
| [iot:DeletePolicy](http://docs.aws.amazon.com/iot/latest/apireference/API_DeletePolicy.html) | Deletes the specified policy. | ??? | - |
| [iot:DeletePolicyVersion](http://docs.aws.amazon.com/iot/latest/apireference/API_DeletePolicyVersion.html) | Deletes the specified version of the specified policy. | ??? | - |
| [iot:DeleteThing](http://docs.aws.amazon.com/iot/latest/apireference/API_DeleteThing.html) | Deletes the specified thing. | ??? | - |
| [iot:DeleteThingShadow](http://docs.aws.amazon.com/iot/latest/apireference/API_DeleteThingShadow.html) | The DeleteThingShadow permission is checked every time a request is made to delete the thing shadow document. | arn:aws:iot:$region:$account:thing/$thing-name | - |
| [iot:DeleteTopicRule](http://docs.aws.amazon.com/iot/latest/apireference/API_DeleteTopicRule.html) | Deletes the specified rule. | ??? | - |
| [iot:DescribeCertificate](http://docs.aws.amazon.com/iot/latest/apireference/API_DescribeCertificate.html) | Gets information about the specified certificate. | ??? | - |
| [iot:DescribeEndpoint](http://docs.aws.amazon.com/iot/latest/apireference/API_DescribeEndpoint.html) | Returns a unique endpoint specific to the AWS account making the call. | ??? | - |
| [iot:DescribeThing](http://docs.aws.amazon.com/iot/latest/apireference/API_DescribeThing.html) | Gets information about the specified thing. | ??? | - |
| [iot:DetachPrincipalPolicy](http://docs.aws.amazon.com/iot/latest/apireference/API_DetachPrincipalPolicy.html) | Removes the specified policy from the specified certificate. | ??? | - |
| [iot:DetachThingPrincipal](http://docs.aws.amazon.com/iot/latest/apireference/API_DetachThingPrincipal.html) | Detaches the specified principal from the specified thing. | ??? | - |
| [iot:GetLoggingOptions](http://docs.aws.amazon.com/iot/latest/apireference/API_GetLoggingOptions.html) | Gets the logging options. | ??? | - |
| [iot:GetPolicy](http://docs.aws.amazon.com/iot/latest/apireference/API_GetPolicy.html) | Gets information about the specified policy with the policy document of the default version. | ??? | - |
| [iot:GetPolicyVersion](http://docs.aws.amazon.com/iot/latest/apireference/API_GetPolicyVersion.html) | Gets information about the specified policy version. | ??? | - |
| [iot:GetThingShadow](http://docs.aws.amazon.com/iot/latest/apireference/API_GetThingShadow.html) | The GetThingShadow permission is checked every time a request is made to get the state of a thing shadow document. | arn:aws:iot:$region:$account:thing/$thing-name | - |
| [iot:GetTopicRule](http://docs.aws.amazon.com/iot/latest/apireference/API_GetTopicRule.html) | Gets information about the specified rule. | ??? | - |
| [iot:ListCertificates](http://docs.aws.amazon.com/iot/latest/apireference/API_ListCertificates.html) | Lists the certificates registered in your AWS account. | ??? | - |
| [iot:ListPolicies](http://docs.aws.amazon.com/iot/latest/apireference/API_ListPolicies.html) | Lists your policies. | ??? | - |
| [iot:ListPolicyVersions](http://docs.aws.amazon.com/iot/latest/apireference/API_ListPolicyVersions.html) | Lists the versions of the specified policy and identifies the default version. | ??? | - |
| [iot:ListPrincipalPolicies](http://docs.aws.amazon.com/iot/latest/apireference/API_ListPrincipalPolicies.html) | Lists the policies attached to the specified principal. | ??? | - |
| [iot:ListPrincipalThings](http://docs.aws.amazon.com/iot/latest/apireference/API_ListPrincipalThings.html) | Lists the things associated with the specified principal. | ??? | - |
| [iot:ListThingPrincipals](http://docs.aws.amazon.com/iot/latest/apireference/API_ListThingPrincipals.html) | Lists the principals associated with the specified thing. | ??? | - |
| [iot:ListThings](http://docs.aws.amazon.com/iot/latest/apireference/API_ListThings.html) | Lists your things. | ??? | - |
| [iot:ListTopicRules](http://docs.aws.amazon.com/iot/latest/apireference/API_ListTopicRules.html) | Lists the rules for the specific topic. | ??? | - |
| [iot:Publish](http://docs.aws.amazon.com/iot/latest/apireference/API_Publish.html) | The Publish permission is checked every time a publish request is sent to the broker. The Publish action is used to allow clients to publish to specific topic patterns. | arn:aws:iot:$region:$account:topic/$topic-name | - |
| [iot:Receive](http://docs.aws.amazon.com/iot/latest/apireference/API_Receive.html) | The Receive permission is checked every time a message is delivered to a client. Because the Receive permission is checked on every delivery, it can be used to revoke permissions to clients that are currently subscribed to a topic. | arn:aws:iot:$region:$account:topic/$topic-name | - |
| [iot:RejectCertificateTransfer](http://docs.aws.amazon.com/iot/latest/apireference/API_RejectCertificateTransfer.html) | Rejects a pending certificate transfer. | ??? | - |
| [iot:ReplaceTopicRule](http://docs.aws.amazon.com/iot/latest/apireference/API_ReplaceTopicRule.html) | Replaces the specified rule. | ??? | - |
| [iot:SetDefaultPolicyVersion](http://docs.aws.amazon.com/iot/latest/apireference/API_SetDefaultPolicyVersion.html) | Sets the specified version of the specified policy as the policy's default (operative) version. | ??? | - |
| [iot:SetLoggingOptions](http://docs.aws.amazon.com/iot/latest/apireference/API_SetLoggingOptions.html) | Sets the logging options. | ??? | - |
| [iot:Subscribe](http://docs.aws.amazon.com/iot/latest/apireference/API_Subscribe.html) | The Subscribe permission is checked every time a subscribe request is sent to the broker. The Subscribe action is used to allow clients to subscribe to topics that match specific topic patterns. | arn:aws:iot:$region:$account:topicfilter/$topic-filter | - |
| [iot:TransferCertificate](http://docs.aws.amazon.com/iot/latest/apireference/API_TransferCertificate.html) | Transfers the specified certificate to the specified AWS account. | ??? | - |
| [iot:UpdateCertificate](http://docs.aws.amazon.com/iot/latest/apireference/API_UpdateCertificate.html) | Updates the status of the specified certificate. | ??? | - |
| [iot:UpdateThing](http://docs.aws.amazon.com/iot/latest/apireference/API_UpdateThing.html) | Updates the data for a thing. | ??? | - |
| [iot:UpdateThingShadow](http://docs.aws.amazon.com/iot/latest/apireference/API_UpdateThingShadow.html) | The UpdateThingShadow permission is checked every time a request is made to update the state of a thing shadow document. | arn:aws:iot:$region:$account:thing/$thing-name | - |

