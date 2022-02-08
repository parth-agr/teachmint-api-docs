---
sidebar_position: 2
---

# Remove Recorded Videos

** POST /remove/videos **

Remove recorded lectures

### Example request

```http
POST /remove/videos  HTTP/1.1
User-Agent: python-requests/2.25.1
Accept-Encoding: gzip, deflate
Accept: *
Connection: keep-alive
Content-Type: application/json

{
   "client_id": "teachmint",
   "auth_key": "W_7jNM1Cd-tqzinD4M3-9dMuQn4V3oMU0FB1HLD-JiFJqc9CVrrQzA",
   "video_uuids": ["de23c546-9290-4add-bd58-20cf8a1ed29b"]
}
```

### Example response:

```http
HTTP/1.1 200 OK
Server: nginx/1.18.0 (Ubuntu)
Content-Type: application/json

{
    "status": true,
    "obj": {
        "deleted": 1
    },
    "msg":"Lecture deleted"
}
```

### Request JSON Object

- `client_id` (string) – Client Id

- `auth_key` (string) – The Auth Key corresponding to Client Id

- `video_uuids` (stringarr) – uuids of video to delete

### Response JSON Object

- `status` (boolean) – Whether deletion was successful

- `msg` (string) – Specific message for response

- `obj.deleted` (string) – Specific message for response
