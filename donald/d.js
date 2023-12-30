function placeOrder() {
    // Get selected food items
    const foodItems = document.querySelectorAll('input[type="checkbox"]:checked');
    
    if (foodItems.length === 0) {
      alert("Please select at least one food item.");
      return;
    }
  
    // Disable the order button during processing
    const orderButton = document.getElementById('orderButton');
    orderButton.disabled = true;
  
    // Show loading message
    showLoading();
  
    // Simulate a delay with a random time (1 to 5 seconds)
    const randomTime = Math.floor(Math.random() * 5) + 1;
    
    // Create a Promise
    const orderPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, randomTime * 1000);
    });
  
    // When the Promise is resolved
    orderPromise.then(() => {
      // Enable the order button
      orderButton.disabled = false;
  
      // Display order details
      displayOrderDetails(foodItems);
    });
  }
  
  function showLoading() {
    // Display loading message
    const orderDetails = document.getElementById('orderDetails');
    orderDetails.innerHTML = 'Processing your order...';
  }
  
  function displayOrderDetails(foodItems) {
    // Hide loading message
    const orderDetails = document.getElementById('orderDetails');
    orderDetails.innerHTML = '';
  
    // Display food image (you can replace the image source with actual URLs)
    const foodImage = document.getElementById('foodImage');
    foodImage.src = 'food_image.jpg'; // Replace with actual image URL
    foodImage.alt = 'Food Image';
  
    // Generate a random order ID
    const orderId = Math.floor(Math.random() * 1000000) + 1;
  
    // Display order ID
    const orderIdElement = document.getElementById('orderId');
    orderIdElement.innerHTML = `Order ID: #${orderId}`;
  
    // Show order details
    orderDetails.classList.remove('hidden');
  }
  