document.addEventListener('DOMContentLoaded', () => {
    const deleteButton = document.getElementById('eliminarCuenta');
    
    deleteButton.addEventListener('click', async (event) => {
        event.preventDefault(); // Evita el envío del formulario por defecto
  
        const numeroCuenta = document.getElementById('numeroCuenta').value;
        
        if (!numeroCuenta) {
            alert('Por favor, ingrese el número de cuenta.');
            return;
        }
  
        try {
            const response = await fetch(`http://localhost:8080/api/v1/cuenta/${numeroCuenta}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
  
            if (response.ok) {
                alert('Cuenta eliminada exitosamente');
                window.location.href = 'Home.html';
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
