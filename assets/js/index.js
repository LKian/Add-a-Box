console.log("DOM Manipulation");

var container = document.querySelector(".boxContainer");
var box = document.querySelector("box");
var duplicateButton = document.querySelector("#duplicate");
var deleteFromBeginning = document.querySelector("#deleteFromBeginning");
var deleteFromEnd = document.querySelector("#deleteFromEnd");
var count = document.querySelector("#count");

duplicateButton.addEventListener("click", function() {
	var box = document.createElement('div');
	container.appendChild(box);
	box.classList.add("box");
})

deleteFromBeginning.addEventListener("click", function() {
	var firstNode = container.children[0]
	container.removeChild(firstNode); })

deleteFromEnd.addEventListener("click", function() {
	var lastNode = container.children[container.children.length - 1];
	container.removeChild(lastNode);  })

count.addEventListener("click", function() {
	countBoxes();
})


function countBoxes() {
	var eachBox = document.body.querySelectorAll('.box'); 
	console.log(eachBox.length);
	for (var i=0;i<eachBox.length;i++) {
		eachBox[i].innerHTML = '';
		var para = document.createElement('p');
		eachBox[i].appendChild(para);
		para.textContent = i+1; 
		para.classList.add('number');
	}
}

