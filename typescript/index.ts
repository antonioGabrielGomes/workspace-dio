interface IUsuario {
    id: string
}


function adicionaApendicALista<T>(array: T[], valor: T) {
  return array.map((item) => item + valor);
}

adicionaApendicALista([1, 3, 4, 5], 5);

const input = document.getElementById("input") as HTMLInputElement;

input.addEventListener("input", (event) => {
  const i = event.currentTarget as HTMLInputElement;
  console.log(i.value);
});