const day = document.querySelector("#nascDay");
const month = document.querySelector("#nascMonth");
const year = document.querySelector("#nascYear");
const button = document.querySelector("button");

function lifeDays(y, m, d) {
  event.preventDefault()
  console.log(y, m, d)
  let dAtual = new Date();
  console.log(dAtual)
  let dPassada = new Date(y, m, d);
  console.log(dPassada)
  let milisg = Math.abs(dAtual.getTime() - dPassada.getTime());
  let diasPassados = Math.ceil(milisg / (1000*60*60*24));
  console.log(diasPassados);
}
const start = () => {
  if(day.value==0||month.value==0||year.value==0) {
    alert("Preencha os campos necessários e tente novamnete")
  }else{
    lifeDays(year.value, month.value-1, day.value)
  }
}
button.addEventListener("click", start); 