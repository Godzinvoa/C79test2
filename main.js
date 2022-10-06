menuListArray = ["Pizza Vegetariana","pizza especial da casa","pizza de frango","pizza de morango"];

function getMenu(){
var htmldata="";
menuListArray.sort();
for(var i=0; i<menuListArray.lenght; i++){
    htmldata=htmldata+ menuListArray[i] + '<br>';
}
document.getElementById("displayMenu").innerHTML = htmldata;
}

function addItem(){
var htmldata;
var imgtags='<img id="img1 src="images/pizzaImg.png"/>';
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata=""
for(var i=0; i<menuListArray.lenght; i++){
    htmldata=htmldata+ menuListArray[i] + '<br>';
}
document.getElementById("displayAddedMenu").innerHTML = htmldata;
}

function addTop(){
var item=var item=document.getElementById("addItem").value;
menuListArray.push(item);
addItem();
}