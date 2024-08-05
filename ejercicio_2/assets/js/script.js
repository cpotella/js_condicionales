const verificacion = document.querySelector("h1");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const btnVerificar = document.querySelector("button");

btnVerificar.addEventListener("click", function () {
  const stickers1 = Number(input1.value);
  const stickers2 = Number(input2.value);
  const stickers3 = Number(input3.value);

  const sum = stickers1 + stickers2 + stickers3;
  console.log(sum);

  if (sum < 0) {
    verificacion.textContent = "Cantidad inválida";
  } else if (sum <= 10) {
    verificacion.textContent = `Llevas ${sum} stickers`;
  } else {
    verificacion.textContent = "Llevas demasiados stickers";
  }
});
