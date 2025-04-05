// Select all divs with the class 'seat'
const seats = document.querySelectorAll('.seat');

// Book selected seats (change grey to green)
document.querySelector('.book_btn').addEventListener('click', () => {
  seats.forEach(seat => {
    if (seat.style.backgroundColor === "grey") {
      seat.style.backgroundColor = "green"; // Book the seat (turn to green)
    }
  });
});

// Cancel button: Unbook the booked seats (turn green to white and reset border)
document.querySelector('.cancel_btn').addEventListener('click', () => {
  seats.forEach(seat => {
    if (seat.style.backgroundColor === "green" && seat.style.borderColor === "red") {
      seat.style.backgroundColor = "white"; // Unbook the seat (turn back to white)
      seat.style.borderColor = "black"; // Reset border to black
    }
  });
});

// Reset all seats to white

document.querySelector('button[type="reset"]').addEventListener('click', () => {
  seats.forEach(seat => {
    seat.style.backgroundColor = ""; 
    seat.style.borderColor = "black"; 
  });
});


// grey for selected, white for deselected
seats.forEach(seat => {
  seat.addEventListener('click', () => {
    if (seat.style.backgroundColor === "green") {
      // If the seat is green, toggle the border to red
      seat.style.borderColor = seat.style.borderColor === "red" ? "black" : "red";
    } else {
      // Otherwise, toggle between grey and white
      seat.style.backgroundColor = seat.style.backgroundColor === "grey" ? "white" : "grey";
    }
  });
});
