function comprarvehiculo() {
    let concesionario = prompt("¿Hola, qué vehículo busca?\n Toyota \n Ford \n Chevrolet \n Volkswagen");

    if (concesionario === 'Toyota') {
        let modelo = prompt("¿Qué Toyota busca?\n Hilux \n Corolla \n Etios");
        if (modelo === 'Hilux') {
            alert("¡Felicitaciones, acaba de comprar su Toyota Hilux!");
        } else if (modelo === 'Corolla') {
            alert("¡Felicitaciones, acaba de comprar su Toyota Corolla!");
        } else if (modelo === 'Etios') {
            alert("¡Felicitaciones, acaba de comprar su Toyota Etios!");
        } else {
            alert("Ese modelo de Toyota no lo tenemos disponible");
        }
        
    } else if (concesionario === 'Ford') {
        let modelo = prompt("¿Qué Ford busca?\n Focus \n Fiesta \n Ranger");
        if (modelo === 'Focus') {
            alert("¡Felicitaciones, acaba de comprar su Ford Focus!");
        } else if (modelo === 'Fiesta') {
            alert("¡Felicitaciones, acaba de comprar su Ford Fiesta!");
        } else if (modelo === 'Ranger') {
            alert("¡Felicitaciones, acaba de comprar su Ford Ranger!");
        } else {
            alert("Ese modelo de Ford no lo tenemos disponible");
        }

    } else if (concesionario === 'Chevrolet') {
        let modelo = prompt("¿Qué Chevrolet busca?\n Corsa \n Tracker \n S10");
        if (modelo === 'Corsa') {
            alert("¡Felicitaciones, acaba de comprar su Chevrolet Corsa!");
        } else if (modelo === 'Tracker') {
            alert("¡Felicitaciones, acaba de comprar su Chevrolet Tracker!");
        } else if (modelo === 'S10') {
            alert("¡Felicitaciones, acaba de comprar su Chevrolet S10!");
        } else {
            alert("Ese modelo de Chevrolet no lo tenemos disponible");
        }

    } else if (concesionario === 'Volkswagen') {
        let modelo = prompt("¿Qué Volkswagen busca?\n Golf \n Polo \n Amarok");
        if (modelo === 'Golf') {
            alert("¡Felicitaciones, acaba de comprar su Volkswagen Golf!");
        } else if (modelo === 'Polo') {
            alert("¡Felicitaciones, acaba de comprar su Volkswagen Polo!");
        } else if (modelo === 'Amarok') {
            alert("¡Felicitaciones, acaba de comprar su Volkswagen Amarok!");
        } else {
            alert("Ese modelo de Volkswagen no lo tenemos disponible");
        }
        
    } else {
        alert("Ese vehículo no lo tenemos disponible");
    }

    let querescomprar = confirm("Queres comprar otro vehiculo?");
    if (querescomprar === true) {
        comprarvehiculo();
    } else {
        alert("Muchas gracias por su compra!");
    }
}

comprarvehiculo();
