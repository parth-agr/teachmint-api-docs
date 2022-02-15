# Get Recordings

There are two type of calls:

- Get all the recordings
- Get recordings for a room

## Get all the recordings

** POST /get/videos **

### Example request

```http
POST /get/videos  HTTP/1.1
User-Agent: python-requests/2.25.1
Accept-Encoding: gzip, deflate
accept: */*
Connection: keep-alive
Content-Type: application/json

{
   "client_id": "teachmint",
   "auth_key": "W_7jNM1Cd-tqzinD4M3-9dMuQn4V3oMU0FB1HLD-JiFJqc9CVrrQzA",
}
```

### Example response

```http
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

- `obj` (jsonobj) – Details of Recordings

---

## Get recordings for a room

** POST /get/videos **

### Example request

```http
POST /get/videos  HTTP/1.1
User-Agent: python-requests/2.25.1
Accept-Encoding: gzip, deflate
accept: */*
Connection: keep-alive
Content-Type: application/json

{
    "client_id": "your_client_id",
    "auth_key": "your_auth_key",
    "room_id": "1234556"
}
```

### Example response

```http
HTTP/1.1 200 OK
Server: nginx/1.18.0 (Ubuntu)
Content-Type: application/json

{
  "status": true,
  "obj": {
    "recordings": [
      {
        "_id": "62f811fda299d6803d9ff4cd",
        "c": 1643654938.9187126,
        "u": 1643655003.1972032,
        "class_id": "teachmint::123456",
        "session_id": "912936fa-5c9c-44c3-907e-a56bc6e66ghf",
        "uuid": "912936fa-5c9c-44c3-907e-a56bc6e66ghf",
        "client": "teachmint",
        "raw_path": "https://storage.googleapis.com/teachmint/video_lectures/912936fa-5c9c-44c3-907e-a56bc6e66ghf.webm",
        "processed_path": "https://storage.googleapis.com/teachmint/video_lectures/912936fa-5c9c-44c3-907e-a56bc6e66ghf.mp4",
        "thumbnail_path": "https://storage.googleapis.com/teachmint/video_lectures/912936fa-5c9c-44c3-907e-a56bc6e66ghf.png",
        "thumbnail_256x144_path": "https://storage.googleapis.com/teachmint/video_lectures/912936fa-5c9c-44c3-907e-a56bc6e66ghf_256x144.png",
        "version": "1.0.0",
        "duration": 13,
        "status": "SENT",
        "mode": "landscape",
        "callback": null
      },
      {
        "_id": "61f92dd81d1e96b3z9682d34",
        "c": 1643655182.5106518,
        "u": 1643655243.7288055,
        "class_id": "teachmint::123456",
        "session_id": "c54e1caf-5649-42b1-bb3b-mn1n22kji3eg",
        "uuid": "c54e1caf-5649-42b1-bb3b-mn1n22kji3eg",
        "client": "teachmint",
        "raw_path": "https://storage.googleapis.com/teachmint/video_lectures/c54e1caf-5649-42b1-bb3b-mn1n22kji3eg.webm",
        "processed_path": "https://storage.googleapis.com/teachmint/video_lectures/c54e1caf-5649-42b1-bb3b-mn1n22kji3eg.mp4",
        "thumbnail_path": "https://storage.googleapis.com/teachmint/video_lectures/c54e1caf-5649-42b1-bb3b-mn1n22kji3eg.png",
        "thumbnail_256x144_path": "https://storage.googleapis.com/teachmint/video_lectures/c54e1caf-5649-42b1-bb3b-mn1n22kji3eg_256x144.png",
        "version": "1.0.0",
        "duration": 21,
        "status": "SENT",
        "mode": "landscape",
        "callback": null
      }
    ]
  }
}
```

### Request JSON Object

- `client_id` (string) – Client Id

- `auth_key` (string) – The Auth Key corresponding to Client Id

- `room_id` (string) - Room Id

### Response JSON Object

- `obj` (jsonobj) – Details of Recordings
