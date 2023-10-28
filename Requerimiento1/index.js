function onLoad() {
    const contenedorDiv = document.getElementById("contenedor-principal");

    const formulario = document.createElement("form"); //<form></form>
    formulario.id = "formulario-contenedor";

    contenedorDiv.appendChild(formulario);

    /*
    
    Creacion de campos de texto
    
    */

    let input, p, pContenido, label;
    const campos = ["DNI", "Nombre", "Apellidos", "Direccion", "Telefono"];

    for (let i = 0; i < campos.length; i++) {
        input = document.createElement("input"); //<input>
        input.id = campos[i].toLowerCase();
        input.type = campos[i] === "Telefono" ? "number" : "text";

        p = document.createElement("p");
        p.id = `${campos[i].toLowerCase()}-p`;

        pContenido = document.createTextNode(campos[i]);
        p.appendChild(pContenido);

        label = document.createElement("label");
        label.id = `${campos[i].toLowerCase()}-label`;

        label.appendChild(p);
        label.appendChild(input);

        document.getElementById("formulario-contenedor").appendChild(label);
    }

    /*
    
    Creacion de radio buttons
    
    */

    /*

    Radio Button #1

    */

    let divAgrupador = document.createElement("div");
    divAgrupador.id = "lenguaje-fav-contenedor";
    document.getElementById("formulario-contenedor").appendChild(divAgrupador);

    p = document.createElement("p");
    p.id = "fav-lenguaje-programacion-p";

    pContenido = document.createTextNode(
        "Cual es tu lenguaje de programacion favorito?"
    );
    p.appendChild(pContenido);

    document.getElementById("lenguaje-fav-contenedor").appendChild(p);

    const opcionesLenguajes = ["Javascript", "Python", "C++", "Java"];

    for (let i = 0; i < opcionesLenguajes.length; i++) {
        input = document.createElement("input");
        input.id = opcionesLenguajes[i].toLowerCase();
        input.type = "Radio";
        input.name = "fav_lenguaje";
        input.value = opcionesLenguajes[i];

        label = document.createElement("label");
        label.id = `${opcionesLenguajes[i].toLowerCase()}-label`;
        label.for = opcionesLenguajes[i].toLowerCase();
        label.appendChild(input);
        label.appendChild(document.createTextNode(opcionesLenguajes[i]));

        document.getElementById("lenguaje-fav-contenedor").appendChild(label);
    }

    /*

    Radio Button #2

    */

    divAgrupador = document.createElement("div");
    divAgrupador.id = "no-lenguaje-fav-contenedor";
    document.getElementById("formulario-contenedor").appendChild(divAgrupador);

    p = document.createElement("p");
    p.id = "no-fav-lenguaje-programacion-p";

    pContenido = document.createTextNode(
        "Cual es tu lenguaje de programacion menos favorito?"
    );
    p.appendChild(pContenido);

    document.getElementById("no-lenguaje-fav-contenedor").appendChild(p);

    for (let i = 0; i < opcionesLenguajes.length; i++) {
        input = document.createElement("input");
        input.id = `${opcionesLenguajes[i].toLowerCase()}-input`;
        input.type = "radio";
        input.name = "no_fav_lenguaje";
        input.value = opcionesLenguajes[i];

        label = document.createElement("label");
        label.id = `${opcionesLenguajes[i].toLowerCase()}-label`;
        label.for = `${opcionesLenguajes[i].toLowerCase()}-input`;
        label.appendChild(input);
        label.appendChild(document.createTextNode(opcionesLenguajes[i]));

        document
            .getElementById("no-lenguaje-fav-contenedor")
            .appendChild(label);
    }

    /*
    
    Creacion de Checkboxes

    */

    divAgrupador = document.createElement("div");
    divAgrupador.id = "animales-contenedor";
    document.getElementById("formulario-contenedor").appendChild(divAgrupador);

    p = document.createElement("p");
    p.id = "animales-p";

    pContenido = document.createTextNode(
        "Que animales has tenido como mascota?"
    );
    p.appendChild(pContenido);

    document.getElementById("animales-contenedor").appendChild(p);

    let animelesOpciones = ["Perro", "Gato", "Pajaro", "Pato", "Dragon"];

    for (let i = 0; i < animelesOpciones.length; i++) {
        input = document.createElement("input");
        input.id = `${animelesOpciones[i].toLowerCase()}-input`;
        input.type = "checkbox";
        input.name = `animal${i}`;
        input.value = animelesOpciones[i];

        label = document.createElement("label");
        label.id = `${animelesOpciones[i].toLowerCase()}-label`;
        label.for = `${animelesOpciones[i].toLowerCase()}-input`;
        label.appendChild(input);
        label.appendChild(document.createTextNode(animelesOpciones[i]));

        document.getElementById("animales-contenedor").appendChild(label);
    }

    /*
    
    Creacion de imagenes

    */

    let imagenes = [
        { name: "cat", src: "/assets/cat-hug.png" },
        { name: "dog", src: "/assets/cute-and-happy-dog-png.png" },
    ];
    let img;

    for (let i = 0; i < imagenes.length; i++) {
        img = document.createElement("img");
        img.id = `${imagenes[i].name}-imagen`;
        img.src = imagenes[i].src;
        img.alt = imagenes[i].name;

        document.getElementById("formulario-contenedor").appendChild(img);
    }

    /*
    
    Creacion de campo select

    */

    label = document.createElement("label");
    label.id = "select-label";

    document.getElementById("formulario-contenedor").appendChild(label);

    p = document.createElement("p");
    p.id = "estado-de-animo-p";

    pContenido = document.createTextNode("Como te sientes ahora mismo?");
    p.appendChild(pContenido);

    label.appendChild(p);

    let estadosAnimo = ["Feliz", "Triste", "Cansado", "Dormido", "Todos"];

    let select, option, optionContenido;

    select = document.createElement("select");
    select.name = "estados-animo";
    select.id = "estados-animo";

    label.appendChild(select);

    for (let i = 0; i < estadosAnimo.length; i++) {
        option = document.createElement("option");
        option.value = estadosAnimo[i].toLowerCase();
        option.appendChild(document.createTextNode(estadosAnimo[i]));

        document.getElementById("estados-animo").appendChild(option);
    }

    /*
    
    Creacion de textarea

    */

    p = document.createElement("p");
    p.id = "textarea-p";

    pContenido = document.createTextNode("Comentarios:");
    p.appendChild(pContenido);

    let textarea = document.createElement("textarea");
    textarea.id = "comentarios";
    textarea.name = "comentarios";
    textarea.rows = "4";
    textarea.cols = "50";

    label = document.createElement("label");
    label.id = "textarea-label";

    label.appendChild(p);
    label.appendChild(textarea);

    document.getElementById("formulario-contenedor").appendChild(label);
}
