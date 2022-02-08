---
sidebar_position: 2
---

# Delete room

** POST /remove/room **

Removes a room and all the users in that room

### Example request

```js
POST /remove/room  HTTP/1.1
User-Agent: python-requests/2.25.1
Accept-Encoding: gzip, deflate
Accept: *
Connection: keep-alive
Content-Type: application/json

{
   "client_id": "teachmint",
   "auth_key": "W_7jNM1Cd-tqzinD4M3-9dMuQn4V3oMU0FB1HLD-JiFJqc9CVrrQzA",
   "room_id": "red-wizard",
}
```

### Example response:

```js
HTTP/1.1 200 OK
Server: nginx/1.18.0 (Ubuntu)
Content-Type: application/json

{
    "status": true,
    "msg": "Room deleted sucessfully"
}
```

### Request JSON Object

- `client_id` (string) – Client Id

- `auth_key` (string) – The Auth Key corresponding to Client Id

- `room_id` (string) – The new room id you want to add “Eg: red-wizard”

### Response JSON Object

- `status` (boolean) – Whether room deletion was successful

- `msg` (string) – Specific message for response
