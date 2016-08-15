# Tools

## Create rows.js from Markdown files

```
node md2json.js > ../app/data/rows.json 
```

## Fetch API descriptions from Documentation link

```
node fetchDescriptionFromDocs.js ../services/ec2.md > temp.md
mv temp.md ../services/ec2.md
```

## Fetch Actions & Links from Documentation

```
node fetchActionsAndLinksFromDocs.js "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_iam.html"
```

## Fetch Actions, Links & Resources from Actions, Resources, and Conditions Reference

```
node fetchPermissionsRef.js "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_iam.html"
```

## Fetch Doc Links from Markdown

```
node fetchDocLink.js "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_cloudformation.html" ../services/cloudformation.md
```

## Render static pages

```
node render.js
```
