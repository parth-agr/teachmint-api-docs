---
sidebar_position: 2
---

# Delete user

** POST /remove/user **

Remove user from a room

### Example request

```http
POST /remove/user  HTTP/1.1
User-Agent: python-requests/2.25.1
Accept-Encoding: gzip, deflate
accept: */*
Connection: keep-alive
Content-Type: application/json

{
   "client_id": "teachmint",
   "auth_key": "W_7jNM1Cd-tqzinD4M3-9dMuQn4V3oMU0FB1HLD-JiFJqc9CVrrQzA",
   "room_id": "red-wizard",
   "user_id": "student_01",
}
```

### Example response:

```http
HTTP/1.1 200 OK
Server: nginx/1.18.0 (Ubuntu)
Content-Type: application/json

{
    "status": true,
    "msg": "User removed from room"
}
```

### Request JSON Object

- `client_id` (string) – Client Id

- `auth_key` (string) – The Auth Key corresponding to Client Id

- `room_id` (string) – The room id where you need to add user “Eg: red-wizard”

- `user_id` (string) – The user_id we want’t to remove from room

### Response JSON Object

- `status` (boolean) – Whether user deletion was successful

- `msg` (string) – Specific message for response
