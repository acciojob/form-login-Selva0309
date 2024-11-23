function getFormvalue() {
    //Write your code here
	
	const firstName = document.getElementsByName('fname')[0].value;
    const lastName = document.getElementsByName('lname')[0].value;
	console.log(firstName,lastName);
	alert(`${firstName} ${lastName}`);

}
