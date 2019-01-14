| Action | Description | Resource | Condition |
| --- | --- | --- | --- |
| [sns:AddPermission](http://docs.aws.amazon.com/sns/latest/api/API_AddPermission.html) | Adds a statement to a topic's access control policy, granting access for the specified AWS accounts to the specified actions. | ??? | ??? |
| [sns:ConfirmSubscription](http://docs.aws.amazon.com/sns/latest/api/API_ConfirmSubscription.html) | Verifies an endpoint owner's intent to receive messages by validating the token sent to the endpoint by an earlier Subscribe action. | ??? | ??? |
| [sns:CreatePlatformApplication](http://docs.aws.amazon.com/sns/latest/api/API_CreatePlatformApplication.html) | Creates a platform application object for one of the supported push notification services, such as APNS and GCM, to which devices and mobile apps may register. | ??? | ??? |
| [sns:CreatePlatformEndpoint](http://docs.aws.amazon.com/sns/latest/api/API_CreatePlatformEndpoint.html) | Creates an endpoint for a device and mobile app on one of the supported push notification services, such as GCM and APNS. | ??? | ??? |
| [sns:CreateTopic](http://docs.aws.amazon.com/sns/latest/api/API_CreateTopic.html) | Creates a topic to which notifications can be published. | ??? | ??? |
| [sns:DeleteEndpoint](http://docs.aws.amazon.com/sns/latest/api/API_DeleteEndpoint.html) | Deletes the endpoint for a device and mobile app from Amazon SNS. | ??? | ??? |
| [sns:DeletePlatformApplication](http://docs.aws.amazon.com/sns/latest/api/API_DeletePlatformApplication.html) | Deletes a platform application object for one of the supported push notification services, such as APNS and GCM. | ??? | ??? |
| [sns:DeleteTopic](http://docs.aws.amazon.com/sns/latest/api/API_DeleteTopic.html) | Deletes a topic and all its subscriptions. | ??? | ??? |
| [sns:GetEndpointAttributes](http://docs.aws.amazon.com/sns/latest/api/API_GetEndpointAttributes.html) | Retrieves the endpoint attributes for a device on one of the supported push notification services, such as GCM and APNS. | ??? | ??? |
| [sns:GetPlatformApplicationAttributes](http://docs.aws.amazon.com/sns/latest/api/API_GetPlatformApplicationAttributes.html) | Retrieves the attributes of the platform application object for the supported push notification services, such as APNS and GCM. | ??? | ??? |
| [sns:GetSubscriptionAttributes](http://docs.aws.amazon.com/sns/latest/api/API_GetSubscriptionAttributes.html) | Returns all of the properties of a subscription. | ??? | ??? |
| [sns:GetTopicAttributes](http://docs.aws.amazon.com/sns/latest/api/API_GetTopicAttributes.html) | Returns all of the properties of a topic. | ??? | ??? |
| [sns:ListEndpointsByPlatformApplication](http://docs.aws.amazon.com/sns/latest/api/API_ListEndpointsByPlatformApplication.html) | Lists the endpoints and endpoint attributes for devices in a supported push notification service, such as GCM and APNS. | ??? | ??? |
| [sns:ListPlatformApplications](http://docs.aws.amazon.com/sns/latest/api/API_ListPlatformApplications.html) | Lists the platform application objects for the supported push notification services, such as APNS and GCM. | ??? | ??? |
| [sns:ListSubscriptions](http://docs.aws.amazon.com/sns/latest/api/API_ListSubscriptions.html) | Returns a list of the requester's subscriptions. | ??? | ??? |
| [sns:ListSubscriptionsByTopic](http://docs.aws.amazon.com/sns/latest/api/API_ListSubscriptionsByTopic.html) | Returns a list of the subscriptions to a specific topic. | ??? | ??? |
| [sns:ListTopics](http://docs.aws.amazon.com/sns/latest/api/API_ListTopics.html) | Returns a list of the requester's topics. | ??? | ??? |
| [sns:Publish](http://docs.aws.amazon.com/sns/latest/api/API_Publish.html) | Sends a message to all of a topic's subscribed endpoints. | arn:aws:sns:$region:$account:$topic-name | ??? |
| [sns:RemovePermission](http://docs.aws.amazon.com/sns/latest/api/API_RemovePermission.html) | Removes a statement from a topic's access control policy. | ??? | ??? |
| [sns:SetEndpointAttributes](http://docs.aws.amazon.com/sns/latest/api/API_SetEndpointAttributes.html) | Sets the attributes for an endpoint for a device on one of the supported push notification services, such as GCM and APNS. | ??? | ??? |
| [sns:SetPlatformApplicationAttributes](http://docs.aws.amazon.com/sns/latest/api/API_SetPlatformApplicationAttributes.html) | Sets the attributes of the platform application object for the supported push notification services, such as APNS and GCM. | ??? | ??? |
| [sns:SetSubscriptionAttributes](http://docs.aws.amazon.com/sns/latest/api/API_SetSubscriptionAttributes.html) | Allows a subscription owner to set an attribute of the topic to a new value. | ??? | ??? |
| [sns:SetTopicAttributes](http://docs.aws.amazon.com/sns/latest/api/API_SetTopicAttributes.html) | Allows a topic owner to set an attribute of the topic to a new value. | ??? | ??? |
| [sns:Subscribe](http://docs.aws.amazon.com/sns/latest/api/API_Subscribe.html) | Prepares to subscribe an endpoint by sending the endpoint a confirmation message. | ??? | sns:Endpoint, sns:Protocol |
| [sns:Unsubscribe](http://docs.aws.amazon.com/sns/latest/api/API_Unsubscribe.html) | Deletes a subscription. | ??? | ??? |

