var ul = document.getElementById("List");

function newItem() {
	var item = document.getElementById('input').value;
  random_bg_color();
	
	var li = document.createElement('li');

  li.appendChild(document.createTextNode(item));
  ul.appendChild(li);
  document.getElementById('input').value="";
  li.onclick = removeItem;
}

document.body.onkeyup = function(e){
      if(e.keyCode == 13){
        newItem();
      }
  }

function removeItem(e) {
  e.target.parentElement.removeChild(e.target);

}
  function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  
    ul.style.background = bgColor;
}








