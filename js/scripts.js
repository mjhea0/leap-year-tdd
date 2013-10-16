// scripts.js

function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 !=0 || year % 400 === 0) {
    return "Yes";
  } else {
    return "No";
  }
}


$(function() {
  $("#isLeap").hide();
  $("#leapForm").submit(function() {
    $("#originalYear").empty()
    $("#leap").empty()
    var year = $("#inputYear").val();
    var leap = isLeapYear(year);

    $("#originalYear").append(year);
    $("#leap").append(leap);

    $("#isLeap").show();
    return false;
  });
});