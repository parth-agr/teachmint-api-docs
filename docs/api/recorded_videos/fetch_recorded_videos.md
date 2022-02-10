# Fetch Recorded Videos

** POST /TODO/videos **

Fetch recordings for a room

### Example request

```http
POST /TODO/videos  HTTP/1.1
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
-
- `room_id` (string) - Room Id

### Response JSON Object

- `obj` (jsonobj) – Details of Recorded Videos
