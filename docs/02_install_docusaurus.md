---
id: docusaurus_install
title: Install Docusaurus
sidebar_label: Install Docusaurus
---

### Install Docusaurus as Docker Container

First we pull the image from docker-hub
```
docker pull sanjose/docusaurus
```

Check the local Image:
```
docker images | awk 'NR==1 || /docusaurus/ { print $0 }'
```

Tag the Image:
```
docker images | awk -v ip=${IP} '/docusaurus/ {system("docker tag " $3 " " ip ":5000/docusaurus")}'
```

Push the Image to the local Registry:
```
docker push ${IP}:5000/docusaurus
```

Remove the downloaded Image:
```
docker image remove sanjose/docusaurus
```

Run docusaurus :
```
docker run -u root --rm -d -p 4000:3000 --name docusaurus ${IP}:5000/docusaurus npm start --host 0.0.0.0
```


Login to your Docusaurus-Container
```
eval $(docker container ls | awk '/docusaurus/ { print "docker exec -it " $1 " /bin/bash"}')
```
