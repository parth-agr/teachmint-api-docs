---
sidebar_position: 3
---

# Add-ons

## Event Listener

To consume the events produced by the SDK, implement the interface SDKEventManager and pass an instance of the this class along with the initialization of sdk using the function

```js
.addEventManager(sdkEventManager = EventManager())
```

```js title="Where EventManager class has been defined as:"
class EventManager : SDKEventManager {

   override fun trackEvent(eventName: String, eventData: Map<String, String>) {
       when (eventName) {
           "LIVE_CLASS_ONGOING" -> {
           }

           "LIVE_CLASS_AGGREGATED_DATA_CLICKS" -> {
           }

           "LIVE_CLASS_AGGREGATED_DATA_DURATION" -> {
           }
       }
   }
}
```

## A brief description of the events generated

### LIVE_CLASS_ONGOING

- **Event Name**: “LIVE_CLASS_ONGOING”
- **Users**: Teacher
- **Event data** : `“class_id”` - ClassId of the room
- **Description**: This event is triggered from the teacher side once it goes live and a connection is established between the teacher and the students

:::note

This event is triggered every time once the internet connection for the teacher is restored during a particular session

:::

### LIVE_CLASS_AGGREGATED_DATA_DURATION

- **Event Name**: “LIVE_CLASS_AGGREGATED_DATA_DURATION”
- **Users**: Teacher & Students
- **Event data** :
  - `"class_id"` - ClassId of the room
  - `“session_id”` - Session ID for that particular room
  - `“class_start_time”` - Class start time stamp

:::info

Map with keys as any one of the following values:

- Mic_on
- Video_on
- Share_screen
- Share_whiteboard
- Share_pdf
- Share_photo
- Rear_camera
- Front_camera

The corresponding value in the map responds to the entire duration for which that event occurred during a live class session

:::

:::note

- This event is triggered every 5 mins during a particular session and the value corresponding to each of the events is the cumulative value since the starting of the session
- Session Id is of the format - **&ltuid&gt:&ltuuid&gt**,
  _where uid is the userId for the current user and uuid is an alphanumeric constant that is unique for each session and all the participants for a particular room will have the same uuid_

:::

### LIVE_CLASS_AGGREGATED_DATA_CLICKS

- **Event Name**: “LIVE_CLASS_AGGREGATED_DATA_CLICKS”
- **Users**: Teacher & Students
- **Event data** :
  - `"class_id"` - ClassId of the room
  - `“session_id”` - Session ID for that particular room
  - `“class_start_time”` - Class start time stamp

Map with keys corresponding to click events of all the widgets that can be interacted during a live class session and the corresponding value is a string of comma separated values where each value corresponds to the timestamp at which that element was clicked

:::note

This event is also triggered every 5 mins, but the corresponding values to the keys here are only for the last 5 mins

:::

## Custom Notification for the Foreground Service

The entire SDK is coupled with a foreground service. The service notification being displayed has the click intent for redirecting to the live class activity.

In-case you want to display a custom notification, implement the interface **ServiceNotificationBuilder** and return your custom notification builder instance, and pass an instance of that class to the SDK instance like

```js
.addForegroundServiceNotification(foregroundServiceNotificationBuilder = NotificationBuilder())
```

```js title="Where NotificationBuilder is implemented as:"
const val NotificationChannelId = "TMVAAS_NOTIFICATION_ID"

class NotificationBuilder : ServiceNotificationBuilder {

   override fun getNotification(context: Context): NotificationCompat.Builder {
       return NotificationCompat.Builder(context, NotificationChannelId)
           .setSmallIcon(ForegroundServiceNotificationIcon)
           .setWhen(System.currentTimeMillis())
           .setPriority(NotificationCompat.PRIORITY_LOW)
           .setOnlyAlertOnce(true)
           .setContentTitle("Notification Title")
           .setContentText("Notification Text")
   }
}
```

:::note

Please pass the predefined Notification ID while creating the instance of the NotificationCompact.Builder

:::

## Custom Notification for Screen Sharing Service Notification

You may choose to display your custom notification while the user is using the Share Screen Feature of the SDK. The service notification being displayed has the click intent for redirecting to the Live class activity.

In-case you want to display a custom notification, implement the interface **ServiceNotificationBuilder** and return your custom notification builder instance, and pass it as an instance of that class to the SDK instance like

```js
.addScreenShareServiceNotification(screenShareServiceNotificationBuilder = ScreenShareNotification())
```

```js title="Where ScreenShareNotification is implemented as:"
class ScreenShareNotification : ServiceNotificationBuilder {

   override fun getNotification(context: Context): NotificationCompat.Builder {
       return NotificationCompat.Builder(context, NotificationChannelId)
           .setSmallIcon(ShareScreenNotificationServiceIcon)
           .setWhen(System.currentTimeMillis())
           .setPriority(NotificationCompat.PRIORITY_LOW)
           .setOnlyAlertOnce(true)
           .setContentTitle("Share Screen Title")
           .setContentText("Share Screen Text")
   }
}

```
