

Genarate Event
```
sam local generate-event dynamodb > event.json
```

Generate Bucket command
```
aws --endpoint-url=http://localhost:4572 s3api create-bucket --bucket test-bucket
```

Exec Lambda
```
sam local invoke lambdaFunction -e event.json 
```