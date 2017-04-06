| Action | Description | Resource | Condition |
| --- | --- | --- | --- |
| [execute-api:Invoke](http://docs.aws.amazon.com/apigateway/latest/developerguide/permissions.html) | Invoke an API upon a client request. | arn:aws:execute-api:$region:$account:$api-id/$stage-name/$http-verb/$resource-path | - |
| [execute-api:InvalidateCache](http://docs.aws.amazon.com/apigateway/latest/developerguide/permissions.html)| Invalidate API cache upon a client request. | arn:aws:execute-api:$region:$account:$api-id/$stage-name/$http-verb/$resource-path | - |
