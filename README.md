## Installation Instructions

```
git clone https://github.com/michaeldimmitt/as-you-fill-out-the-fields-suddenly-there-is-movement.git &&
cd as-you-fill-out-the-fields-suddenly-there-is-movement &&
npm install &&
npm test &&
npm start
```

## This application shows a registration page and Users page
Fields are validated on the client side and posted to the RDS database.

A second page shows the registered users.
The backend-api is running on an Ec2 instance. And the backend api code can be found at: [db-api](https://github.com/MichaelDimmitt/db-api)


<!--
## Axios network requests contact and AWS Postgres Relational Database Service(RDS)
Rds information is stored in a config file ignored by this project.
<br/>An example config file can be found at .example.config.rds
<br/>Change the key to your RDS instance after copying the file to the correct location:
```bash
cp .example.rds.url.config.js src/rds.url.config.js;
```
## Application not currently deployed with surge
```bash
  npm run build &&
  cd $(pwd)/build &&
  cp index.html 404.html &&
  surge $(pwd) nurse-registration.surge.sh &&
  cd ..;
```
-->

## Application is currently deployed using s3:
```bash
cd build && 
aws s3 sync  . s3://nurse-registration
```
