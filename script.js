// Modal toggle
const modal = document.getElementById('modal');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const closeBtn = document.querySelector('.close');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

loginBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
});

signupBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if(e.target == modal) modal.style.display = 'none';
});

// Basic Login/Signup (localStorage simulation)
document.getElementById('signupSubmit').addEventListener('click', () => {
    const id = document.getElementById('signupUserId').value;
    const pw = document.getElementById('signupPassword').value;
    localStorage.setItem(id, pw);
    alert('Signup successful!');
    modal.style.display = 'none';
});

document.getElementById('loginSubmit').addEventListener('click', () => {
    const id = document.getElementById('loginUserId').value;
    const pw = document.getElementById('loginPassword').value;
    if(localStorage.getItem(id) === pw){
        alert('Login successful!');
        modal.style.display = 'none';
    } else {
        alert('Invalid credentials!');
    }
});
