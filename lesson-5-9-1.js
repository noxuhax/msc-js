let result = '';

for (var i = 0; i <= 100000; i = i + 6) {
  if (i > 0) {
    result += '<div>'+i+'</div>';
  }
}
document.body.innerHTML = result;