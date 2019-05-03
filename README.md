# SMS Management System - API
SMS Management System is a javascript back-end application that models sending 
and receiving sms between contacts in the application.

## Features
* Users can create contacts
* Users can retrieve all contacts
* Users can retrieve a single contact
* Users can update a single contact
* Users can delete contacts
* Users can create messages
* Users can retrieve all messages
* Users can retrieve all messages associated with a user
* Users can delete a message

## Installation and Setup
* Clone this Repo.
* From the root directory,
    * Create a ```.env``` file in the root directory. See an example of the content of ```.env``` file in ```.env.sample```
    * Run the following commands:
        ```
        npm install
        ```
        to setup database and run migration, run
        ```
        npm run db:migrate
        ```
        to setup database with dummy data, run
        ```
        npm run db:seed
        ```
        to start the application, run
        ```
        npm start
        ```

## API DOCUMENTATION

### CREATE A CONTACT (/api/v1/contacts)

### Request Type: POST

### Parameters:
* name, phoneNumber

#### Request
```
{
  "name": "Arya Stark",
  "phoneNumber": "08033398615"
}
```

#### Response
```
{
    "message": "Contact created successfully",
    "data": {
        "id": 4,
        "name": "Arya Stark",
        "phoneNumber": "08033398615",
        "updatedAt": "2019-05-03T13:23:22.673Z",
        "createdAt": "2019-05-03T13:23:22.673Z"
    }
}
```

### RETRIEVE ALL CONTACT (/api/v1/contacts)

### Request Type: GET

### Parameters:
* none

#### Response
```
{
    "message": "All contacts retrieved successfully",
    "data": [
        {
            "id": 1,
            "name": "Sansa Stark",
            "phoneNumber": "07033398615",
            "createdAt": "2019-05-03T13:22:04.620Z",
            "updatedAt": "2019-05-03T13:22:04.620Z"
        },
        {
            "id": 2,
            "name": "Jon Snow",
            "phoneNumber": "08033498616",
            "createdAt": "2019-05-03T13:22:04.620Z",
            "updatedAt": "2019-05-03T13:22:04.620Z"
        }
    ]
}
```


### RETRIEVE A SINGLE CONTACT (/api/v1/contacts/:contactId)

### Request Type: GET

### Parameters:
* contactId = 2

#### Response
```
{
    "contact": "Contact retrieved successfully",
    "data": {
        "id": 2,
        "name": "Jon Snow",
        "phoneNumber": "08033498616",
        "createdAt": "2019-05-03T13:22:04.620Z",
        "updatedAt": "2019-05-03T13:22:04.620Z"
    }
}
```

### UPDATE A SINGLE CONTACT (/api/v1/contacts/:contactId)

### Request Type: PUT

### Parameters:
* name, phoneNumber, contactId = 2

#### Request
```
{
  "name": "Daenerys Targaryen"
}
```

#### Response
```
{
    "message": "Contact updated successfully",
    "data": {
        "id": 2,
        "name": "Daenerys Targaryen",
        "phoneNumber": "08033498616",
        "createdAt": "2019-05-03T13:22:04.620Z",
        "updatedAt": "2019-05-03T13:44:13.454Z"
    }
}
```

### DELETE A SINGLE CONTACT (/api/v1/contacts/:contactId)

### Request Type: DELETE

### Parameters:
* contactId = 4

#### Response
```
{
    "message": "Contact with id: 4 was deleted successfully"
}
```

### CREATE A MESSAGE (/api/v1/messages)

### Request Type: POST

### Parameters:
* senderId, recipientId, message

#### Request
```
{
  "senderId": "1",
  "recipientId": "2",
  "message": "Stick it with the pointy end"
}
```

#### Response
```
{
    "message": "Message sent successfully",
    "data": {
        "id": 5,
        "message": "Stick it with the pointy end",
        "senderId": 1,
        "recipientId": 2,
        "status": "delivered",
        "updatedAt": "2019-05-03T13:52:31.060Z",
        "createdAt": "2019-05-03T13:52:31.060Z"
    }
}
```

### RETRIEVE ALL MESSAGES (/api/v1/messages)

### Request Type: GET

### Parameters:
* none

#### Response
```
{
    "message": "All messages retrieved successfully",
    "data": [
        {
            "id": 3,
            "message": "Vestibulum auctor dapibus neque.",
            "status": "delivered",
            "createdAt": "2019-05-03T13:22:04.633Z",
            "updatedAt": "2019-05-03T13:22:04.633Z",
            "senderId": 1,
            "recipientId": 2
        },
        {
            "id": 4,
            "message": "Stick it with the pointy end",
            "status": "delivered",
            "createdAt": "2019-05-03T13:51:41.404Z",
            "updatedAt": "2019-05-03T13:51:41.404Z",
            "senderId": 1,
            "recipientId": 2
        }
    ]
}
```

### RETRIEVE MESSAGES ASSOCIATED WITH A CONTACT (/api/v1/messages/:contactId)

### Request Type: GET

### Parameters:
* contactId = 3

#### Response
```
{
    "data": [
        {
            "id": 3,
            "name": "Sansa Stark",
            "phoneNumber": "08133498616",
            "createdAt": "2019-05-03T13:22:04.620Z",
            "updatedAt": "2019-05-03T13:22:04.620Z",
            "sentMessages": [],
            "receivedMessages": [
                {
                    "id": 2,
                    "message": "Stick it with the pointy end",
                    "status": "delivered",
                    "createdAt": "2019-05-03T13:22:04.633Z",
                    "updatedAt": "2019-05-03T13:22:04.633Z",
                    "senderId": 2,
                    "recipientId": 3
                }
            ]
        }
    ]
}
```

### DELETE A MESSAGE (/api/v1/messages/:messageId)

### Request Type: DELETE

### Parameters:
* messageId = 4

#### Response
```
{
    "message": "Message with id: 2 was deleted successfully"
}
```
