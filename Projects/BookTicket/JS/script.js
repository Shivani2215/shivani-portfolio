// Get current date
const getCurrentDate = () => {
  const today = new Date();
  return today.toISOString().split('T')[0]; // Format as 'YYYY-MM-DD'
};

// Handle Departure Date Change
const handleDepartureChange = () => {
  const departureDate = document.getElementById('departure-date').value;
  const returnDateInput = document.getElementById('return-date');
  const errorMessage = document.getElementById('error-message');
  const bookButton = document.getElementById('book-ticket');

  // Enable the return date input and set minimum date to 7 days after the departure date
  const departureDateObj = new Date(departureDate);
  departureDateObj.setDate(departureDateObj.getDate() + 7);
  const minReturnDate = departureDateObj.toISOString().split('T')[0];

  returnDateInput.disabled = false;
  returnDateInput.min = minReturnDate; // Minimum return date is 7 days after departure
  returnDateInput.value = ""; // Clear any previous return date
  errorMessage.textContent = ""; // Clear error message
  bookButton.disabled = true; // Disable the book button until a valid return date is selected
};

// Handle Return Date Change
const handleReturnChange = () => {
  const departureDate = document.getElementById('departure-date').value;
  const returnDate = document.getElementById('return-date').value;
  const errorMessage = document.getElementById('error-message');
  const bookButton = document.getElementById('book-ticket');

  const departureDateObj = new Date(departureDate);
  const returnDateObj = new Date(returnDate);

  // Calculate the difference in days between the departure and return dates
  const diffInDays = Math.floor((returnDateObj - departureDateObj) / (1000 * 60 * 60 * 24));

  // Validate that the return date is at least 7 days after the departure date
  if (diffInDays < 7) {
    errorMessage.textContent = 'Return date must be at least 7 days after the departure date.';
    bookButton.disabled = true; // Disable the book button if the condition is not met
  } else {
    errorMessage.textContent = ''; // Clear the error message
    bookButton.disabled = false; // Enable the book button if valid
  }
};

// Initialize form and event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Set current date as minimum date for departure
  document.getElementById('departure-date').min = getCurrentDate();

  // Event listeners
  document.getElementById('departure-date').addEventListener('change', handleDepartureChange);
  document.getElementById('return-date').addEventListener('change', handleReturnChange);
});

// Form submission (for demonstration)
document.getElementById('booking-form').addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Ticket successfully booked!');
});
