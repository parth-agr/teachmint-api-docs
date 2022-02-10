# Initializing the SDK

To launch the TeachStack Video-conferencing platform, create an instance of the **TMVaaSBuilder** class and invoke the function **initializeVaas(activity, clientUrl)** as follows

```js
TMVaaSBuilder()
   .initializeVaas(
       activity = < Reference to the activity launching the SDK >,
       clientUrl = "{hostname}/videoroom/{classId}/{userId}/{authKey}"
   )
```

`activity` - It takes reference to the activity that is launching the sdk on the client side

`clientUrl` - The backend generated a url for that particular user for that video room
