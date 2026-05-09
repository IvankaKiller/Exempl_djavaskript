
function checkwizard(x,y,z){
	return x >= 65 || y >= 40 || z == true
}


console.log(checkwizard(10,20,false))
console.log(checkwizard(65,40,true))
console.log(checkwizard(100,100,false))
console.log(checkwizard(10,50,false))