| Action | Description | Resource | Condition |
| --- | --- | --- | --- | --- | --- |
[ec2:DeleteCustomerGateway](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteCustomerGateway.html) | Deletes the specified customer gateway. | arn:aws:ec2:region:account:customer-gateway/*, arn:aws:ec2:region:account:customer-gateway/cgw-id | ec2:Region, ec2:ResourceTag/tag-key |
[ec2:DeleteDhcpOptions](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteDhcpOptions.html) | Deletes the specified set of DHCP options. | arn:aws:ec2:region:account:dhcp-options/*, arn:aws:ec2:region:account:dhcp-options/dhcp-options-id | ec2:Region, ec2:ResourceTag/tag-key |
[ec2:AttachClassicLinkVpc](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AttachClassicLinkVpc.html) | Links an EC2-Classic instance to a ClassicLink-enabled VPC through one or more of the VPC's security groups. | arn:aws:ec2:region:account:instance/*, arn:aws:ec2:region:account:instance/instance-id | ec2:AvailabilityZone, ec2:EbsOptimized, ec2:InstanceProfile, ec2:InstanceType, ec2:PlacementGroup, ec2:Region, ec2:ResourceTag/tag-key, ec2:RootDeviceType, ec2:Tenancy |
[ec2:AttachClassicLinkVpc](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AttachClassicLinkVpc.html) | Links an EC2-Classic instance to a ClassicLink-enabled VPC through one or more of the VPC's security groups. | arn:aws:ec2:region:account:security-group/*, arn:aws:ec2:region:account:security-group/security-group-id | ec2:Region, ec2:ResourceTag/tag-key, ec2:Vpc |
[ec2:AttachClassicLinkVpc](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AttachClassicLinkVpc.html) | Links an EC2-Classic instance to a ClassicLink-enabled VPC through one or more of the VPC's security groups. | arn:aws:ec2:region:account:vpc/*, arn:aws:ec2:region:account:vpc/vpc-id | ec2:Region, ec2:ResourceTag/tag-key, ec2:Tenancy |
[ec2:DetachClassicLinkVpc](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachClassicLinkVpc.html) | Unlinks (detaches) a linked EC2-Classic instance from a VPC. | arn:aws:ec2:region:account:instance/*, arn:aws:ec2:region:account:instance/instance-id | ec2:AvailabilityZone, ec2:EbsOptimized, ec2:InstanceProfile, ec2:InstanceType, ec2:PlacementGroup, ec2:Region, ec2:ResourceTag/tag-key, ec2:RootDeviceType, ec2:Tenancy |
[ec2:DetachClassicLinkVpc](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachClassicLinkVpc.html) | Unlinks (detaches) a linked EC2-Classic instance from a VPC. | arn:aws:ec2:region:account:vpc/*, arn:aws:ec2:region:account:vpc/vpc-id | ec2:Region, ec2:ResourceTag/tag-key, ec2:Tenancy |
[ec2:GetConsoleScreenshot](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetConsoleScreenshot.html) | Retrieve a JPG-format screenshot of a running instance to help with troubleshooting. | arn:aws:ec2:region:account:instance/*, arn:aws:ec2:region:account:instance/instance-id | ec2:AvailabilityZone, ec2:EbsOptimized, ec2:InstanceProfile, ec2:InstanceType, ec2:PlacementGroup, ec2:Region, ec2:ResourceTag/tag-key, ec2:RootDeviceType, ec2:Tenancy |
[ec2:RebootInstances](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RebootInstances.html) | Requests a reboot of one or more instances. | arn:aws:ec2:region:account:instance/*, arn:aws:ec2:region:account:instance/instance-id | ec2:AvailabilityZone, ec2:EbsOptimized, ec2:InstanceProfile, ec2:InstanceType, ec2:PlacementGroup, ec2:Region, ec2:ResourceTag/tag-key, ec2:RootDeviceType, ec2:Tenancy |
[ec2:RunInstances](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html) | Launches the specified number of instances using an AMI for which you have permissions. | arn:aws:ec2:region::image/*, arn:aws:ec2:region::image/image-id | ec2:ImageType, ec2:Owner, ec2:Public, ec2:Region, ec2:RootDeviceType, ec2:ResourceTag/tag-key |
[ec2:RunInstances](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html) | Launches the specified number of instances using an AMI for which you have permissions. | arn:aws:ec2:region:account:instance/* | ec2:AvailabilityZone, ec2:EbsOptimized, ec2:InstanceProfile, ec2:InstanceType, ec2:PlacementGroup, ec2:Region, ec2:RootDeviceType, ec2:Tenancy |
[ec2:RunInstances](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html) | Launches the specified number of instances using an AMI for which you have permissions. | arn:aws:ec2:region:account:key-pair/*, arn:aws:ec2:region:account:key-pair/key-pair-name | ec2:Region |
[ec2:RunInstances](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html) | Launches the specified number of instances using an AMI for which you have permissions. | arn:aws:ec2:region:account:network-interface/* (if specifying a subnet in the request), arn:aws:ec2:region:account:network-interface/eni-id | ec2:AvailabilityZone, ec2:Region, ec2:Subnet, ec2:ResourceTag/tag-key, ec2:Vpc |
[ec2:RunInstances](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html) | Launches the specified number of instances using an AMI for which you have permissions. | arn:aws:ec2:region:account:placement-group/*, arn:aws:ec2:region:account:placement-group/placement-group-name | ec2:Region, ec2:PlacementGroupStrategy |
[ec2:RunInstances](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html) | Launches the specified number of instances using an AMI for which you have permissions. | arn:aws:ec2:region:account:security-group/*, arn:aws:ec2:region:account:security-group/security-group-id | ec2:Region, ec2:ResourceTag/tag-key, ec2:Vpc |
[ec2:RunInstances](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html) | Launches the specified number of instances using an AMI for which you have permissions. | arn:aws:ec2:region::snapshot/*, arn:aws:ec2:region::snapshot/snapshot-id | ec2:Owner, ec2:ParentVolume, ec2:Region, ec2:SnapshotTime, ec2:ResourceTag/tag-key, ec2:VolumeSize |
[ec2:RunInstances](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html) | Launches the specified number of instances using an AMI for which you have permissions. | arn:aws:ec2:region:account:subnet/*, arn:aws:ec2:region:account:subnet/subnet-id | ec2:AvailabilityZone, ec2:Region, ec2:ResourceTag/tag-key, ec2:Vpc |
[ec2:RunInstances](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html) | Launches the specified number of instances using an AMI for which you have permissions. | arn:aws:ec2:region:account:volume/* (if launching from an EBS-backed image) | ec2:AvailabilityZone, ec2:ParentSnapshot, ec2:Region, ec2:VolumeIops, ec2:VolumeSize, ec2:VolumeType |
[ec2:StartInstances](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_StartInstances.html) | Starts an Amazon EBS-backed AMI that you've previously stopped. | arn:aws:ec2:region:account:instance/*, arn:aws:ec2:region:account:instance/instance-id | ec2:AvailabilityZone, ec2:EbsOptimized, ec2:InstanceProfile, ec2:InstanceType, ec2:PlacementGroup, ec2:Region, ec2:ResourceTag/tag-key, ec2:RootDeviceType, ec2:Tenancy |
[ec2:StopInstances](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_StopInstances.html) | Stops an Amazon EBS-backed instance. | arn:aws:ec2:region:account:instance/*, arn:aws:ec2:region:account:instance/instance-id | ec2:AvailabilityZone, ec2:EbsOptimized, ec2:InstanceProfile, ec2:InstanceType, ec2:PlacementGroup, ec2:Region, ec2:ResourceTag/tag-key, ec2:RootDeviceType, ec2:Tenancy |
[ec2:TerminateInstances](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateInstances.html) | Shuts down one or more instances. | arn:aws:ec2:region:account:instance/*, arn:aws:ec2:region:account:instance/instance-id | ec2:AvailabilityZone, ec2:EbsOptimized, ec2:InstanceProfile, ec2:InstanceType, ec2:PlacementGroup, ec2:Region, ec2:ResourceTag/tag-key, ec2:RootDeviceType, ec2:Tenancy |
[ec2:DeleteInternetGateway](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteInternetGateway.html) | Deletes the specified Internet gateway. | arn:aws:ec2:region:account:internet-gateway/*, arn:aws:ec2:region:account:internet-gateway/igw-id | ec2:Region, ec2:ResourceTag/tag-key |
[ec2:DeleteNetworkAcl](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteNetworkAcl.html) | Deletes the specified network ACL. | arn:aws:ec2:region:account:network-acl/*, arn:aws:ec2:region:account:network-acl/nacl-id | ec2:Region, ec2:ResourceTag/tag-key, ec2:Vpc |
[ec2:DeleteNetworkAclEntry](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteNetworkAclEntry.html) | Deletes the specified ingress or egress entry (rule) from the specified network ACL. | arn:aws:ec2:region:account:network-acl/*, arn:aws:ec2:region:account:network-acl/nacl-id | ec2:Region, ec2:ResourceTag/tag-key, ec2:Vpc |
[ec2:DeleteRoute](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteRoute.html) | Deletes the specified route from the specified route table. | arn:aws:ec2:region:account:route-table/*, arn:aws:ec2:region:account:route-table/route-table-id | ec2:Region, ec2:ResourceTag/tag-key, ec2:Vpc |
[ec2:DeleteRouteTable](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteRouteTable.html) | Deletes the specified route table. | arn:aws:ec2:region:account:route-table/*, arn:aws:ec2:region:account:route-table/route-table-id | ec2:Region, ec2:ResourceTag/tag-key, ec2:Vpc |
[ec2:AuthorizeSecurityGroupEgress](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AuthorizeSecurityGroupEgress.html) | [EC2-VPC only] Adds one or more egress rules to a security group for use with a VPC. | arn:aws:ec2:region:account:security-group/*, arn:aws:ec2:region:account:security-group/security-group-id | ec2:Region, ec2:ResourceTag/tag-key, ec2:Vpc |
[ec2:AuthorizeSecurityGroupIngress](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AuthorizeSecurityGroupIngress.html) | Adds one or more ingress rules to a security group. | arn:aws:ec2:region:account:security-group/*, arn:aws:ec2:region:account:security-group/security-group-id | ec2:Region, ec2:ResourceTag/tag-key, ec2:Vpc |
[ec2:DeleteSecurityGroup](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSecurityGroup.html) | Deletes a security group. | arn:aws:ec2:region:account:security-group/*, arn:aws:ec2:region:account:security-group/security-group-id | ec2:Region, ec2:ResourceTag/tag-key, ec2:Vpc |
[ec2:RevokeSecurityGroupEgress](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RevokeSecurityGroupEgress.html) | [EC2-VPC only] Removes one or more egress rules from a security group for EC2-VPC. | arn:aws:ec2:region:account:security-group/*, arn:aws:ec2:region:account:security-group/security-group-id | ec2:Region, ec2:ResourceTag/tag-key, ec2:Vpc |
[ec2:RevokeSecurityGroupIngress](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RevokeSecurityGroupIngress.html) | Removes one or more ingress rules from a security group. | arn:aws:ec2:region:account:security-group/*, arn:aws:ec2:region:account:security-group/security-group-id | ec2:Region, ec2:ResourceTag/tag-key, ec2:Vpc |
[ec2:AttachVolume](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AttachVolume.html) | Attaches an EBS volume to a running or stopped instance and exposes it to the instance with the specified device name. | arn:aws:ec2:region:account:instance/*, arn:aws:ec2:region:account:instance/instance-id | ec2:AvailabilityZone, ec2:EbsOptimized, ec2:InstanceProfile, ec2:InstanceType, ec2:PlacementGroup, ec2:Region, ec2:ResourceTag/tag-key, ec2:RootDeviceType, ec2:Tenancy |
[ec2:AttachVolume](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AttachVolume.html) | Attaches an EBS volume to a running or stopped instance and exposes it to the instance with the specified device name. | arn:aws:ec2:region:account:volume/*, arn:aws:ec2:region:account:volume/volume-id | ec2:AvailabilityZone, ec2:ParentSnapshot, ec2:Region, ec2:ResourceTag/tag-key, ec2:VolumeIops, ec2:VolumeSize, ec2:VolumeType |
[ec2:DeleteVolume](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVolume.html) | Deletes the specified EBS volume. | arn:aws:ec2:region:account:volume/*, arn:aws:ec2:region:account:volume/volume-id | ec2:AvailabilityZone, ec2:ParentSnapshot, ec2:Region, ec2:ResourceTag/tag-key, ec2:VolumeIops, ec2:VolumeSize, ec2:VolumeType |
[ec2:DetachVolume](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachVolume.html) | Detaches an EBS volume from an instance. | arn:aws:ec2:region:account:instance/*, arn:aws:ec2:region:account:instance/instance-id | ec2:AvailabilityZone, ec2:EbsOptimized, ec2:InstanceProfile, ec2:InstanceType, ec2:PlacementGroup, ec2:Region, ec2:ResourceTag/tag-key, ec2:RootDeviceType, ec2:Tenancy |
[ec2:DetachVolume](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachVolume.html) | Detaches an EBS volume from an instance. | arn:aws:ec2:region:account:volume/*, arn:aws:ec2:region:account:volume/volume-id | ec2:AvailabilityZone, ec2:ParentSnapshot, ec2:Region, ec2:ResourceTag/tag-key, ec2:VolumeIops, ec2:VolumeSize, ec2:VolumeType |
[ec2:DisableVpcClassicLink](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableVpcClassicLink.html) | Disables ClassicLink for a VPC. | arn:aws:ec2:region:account:vpc/*, arn:aws:ec2:region:account:vpc/vpc-id | ec2:Region, ec2:ResourceTag/tag-key, ec2:Tenancy |
[ec2:EnableVpcClassicLink](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableVpcClassicLink.html) | Enables a VPC for ClassicLink. | arn:aws:ec2:region:account:vpc/*, arn:aws:ec2:region:account:vpc/vpc-id | ec2:Region, ec2:ResourceTag/tag-key, ec2:Tenancy |
[ec2:AcceptVpcPeeringConnection](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AcceptVpcPeeringConnection.html) | Accept a VPC peering connection request. | arn:aws:ec2:region:account:vpc/*, arn:aws:ec2:region:account:vpc/vpc-id | ec2:Region, ec2:ResourceTag/tag-key, ec2:Tenancy |
[ec2:AcceptVpcPeeringConnection](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AcceptVpcPeeringConnection.html) | Accept a VPC peering connection request. | arn:aws:ec2:region:account:vpc-peering-connection/*, arn:aws:ec2:region:account:vpc-peering-connection/vpc-peering-connection-id | ec2:AccepterVpc, ec2:Region, ec2:ResourceTag/tag-key, ec2:RequesterVpc |
[ec2:CreateVpcPeeringConnection](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpcPeeringConnection.html) | Requests a VPC peering connection between two VPCs. | arn:aws:ec2:region:account:vpc/*, arn:aws:ec2:region:account:vpc/vpc-id | ec2:Region, ec2:ResourceTag/tag-key, ec2:Tenancy |
[ec2:CreateVpcPeeringConnection](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpcPeeringConnection.html) | Requests a VPC peering connection between two VPCs. | arn:aws:ec2:region:account:vpc-peering-connection/* | ec2:AccepterVpc, ec2:Region, ec2:RequesterVpc |
[ec2:DeleteVpcPeeringConnection](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpcPeeringConnection.html) | Deletes a VPC peering connection. | arn:aws:ec2:region:account:vpc-peering-connection/*, arn:aws:ec2:region:account:vpc-peering-connection/vpc-peering-connection-id | ec2:AccepterVpc, ec2:Region, ec2:ResourceTag/tag-key, ec2:RequesterVpc |
[ec2:RejectVpcPeeringConnection](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RejectVpcPeeringConnection.html) | Rejects a VPC peering connection request. | arn:aws:ec2:region:account:vpc-peering-connection/*, arn:aws:ec2:region:account:vpc-peering-connection/vpc-peering-connection-id | ec2:AccepterVpc, ec2:Region, ec2:ResourceTag/tag-key, ec2:RequesterVpc |
[ec2:AllocateAddress](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AllocateAddress.html) | Acquires an Elastic IP address. | * | - |
[ec2:AllocateHosts](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AllocateHosts.html) | Allocates a Dedicated host to your account. | * | - |
[ec2:AssignPrivateIpAddresses](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssignPrivateIpAddresses.html) | Assigns one or more secondary private IP addresses to the specified network interface. | * | - |
[ec2:AssociateAddress](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateAddress.html) | Associates an Elastic IP address with an instance or a network interface. | * | - |
[ec2:AssociateDhcpOptions](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateDhcpOptions.html) | Associates a set of DHCP options (that you've previously created) with the specified VPC, or associates no DHCP options with the VPC. | * | - |
[ec2:AssociateRouteTable](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateRouteTable.html) | Associates a subnet with a route table. | * | - |
[ec2:AttachInternetGateway](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AttachInternetGateway.html) | Attaches an Internet gateway to a VPC, enabling connectivity between the Internet and the VPC. | * | - |
[ec2:AttachNetworkInterface](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AttachNetworkInterface.html) | Attaches a network interface to an instance. | * | - |
[ec2:AttachVpnGateway](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AttachVpnGateway.html) | Attaches a virtual private gateway to a VPC. | * | - |
[ec2:BundleInstance](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_BundleInstance.html) | Bundles an Amazon instance store-backed Windows instance. | * | - |
[ec2:CancelBundleTask](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelBundleTask.html) | Cancels a bundling operation for an instance store-backed Windows instance. | * | - |
[ec2:CancelConversionTask](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelConversionTask.html) | Cancels an active conversion task. | * | - |
[ec2:CancelExportTask](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelExportTask.html) | Cancels an active export task.  | * | - |
[ec2:CancelImportTask](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelImportTask.html) | Cancels an in-process import virtual machine or import snapshot task. | * | - |
[ec2:CancelReservedInstancesListing](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelReservedInstancesListing.html) | Cancels the specified Reserved Instance listing in the Reserved Instance Marketplace. | * | - |
[ec2:CancelSpotFleetRequests](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelSpotFleetRequests.html) | Cancels the specified Spot fleet requests. | * | - |
[ec2:CancelSpotInstanceRequests](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CancelSpotInstanceRequests.html) | Cancels one or more Spot instance requests. | * | - |
[ec2:ConfirmProductInstance](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ConfirmProductInstance.html) | Determines whether a product code is associated with an instance. | * | - |
[ec2:CopyImage](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CopyImage.html) | Initiates the copy of an AMI from the specified source region to the current region. | * | - |
[ec2:CopySnapshot](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CopySnapshot.html) | Copies a point-in-time snapshot of an EBS volume and stores it in Amazon S3. | * | - |
[ec2:CreateCustomerGateway](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateCustomerGateway.html) | Provides information to AWS about your VPN customer gateway device. | * | - |
[ec2:CreateDhcpOptions](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateDhcpOptions.html) | Creates a set of DHCP options for your VPC. | * | - |
[ec2:CreateFlowLogs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateFlowLogs.html) | Creates one or more flow logs to capture IP traffic for a specific network interface, subnet, or VPC. | * | - |
[ec2:CreateImage](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateImage.html) | Creates an Amazon EBS-backed AMI from an Amazon EBS-backed instance that is either running or stopped. | * | - |
[ec2:CreateInstanceExportTask](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateInstanceExportTask.html) | Exports a running or stopped instance to an S3 bucket. | * | - |
[ec2:CreateInternetGateway](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateInternetGateway.html) | Creates an Internet gateway for use with a VPC. | * | - |
[ec2:CreateKeyPair](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateKeyPair.html) | Creates a 2048-bit RSA key pair with the specified name. | * | - |
[ec2:CreateNatGateway](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNatGateway.html) | Creates a NAT gateway in the specified subnet. | * | - |
[ec2:CreateNetworkAcl](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkAcl.html) | Creates a network ACL in a VPC. | * | - |
[ec2:CreateNetworkAclEntry](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkAclEntry.html) | Creates an entry (a rule) in a network ACL with the specified rule number. | * | - |
[ec2:CreateNetworkInterface](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html) | Creates a network interface in the specified subnet.. | * | - |
[ec2:CreatePlacementGroup](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreatePlacementGroup.html) | Creates a placement group that you launch cluster instances into. | * | - |
[ec2:CreateReservedInstancesListing](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateReservedInstancesListing.html) | Creates a listing for Amazon EC2 Reserved Instances to be sold in the Reserved Instance Marketplace. | * | - |
[ec2:CreateRoute](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateRoute.html) | Creates a route in a route table within a VPC. | * | - |
[ec2:CreateRouteTable](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateRouteTable.html) | Creates a route table for the specified VPC. | * | - |
[ec2:CreateSecurityGroup](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSecurityGroup.html) | Creates a security group. | * | - |
[ec2:CreateSnapshot](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSnapshot.html) | Creates a snapshot of an EBS volume and stores it in Amazon S3. | * | - |
[ec2:CreateSpotDatafeedSubscription](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSpotDatafeedSubscription.html) | Creates a data feed for Spot instances, enabling you to view Spot instance usage logs. | * | - |
[ec2:CreateSubnet](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSubnet.html) | CreateSubnet | * | - |
[ec2:CreateTags](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html) | Adds or overwrites one or more tags for the specified Amazon EC2 resource or resources. | * | - |
[ec2:CreateVolume](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) | Creates an EBS volume that can be attached to an instance in the same Availability Zone. | * | - |
[ec2:CreateVpc](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpc.html) | Creates a VPC with the specified CIDR block. | * | - |
[ec2:CreateVpcEndpoint](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpcEndpoint.html) | Creates a VPC endpoint for a specified AWS service. | * | - |
[ec2:CreateVpnConnection](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpnConnection.html) | Creates a VPN connection between an existing virtual private gateway and a VPN customer gateway | * | - |
[ec2:CreateVpnConnectionRoute](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpnConnectionRoute.html) | Creates a static route associated with a VPN connection between an existing virtual private gateway and a VPN customer gateway. | * | - |
[ec2:CreateVpnGateway](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpnGateway.html) | Creates a virtual private gateway. | * | - |
[ec2:DeleteFlowLogs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteFlowLogs.html) | Deletes one or more flow logs. | * | - |
[ec2:DeleteKeyPair](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteKeyPair.html) | Deletes the specified key pair, by removing the public key from Amazon EC2. | * | - |
[ec2:DeleteNatGateway](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteNatGateway.html) | Deletes the specified NAT gateway. | * | - |
[ec2:DeleteNetworkInterface](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteNetworkInterface.html) | Deletes the specified network interface. | * | - |
[ec2:DeletePlacementGroup](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeletePlacementGroup.html) | Deletes the specified placement group. | * | - |
[ec2:DeleteSnapshot](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSnapshot.html) | Deletes the specified snapshot. | * | - |
[ec2:DeleteSpotDatafeedSubscription](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSpotDatafeedSubscription.html) | Deletes the data feed for Spot instances. | * | - |
[ec2:DeleteSubnet](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSubnet.html) | Deletes the specified subnet. | * | - |
[ec2:DeleteTags](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteTags.html) | ... | * | - |
[ec2:DeleteVpc](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpc.html) | ... | * | - |
[ec2:DeleteVpcEndpoints](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpcEndpoints.html) | ... | * | - |
[ec2:DeleteVpnConnection](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpnConnection.html) | ... | * | - |
[ec2:DeleteVpnConnectionRoute](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpnConnectionRoute.html) | ... | * | - |
[ec2:DeleteVpnGateway](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteVpnGateway.html) | ... | * | - |
[ec2:DeregisterImage](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeregisterImage.html) | ... | * | - |
[ec2:DescribeAccountAttributes](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAccountAttributes.html) | ... | * | - |
[ec2:DescribeAddresses](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAddresses.html) | ... | * | - |
[ec2:DescribeAvailabilityZones](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAvailabilityZones.html) | ... | * | - |
[ec2:DescribeBundleTasks](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeBundleTasks.html) | ... | * | - |
[ec2:DescribeClassicLinkInstances](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeClassicLinkInstances.html) | ... | * | - |
[ec2:DescribeConversionTasks](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeConversionTasks.html) | ... | * | - |
[ec2:DescribeCustomerGateways](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeCustomerGateways.html) | ... | * | - |
[ec2:DescribeDhcpOptions](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeDhcpOptions.html) | ... | * | - |
[ec2:DescribeExportTasks](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeExportTasks.html) | ... | * | - |
[ec2:DescribeHosts](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeHosts.html) | ... | * | - |
[ec2:DescribeIdentityIdFormat](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeIdentityIdFormat.html) | ... | * | - |
[ec2:DescribeIdFormat](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeIdFormat.html) | ... | * | - |
[ec2:DescribeImageAttribute](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImageAttribute.html) | ... | * | - |
[ec2:DescribeImages](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImages.html) | ... | * | - |
[ec2:DescribeImportImageTasks](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImportImageTasks.html) | ... | * | - |
[ec2:DescribeImportSnapshotTasks](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImportSnapshotTasks.html) | ... | * | - |
[ec2:DescribeInstanceAttribute](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstanceAttribute.html) | ... | * | - |
[ec2:DescribeInstances](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstances.html) | ... | * | - |
[ec2:DescribeInstanceStatus](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstanceStatus.html) | ... | * | - |
[ec2:DescribeInternetGateways](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInternetGateways.html) | ... | * | - |
[ec2:DescribeFlowLogs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeFlowLogs.html) | ... | * | - |
[ec2:DescribeKeyPairs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeKeyPairs.html) | ... | * | - |
[ec2:DescribeMovingAddresses](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeMovingAddresses.html) | ... | * | - |
[ec2:DescribeNatGateways](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeNatGateways.html) | ... | * | - |
[ec2:DescribeNetworkAcls](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeNetworkAcls.html) | ... | * | - |
[ec2:DescribeNetworkInterfaceAttribute](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeNetworkInterfaceAttribute.html) | ... | * | - |
[ec2:DescribeNetworkInterfaces](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeNetworkInterfaces.html) | ... | * | - |
[ec2:DescribePlacementGroups](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribePlacementGroups.html) | ... | * | - |
[ec2:DescribePrefixLists](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribePrefixLists.html) | ... | * | - |
[ec2:DescribeRegions](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeRegions.html) | ... | * | - |
[ec2:DescribeReservedInstances](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeReservedInstances.html) | ... | * | - |
[ec2:DescribeReservedInstancesListings](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeReservedInstancesListings.html) | ... | * | - |
[ec2:DescribeReservedInstancesModifications](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeReservedInstancesModifications.html) | ... | * | - |
[ec2:DescribeReservedInstancesOfferings](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeReservedInstancesOfferings.html) | ... | * | - |
[ec2:DescribeRouteTables](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeRouteTables.html) | ... | * | - |
[ec2:DescribeScheduledInstanceAvailability](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeScheduledInstanceAvailability.html) | ... | * | - |
[ec2:DescribeScheduledInstances](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeScheduledInstances.html) | ... | * | - |
[ec2:DescribeSecurityGroupReferences](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSecurityGroupReferences.html) | ... | * | - |
[ec2:DescribeSecurityGroups](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSecurityGroups.html) | ... | * | - |
[ec2:DescribeStaleSecurityGroups](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeStaleSecurityGroups.html) | ... | * | - |
[ec2:DescribeSnapshotAttribute](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSnapshotAttribute.html) | ... | * | - |
[ec2:DescribeSnapshots](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSnapshots.html) | ... | * | - |
[ec2:DescribeSpotDatafeedSubscription](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSpotDatafeedSubscription.html) | ... | * | - |
[ec2:DescribeSpotFleetInstances](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSpotFleetInstances.html) | ... | * | - |
[ec2:DescribeSpotFleetRequestHistory](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSpotFleetRequestHistory.html) | ... | * | - |
[ec2:DescribeSpotFleetRequests](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSpotFleetRequests.html) | ... | * | - |
[ec2:DescribeSpotInstanceRequests](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSpotInstanceRequests.html) | ... | * | - |
[ec2:DescribeSpotPriceHistory](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSpotPriceHistory.html) | ... | * | - |
[ec2:DescribeSubnets](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSubnets.html) | ... | * | - |
[ec2:DescribeTags](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTags.html) | ... | * | - |
[ec2:DescribeVolumeAttribute](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVolumeAttribute.html) | ... | * | - |
[ec2:DescribeVolumes](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVolumes.html) | ... | * | - |
[ec2:DescribeVolumeStatus](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVolumeStatus.html) | ... | * | - |
[ec2:DescribeVpcAttribute](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcAttribute.html) | ... | * | - |
[ec2:DescribeVpcClassicLink](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcClassicLink.html) | ... | * | - |
[ec2:DescribeVpcClassicLinkDnsSupport](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcClassicLinkDnsSupport.html) | ... | * | - |
[ec2:DescribeVpcEndpoints](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcEndpoints.html) | ... | * | - |
[ec2:DescribeVpcEndpointServices](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcEndpointServices.html) | ... | * | - |
[ec2:DescribeVpcPeeringConnections](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcPeeringConnections.html) | ... | * | - |
[ec2:DescribeVpcs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpcs.html) | ... | * | - |
[ec2:DescribeVpnConnections](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpnConnections.html) | ... | * | - |
[ec2:DescribeVpnGateways](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpnGateways.html) | ... | * | - |
[ec2:DetachInternetGateway](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachInternetGateway.html) | ... | * | - |
[ec2:DetachNetworkInterface](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachNetworkInterface.html) | ... | * | - |
[ec2:DetachVpnGateway](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachVpnGateway.html) | ... | * | - |
[ec2:DisableVgwRoutePropagation](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableVgwRoutePropagation.html) | ... | * | - |
[ec2:DisableVpcClassicLinkDnsSupport](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisableVpcClassicLinkDnsSupport.html) | ... | * | - |
[ec2:DisassociateAddress](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateAddress.html) | ... | * | - |
[ec2:DisassociateRouteTable](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateRouteTable.html) | ... | * | - |
[ec2:EnableVgwRoutePropagation](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableVgwRoutePropagation.html) | ... | * | - |
[ec2:EnableVolumeIO](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableVolumeIO.html) | ... | * | - |
[ec2:EnableVpcClassicLinkDnsSupport](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EnableVpcClassicLinkDnsSupport.html) | ... | * | - |
[ec2:GetConsoleOutput](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetConsoleOutput.html) | ... | * | - |
[ec2:GetPasswordData](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetPasswordData.html) | ... | * | - |
[ec2:ImportImage](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportImage.html) | ... | * | - |
[ec2:ImportInstance](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportInstance.html) | ... | * | - |
[ec2:ImportKeyPair](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportKeyPair.html) | ... | * | - |
[ec2:ImportSnapshot](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportSnapshot.html) | ... | * | - |
[ec2:ImportVolume](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportVolume.html) | ... | * | - |
[ec2:ModifyHosts](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyHosts.html) | ... | * | - |
[ec2:ModifyIdentityIdFormat](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyIdentityIdFormat.html) | ... | * | - |
[ec2:ModifyIdFormat](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyIdFormat.html) | ... | * | - |
[ec2:ModifyImageAttribute](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html) | ... | * | - |
[ec2:ModifyInstanceAttribute](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceAttribute.html) | ... | * | - |
[ec2:ModifyInstancePlacement](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstancePlacement.html) | ... | * | - |
[ec2:ModifyNetworkInterfaceAttribute](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyNetworkInterfaceAttribute.html) | ... | * | - |
[ec2:ModifyReservedInstances](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyReservedInstances.html) | ... | * | - |
[ec2:ModifySnapshotAttribute](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifySnapshotAttribute.html) | ... | * | - |
[ec2:ModifySpotFleetRequest](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifySpotFleetRequest.html) | ... | * | - |
[ec2:ModifySubnetAttribute](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifySubnetAttribute.html) | ... | * | - |
[ec2:ModifyVolumeAttribute](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVolumeAttribute.html) | ... | * | - |
[ec2:ModifyVpcAttribute](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpcAttribute.html) | ... | * | - |
[ec2:ModifyVpcEndpoint](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpcEndpoint.html) | ... | * | - |
[ec2:ModifyVpcPeeringConnectionOptions](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVpcPeeringConnectionOptions.html) | ... | * | - |
[ec2:MonitorInstances](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_MonitorInstances.html) | ... | * | - |
[ec2:MoveAddressToVpc](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_MoveAddressToVpc.html) | ... | * | - |
[ec2:PurchaseReservedInstancesOffering](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_PurchaseReservedInstancesOffering.html) | ... | * | - |
[ec2:PurchaseScheduledInstances](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_PurchaseScheduledInstances.html) | ... | * | - |
[ec2:RegisterImage](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RegisterImage.html) | ... | * | - |
[ec2:ReleaseAddress](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReleaseAddress.html) | ... | * | - |
[ec2:ReleaseHosts](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReleaseHosts.html) | ... | * | - |
[ec2:ReplaceNetworkAclAssociation](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReplaceNetworkAclAssociation.html) | ... | * | - |
[ec2:ReplaceNetworkAclEntry](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReplaceNetworkAclEntry.html) | ... | * | - |
[ec2:ReplaceRoute](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReplaceRoute.html) | ... | * | - |
[ec2:ReplaceRouteTableAssociation](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReplaceRouteTableAssociation.html) | ... | * | - |
[ec2:ReportInstanceStatus](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReportInstanceStatus.html) | ... | * | - |
[ec2:RequestSpotFleet](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotFleet.html) | ... | * | - |
[ec2:RequestSpotInstances](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html) | ... | * | - |
[ec2:ResetImageAttribute](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ResetImageAttribute.html) | ... | * | - |
[ec2:ResetInstanceAttribute](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ResetInstanceAttribute.html) | ... | * | - |
[ec2:ResetNetworkInterfaceAttribute](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ResetNetworkInterfaceAttribute.html) | ... | * | - |
[ec2:ResetSnapshotAttribute](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ResetSnapshotAttribute.html) | ... | * | - |
[ec2:RestoreAddressToClassic](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RestoreAddressToClassic.html) | ... | * | - |
[ec2:RunScheduledInstances](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunScheduledInstances.html) | ... | * | - |
[ec2:UnassignPrivateIpAddresses](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_UnassignPrivateIpAddresses.html) | ... | * | - |
[ec2:UnmonitorInstances](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_UnmonitorInstances.html) | ... | * | - |
