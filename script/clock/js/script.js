(function() {
  var time = new Date(), //we get this time from our pc time not from server
  second = time.getSeconds() / 60 * 360,
  minute = time.getMinutes() / 60 * 360 + time.getSeconds() / 60 *6,
  hour = time.getHours() / 12 * 360 + time.getMinutes() /60 * 30,
  animation = [
    "@keyframes sec-hand{from{transform: rotate(" + second + "deg);}to{transform: rotate(" + (second  + 360) + "deg);}}",
    "@keyframes min-hand{from{transform: rotate(" + minute + "deg);}to{transform: rotate(" + (minute + 360) + "deg);}}",
    "@keyframes hr-hand{from{transform: rotate(" + hour + "deg);}to{transform: rotate(" + (hour + 360) + "deg);}}"
  ].join("");
  document.querySelector("#clock-animate").innerHTML = animation;
})();

//EXAMPLE TO GET EXACT TIME IN READABLE FORMATE
// function abc(){
//   var time = new Date;
//   var hr = time.getHours();
//   var min = time.getMinutes();
//   var sec = time.getSeconds();
//   alert(hr + "hr " + min + "min " + sec + "sec ");
// }
// abc();
