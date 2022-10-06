var list = document.getElementById('list');
function addItem(){
    var item=document.getElementById("item").value;
   
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(item));
    list.appendChild(entry);

}