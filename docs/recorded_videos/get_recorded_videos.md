---
sidebar_position: 1
---

# Get Recorded Videos

** POST /get/videos **

Get all the recorded videos

### Example request

```js
POST /get/videos  HTTP/1.1
User-Agent: python-requests/2.25.1
Accept-Encoding: gzip, deflate
Accept: *
Connection: keep-alive
Content-Type: application/json

{
   "client_id": "teachmint",
   "auth_key": "W_7jNM1Cd-tqzinD4M3-9dMuQn4V3oMU0FB1HLD-JiFJqc9CVrrQzA",
}
```

### Example response

```js
HTTP/1.1 200 OK
Server: nginx/1.18.0 (Ubuntu)
Content-Type: application/json

{
    "status" : true,
    "obj" : [{
        "_id": "61436403912fe0d86d993d1d",
        "c": 1631806475.5102067,
        "u": 1631807316.8797545,
        "class_id": "shikho::red-wizard",
        "uuid": "de23c546-9290-4add-bd58-20cf8a1ed29b",
        "client": "shikho",
        "raw_path": "https://storage.googleapis.com/teachmint/video_lectures/de23c546-9290-4add-bd58-20cf8a1ed29b.webm",
        "processed_path": "https://storage.googleapis.com/teachmint/video_lectures/de23c546-9290-4add-bd58-20cf8a1ed29b.mp4",
        "thumbnail_path": "https://storage.googleapis.com/teachmint/video_lectures/de23c546-9290-4add-bd58-20cf8a1ed29b.png",
        "version": "1.0.0",
        "duration": 45,
        "status": "PROCESSED"
    }]
}
```

### Request JSON Object

- `client_id` (string) – Client Id

- `auth_key` (string) – The Auth Key corresponding to Client Id

### Response JSON Object

- `obj` (jsonobj) – Details of Recorded Videos

