| Action | Description | Resource | Condition |
| --- | --- | --- | --- |
| [rekognition:CompareFaces](http://docs.aws.amazon.com/rekognition/latest/dg/API_CompareFaces.html) | Compares a face in the source input image with each face detected in the target input image. | arn:aws:rekognition:$region:$account:collection/$collection-id | - |
| [rekognition:CreateCollection](http://docs.aws.amazon.com/rekognition/latest/dg/API_CreateCollection.html) | Creates a collection in an AWS Region. | arn:aws:rekognition:$region:$account:collection/$collection-id | - |
| [rekognition:DeleteCollection](http://docs.aws.amazon.com/rekognition/latest/dg/API_DeleteCollection.html) | Deletes the specified collection. | arn:aws:rekognition:$region:$account:collection/$collection-id | - |
| [rekognition:DeleteFaces](http://docs.aws.amazon.com/rekognition/latest/dg/API_DeleteFaces.html) | Deletes faces from a collection. | arn:aws:rekognition:$region:$account:collection/$collection-id | - |
| [rekognition:DetectFaces](http://docs.aws.amazon.com/rekognition/latest/dg/API_DetectFaces.html) | Detects faces within an image (JPEG or PNG) that is provided as input. | arn:aws:rekognition:$region:$account:collection/$collection-id | - |
| [rekognition:DetectLabels](http://docs.aws.amazon.com/rekognition/latest/dg/API_DetectLabels.html) | Detects instances of real-world labels within an image (JPEG or PNG) provided as input. | arn:aws:rekognition:$region:$account:collection/$collection-id | - |
| [rekognition:IndexFaces](http://docs.aws.amazon.com/rekognition/latest/dg/API_IndexFaces.html) | Detects faces in the input image and adds them to the specified collection. | arn:aws:rekognition:$region:$account:collection/$collection-id | - |
| [rekognition:ListCollections](http://docs.aws.amazon.com/rekognition/latest/dg/API_ListCollections.html) | Returns list of collection IDs in your account. | * | - |
| [rekognition:ListFaces](http://docs.aws.amazon.com/rekognition/latest/dg/API_ListFaces.html) | Returns metadata for faces in the specified collection. | arn:aws:rekognition:$region:$account:collection/$collection-id | - |
| [rekognition:SearchFaces](http://docs.aws.amazon.com/rekognition/latest/dg/API_SearchFaces.html) | For a given input face ID, searches for matching faces in the collection the face belongs to. | arn:aws:rekognition:$region:$account:collection/$collection-id | - |
| [rekognition:SearchFacesByImage](http://docs.aws.amazon.com/rekognition/latest/dg/API_SearchFacesByImage.html) | For a given input image, first detects the largest face in the image, and then searches the specified collection for matching faces. | arn:aws:rekognition:$region:$account:collection/$collection-id | - |

