A good starting point in the AWS IAM documentation can be found here: https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_actionsconditions.html and the [IAM Policy Simulator](https://policysim.aws.amazon.com)

## Extend a service

To extend the information of a service, edit the file in the services folder. Make sure to follow the line structure as following:

```
| Action | Description | Resource | Condition |
```

Separate multiple Resources or Conditions with a `,`.

## Add a service

The add information about a new service, create a new file in the services folder named `<service>.md`. Make sure to follow the line structure as following:

```
| Action | Description | Resource | Condition |

Separate multiple Resources or Conditions with a `,`.

Don't forget to link to the new service in the root README.md file.

## Publish to iam.cloudonaut.io

We will publish your changes to https://iam.cloudonaut.io as soon as possible after merging your PR.
