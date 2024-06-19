# shop-app-backend

## usermodel

* full name - string
* email - string
* password - string
* cart - array
* isadmin - boolean
* order - array
* contact - number
* picture - db(memory storage)

## productmodel

* name - string
* price - number
* discount - number
* bgColor - string
* panelColor - string
* textColor - string


## owenermodel

* fullname - string
* email - string
* password - string
* products - ararry
* picture - string
* gstin - string

## routes skeleton

* / -> signup
* /shop -> shop
* /users/cart -> cart
* /admin -> admin
* /owner/products -> show all products
* /owner/admin -> show admin pannel to create products
