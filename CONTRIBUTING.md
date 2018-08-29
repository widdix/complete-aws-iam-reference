# Complete AWS IAM Reference

**By opening a Pull Request, you agree that your contribution is licensed under CC0 1.0 Universell (CC0 1.0)**

All information is stored in Markdown files in the `services` folder. Everything inside `app` is generated from the Markdown files.

## Sources of truth

A good starting point in the AWS IAM documentation can be:

* http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html
* https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_actionsconditions.html
* https://policysim.aws.amazon.com
* in the services documentation

## Extend a service

To extend the information of a service, edit the file in the services folder. Make sure to follow the line structure as following:

```
| Action | Description | Resource | Condition |
```

* Separate multiple Resources or Conditions with a `,`.
* If no resource-level permissions apply, use a `*`-
* If no service specific conditions apply, use a `-`.

## Add a service

The add information about a new service, create a new file in the services folder named `<service>.md`. Make sure to follow the line structure as following:

```
| Action | Description | Resource | Condition |
| --- | --- | --- | --- |
| [service:Action](http://docs.aws.amazon.com/Service/latest/APIReference/API_Action.html) | Some description. | * | - |
```

* Separate multiple Resources or Conditions with a `,`.
* If no resource-level permissions apply, use a `*`-
* If no service specific conditions apply, use a `-`.

Finally, add an entry to `tools/serviceNames.json` to map the service short name (e.g., `ec2`) to the full name (e.g., `Amazon Elastic Compute Cloud`).

## Publish to iam.cloudonaut.io

A pipeline will publish your changes to https://iam.cloudonaut.io within 15 minutes after merging your PR.
