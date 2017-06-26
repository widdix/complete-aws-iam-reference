| Action | Description | Resource | Condition |
| --- | --- | --- | --- |
| [es:AddTags](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-addtags) | Attaches resource tags to an Amazon ES domain.  | ??? | - |
| [es:CreateElasticsearchDomain](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-createelasticsearchdomain) | Creates a new Amazon ES domain.| ??? | - |
| [es:DeleteElasticsearchDomain](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-deleteelasticsearchdomain) | Deletes an Amazon ES domain and all of its data. | ??? | - |
| [es:DescribeElasticsearchDomain](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describeelasticsearchdomain) | Describes the domain configuration for the specified Amazon ES domain, including the domain ID, domain service endpoint, and domain ARN. | ??? | - |
| [es:DescribeElasticsearchDomains](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describeesdomains) | Describes the domain configuration for up to five specified Amazon ES domains. | ??? | - |
| [es:DescribeElasticsearchDomainConfig](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describeelasticsearchdomainconfig) | Displays the configuration of an Amazon ES domain. | ??? | - |
| [es:ListDomainNames](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-listtags) | Displays the names of all Amazon ES domains owned by the current user. | ??? | - |
| [es:ListTags](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-listtags) | Displays all of the tags for an Amazon ES domain. | ??? | - |
| [es:RemoveTags](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-removetags) | Removes the specified resource tags from an Amazon ES domain. | ??? | - |
| [es:UpdateElasticsearchDomainConfig](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-updateelasticsearchdomainconfig) | Modifies the configuration of an Amazon ES domain, such as the instance type and the number of instances. | ??? | - |
| es:ESHttpDelete | HTTP DELETE requests to ES API | arn:aws:es:$region:$account-id:domain/$domain/$path | - |
| es:ESHttpGet | HTTP GET requests to ES API | arn:aws:es:$region:$account-id:domain/$domain/$path | - |
| es:ESHttpHead | HTTP HEAD requests to ES API | arn:aws:es:$region:$account-id:domain/$domain/$path | - |
| es:ESHttpPost | HTTP POST requests to ES API | arn:aws:es:$region:$account-id:domain/$domain/$path | - |
| es:ESHttpPut | HTTP PUT requests to ES API | arn:aws:es:$region:$account-id:domain/$domain/$path | - |
