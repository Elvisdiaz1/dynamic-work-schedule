$(function () {
  // Gets DOM elements 
  let headerEl = $("#header");
  let block = $(".time-block");

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
      block.attr("class", "row time-block past");
    } else if (blockHour == currentHour) {
      block.attr("class", "row time-block present");
    } else {
      block.attr("class", "row time-block future");
    }
    
    // Gets the save button and text area 
    let noteEl = $(this).find(".saveBtn");
    let textArea = $(this).find(".description");

    // event listener when save button is clicked
    noteEl.on("click", function (event) {
      event.preventDefault();
      localStorage.setItem("note", textArea.val());
    });

    
     
  });
  textArea.val() = localStorage.getItem('note')
});


