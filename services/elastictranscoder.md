| Action | Description | Resource | Condition |
| --- | --- | --- | --- |
| [elastictranscoder:CancelJob](http://docs.aws.amazon.com/elastictranscoder/latest/developerguide/cancel-job.html) | To cancel a job that Elastic Transcoder has not begun to process. | arn:aws:elastictranscoder:$region:$account:job/$job-id | - |
| [elastictranscoder:CreateJob](http://docs.aws.amazon.com/elastictranscoder/latest/developerguide/create-job.html) | To create a job. | * | - |
| [elastictranscoder:CreatePipeline](http://docs.aws.amazon.com/elastictranscoder/latest/developerguide/create-pipeline.html) | To create a pipeline. | * | - |
| [elastictranscoder:CreatePreset](http://docs.aws.amazon.com/elastictranscoder/latest/developerguide/create-preset.html) | To create a preset. | * | - |
| [elastictranscoder:DeletePipeline](http://docs.aws.amazon.com/elastictranscoder/latest/developerguide/delete-pipeline.html) | To delete a pipeline. | arn:aws:elastictranscoder:$region:$account:pipeline/$pipeline-id | - |
| [elastictranscoder:DeletePreset](http://docs.aws.amazon.com/elastictranscoder/latest/developerguide/delete-preset.html) | To delete a preset. | arn:aws:elastictranscoder:$region:$account:preset/$preset-id | - |
| [elastictranscoder:ListJobsByPipeline](http://docs.aws.amazon.com/elastictranscoder/latest/developerguide/list-jobs-by-pipeline.html) | To get a list of the jobs that you assigned to a pipeline. | arn:aws:elastictranscoder:$region:$account:pipeline/$pipeline-id | - |
| [elastictranscoder:ListJobsByStatus](http://docs.aws.amazon.com/elastictranscoder/latest/developerguide/list-jobs-by-status.html) | To get a list of the jobs that have a specified status. | * | - |
| [elastictranscoder:ListPipelines](http://docs.aws.amazon.com/elastictranscoder/latest/developerguide/list-pipelines.html) | To get a list of the pipelines associated with the current AWS account. | * | - |
| [elastictranscoder:ListPresets](http://docs.aws.amazon.com/elastictranscoder/latest/developerguide/list-presets.html) | To get a list of all presets associated with the current AWS account. | * | - |
| [elastictranscoder:ReadJob](http://docs.aws.amazon.com/elastictranscoder/latest/developerguide/get-job.html) | To get detailed information about a job. | arn:aws:elastictranscoder:$region:$account:job/$job-id | - |
| [elastictranscoder:ReadPipeline](http://docs.aws.amazon.com/elastictranscoder/latest/developerguide/get-pipeline.html) | To get detailed information about a pipeline. | arn:aws:elastictranscoder:$region:$account:pipeline/$pipeline-id | - |
| [elastictranscoder:ReadPreset](http://docs.aws.amazon.com/elastictranscoder/latest/developerguide/get-preset.html) | To get detailed information about a preset. | arn:aws:elastictranscoder:$region:$account:preset/$preset-i | - |
| [elastictranscoder:TestRole](http://docs.aws.amazon.com/elastictranscoder/latest/developerguide/test-pipeline-role.html) | To test the settings for a pipeline to ensure that Elastic Transcoder can create and process jobs. | * | - |
| [elastictranscoder:UpdatePipeline](http://docs.aws.amazon.com/elastictranscoder/latest/developerguide/update-pipeline.html) | To update settings for a pipeline. | arn:aws:elastictranscoder:$region:$account:pipeline/$pipeline-id | - |
| [elastictranscoder:UpdatePipelineNotifications](http://docs.aws.amazon.com/elastictranscoder/latest/developerguide/update-pipeline-notifications.html) | To update only Amazon Simple Notification Service (Amazon SNS) notifications for a pipeline. | arn:aws:elastictranscoder:$region:$account:pipeline/$pipeline-id | - |
| [elastictranscoder:UpdatePipelineStatus](http://docs.aws.amazon.com/elastictranscoder/latest/developerguide/update-pipeline-status.html) | To pause or reactivate a pipeline, so the pipeline stops or restarts processing jobs, update the status for the pipeline. | arn:aws:elastictranscoder:$region:$account:pipeline/$pipeline-id | - |

