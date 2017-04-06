| Action | Description | Resource | Condition |
| --- | --- | --- | --- |
| [kinesis:AddTagsToStream](http://docs.aws.amazon.com/kinesis/latest/APIReference/API_AddTagsToStream.html) | Adds or updates tags for the specified Amazon Kinesis stream. | ??? | - |
| [kinesis:CreateStream](http://docs.aws.amazon.com/kinesis/latest/APIReference/API_CreateStream.html) | Creates an Amazon Kinesis stream. | ??? | - |
| [kinesis:DecreaseStreamRetentionPeriod](http://docs.aws.amazon.com/kinesis/latest/APIReference/API_DecreaseStreamRetentionPeriod.html) | Decreases the Amazon Kinesis stream's retention period, which is the length of time data records are accessible after they are added to the stream. | ??? | - |
| [kinesis:DeleteStream](http://docs.aws.amazon.com/kinesis/latest/APIReference/API_DeleteStream.html) | Deletes an Amazon Kinesis stream and all its shards and data. | ??? | - |
| [kinesis:DescribeStream](http://docs.aws.amazon.com/kinesis/latest/APIReference/API_DescribeStream.html) | Describes the specified Amazon Kinesis stream. | arn:aws:kinesis:$region:$account:stream/$stream-name | - |
| [kinesis:GetShardIterator](http://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetShardIterator.html) | Gets an Amazon Kinesis shard iterator. | arn:aws:kinesis:$region:$account:stream/$stream-name | - |
| [kinesis:GetRecords](http://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetRecords.html) | Gets data records from an Amazon Kinesis stream's shard. | arn:aws:kinesis:$region:$account:stream/$stream-name | - |
| [kinesis:IncreaseStreamRetentionPeriod](http://docs.aws.amazon.com/kinesis/latest/APIReference/API_IncreaseStreamRetentionPeriod.html) | Increases the Amazon Kinesis stream's retention period, which is the length of time data records are accessible after they are added to the stream. | ??? | - |
| [kinesis:ListStreams](http://docs.aws.amazon.com/kinesis/latest/APIReference/API_ListStreams.html) | Lists your Amazon Kinesis streams. | * | - |
| [kinesis:ListTagsForStream](http://docs.aws.amazon.com/kinesis/latest/APIReference/API_ListTagsForStream.html) | Lists the tags for the specified Amazon Kinesis stream. | ??? | - |
| [kinesis:MergeShards](http://docs.aws.amazon.com/kinesis/latest/APIReference/API_MergeShards.html) | Merges two adjacent shards in an Amazon Kinesis stream and combines them into a single shard to reduce the stream's capacity to ingest and transport data. | ??? | - |
| [kinesis:PutRecord](http://docs.aws.amazon.com/kinesis/latest/APIReference/API_PutRecord.html) | Writes a single data record into an Amazon Kinesis stream. | arn:aws:kinesis:$region:$account:stream/$stream-name | - |
| [kinesis:PutRecords](http://docs.aws.amazon.com/kinesis/latest/APIReference/API_PutRecords.html) | Writes multiple data records into an Amazon Kinesis stream in a single call (also referred to as a PutRecords request). | arn:aws:kinesis:$region:$account:stream/$stream-name | - |
| [kinesis:RemoveTagsFromStream](http://docs.aws.amazon.com/kinesis/latest/APIReference/API_RemoveTagsFromStream.html) | Removes tags from the specified Amazon Kinesis stream. | ??? | - |
| [kinesis:SplitShard](http://docs.aws.amazon.com/kinesis/latest/APIReference/API_SplitShard.html) | Splits a shard into two new shards in the Amazon Kinesis stream to increase the stream's capacity to ingest and transport data. | ??? | - |
