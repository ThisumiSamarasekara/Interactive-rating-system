// Initialize with no rating selected
let selectedRating = 0;

function setRating(rating) {
  // Reset the previous selected button to its original color
  if (selectedRating > 0) {
    document
      .querySelector(".container button:nth-child(" + selectedRating + ")")
      .classList.remove("gray");
  }

  // Set the new selected rating
  selectedRating = rating;

  // Turn the clicked button gray
  document
    .querySelector(".container button:nth-child(" + rating + ")")
    .classList.add("gray");
}

function submitFeedback() {
  // Check if a rating has been selected
  if (selectedRating > 0) {
    localStorage.setItem("selectedRating", selectedRating);
    // Navigate to the thankYou.html page
    window.location.href = "../thankYouPage/thankYou.html";
  } else {
    // Display a message if no rating is selected
    alert("Please select a rating before submitting.");
  }
}
