function validEmail(str) {
  //your JS code here.
	const arr=['@','.']
	const l=str.length
  if(!str.includes('@') || !str.includes('.') ||
	 str.indexOf('@')>str.indexOf('.') || arr.includes(str[0]) ||
	arr.includes(str[l-1])){
	  return false
	}
	else{ return true }
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
