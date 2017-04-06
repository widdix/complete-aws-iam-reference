| Action | Description | Resource | Condition |
| --- | --- | --- | --- |
| [acm:DeleteCertificate](http://docs.aws.amazon.com/acm/latest/APIReference/API_DeleteCertificate.html) | Deletes an ACM Certificate and its associated private key. | arn:aws:acm:$region:$account:certificate/$certificate-id | - |
| [acm:DescribeCertificate](http://docs.aws.amazon.com/acm/latest/APIReference/API_DescribeCertificate.html) | Returns a list of the fields contained in the specified ACM Certificate. | arn:aws:acm:$region:$account:certificate/$certificate-id | - |
| [acm:GetCertificate](http://docs.aws.amazon.com/acm/latest/APIReference/API_GetCertificate.html) | Retrieves an ACM Certificate and certificate chain for the certificate specified by an ARN. | arn:aws:acm:$region:$account:certificate/$certificate-id | - |
| [acm:ListCertificates](http://docs.aws.amazon.com/acm/latest/APIReference/API_ListCertificates.html) | Retrieves a list of ACM Certificates and the domain name for each. | * | - |
| [acm:RequestCertificate](http://docs.aws.amazon.com/acm/latest/APIReference/API_RequestCertificate.html) | Requests an ACM Certificate for use with other AWS services. | * | - |
| [acm:ResendValidationEmail](http://docs.aws.amazon.com/acm/latest/APIReference/API_ResendValidationEmail.html) | Resends the email that requests domain ownership validation. | arn:aws:acm:$region:$account:certificate/$certificate-id | - |
