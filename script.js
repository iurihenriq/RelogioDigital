const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let s = dateToday.getSeconds();

  if (hr < 10) hr = '0' + hr;
  if (min < 10) min = '0' + min;
  if (s < 10) s = '0' + s;

  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = s;
  periodoDoDia()
})


function periodoDoDia() {
  let dateToday = new Date();
  let hr = dateToday.getHours();
  if (hr > 5 && hr < 14){
      document.querySelector('.relogio').style.backgroundImage = "url('img/morning.gif')";
  } else if (hr > 13 && hr < 18) {
      document.querySelector('.relogio').style.backgroundImage = "url('img/afternoon.gif')";
  } else {
      document.querySelector('.relogio').style.backgroundImage = "url('img/evening.gif')";
}
}