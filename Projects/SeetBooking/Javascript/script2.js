const seats = document.querySelectorAll('.seat');
    
// Function to toggle seat color (grey for selected, white for deselected)
seats.forEach(seat => {
  seat.addEventListener('click', () => {
    if (seat.style.backgroundColor === "white") {
      seat.style.backgroundColor = "grey"; // If the seat is white, make it grey
    } else if (seat.style.backgroundColor !== "green") {
      seat.style.backgroundColor = "white"; // If the seat is grey, make it white (deselect)
    }
  });
});

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
    if (seat.style.backgroundColor === "green") {
      seat.style.backgroundColor = "white"; // Unbook the seat (turn back to white)
      seat.style.borderColor = "black"; // Reset border to black
    }
  });
});

// Reset all seats to white
document.querySelector('.reset_btn').addEventListener('click', () => {
  seats.forEach(seat => {
    seat.style.backgroundColor = "white"; // Reset all seats to white
    seat.style.borderColor = "black"; // Reset all borders to black
  });
});