# Stock'Em! API

## The Database
The database is hosted on the heroku database addon. There are six tables: 

*User table is not yet implemented.
__USERS__
id | username | passw  
-- | -- | -- 
id - primary key| some username - not null | hashed password - not null 

__INVENTORIES__
id | user_id | sku | quantity | inv_description | inv_location | date_entered 
---- | ---- | ---- | ---- | ---- | ---- | ---- 
id - primary key | user id - integer not null | sku - text not null | quantity - integer not null | material description - text | material location - text | date added to inventory - text not null 

__SUPPLIERS__
id | user_id | company | contact | phone | email | sup_address
---- | ---- | ---- | ---- | ---- | ---- 
id - primary key | user id - integer not null | supplier company name - text not null | supplier contact name - text not null | supplier contact phone - text not null | supplier contact email - text not null | supplier address - text not null

__CUSTOMERS__
id | user_id | company | contact | phone | email | bill_address | ship_address
---- | ---- | ---- | ---- | ---- | ---- | ----
id - primary key | user id - integer not null | customer company name - text not null | customer contact name - text not null | customer contact phone - text not null | customer contact email - text not null | customer billing address - text not null | customer ship-to address - text not null

__ORDERS__
id | user_id | company | sku | quantity | inv_description | cust_order | sup_order | date_entered
---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ----
id - primary key | user id - integer not null | company name - text not null | sku - text not null | quantity - integer not null | material description - text | customer order - text | supplier order - text | date submitted - text

__SKUS__
id | user_id | sku | inv_description | date_entered
---- | ---- | ---- | ---- | ---- 
id - primary key | user id - integer not null | sku - text not null | material description - text | date submitted - text

## API documentation/shcemas
Please see the endpoints and schemas below:
```
`https://stock-em-api.herokuapp.com/api/stock-em`
/inventory
/suppliers
/customers
/past_orders
/skus
```
### /inventory 

__GET__: 
request query: 
```
    `https://stock-em-api.herokuapp.com/api/stock-em/inventory/?user_id=${user_id}`
```
returns: 
```
    [{
        "id": 1,
        "sku": 1234,
        "quantity": 25,
        "inv_description": "capacitor",
        "inv_location": "M01",
        "date_entered": "2020-5-5"
    },...]
```
__POST__: 

body:  
```
    {
        "sku": 1234,
        "quantity": 25,
        "inv_description": "capacitor",
        "inv_location": "M01",
        "date_entered": "2020-5-5"
    }
```
returns: 
```
    {
        "id": "newid",
        "sku": 1234,
        "quantity": 25,
        "inv_description": "capacitor",
        "inv_location": "M01",
        "date_entered": "2020-5-5"
    }
```
__DELETE__:

body: 
```
    {
        "id": the inventory id
    }
```
returns:
```
    {
        "id": deleted id
    }
```



### /suppliers

__GET__:

query params:
```
    `https://stock-em-api.herokuapp.com/api/stock-em/suppliers/?user_id=${user_id}`
```
returns:
```
    [
        {
            "id": 1,
            "company": "Company 1",
            "contact": "John Doe",
            "phone": "111-111-1112",
            "email": "111222@gmail.com",
            "sup_address": "1234 Main St., Nowhere USA"
        },...
    ]
```
__POST__: 

body:  
```
    {
        "company": "Company 1",
        "contact": "John Doe",
        "phone": "111-111-1112",
        "email": "111222@gmail.com",
        "sup_address": "1234 Main St., Nowhere USA"
    }
```
returns: 
```
    {
        "id": new id,
        "company": "Company 1",
        "contact": "John Doe",
        "phone": "111-111-1112",
        "email": "111222@gmail.com",
        "sup_address": "1234 Main St., Nowhere USA"
    }
```
__PATCH__:

body:  
```
    {
        "id": id,
        "company": "UPDATED COMPANY",
        "contact": "John Doe",
        "phone": "111-111-1112",
        "email": "111222@gmail.com",
        "sup_address": "1234 Main St., Nowhere USA"
    }
```
returns: 
```
    {
        "id": id,
        "company": "UPDATED COMPANY",
        "contact": "John Doe",
        "phone": "111-111-1112",
        "email": "111222@gmail.com",
        "sup_address": "1234 Main St., Nowhere USA"
    }
```

### /customers

__GET__:

query params:
```
    `https://stock-em-api.herokuapp.com/api/stock-em/customers/?user_id=${user_id}`
```

returns: 
```
   [
       {
            "id": 1,
            "company": "Company 1",
            "contact": "Jane Doe",
            "phone": "111-111-1112",
            "email": "111222@gmail.com",
            "bill_address": "1234 Main St., Nowhere USA",
            "ship_address": "1234 Main St., Nowhere USA"
        },...
    ]
```
__POST__ :

body: 
```
    {
        "company": "Company 1",
        "contact": "Jane Doe",
        "phone": "111-111-1112",
        "email": "111222@gmail.com",
        "bill_address": "1234 Main St., Nowhere USA",
        "ship_address": "1234 Main St., Nowhere USA"
    }
```
returns: 
```
    {
        "id": new id,
        "company": "Company 1",
        "contact": "Jane Doe",
        "phone": "111-111-1112",
        "email": "111222@gmail.com",
        "bill_address": "1234 Main St., Nowhere USA",
        "ship_address": "1234 Main St., Nowhere USA"
    }
```
__PATCH__:

body: 
```
    {
        "id": 1,
        "company": "UPDATED CUSTOMER COMPANY",
        "contact": "Jane Doe",
        "phone": "111-111-1112",
        "email": "111222@gmail.com",
        "bill_address": "1234 Main St., Nowhere USA",
        "ship_address": "1234 Main St., Nowhere USA"
    }
```
returns: 
```
    {
        "id": 1,
        "company": "UPDATED CUSTOMER COMPANY",
        "contact": "Jane Doe",
        "phone": "111-111-1112",
        "email": "111222@gmail.com",
        "bill_address": "1234 Main St., Nowhere USA",
        "ship_address": "1234 Main St., Nowhere USA"
    }
```

### /past_orders
__GET__:

query params:
```
    `https://stock-em-api.herokuapp.com/api/stock-em/past-orders/?user_id=${user_id}`
```

returns: 
```
   [
       {
            "id": 1,
            "company":"Some Company",
            "sku": 1234,
            "quantity": 100,
            "inv_description": "capacitor",
            "cust_order": "PO123",
            "sup_order": "",
            "date_entered": "2020-1-1"
        },...
    ]
```
__POST__:

body: 
```
    {
        "company":"Some Company",
        "sku": 1234,
        "quantity": 100,
        "inv_description": "capacitor",
        "cust_order": "PO123",
        "sup_order": "",
        "date_entered": "2020-1-1"
    }
```
returns: 
```
    {
        "id": new id,
        "company":"Some Company",
        "sku": 1234,
        "quantity": 100,
        "inv_description": "capacitor",
        "cust_order": "PO123",
        "sup_order": "",
        "date_entered": "2020-1-1"
    }
```

### /skus

__GET__:

query params:
```
    `https://stock-em-api.herokuapp.com/api/stock-em/skus/?user_id=${user_id}`
```

returns: 
```
   [
       {
            "id": 1,
            "sku": 1234,
            "inv_description": "capacitor",
            "date_entered": "2020-5-5"
        },...
    ]
```
__POST__:

body: 
```
   {
        "sku": 1234,
        "inv_description": "capacitor",
        "date_entered": "2020-5-5"
    }
```
returns: 
```
    {
        "id": new id,
        "sku": 1234,
        "inv_description": "capacitor",
        "date_entered": "2020-5-5"
    },
```

