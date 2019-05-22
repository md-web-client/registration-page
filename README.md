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

A second page shows the registered users. By running a get request to the RDS database.


## Axios network requests contact and AWS Postgres Relational Database Service(RDS)
Rds information is stored in a config file ignored by this project.

An example config file can be found at .example.config.rds

Change the key to your RDS instance after copying the file to the correct location:
```bash
cp .example.rds.url.config.js src/rds.url.config.js;
```
