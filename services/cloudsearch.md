| Action | Description | Resource | Condition |
| --- | --- | --- | --- |
| [cloudsearch:BuildSuggesters](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_BuildSuggesters.html) | Indexes the search suggestions. | ... | ... |
| [cloudsearch:CreateDomain](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_CreateDomain.html) | Creates a new search domain. | ... | ... |
| [cloudsearch:DefineAnalysisScheme](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DefineAnalysisScheme.html) | Configures an analysis scheme that can be applied to a text or text-array field to define language-specific text processing options. | ... | ... |
| [cloudsearch:DefineExpression](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DefineExpression.html) | Configures an Expression for the search domain. | ... | ... |
| [cloudsearch:DefineIndexField](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DefineIndexField.html) | Configures an IndexField for the search domain. | ... | ... |
| [cloudsearch:DefineIndexFields](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_document.html) | ... | ... | ... |
| [cloudsearch:DefineSuggester](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DefineSuggester.html) | Configures a suggester for a domain. | ... | ... |
| [cloudsearch:DeleteAnalysisScheme](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DeleteAnalysisScheme.html) | Deletes an analysis scheme. | ... | ... |
| [cloudsearch:DeleteDomain](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DeleteDomain.html) | Permanently deletes a search domain and all of its data. | ... | ... |
| [cloudsearch:DeleteExpression](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DeleteExpression.html) | Removes an Expression from the search domain. | ... | ... |
| [cloudsearch:DeleteIndexField](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DeleteIndexField.html) | Removes an IndexField from the search domain. | ... | ... |
| [cloudsearch:DeleteSuggester](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DeleteSuggester.html) | Deletes a suggester. | ... | ... |
| [cloudsearch:DescribeAnalysisSchemes](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeAnalysisSchemes.html) | Gets the analysis schemes configured for a domain. | arn:aws:cloudsearch:$region:$account-id:domain/$domain-name | - |
| [cloudsearch:DescribeAvailabilityOptions](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeAvailabilityOptions.html) | Gets the availability options configured for a domain. | arn:aws:cloudsearch:$region:$account-id:domain/$domain-name | - |
| [cloudsearch:DescribeDomains](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeDomains.html) | Gets information about the search domains owned by this account. | arn:aws:cloudsearch:$region:$account-id:domain/$domain-name | - |
| [cloudsearch:DescribeExpressions](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeExpressions.html) | Gets the expressions configured for the search domain. | arn:aws:cloudsearch:$region:$account-id:domain/$domain-name | - |
| [cloudsearch:DescribeIndexFields](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeIndexFields.html) | Gets information about the index fields configured for the search domain. | arn:aws:cloudsearch:$region:$account-id:domain/$domain-name | - |
| [cloudsearch:DescribeScalingParameters](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeScalingParameters.html) | Gets the scaling parameters configured for a domain. | arn:aws:cloudsearch:$region:$account-id:domain/$domain-name | - |
| [cloudsearch:DescribeServiceAccessPolicies](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeServiceAccessPolicies.html) | Gets information about the access policies that control access to the domain's document and search endpoints. | arn:aws:cloudsearch:$region:$account-id:domain/$domain-name | - |
| [cloudsearch:DescribeSuggesters](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeSuggesters.html) | Gets the suggesters configured for a domain. | arn:aws:cloudsearch:$region:$account-id:domain/$domain-name | - |
| [cloudsearch:document](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_document.html) | ... | arn:aws:cloudsearch:$region:$account-id:domain/$domain-name | - |
| [cloudsearch:IndexDocuments](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_IndexDocuments.html) | Tells the search domain to start indexing its documents using the latest indexing options. | ... | ... |
| [cloudsearch:ListDomainNames](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_ListDomainNames.html) | Lists all search domains owned by an account. | ... | ... |
| [cloudsearch:search](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_search.html) | ... | arn:aws:cloudsearch:$region:$account-id:domain/$domain-name | - |
| [cloudsearch:suggest](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_suggest.html) | ... | arn:aws:cloudsearch:$region:$account-id:domain/$domain-name | - |
| [cloudsearch:UpdateAvailabilityOptions](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_UpdateAvailabilityOptions.html) | Configures the availability options for a domain. | ... | ... |
| [cloudsearch:UpdateScalingParameters](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_UpdateScalingParameters.html) | Configures scaling parameters for a domain. | ... | ... |
| [cloudsearch:UpdateServiceAccessPolicies](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_UpdateServiceAccessPolicies.html) | Configures the access rules that control access to the domain's document and search endpoints. | ... | ... |
