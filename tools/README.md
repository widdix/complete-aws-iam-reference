# Tools

## Create rows.js from Markdown files

```
node md2json.js > ../app/data/rows.json 
```

## Read API descriptions from Documentation link

```
node fetchDescriptionFromDocs.js ../services/ec2.md > temp.md
mv temp.md ../services/ec2.md
```
