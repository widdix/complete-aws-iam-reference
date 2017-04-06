| Action | Description | Resource | Condition |
| --- | --- | --- | --- |
| [firehose:CreateDeliveryStream](http://docs.aws.amazon.com/firehose/latest/APIReference/API_CreateDeliveryStream.html) | Creates a delivery stream. | ??? | - |
| [firehose:DeleteDeliveryStream](http://docs.aws.amazon.com/firehose/latest/APIReference/API_DeleteDeliveryStream.html) | Deletes a delivery stream and its data. | arn:aws:firehose:$region:$account:deliverystream/$delivery-stream-name | - |
| [firehose:DescribeDeliveryStream](http://docs.aws.amazon.com/firehose/latest/APIReference/API_DescribeDeliveryStream.html) | Describes the specified delivery stream and gets the status. | ??? | - |
| [firehose:ListDeliveryStreams](http://docs.aws.amazon.com/firehose/latest/APIReference/API_ListDeliveryStreams.html) | Lists your delivery streams. | ??? | - |
| [firehose:PutRecord](http://docs.aws.amazon.com/firehose/latest/APIReference/API_PutRecord.html) | Writes a single data record into an Amazon Kinesis Firehose delivery stream. | arn:aws:firehose:$region:$account:deliverystream/$delivery-stream-name | - |
| [firehose:PutRecordBatch](http://docs.aws.amazon.com/firehose/latest/APIReference/API_PutRecordBatch.html) | Writes multiple data records into a delivery stream in a single call, which can achieve higher throughput per producer than when writing single records. | arn:aws:firehose:$region:$account:deliverystream/$delivery-stream-name | - |
| [firehose:UpdateDestination](http://docs.aws.amazon.com/firehose/latest/APIReference/API_UpdateDestination.html) | Updates the specified destination of the specified delivery stream. | arn:aws:firehose:$region:$account:deliverystream/$delivery-stream-name | - |

