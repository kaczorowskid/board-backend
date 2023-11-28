# Board backend [WIP]

Backend repository with CRUD for whole app and connection with database

## Technology stack

- typescript
- node.js
- sequelize
- express.js

## Installation

```
git clone https://github.com/kaczorowskid/board-backend.git
cd board-backend
npm install
```

## .env file

```
DB_USERNAME = root
DB_PASSWORD = ''
DB_DATABASE = board-backend
DB_HOST = localhost
DB_DIALECT = mysql

ACCESS_KEY= *generated access key*

FRONTEND_URL_ORIGIN_DEV = http://localhost:3000
FRONTEND_URL_ORIGIN_PROD = http://localhost:3000

ENVIRONMENT = development
```

## Run application

```
npm run dev
```

## Build application

```
npm run build
```

# Todo
- improve http codes (not all codes are correct)
