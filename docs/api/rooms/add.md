# Add room

** POST /add/room **

Adds a new room for video conferencing

### Example request

```http
POST /add/room  HTTP/1.1
User-Agent: python-requests/2.25.1
Accept-Encoding: gzip, deflate
accept: */*
Connection: keep-alive
Content-Type: application/json

{
   "client_id": "teachmint",
   "auth_key": "W_7jNM1Cd-tqzinD4M3-9dMuQn4V3oMU0FB1HLD-JiFJqc9CVrrQzA",
   "room_id": "red-wizard",
   "name": "Red Wizard",
}
```

### Example response

```http
HTTP/1.1 200 OK
Server: nginx/1.18.0 (Ubuntu)
Content-Type: application/json

{
    "status": true,
    "msg": "Room added sucessfully"
}
```

### Request JSON Object

- `client_id` (string) – Client Id

- `auth_key` (string) – The Auth Key corresponding to Client Id

- `room_id` (string) – The new room id you want to add “Eg: red-wizard”

### Response JSON Object

- `status` (boolean) – Whether room creation was sucessful

- `msg` (string) – Specific message for response
