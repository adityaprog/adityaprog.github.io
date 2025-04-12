// Basic demo script for handling the booking form submission and simulating a payment action

document.getElementById('payNow').addEventListener('click', function() {
    // In a real implementation, this function would invoke your payment gateway API
    alert('Simulated payment action. Integrate with your payment processor here.');
  });
  
  document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple form validation could be added here
  
    // Capture form data (for demo purposes, we'll log it to the console)
    const formData = {
      plot: document.getElementById('plot').value,
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value
    };
    console.log("Booking Data:", formData);
    
    // Provide a simple confirmation message
    document.getElementById('confirmation').textContent = 
      "Thank you " + formData.name + ", your booking for " + formData.plot + " has been received!";
    
    // Optionally, clear the form after submission
    // this.reset();
  });
  