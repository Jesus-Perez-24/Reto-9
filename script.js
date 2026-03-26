let carrito=[];
let contador=0;

function mostrarSeccion(id){

let secciones=document.querySelectorAll(".seccion");

secciones.forEach(sec=>{
sec.classList.add("oculto");
});

document.getElementById(id).classList.remove("oculto");

}

function agregar(nombre,precio){

    carrito.push({nombre,precio});
    
    contador++; // 👈 SUMA
    
    alert("Producto agregado");
    
    actualizarCarrito();
    
    }

function actualizarCarrito(){

let lista=document.getElementById("lista");

if(lista){
    lista.innerHTML="";
    }

let total=0;

carrito.forEach((p,index)=>{

let div=document.createElement("div");

div.innerHTML=
`${p.nombre} - $${p.precio.toLocaleString("es-CO")}
<button onclick="eliminar(${index})">Eliminar</button>`;

lista.appendChild(div);

total+=p.precio;

});

document.getElementById("total").innerText=
"$"+total.toLocaleString("es-CO");
let contadorElemento = document.getElementById("contador-carrito");

if(contadorElemento){
contadorElemento.textContent = contador;
}

}


function eliminar(index){

    carrito.splice(index,1);
    
    contador--; // 👈 RESTA
    
    actualizarCarrito();
    
    }

    function vaciarCarrito(){

        carrito = [];
        contador = 0;
        
        let lista = document.getElementById("lista");
        let totalElemento = document.getElementById("total");
        let contadorElemento = document.getElementById("contador-carrito");
        
        if(lista){
        lista.innerHTML = "";
        }
        
        if(totalElemento){
        totalElemento.innerText = "$0";
        }
        
        if(contadorElemento){
        contadorElemento.textContent = 0;
        }
        
        }

//Visitas//

let visitas = localStorage.getItem("visitas");

if(visitas == null){
visitas = 0;
}

visitas++;

localStorage.setItem("visitas", visitas);

document.getElementById("contador").textContent = visitas;