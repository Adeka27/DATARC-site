var result = document.getElementById("calc-display");
var buttons = document.querySelectorAll("button");
for each(button in buttons){
	button.addEventListener("numberclick",clicked);
}
function getValue(eleName){
	return document.getElementById(eleName).value;
}
function calc(){
	try{
		var value = eval(getValue("calc-display"));
		if (value.toString().indexOf("Infinity") !== -1) {
			value = "Error";
			document.getElementById("calc-display").value=value.toString();
		}
	}
	catch(e){
		document.getElementById("calc-display").value="Error";
	}
}
function numberclick(event){
	const button = event.currentTarget;
	data = event.innerHTML;
	if (data="=") {calc()}
	else {
     document.getElementById("calc-display").value+=data;
	}	

} 

