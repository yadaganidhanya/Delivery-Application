document.getElementById("pizza-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var name = document.getElementById("name").value;
  var address = document.getElementById("address").value;
  var size = document.getElementById("size").value;
  var toppings = document.getElementById("toppings").value;

  // Create order object
  var order = {
    name: name,
    address: address,
    size: size,
    toppings: toppings
  };

  // Send order to the server (dummy example)
  // Replace this code with your actual server-side implementation
  console.log("Order placed:", order);
  alert("Your order has been placed!");

  // Reset form
  document.getElementById("pizza-form").reset();
});