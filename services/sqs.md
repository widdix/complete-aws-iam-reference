| Action | Description | Resource | Condition |
| --- | --- | --- | --- |
| [sqs:AddPermission](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_AddPermission.html) | Adds a permission to a queue for a specific principal. | ??? | ??? |
| [sqs:ChangeMessageVisibility](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ChangeMessageVisibility.html) | Changes the visibility timeout of a specified message in a queue to a new value. | ??? | ??? |
| [sqs:ChangeMessageVisibilityBatch](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ChangeMessageVisibilityBatch.html) | Changes the visibility timeout of multiple messages. | ??? | ??? |
| [sqs:CreateQueue](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_CreateQueue.html) | Creates a new queue, or returns the URL of an existing one. | ??? | ??? |
| [sqs:DeleteMessage](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_DeleteMessage.html) | Deletes the specified message from the specified queue. | ??? | ??? |
| [sqs:DeleteMessageBatch](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_DeleteMessageBatch.html) | Deletes up to ten messages from the specified queue. | ??? | ??? |
| [sqs:DeleteQueue](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_DeleteQueue.html) | Deletes the queue specified by the queue URL, regardless of whether the queue is empty. | ??? | ??? |
| [sqs:GetQueueAttributes](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_GetQueueAttributes.html) | Gets attributes for the specified queue. | ??? | ??? |
| [sqs:GetQueueUrl](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_GetQueueUrl.html) | Returns the URL of an existing queue. | ??? | ??? |
| [sqs:ListDeadLetterSourceQueues](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ListDeadLetterSourceQueues.html) | Returns a list of your queues that have the RedrivePolicy queue attribute configured with a dead letter queue. | ??? | ??? |
| [sqs:ListQueues](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ListQueues.html) | Returns a list of your queues. | ??? | ??? |
| [sqs:PurgeQueue](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_PurgeQueue.html) | Deletes the messages in a queue specified by the queue URL. | ??? | ??? |
| [sqs:ReceiveMessage](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ReceiveMessage.html) | Retrieves one or more messages, with a maximum limit of 10 messages, from the specified queue. | arn:aws:sqs:$region:$account-id:$queuename | - |
| [sqs:RemovePermission](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_RemovePermission.html) | Revokes any permissions in the queue policy that matches the specified Label parameter. | ??? | ??? |
| [sqs:SendMessage](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html) | Delivers a message to the specified queue. | arn:aws:sqs:$region:$account-id:$queuename | - |
| [sqs:SendMessageBatch](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessageBatch.html) | Delivers up to ten messages to the specified queue. | ??? | ??? |
| [sqs:SetQueueAttributes](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SetQueueAttributes.html) | Sets the value of one or more queue attributes. | ??? | ??? |
