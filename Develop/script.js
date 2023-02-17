// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // let currentDayEl = $('')
  let headerEl = $("#header");

  let today = dayjs();
  let currentDay = today.format("MMMM D, YYYY");
  let currentHour = today.format("H");
  let date = ($("#currentDay").text = currentDay);
  let block = $(".time-block");
  // let blockHour = block.attr("id");

  headerEl.append(date);
  // console.log(blockHour);
  console.log(currentHour);
  // console.log(blockHour > currentHour);

  $.each(block, function () {
    let blockHour = $(this).attr("id");
    if (blockHour < currentHour) {
      block.attr("class", "row time-block past");
    } else if (blockHour === currentHour) {
      block.attr("class", "row time-block present");
    } else {
      block.attr("class", "row time-block future");
    }
  });
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

// DOM
// save button
// written notes in block
// Data
// Functions
// eventlistner for save button
// getcurrent time
// change past, present future id to current time
// setlocal storage
// getlocal stoarge
// UserInteractions
// User writes on block and clicks on save button, saves the note
// Initializations
// timer starts
// schedule goes up to current hour block
// notes saved in local storage are displayed
