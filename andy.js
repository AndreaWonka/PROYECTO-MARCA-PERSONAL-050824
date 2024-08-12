 // Mostrar el botón cuando se hace scroll hacia abajo
window.onscroll = function() {
    var backToTop = document.querySelector('.back-to-top');
    if (document.documentElement.scrollTop > 100) { // Mostrar después de 100px
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
};


document.querySelector('.back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const btn = document.querySelector('button[type="submit"]'); 
    btn.value = 'Enviando...';

    const serviceID = 'service_5hjp25h';
    const templateID = 'template_ojbt6xd';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Enviar Email';
            alert('¡Correo enviado!');
        }, (err) => {
            btn.value = 'Enviar Email';
            console.error('Error al enviar el correo:', err); // Para debug
            alert('Hubo un error al enviar el correo. Intenta nuevamente.');
        });
});
document.getElementById('enviar').addEventListener('click', function() {
    const mensaje = document.getElementById('mensaje').value.trim();
    
    console.log("Mensaje:", mensaje); 
    if (mensaje === "") {
        alert("Por favor, escribe un mensaje.");
        return;
    }

    const palabras = mensaje.split(/\s+/).length;
    console.log("Número de palabras:", palabras); 
    if (palabras > 30) {
        alert("Tu mensaje tiene más de 30 palabras.");
        return;
    }

    const respuestasDiv = document.getElementById('respuestas');
    const nuevaRespuesta = document.createElement('p');
    nuevaRespuesta.textContent = mensaje;
    
    
    respuestasDiv.appendChild(nuevaRespuesta);
    console.log("Mensaje añadido al pizarrón."); 

    document.getElementById('mensaje').value = "";

    
    respuestasDiv.scrollTop = respuestasDiv.scrollHeight;
});
