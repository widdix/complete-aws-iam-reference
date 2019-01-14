| Action | Description | Resource | Condition |
| --- | --- | --- | --- |
| [acm:AddTagsToCertificate](http://docs.aws.amazon.com/acm/latest/APIReference/API_AddTagsToCertificate.html) | Adds one or more tags to an ACM Certificate. | arn:aws:acm:$region:$account:certificate/$certificate-id | - |
| [acm:DeleteCertificate](http://docs.aws.amazon.com/acm/latest/APIReference/API_DeleteCertificate.html) | Deletes an ACM Certificate and its associated private key. | arn:aws:acm:$region:$account:certificate/$certificate-id | - |
| [acm:DescribeCertificate](http://docs.aws.amazon.com/acm/latest/APIReference/API_DescribeCertificate.html) | Returns a list of the fields contained in the specified ACM Certificate. | arn:aws:acm:$region:$account:certificate/$certificate-id | - |
| [acm:GetCertificate](http://docs.aws.amazon.com/acm/latest/APIReference/API_GetCertificate.html) | Retrieves an ACM Certificate and certificate chain for the certificate specified by an ARN. | arn:aws:acm:$region:$account:certificate/$certificate-id | - |
| [acm:ImportCertificate](http://docs.aws.amazon.com/acm/latest/APIReference/API_ImportCertificate.html) | Imports an SSL/TLS certificate into AWS Certificate Manager (ACM) to use with ACM's integrated AWS services. | arn:aws:acm:$region:$account:certificate/$certificate-id | - |
| [acm:ListCertificates](http://docs.aws.amazon.com/acm/latest/APIReference/API_ListCertificates.html) | Retrieves a list of ACM Certificates and the domain name for each. | * | - |
| [acm:ListTagsForCertificate](http://docs.aws.amazon.com/acm/latest/APIReference/API_ListTagsForCertificate.html) | Lists the tags that have been applied to the ACM Certificate. | arn:aws:acm:$region:$account:certificate/$certificate-id | - |
| [acm:RemoveTagsFromCertificate](http://docs.aws.amazon.com/acm/latest/APIReference/API_RemoveTagsFromCertificate.html) | Remove one or more tags from an ACM Certificate. | arn:aws:acm:$region:$account:certificate/$certificate-id | - |
| [acm:RequestCertificate](http://docs.aws.amazon.com/acm/latest/APIReference/API_RequestCertificate.html) | Requests an ACM Certificate for use with other AWS services. | * | - |
| [acm:ResendValidationEmail](http://docs.aws.amazon.com/acm/latest/APIReference/API_ResendValidationEmail.html) | Resends the email that requests domain ownership validation. | arn:aws:acm:$region:$account:certificate/$certificate-id | - |

