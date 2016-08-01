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
