| Action | Description | Resource | Condition |
| --- | --- | --- | --- |
| [sdb:BatchDeleteAttributes](http://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_BatchDeleteAttributes.html) | Performs multiple DeleteAttributes operations in a single call, which reduces round trips and latencies. | arn:aws:sdb:$region:$account:domain/$domain-name | - |
| [sdb:BatchPutAttributes](http://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_BatchPutAttributes.html) | With the BatchPutAttributes operation, you can perform multiple PutAttribute operations in a single call. | arn:aws:sdb:$region:$account:domain/$domain-name | - |
| [sdb:CreateDomain](http://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_CreateDomain.html) | The CreateDomain operation creates a new domain. | * | - |
| [sdb:DeleteAttributes](http://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_DeleteAttributes.html) | Deletes one or more attributes associated with the item. | arn:aws:sdb:$region:$account:domain/$domain-name | - |
| [sdb:DeleteDomain](http://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_DeleteDomain.html) | The DeleteDomain operation deletes a domain. | arn:aws:sdb:$region:$account:domain/$domain-name | - |
| [sdb:DomainMetadata](http://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_DomainMetadata.html) | Returns information about the domain, including when the domain was created, the number of items and attributes, and the size of attribute names and values. | arn:aws:sdb:$region:$account:domain/$domain-name | - |
| [sdb:GetAttributes](http://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_GetAttributes.html) | Returns all of the attributes associated with the item. | arn:aws:sdb:$region:$account:domain/$domain-name | - |
| [sdb:ListDomains](http://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_ListDomains.html) | The ListDomains operation lists all domains associated with the Access Key ID. | * | - |
| [sdb:PutAttributes](http://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_PutAttributes.html) | The PutAttributes operation creates or replaces attributes in an item. | arn:aws:sdb:$region:$account:domain/$domain-name | - |
| [sdb:Select](http://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_Select.html) | The Select operation returns a set of Attributes for ItemNames that match the select expression. | arn:aws:sdb:$region:$account:domain/$domain-name | - |

