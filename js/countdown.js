var endDate = new Date('2020/04/12 17:20:00');
var interval = 1000;


function countdownTimer(){
  var nowDate = new Date();
  var period = endDate - nowDate ;
  var addZero = function(n){return('0'+n).slice(-2);}
  var addZeroDay = function(n){return('0'+n).slice(-3);}
  var addZeroDay2 = function(n){return('0'+n).slice(-2);}
  if(period >= 0) {
  var day = Math.floor(period / (1000 * 60 * 60 * 24));
  period -=  (day　*(1000 * 60 * 60 * 24));
  var hour = Math.floor(period / (1000 * 60 * 60));
  period -= (hour *(1000 * 60 * 60));
  var minutes =  Math.floor(period / (1000 * 60));
  period -= (minutes * (1000 * 60));
  var second = Math.floor(period / 1000);
  var insert = "";
  insert += '<span class="h">' + addZeroDay2(day) +'日' + '</span>';
  insert += '<span class="h">' + addZero(hour) + '時間'+'</span>';
  insert +=  '<span class="m">' + addZero(minutes) +'分' + '</span>';
  insert += '<span class="s">' + addZero(second)+ '秒'+ '</span>';
  document.getElementById('result').innerHTML = insert;
  setTimeout(countdownTimer,10);
  }
  else{
    var insert = "";
    var number = 0;
    insert += '<span class="h">' + number + number + '</span>';
    insert +=  '<span class="m">' + number + number + '</span>';
    insert += '<span class="s">' + number + number + '</span>';
    document.getElementById('result').innerHTML = insert;
  }
}

countdownTimer();