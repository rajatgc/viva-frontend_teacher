import pipwerks from "./scromWrapper";
var scorm = pipwerks.SCORM;
var lmsConnected = false;
var marks = 5;
// Core LMS Functions
export function setMarks() {
  //scorm.init returns a boolean
  lmsConnected = scorm.init();
  console.log(lmsConnected);
  if (lmsConnected) {
    var id = scorm.get("cmi.core.student_id");
    console.log(id);
    var children = scorm.get("cmi.core._children");
    console.log(children);
    if (marks != 0) {
      var success = scorm.set("cmi.core.lesson_status", "completed");
      if (success) {
        //... disconnect from the LMS, we don't need to do anything else.
        scorm.quit();
        console.log("quit");
      } else {
        console.log("not quitiing!!");
      }
    } else console.log("You failed!");
  } else {
    console.log("Could not connect to lms");
  }
}
