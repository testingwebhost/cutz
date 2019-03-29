$(document).ready(function() {
  // Date time variables
  var dtNow;       // Now
  var dtOpenMon;    // Weekday - Open
  var dtCloseMon;   // Weekday - Close
  var dtOpenTue;    // Weekday - Open
  var dtCloseTue;   // Weekday - Close
  var dtOpenWed;    // Weekday - Open
  var dtCloseWed;   // Weekday - Close
  var dtOpenThu;    // Weekday - Open
  var dtCloseThu;   // Weekday - Close
  var dtOpenFri;    // Weekday - Open
  var dtCloseFri;   // Weekday - Close
  var dtOpenSat;   // Saturday - Open
  var dtCloseSat;  // Saturday - Close
  var dtOpenSun;   // Sunday - Open
  var dtCloseSun;  // Sunday - Close
  var isOpen;      // is open?


 



  // Initialize date values
  dtNow = new Date();
  dayNow = new Date();
  dtOpenMon = new Date(dtNow.getFullYear(), dtNow.getMonth(), dtNow.getDate(), 9);
  dtCloseMon = new Date(dtNow.getFullYear(), dtNow.getMonth(), dtNow.getDate(), 15);
  dtOpenTue = new Date(dtNow.getFullYear(), dtNow.getMonth(), dtNow.getDate(), 9);
  dtCloseTue = new Date(dtNow.getFullYear(), dtNow.getMonth(), dtNow.getDate(), 15);
  dtOpenWed = new Date(dtNow.getFullYear(), dtNow.getMonth(), dtNow.getDate(), 9);
  dtCloseWed = new Date(dtNow.getFullYear(), dtNow.getMonth(), dtNow.getDate(), 15);
  dtOpenThu = new Date(dtNow.getFullYear(), dtNow.getMonth(), dtNow.getDate(), 9);
  dtCloseThu = new Date(dtNow.getFullYear(), dtNow.getMonth(), dtNow.getDate(), 17);
  dtOpenFri = new Date(dtNow.getFullYear(), dtNow.getMonth(), dtNow.getDate(), 9);
  dtCloseFri = new Date(dtNow.getFullYear(), dtNow.getMonth(), dtNow.getDate(), 18);
  dtOpenSat = new Date(dtNow.getFullYear(), dtNow.getMonth(), dtNow.getDate(), 9);
  dtCloseSat = new Date(dtNow.getFullYear(), dtNow.getMonth(), dtNow.getDate(), 16);
  dtOpenSun = new Date(dtNow.getFullYear(), dtNow.getMonth(), dtNow.getDate(), 0);
  dtCloseSun = new Date(dtNow.getFullYear(), dtNow.getMonth(), dtNow.getDate(), 0);

  // Determine day and calculate isOpen
 

  switch (dtNow.getDay()) {
    case 0:
      isOpen = (dtNow.getTime() > dtOpenSun.getTime() && dtNow.getTime() < dtCloseSun.getTime());
      break;

      case 1:
      isOpen = (dtNow.getTime() > dtOpenMon.getTime() && dtNow.getTime() < dtCloseMon.getTime());
      break;

      case 2:
      isOpen = (dtNow.getTime() > dtOpenTue.getTime() && dtNow.getTime() < dtCloseTue.getTime());
      break;

      case 3:
      isOpen = (dtNow.getTime() > dtOpenWed.getTime() && dtNow.getTime() < dtCloseWed.getTime());
      break;

      case 4:
      isOpen = (dtNow.getTime() > dtOpenThu.getTime() && dtNow.getTime() < dtCloseThu.getTime());
      break;

      case 5:
      isOpen = (dtNow.getTime() > dtOpenFri.getTime() && dtNow.getTime() < dtCloseFri.getTime());
      break;

    case 6:
      isOpen = (dtNow.getTime() > dtOpenSat.getTime() && dtNow.getTime() < dtCloseSat.getTime());
 
  }



  if (isOpen) {
    $('.openstatus').toggle();
   
  }

   var days = ['Sunday', 'Monday', 'Tuesday', 'Wedensday', 'Thursday', 'Friday', 'Saturday'],
    now = new Date(),
    today = now.getDay();
    document.getElementById(days[today]).className += ' today';
});