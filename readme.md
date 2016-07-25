# Saporio Marks API

> Saporio API service for stuff related to bookmarks. Nothing much to look at right now.

## Build

```
$ docker build .
```

## Deploy to Google Cloud

C.f. [http://kubernetes.io/docs/hellonode/](http://kubernetes.io/docs/hellonode/)

```
$ docker build -t gcr.io/PROJECT_ID/saporio-marks-api:v0.1 .
$ gcloud docker push gcr.io/PROJECT_ID/saporio-marks-api:v0.1
$ gcloud container clusters get-credentials CLUSTER_NAME
$ kubectl run DEPLOYMENT_NAME --image=gcr.io/PROJECT_ID/saporio-marks-api:v0.1 --port=3000
$ kubectl expose deployment DEPLOYMENT_NAME --type="LoadBalancer" --port=3000 --target-port=80
```
