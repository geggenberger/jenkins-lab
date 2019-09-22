---
id: nodeJS_install
title: Install NodeJS and Yarn
sidebar_label: Install NodeJS and Yarn
---

### Install Node.JS / YARN 
> **Note:** This Documentation is based on Fedora.


```bash
dnf install npm.x86_64
npm install yarn -g
```

Install Docusaurus
```bash
yarn global add docusaurus-init
```

```bash
cd {git_workspace}/jenkins-lab/docusaurus/
npx docusaurus-init
```

modify the content of your Documentation-Page: siteConfig.js 
```bash
cd {git_workspace}/jenkins-lab/docusaurus/website
yarn run build
```

If not already installed, please install git-subtree:
```bash
sudo dnf install -y git-subtree.x86_64
```
