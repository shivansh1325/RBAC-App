const API_URL = 'http://localhost:5000/api/users';

// Register User
document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    const role = document.getElementById('regRole').value;

    try {
        const response = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password, role }),
        });

        const data = await response.json();
        document.getElementById('registerMessage').innerText = data.message || 'Registration successful!';
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('registerMessage').innerText = 'Registration failed!';
    }
});

// Login User
let token = '';
document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        if (data.token) {
            token = data.token;
            document.getElementById('loginMessage').innerText = 'Login successful!';
        } else {
            document.getElementById('loginMessage').innerText = data.message || 'Login failed!';
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('loginMessage').innerText = 'Login failed!';
    }
});

// Access Protected Resource
document.getElementById('adminButton').addEventListener('click', async () => {
    try {
        const response = await fetch(`${API_URL}/admin`, {
            headers: { Authorization: `Bearer ${token}` },
        });

        const data = await response.json();
        document.getElementById('adminMessage').innerText = data.message || 'Access successful!';
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('adminMessage').innerText = 'Access denied!';
    }
});
