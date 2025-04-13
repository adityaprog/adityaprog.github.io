// Basic demo script for the booking form (payment simulation and confirmation)
document.getElementById('payNow').addEventListener('click', function() {
  alert('Simulated payment action. Integrate with your payment processor here.');
});

document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = {
    plot: document.getElementById('plot').value,
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value
  };
  console.log("Booking Data:", formData);

  document.getElementById('confirmation').textContent =
    "Thank you " + formData.name + ", your booking for " + formData.plot + " has been received!";
});

// Mobile hamburger menu toggle (one event listener using class toggle)
document.getElementById('hamburger').addEventListener('click', function () {
  const nav = document.getElementById('mobile-nav');
  nav.classList.toggle('show');
});
