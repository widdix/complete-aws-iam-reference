| Action | Description | Resource | Condition |
| --- | --- | --- | --- |
| [codebuild:BatchGetBuilds](http://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetBuilds.html) | Gets information about builds. | arn:aws:codebuild:$region:$account:project/$project-name | - |
| [codebuild:BatchGetProjects](http://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetProjects.html) | Gets information about build projects. | arn:aws:codebuild:$region:$account:project/$project-name | - |
| [codebuild:CreateProject](http://docs.aws.amazon.com/codebuild/latest/APIReference/API_CreateProject.html) | Creates a build project. | arn:aws:codebuild:$region:$account:project/$project-name | - |
| [codebuild:DeleteProject](http://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteProject.html) | Deletes a build project. | arn:aws:codebuild:$region:$account:project/$project-name | - |
| [codebuild:ListBuilds](http://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListBuilds.html) | Gets a list of build IDs, with each build ID representing a single build. | * | - |
| [codebuild:ListBuildsForProject](http://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListBuildsForProject.html) | Gets a list of build IDs for the specified build project, with each build ID representing a single build. | arn:aws:codebuild:$region:$account:project/$project-name | - |
| [codebuild:ListCuratedEnvironmentImages](http://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListCuratedEnvironmentImages.html) | Gets information about Docker images that are managed by AWS CodeBuild. | * | - |
| [codebuild:ListConnectedOAuthAccounts](http://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListConnectedOAuthAccounts.html) | ??? | ??? | - |
| [codebuild:ListProjects](http://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListProjects.html) | Gets a list of build project names, with each build project name representing a single build project. | * | - |
| [codebuild:ListRepositories](http://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListRepositories.html) | ??? | ??? | - |
| [codebuild:PersistOAuthToken](http://docs.aws.amazon.com/codebuild/latest/APIReference/API_PersistOAuthToken.html) | ??? | ??? | - |
| [codebuild:StartBuild](http://docs.aws.amazon.com/codebuild/latest/APIReference/API_StartBuild.html) | Starts running a build. | arn:aws:codebuild:$region:$account:project/$project-name | - |
| [codebuild:StopBuild](http://docs.aws.amazon.com/codebuild/latest/APIReference/API_StopBuild.html) | Attempts to stop running a build. | arn:aws:codebuild:$region:$account:project/$project-name | - |
| [codebuild:UpdateProject](http://docs.aws.amazon.com/codebuild/latest/APIReference/API_UpdateProject.html) | Changes the settings of a build project. | arn:aws:codebuild:$region:$account:project/$project-name | - |

