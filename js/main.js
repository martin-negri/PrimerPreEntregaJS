function comprarvehiculo() {
    let concesionario = prompt("¿Hola, qué vehículo busca?\n Toyota \n Ford \n Chevrolet \n Volkswagen").toLowerCase();

    if (concesionario === 'toyota') {
        let modelo = prompt("¿Qué Toyota busca?\n Hilux \n Corolla \n Etios").toLowerCase();
        if (modelo === 'hilux') {
            alert("¡Felicitaciones, acaba de comprar su Toyota Hilux!");
        } else if (modelo === 'corolla') {
            alert("¡Felicitaciones, acaba de comprar su Toyota Corolla!");
        } else if (modelo === 'etios') {
            alert("¡Felicitaciones, acaba de comprar su Toyota Etios!");
        } else {
            alert("Ese modelo de Toyota no lo tenemos disponible");
        }
        
    } else if (concesionario === 'ford') {
        let modelo = prompt("¿Qué Ford busca?\n Focus \n Fiesta \n Ranger").toLowerCase();
        if (modelo === 'focus') {
            alert("¡Felicitaciones, acaba de comprar su Ford Focus!");
        } else if (modelo === 'fiesta') {
            alert("¡Felicitaciones, acaba de comprar su Ford Fiesta!");
        } else if (modelo === 'ranger') {
            alert("¡Felicitaciones, acaba de comprar su Ford Ranger!");
        } else {
            alert("Ese modelo de Ford no lo tenemos disponible");
        }

    } else if (concesionario === 'chevrolet') {
        let modelo = prompt("¿Qué Chevrolet busca?\n Corsa \n Tracker \n S10").toLowerCase();
        if (modelo === 'corsa') {
            alert("¡Felicitaciones, acaba de comprar su Chevrolet Corsa!");
        } else if (modelo === 'tracker') {
            alert("¡Felicitaciones, acaba de comprar su Chevrolet Tracker!");
        } else if (modelo === 's10') {
            alert("¡Felicitaciones, acaba de comprar su Chevrolet S10!");
        } else {
            alert("Ese modelo de Chevrolet no lo tenemos disponible");
        }

    } else if (concesionario === 'volkswagen') {
        let modelo = prompt("¿Qué Volkswagen busca?\n Golf \n Polo \n Amarok").toLowerCase();
        if (modelo === 'golf') {
            alert("¡Felicitaciones, acaba de comprar su Volkswagen Golf!");
        } else if (modelo === 'polo') {
            alert("¡Felicitaciones, acaba de comprar su Volkswagen Polo!");
        } else if (modelo === 'amarok') {
            alert("¡Felicitaciones, acaba de comprar su Volkswagen Amarok!");
        } else {
            alert("Ese modelo de Volkswagen no lo tenemos disponible");
        }
        
    } else {
        alert("Ese vehículo no lo tenemos disponible");
    }

    let querescomprar = confirm("¿Quieres comprar otro vehículo?");
    if (querescomprar) {
        comprarvehiculo();
    } else {
        alert("¡Muchas gracias por su compra!");
    }
}

comprarvehiculo();
