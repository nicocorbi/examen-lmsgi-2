fetch('https://dummyjson.com/recipes/1')
    .then(res => res.json())
    .then(data => {
        console.log(data); 
     // nombre del vino
     const nombre = data.name;
     console.log(data.name);
     const h1 = document.createElement("h1");
     h1.innerText = nombre;
     document.body.appendChild(h1); 
     // año
     const año = data.año;
     const numeroaño= document.createElement("p");
     numeroaño.innerText = `Dificultad: ${año}`;
     document.body.appendChild(numeroaño);
    // precio 
    const precio = data.precio;
        document.body.appendChild(instruccionesElemento);
        for (let i = 0; i < instructions.length; i++) {
            const item = document.createElement("li");
            item.innerText = instructions[i];
            instruccionesElemento.appendChild(item);
        }
    //tipo
    const tipo = data.tipo;
        const tipoElemento = document.createElement("p");
        tipoElemento.innerText = `tipo: ${tipo}`;
        document.body.appendChild(tipoElemento);

    
    
    
    });