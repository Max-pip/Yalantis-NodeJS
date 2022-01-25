# Yalantis-NodeJS
# Prerequisites

Install Node JS https://nodejs.org/es/download/

# Usage

* Run npm install to installl dependencies
* Run npm run start to start the local server
* Load http://localhost:3000. You must see **{"message": "Connected"}**

# API

## GET /user/{id}

Get user information by user id

```js
{
    "message": "success",
    "data": {
        "id": 1,
        "name": "Max",
        "lastname": "Pavliuk",
        "wish1": "phone",
        "wish2": "audi",
        "wish3": "monitor",
        "wish4": "0",
        "wish5": "0",
        "wish6": "0",
        "wish7": "0",
        "wish8": "0",
        "wish9": "0",
        "wish10": "0"
    }
}
```

## POST /user/

To create a new user based on POST data (x-www-form-url-encoded)

* name: user name
* lastname: user lastname
* wishlist: user wishes from 1 to 10 (if there are less than 10 - write 0 where necessary)

![post](https://github.com/Max-pip/Yalantis-NodeJS/blob/main/yalantis_post.jpg)

## GET /users

Get a list of users
