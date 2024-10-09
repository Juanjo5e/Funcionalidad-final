document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('login');
    
    loginButton.addEventListener('click', async (event) => {
      event.preventDefault(); // Evita el envío del formulario por defecto
  
      const username = document.getElementById('username').value;
      const pin = document.getElementById('pin').value;
  
      if (!username || !pin) {
        alert('Por favor, complete todos los campos.');
        return;
      }
  
      const loginData = {
        numeroCuenta: username,
        pin: pin
      };
  
      try {
        const response = await fetch('http://localhost:8080/api/v1/cuenta/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(loginData)
        });
  
        if (response.ok) {
          const data = await response.json();
          alert('Inicio de sesión exitoso');
          window.location.href = 'Cuenta.html';
        } else if (response.status === 400 || response.status === 404) {
          const errorData = await response.json();
          alert(errorData.mensajes[0]);
        } else {
          alert('Error del servidor. Por favor, inténtelo de nuevo más tarde.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error de red. Por favor, inténtelo de nuevo más tarde.');
      }
    });
  });
  