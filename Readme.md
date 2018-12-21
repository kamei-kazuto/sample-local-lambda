

## Genarate Event
```
sam local generate-event dynamodb > event.json
```

## Generate Bucket command
```
aws --endpoint-url=http://localhost:4572 s3api create-bucket --bucket test-bucket
```


## docker status
```
docker network ls
docker network inspect [NETWORK ID]
```

## Exec Lambda
```
sam local invoke lambdaFunction -e event.json 

sam local start-api --docker-network [NETWORK ID] --env-vars env.json
```

- request sample api
```
curl -XPUT http://127.0.0.1:3000/resource/sample
```