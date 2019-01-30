| Action | Description | Resource | Condition |
| --- | --- | --- | --- |
| [waf-regional:AssociateWebACL](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_AssociateWebACL.html) | Associates a web ACL with a resource. | ??? | - |
| [waf-regional:CreateByteMatchSet](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_CreateByteMatchSet.html) | Creates a ByteMatchSet. | ??? | - |
| [waf-regional:CreateIPSet](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_CreateIPSet.html) | Creates an IPSet, which you use to specify which web requests you want to allow or block based on the IP addresses that the requests originate from. | ??? | - |
| [waf-regional:CreateRule](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_CreateRule.html) | Creates a Rule, which contains the IPSet objects, ByteMatchSet objects, and other predicates that identify the requests that you want to block. | ??? | - |
| [waf-regional:CreateSizeConstraintSet](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_CreateSizeConstraintSet.html) | Creates a SizeConstraintSet. | ??? | - |
| [waf-regional:CreateSqlInjectionMatchSet](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_CreateSqlInjectionMatchSet.html) | Creates a SqlInjectionMatchSet, which you use to allow, block, or count requests that contain snippets of SQL code in a specified part of web requests. | ??? | - |
| [waf-regional:CreateWebACL](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_CreateWebACL.html) | Creates a WebACL, which contains the Rules that identify the CloudFront web requests that you want to allow, block, or count. | ??? | - |
| [waf-regional:CreateXssMatchSet](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_CreateXssMatchSet.html) | Creates an XssMatchSet, which you use to allow, block, or count requests that contain cross-site scripting attacks in the specified part of web requests. | ??? | - |
| [waf-regional:DeleteByteMatchSet](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_DeleteByteMatchSet.html) | Permanently deletes a ByteMatchSet. | ??? | - |
| [waf-regional:DeleteIPSet](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_DeleteIPSet.html) | Permanently deletes an IPSet. | ??? | - |
| [waf-regional:DeleteRule](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_DeleteRule.html) | Permanently deletes a Rule. | ??? | - |
| [waf-regional:DeleteSizeConstraintSet](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_DeleteSizeConstraintSet.html) | Permanently deletes a SizeConstraintSet. | ??? | - |
| [waf-regional:DeleteSqlInjectionMatchSet](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_DeleteSqlInjectionMatchSet.html) | Permanently deletes a SqlInjectionMatchSet. | ??? | - |
| [waf-regional:DeleteWebACL](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_DeleteWebACL.html) | Permanently deletes a WebACL. | ??? | - |
| [waf-regional:DeleteXssMatchSet](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_DeleteXssMatchSet.html) | Permanently deletes an XssMatchSet. | ??? | - |
| [waf-regional:DisassociateWebACL](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_DisassociateWebACL.html) | Removes a web ACL from the specified resource. | ??? | - |
| [waf-regional:GetByteMatchSet](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_GetByteMatchSet.html) | Returns the ByteMatchSet specified by ByteMatchSetId. | ??? | - |
| [waf-regional:GetChangeToken](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_GetChangeToken.html) | When you want to create, update, or delete AWS WAF objects, get a change token and include the change token in the create, update, or delete request. | ??? | - |
| [waf-regional:GetChangeTokenStatus](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_GetChangeTokenStatus.html) | Returns the status of a ChangeToken that you got by calling GetChangeToken. | ??? | - |
| [waf-regional:GetIPSet](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_GetIPSet.html) | Returns the IPSet that is specified by IPSetId. | ??? | - |
| [waf-regional:GetRule](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_GetRule.html) | Returns the Rule that is specified by the RuleId that you included in the GetRule request. | ??? | - |
| [waf-regional:GetSampledRequests](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_GetSampledRequests.html) | Gets detailed information about a specified number of requests--a sample--that AWS WAF randomly selects from among the first 5,000 requests that your AWS resource received during a time range that you choose. | ??? | - |
| [waf-regional:GetSizeConstraintSet](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_GetSizeConstraintSet.html) | Returns the SizeConstraintSet specified by SizeConstraintSetId. | ??? | - |
| [waf-regional:GetSqlInjectionMatchSet](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_GetSqlInjectionMatchSet.html) | Returns the SqlInjectionMatchSet that is specified by SqlInjectionMatchSetId. | ??? | - |
| [waf-regional:GetWebACL](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_GetWebACL.html) | Returns the WebACL that is specified by WebACLId. | ??? | - |
| [waf-regional:GetWebACLForResource](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_GetWebACLForResource.html) | Returns the web ACL for the specified resource. | ??? | - |
| [waf-regional:GetXssMatchSet](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_GetXssMatchSet.html) | Returns the XssMatchSet that is specified by XssMatchSetId. | ??? | - |
| [waf-regional:ListByteMatchSets](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_ListByteMatchSets.html) | Returns an array of ByteMatchSetSummary objects. | ??? | - |
| [waf-regional:ListIPSets](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_ListIPSets.html) | Returns an array of IPSetSummary objects in the response. | ??? | - |
| [waf-regional:ListResourcesForWebACL](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_ListResourcesForWebACL.html) | Returns an array of resources associated with the specified web ACL. | ??? | - |
| [waf-regional:ListRules](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_ListRules.html) | Returns an array of RuleSummary objects. | ??? | - |
| [waf-regional:ListSizeConstraintSets](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_ListSizeConstraintSets.html) | Returns an array of SizeConstraintSetSummary objects. | ??? | - |
| [waf-regional:ListSqlInjectionMatchSets](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_ListSqlInjectionMatchSets.html) | Returns an array of SqlInjectionMatchSet objects. | ??? | - |
| [waf-regional:ListWebACLs](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_ListWebACLs.html) | Returns an array of WebACLSummary objects in the response. | ??? | - |
| [waf-regional:ListXssMatchSets](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_ListXssMatchSets.html) | Returns an array of XssMatchSet objects. | ??? | - |
| [waf-regional:UpdateByteMatchSet](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_UpdateByteMatchSet.html) | Inserts or deletes ByteMatchTuple objects (filters) in a ByteMatchSet. | ??? | - |
| [waf-regional:UpdateIPSet](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_UpdateIPSet.html) | Inserts or deletes IPSetDescriptor objects in an IPSet. | ??? | - |
| [waf-regional:UpdateRule](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_UpdateRule.html) | Inserts or deletes Predicate objects in a Rule. | ??? | - |
| [waf-regional:UpdateSizeConstraintSet](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_UpdateSizeConstraintSet.html) | Inserts or deletes SizeConstraint objects (filters) in a SizeConstraintSet. | ??? | - |
| [waf-regional:UpdateSqlInjectionMatchSet](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_UpdateSqlInjectionMatchSet.html) | Inserts or deletes SqlInjectionMatchTuple objects (filters) in a SqlInjectionMatchSet. | ??? | - |
| [waf-regional:UpdateWebACL](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_UpdateWebACL.html) | Inserts or deletes ActivatedRule objects in a WebACL. | ??? | - |
| [waf-regional:UpdateXssMatchSet](http://docs.aws.amazon.com/waf/latest/APIReference/API_regional_UpdateXssMatchSet.html) | Inserts or deletes XssMatchTuple objects (filters) in an XssMatchSet. | ??? | - |

