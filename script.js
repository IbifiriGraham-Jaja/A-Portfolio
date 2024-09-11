document.querySelector("form").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
  
    if (!name || !email || !message) {
      alert("Please fill out all fields!");
      event.preventDefault();
    }
  });
  