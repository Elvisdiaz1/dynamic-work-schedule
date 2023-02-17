$(document).ready(function () {
  // Gets DOM elements
  let headerEl = $("#header");
  let block = $(".time-block");
  let body = $("body");

  // Creates Current Date
  let today = dayjs();
  let currentDay = today.format("MMMM D, YYYY");
  let date = ($("#currentDay").text = currentDay);

  headerEl.append(date);

  // Gets Hour in 24hr format
  let currentHour = today.format("H");

  // Loops the divs inside the container of time blocks
  $.each(block, function () {
    // Gets id of each time block
    let blockHour = $(this).attr("id");
    // Determines the style of each time block depending on the current time
    if (blockHour < currentHour) {
      $(this).attr("class", "row time-block past");
    } else if (blockHour == currentHour) {
      $(this).attr("class", "row time-block present");
    } else {
      $(this).attr("class", "row time-block future");
    }

    // console.log(blockHour < currentHour)
  });

  // Gets the save button and text area
  let noteEl = block.find(".saveBtn");
  console.log(noteEl);
  let textArea = $(this).find(".description");

  // event listener when save button is clicked
  $(".saveBtn").on("click", function (event) {
    let note = $(this).siblings(".description").val();
    let hour = $(this).parent().attr("id");
    event.preventDefault();
    console.log("click");

    localStorage.setItem(hour, note);

    // window.location.reload();
  });

  window.onload = $("09").find(".description").val(localStorage.getItem("09"));
  window.onload = $("10").find(".description").val(localStorage.getItem("10"));
  window.onload = $("11").find(".description").val(localStorage.getItem("11"));
  window.onload = $("12").find(".description").val(localStorage.getItem("12"));
  window.onload = $("13").find(".description").val(localStorage.getItem("13"));
  window.onload = $("14").find(".description").val(localStorage.getItem("14"));
  window.onload = $("15").find(".description").val(localStorage.getItem("15"));
  window.onload = $("16").find(".description").val(localStorage.getItem("16"));
  window.onload = $("17").find(".description").val(localStorage.getItem("17"));
});
