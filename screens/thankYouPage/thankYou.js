document.addEventListener("DOMContentLoaded", function () {
  // Get the selected rating from localStorage
  const selectedRating = localStorage.getItem("selectedRating");

  // Update the content of the 'selectedRating' element
  if (selectedRating > 0) {
    const selectedRatingElement = document.getElementById("selectedRating");
    selectedRatingElement.textContent = `You selected ${selectedRating} out of 5`;
  }
});
