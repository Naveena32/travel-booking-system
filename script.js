// ---------------- SIGNUP ----------------
const signupForm = document.getElementById('signupForm');
if(signupForm){
  signupForm.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    if(password !== confirmPassword){
      alert("Passwords do not match!");
      return;
    }
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    if(users.find(u=>u.email===email)){ alert("User already exists"); return;}
    users.push({name,email,password});
    localStorage.setItem('users', JSON.stringify(users));
    alert("Sign Up Successful!");
    window.location.href='login.html';
  });
}

// ---------------- LOGIN ----------------
const loginForm = document.getElementById('loginForm');
if(loginForm){
  loginForm.addEventListener('submit', function(e){
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    let user = users.find(u=>u.email===email && u.password===password);
    if(user){
      localStorage.setItem('currentUser', JSON.stringify(user));
      window.location.href='booking.html';
    } else { alert("Invalid Credentials"); }
  });
}

// ---------------- BOOKING ----------------
const bookingForm = document.getElementById('bookingForm');
if(bookingForm){
  bookingForm.addEventListener('submit', function(e){
    e.preventDefault();
    const booking = {
      name: document.getElementById('fullName').value,
      contact: document.getElementById('contact').value,
      email: document.getElementById('email').value,
      method: document.getElementById('travelMethod').value
    };
    localStorage.setItem('booking', JSON.stringify(booking));
    window.location.href='payment.html';
  });
}

// ---------------- PAYMENT ----------------
const paymentForm = document.getElementById('paymentForm');
if(paymentForm){
  paymentForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert("Payment Successful!");
    window.location.href='success.html';
  });
}

// ---------------- SUCCESS ----------------
const details = document.getElementById('bookingDetails');
if(details){
  const booking = JSON.parse(localStorage.getItem('booking') || '{}');
  details.innerHTML = `
    Name: ${booking.name} <br>
    Contact: ${booking.contact} <br>
    Email: ${booking.email} <br>
    Travel Method: ${booking.method}
  `;
}
