# Activity Result when live class ends

Once the teacher ends the live class through the End Class Button click, a result is delivered to the calling activity with the following intent data:

- `class_id`: Room Id for the class just finished
- `session_id`: Session Id for the ongoing session
- type: "**end_for_all**" or "**leave**" based upon the option selected by the teacher
- `recording_saved`: If the user has turned on recording in the session, then it will hold the **Session Id** for that session otherwise **null**
- `whiteboard_saved`: If the user has saved the shared whiteboard or pdf or image during the session, then it will hold the **Session Id** for that session otherwise **null**
