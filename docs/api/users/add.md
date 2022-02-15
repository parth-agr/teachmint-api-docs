# Add user

** POST /add/user **

Add/Update a user in a room for video. It return the url for live class. The url will be used for iframe. It also return wheter the class is running or not.

### Example request

```http
POST /add/user  HTTP/1.1
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
   "name": "Anshuman",
   "type": 3
}
```

### Example response

```http
HTTP/1.1 200 OK
Server: nginx/1.18.0 (Ubuntu)
Content-Type: application/json

{
    "status": true,
    "msg": "Room user added"
    "obj": {
        "url" : "https://video.teachmint.com"
        "live" : true
    }
}
```

### Request JSON Object

- `client_id` (string) – Client Id

- `auth_key` (string) – The Auth Key corresponding to Client Id

- `room_id` (string) – The room id we want to add user “Eg: red-wizard”

- `user_id` (string) – The user id of user

- `name` (string) – The name of user that will displayed

- `type` (int) – 1 for host, 2 for two way student, 3 for viewers

### Response JSON Object

- `status` (boolean) – Whether user addition was sucessful

- `msg` (string) – Specific message for response

- `obj.url` (string) – Url to use with iframe

- `obj.live` (live) – Whether room is live or not
