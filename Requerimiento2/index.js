function isStringEmpty(string) {
    if (string.trim(" ") === "") {
        return true;
    }

    return false;
}

function validateInputText(inputs) {
    let inputText;

    for (let input of inputs) {
        if (input.type === "text") {
            inputText = document.getElementById(input.id);

            if (isStringEmpty(inputText.value)) {
                return false;
            }
        }
    }

    return true;
}

function validateInputRadio(name) {
    let tamañoPizza = document.getElementsByName(name);

    for (let i = 0; i < tamañoPizza.length; i++) {
        if (tamañoPizza[i].checked) {
            return true;
        }
    }

    return false;
}

function precioDeTamañoPizza() {
    let tamañoPizza = document.getElementsByName("tamaño");
    let precioTamañoPizza;

    for (let i = 0; i < tamañoPizza.length; i++) {
        if (tamañoPizza[i].checked) {
            switch (tamañoPizza[i].value) {
                case "Pequeña":
                    precioTamañoPizza = 5;
                    break;
                case "Mediana":
                    precioTamañoPizza = 10;
                    break;
                case "Grande":
                    precioTamañoPizza = 15;
                    break;
            }
        }
    }

    return precioTamañoPizza;
}

function validateInputCheckbox(inputs) {
    for (let input of inputs) {
        if (input.type === "checkbox" && input.checked) {
            return true;
        }
    }

    return false;
}

function precioDeIngredientes() {
    let camposInput = document.getElementsByTagName("input");
    let precioTotalIngredientes = 0;

    for (let input of camposInput) {
        if (input.type === "checkbox" && input.checked) {
            precioTotalIngredientes += 1;
        }
    }

    return precioTotalIngredientes;
}

function validateForm() {
    let camposInput = document.getElementsByTagName("input");

    if (!validateInputText(camposInput)) {
        alert("Se debe rellenar todos los campos de texto.");
        return false;
    }

    if (!validateInputRadio("tamaño")) {
        alert("Se debe seleccionar el tamaño de la pizza");
        return false;
    }

    if (!validateInputCheckbox(camposInput)) {
        alert("Debe seleccionar al menos 1 ingrediente.");
        return false;
    }

    return true;
}

function procesarPedido() {
    if (validateForm()) {
        let precioTotal = precioDeTamañoPizza() + precioDeIngredientes();

        let p = document.createElement("p");
        let pContenido = document.createTextNode(
            `El precio total seria : ${precioTotal}€`
        );

        p.appendChild(pContenido);

        document.body.appendChild(p);
    }
}

window.onload = function () {
    let button = document.getElementById("form-button");

    button.onclick = procesarPedido;
};
