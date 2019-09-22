---
id: install_jenkins
title: Install Jenkins
sidebar_label: Install Jenkins
---


## Installation based on Centos 7 minimal

Export your current IP for further use:
```
export IP=$(ip route get 1 | sed -n 's/^.*src \([0-9.]*\) .*$/\1/p');
```

### Prepare System for docker-installation
```
yum install yum-utils
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

### Install and enable docker (Community Edition)
```
yum install -y docker-ce.x86_64 containerd.io.x86_64
systemctl enable docker
systemctl start docker
```

### create a User to work with docker
```
useradd -u 1100 -g cloud_user -G wheel,docker cloud_user
su - cloud_user
```

### Check Dockerversion installed 
```
docker --version
```

### Create and Setup a local Docker-Registry

```
docker run -d -p 5000:5000 --restart=always --name registry registry:2
```

get the jenkins image
```
docker pull jenkinsci/blueocean
```

Tag the downloaded image:

step by step: 
```
# get the image id of your jenkins image:
docker images | awk 'NR==1 || /jenkins/ { print $0 }'
# tag your image
docker tag <IMAGE ID> <your ip>:5000/jenkins
```

or with just a oneLiner:
```
docker images | awk -v ip=${IP} '/jenkins/ {system("docker tag " $3 " " ip ":5000/jenkins")}'
```

push the downloaded image to your local registry
```
docker push ${IP}:5000/jenkins
```

remove the original image downloaded from docker-hub
```
docker image remove jenkinsci/blueocean
```

### Install and run Jenkins as a Docker-Container
```
docker run -u root --rm -d -p 8080:8080 -p 50000:50000 -v jenkins-data:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock --name jenkins ${IP}:5000/jenkins 

```
Details: https://jenkins.io/doc/book/installing/


Check the running Docker-Container:
```
$ docker ps -a

CONTAINER ID        IMAGE                        COMMAND                  CREATED             STATUS              PORTS                                              NAMES
f4eefeb0cfb9        192.168.1.210:5000/jenkins   "/sbin/tini -- /usr/…"   4 seconds ago       Up 3 seconds        0.0.0.0:8080->8080/tcp, 0.0.0.0:50000->50000/tcp   jenkins
f47db747577e        registry:2                   "/entrypoint.sh /etc…"   42 hours ago        Up 2 hours          0.0.0.0:5000->5000/tcp                             registry
```

access http://192.168.1.210:8080 <<-- This is needed to generate the initial password

Login to the Jenkis Container and cat the initial admin Password
```
eval $(docker container ls | awk '/jenkins/ { print "docker exec -it " $1 " /bin/bash"}')
cat /var/jenkins_home/secrets/initialAdminPassword
```

Go back to the Website and paste the password you've got

![initial Login Page](assets/jenkins_initial_pw.png "initial Login Page")

Select "install suggested plugins" and finish installation
![select plugins to install](assets/jenkins_select_plugins.png "select plugins to install")

Then it will install the plugins:
![install plugins](assets/jenkins_install_plugins.png "install plugins")

![create User](assets/jenkins_create_user.png "create user")

```
docker images

REPOSITORY                      TAG                 IMAGE ID            CREATED             SIZE
192.168.1.210:5000/jenkins      latest              a06b5a3526ea        5 hours ago         553MB
registry                        2                   f32a97de94e1        6 months ago        25.8MB
192.168.1.210:5000/docusaurus   latest              1fae97e07aab        17 months ago       631MB

```

### Delete existing Images
```
docker rmi a06b5a3526ea
```






