function setColor(color) {
  var target = document.querySelectorAll('*');
  var i = 0;
  for(i; i < target.length; i++) {
    if(target[i].type != 'button') {
      target[i].style.color = color;
      target[i].style.borderColor = color;
    }
  }
}

function setBackgroundColor(color) {
  var target = document.querySelector('body');
  target.style.backgroundColor = color;
}

function syncValue(value) {
  var target = document.querySelectorAll('.toggle');
  var i = 0;
  for(i; i < target.length; i++) {
    target[i].value = value;
  }
}

function dayNightHandler(self) {
  if(self.value == '다크 모드') {
    setColor('white');
    setBackgroundColor('black');
    syncValue('기본 모드');
  }
  else {
    setColor('black');
    setBackgroundColor('white');
    syncValue('다크 모드');
  }
}
