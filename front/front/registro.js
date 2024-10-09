const obtenerTiposDeCuenta = async () => {
  try {
    const response = await fetch("http://localhost:8080/tipoCuenta", {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      console.error('Error al obtener los tipos de cuenta:', response.statusText);
      return;
    }

    const data = await response.json();

    const tiposDeCuenta = data.datos;

    if (!Array.isArray(tiposDeCuenta)) {
      console.error('La propiedad "datos" de la respuesta no es un arreglo:', tiposDeCuenta);
      return;
    }

    const selectTipoCuenta = document.getElementById("selectTipoCuenta");

    selectTipoCuenta.innerHTML = '<option value="">Seleccione una opción</option>';

    tiposDeCuenta.forEach(tipo => {
      const option = document.createElement("option");
      option.value = tipo.id;
      option.textContent = tipo.nombre; 
      selectTipoCuenta.appendChild(option);
    });
  } catch (error) {
    console.error('Error de red al obtener los tipos de cuenta:', error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  obtenerTiposDeCuenta();
});

document.getElementById("bRegistro").addEventListener("click", async (evento) => {
  evento.preventDefault(); 
  await registrarCuenta();
});

const registrarCuenta = async () => {
  let campos = {
    id: "",
    numeroCuenta: "",
    pin: document.getElementById("pin").value,
    saldo: 0.0,
    afiliado: {
      numeroIdAfiliado: document.getElementById("idAfiliado").value
    },
    tipoCuenta: {
      id: document.getElementById("selectTipoCuenta").value
    }
  };

  console.log("Datos a enviar:", campos);

  try {
    const response = await fetch("http://localhost:8080/api/v1/cuenta/registro", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(campos)
    });

    if (!response.ok) {
      console.error('Error en la solicitud:', response.statusText);
      return;
    }

    const data = await response.json();
    console.log('Respuesta de la API:', data);
  } catch (error) {
    console.error('Error de red:', error);
  }
};