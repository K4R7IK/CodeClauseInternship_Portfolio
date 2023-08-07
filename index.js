function showabout() {
  $("#about_container").css("display", "inherit");
  $("#about_container").addClass("animated slideInLeft");
  setTimeout(function () {
    $("#about_container").removeClass("animated slideInLeft");
  }, 800);
}
function closeabout() {
  $("#about_container").addClass("animated slideOutLeft");
  setTimeout(function () {
    $("#about_container").removeClass("animated slideOutLeft");
    $("#about_container").css("display", "none");
  }, 800);
}
function showwork() {
  $("#work_container").css("display", "inherit");
  $("#work_container").addClass("animated slideInRight");
  setTimeout(function () {
    $("#work_container").removeClass("animated slideInRight");
  }, 800);
}
function closework() {
  $("#work_container").addClass("animated slideOutRight");
  setTimeout(function () {
    $("#work_container").removeClass("animated slideOutRight");
    $("#work_container").css("display", "none");
  }, 800);
}
function showdetails(choice) {
  $("#" + choice).css("display", "block");
  $("#" + choice).addClass("animated slideInRight");
  setTimeout(function () {
    $("#" + choice).removeClass("animated slideInRight");
  }, 800);
}
function closedetails(choice) {
  $("#" + choice).addClass("animated slideOutRight");
  setTimeout(function () {
    $("#" + choice).removeClass("animated slideOutRight");
    $("#" + choice).css("display", "none");
  }, 800);
}
