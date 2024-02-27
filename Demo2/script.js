function dateConvert() {
    var dateObj = new Date();
    var date = dateObj.getDate();
    var month = dateObj.getMonth() + 1;
    var year = dateObj.getFullYear();
    var hrs = dateObj.getHours();
    var min = dateObj.getMinutes();
    var sec = dateObj.getSeconds();
    if (date.toString().length == 1) {
      date = "0" + date;
    }
    if (hrs.toString().length == 1) {
      hrs = "0" + hrs;
    }
    if (min.toString().length == 1) {
      min = "0" + min;
    }
    if (sec.toString().length == 1) {
      sec = "0" + sec;
    }
    switch (month) {
      case 1:
        month = "Jan";
        break;
      case 2:
        month = "Feb";
        break;
      case 3:
        month = "Mar";
        break;
      case 4:
        month = "Apr";
        break;
      case 5:
        month = "May";
        break;
      case 6:
        month = "Jun";
        break;
      case 7:
        month = "Jul";
        break;
      case 8:
        month = "Aug";
        break;
      case 9:
        month = "Sep";
        break;
      case 10:
        month = "Oct";
        break;
      case 11:
        month = "Nov";
        break;
      case 12:
        month = "Dec";
        break;
    }
    var fullDate = date + "-" + month + "-" + year + " [" + hrs + ":" + min + ":" + sec + "]";
    document.getElementById("time").innerHTML = fullDate;
  }
  dateConvert();
  setInterval(dateConvert, 1000);
  