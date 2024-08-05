const mensaje = document.querySelector("h2");
const select1 = document.querySelector("#select1");
const select2 = document.querySelector("#select2");
const select3 = document.querySelector("#select3");
const btnIngresar = document.querySelector("button");
const password1 = "911"; 
const password2 = "714"; 




btnIngresar.addEventListener("click", function () {
    const digito1 = select1.value;
    const digito2 = select2.value;
    const digito3 = select3.value;

    const seleccionDigitos = digito1 + digito2 + digito3;

    if (seleccionDigitos === password1) {
        mensaje.textContent = "Password 1 Correcto";
    } else if (seleccionDigitos === password2) {
        mensaje.textContent = "Password 2 Correcto";
    } else {
        mensaje.textContent = "Password incorrecto";
    }
});

