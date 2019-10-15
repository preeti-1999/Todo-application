//alert("You are connected");

/*var h=document.createElement('h1')
var myValue=document.createTextNode('Hello world!')
h.appendChild(myValue)
document.querySelector('h1').appendChild(h);*/


var ul=document.getElementById('list');
var li;

var addButton= document.getElementById('add');
addButton.addEventListener('click',addItem);

var removeButton= document.getElementById('remove');
removeButton.addEventListener('click',removeItem);












function addItem(){
	 var input=document.getElementById('input');
	 var item=input.value;
	 ul=document.getElementById('list');
	 var textnode=document.createTextNode(item)
	 if(item===''){
	 	return false;

	 }else{

	 	//li
	 	li=document.createElement('li');

	 	//checkbox
	 	var checkbox=document.createElement('input');
	 	checkbox.type='checkbox';
	 	checkbox.setAttribute('id','check');

	 	//label

	 	var label=document.createElement('label');
	 	label.setAttribute('for','item');

	 	//add elements on webpage

	 	ul.appendChild(label);
	 	li.appendChild(checkbox);
	 	label.appendChild(textnode);
	 	li.appendChild(label);
	 	ul.insertBefore(li,ul.childNodes[0]);
	 	li.className='visual';
	 }
}

function removeItem(){
 // console.log('Delete button clicked');
 li=ul.children
 console.log(li);
 for(let i=0;i<li.length;i++){
 	while(li[i] && li[i].children[0].checked){
 		ul.removeChild(li[i])
 	}

 }
}

