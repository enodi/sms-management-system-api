# SMS Management System - API
SMS Management System is a javascript back-end application that models sending 
and receiving sms between contacts in the application.

## Features
* Users can create contacts
* Users can retrieve all contacts
* Users can retrieve a single contact
* Users can update a single contact details
* Users can delete contacts
* Users can create messages
* Users can retrieve all messages
* Users can retrieve a single message
* Users can delete a message

## Installation and Setup
Clone this Repo. From the root directory, run the following:
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
#### Request Type: POST
### Parameters:
* name, phoneNumber

#### Request
```
{
  "name": "Jane Doe",
  "phoneNumber": "07033398615"
}
```
