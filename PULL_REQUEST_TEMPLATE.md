**By opening a Pull Request, you agree that your contribution is licensed under CC0 1.0 Universell (CC0 1.0)**

Please make sure to provide all the fields! Example below!

* Service: 
* Action: 
* Action documentation: 
* Resources:
* Conditions: 
* Source: 

## Example

* Service: ec2
* Action: DeleteCustomerGateway
* Action documentation: http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteCustomerGateway.html
* Resources: arn:aws:ec2:$region:$account:customer-gateway/$cgw-id
* Conditions: ec2:Region, ec2:ResourceTag/$tag-key
* Source: http://docs.aws.amazon.com/AWSEC2/latest/APIReference/ec2-api-permissions.html and https://docs.aws.amazon.com/IAM/latest/UserGuide/list_ec2.html
