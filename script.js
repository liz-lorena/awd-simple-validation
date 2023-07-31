function formValidation() {

	// Make quick references to our fields
	var firstname = document.getElementById('firstname');
	var lastname = document.getElementById('lastname');
	var email = document.getElementById('email');
	var phone = document.getElementById('phone');
	var city = document.getElementById('city');
	var state = document.getElementById('state');
	var zip = document.getElementById('zip');
	var checkterms = document.getElementById('checkterms');

	// Reset alerts

	$('#p1').text("");
	$('#p2').text("");
	$('#p3').text("");
	$('#p4').text("");
	$('#p5').text("");
	$('#p6').text("");
	$('#p7').text("");
	$('#p8').text("");

	//  to check empty form fields.

	if (firstname.value.length == 0) {
		$('#p1').text("* All fields are required *"); //this segment displays the validation rule for all fields
		firstname.focus();
		return false;
	}

	if (lastname.value.length == 0) {
		$('#p2').text("* All fields are required *"); //this segment displays the validation rule for all fields
		lastname.focus();
		return false;
	}

	if (email.value.length == 0) {
		$('#p3').text("* All fields are required *"); //this segment displays the validation rule for all fields
		email.focus();
		return false;
	}

	if (phone.value.length == 0) {
		$('#p4').text("* All fields are required *"); //this segment displays the validation rule for all fields
		phone.focus();
		return false;
	}

	if (city.value.length == 0) {
		$('#p5').text("* All fields are required *"); //this segment displays the validation rule for all fields
		city.focus();
		return false;
	}

	if (state.value.text == "(Choose a state)") {
		$('#p6').text("* All fields are required *"); //this segment displays the validation rule for all fields
		state.focus();
		return false;
	}

	if (zip.value.length == 0) {
		$('#p7').text("* All fields are required *"); //this segment displays the validation rule for all fields
		zip.focus();
		return false;
	}

	if (checkterms == false) {
		$('#p8').text("* Please check that you agree to the terms and conditions *"); //this segment displays alert to check terms
		checkterms.focus();
		return false;
	}

	// Check each input in the order that it appears in the form!
	if (fNameValidate(firstname, "* For your first name please use English alphabet only and a max of 10 characters *")) {

		if (lNameValidate(lastname, "* For your last name please use English alphabet only and a max of 10 characters *")) {

			if (emailValidation(email, "* Please enter a valid email address *")) {

				if (phoneValidation(phone, "* Please enter a valid phone number in the format (xxx) xxx-xxxx *")) {

					if (cityValidation(city, "* Please enter a valid city name *")) {

						if (trueSelection(state, "* Please select a state *")) {

							if (zipValidate(zip, "* Please enter a valid zip code *")) {

								if (termsValidate(checkterms, "* Please check that you agree to the terms and conditions *")) {

									return true;

								}
							}
						}
					}
				}
			}
		}
	}
	return false;
}


//function that checks whether first name is valid and displays error with validation rule

function fNameValidate(inputtext, alertMsg) {
	var inputExp = /^[A-Z][a-z]{0,10}$/; //done
	if (inputtext.value.match(inputExp)) {
		return true;
	}
	else {
		$('#p1').text(alertMsg); //this segment displays the validation rule for first name
		inputtext.focus();
		return false;
	}
}

//function that checks whether last name is valid and displays error wth validation rule

function lNameValidate(inputtext, alertMsg) {
	var inputExp = /^[A-Z](\'[A-Z])?([a-z]{1,2}[A-Z])?[a-z]{0,10}([\ \-][A-Z](\'[A-Z])?([a-z]{1,2}[A-Z])?[a-z]{0,10})?([\ \-][A-Z](\'[A-Z])?([a-z]{1,2}[A-Z])?[a-z]{0,10})?$/; //done
	//regex above works for up to three-word last names and Irish last names (such as in O' and Mc)
	if (inputtext.value.match(inputExp)) {
		return true;
	}
	else {
		$('#p2').text(alertMsg); //this segment displays the validation rule for last name
		inputtext.focus();
		return false;
	}
}

// Function that checks whether a user entered valid email address or not and displays alert message on wrong email address format.

function emailValidation(inputtext, alertMsg) {
	var emailExp = /^[\w\-\.\_]{1,20}\@[a-zA-Z0-9\.\-]{1,20}\.[a-zA-Z]{2,4}$/; //done
	if (inputtext.value.match(emailExp)) {
		return true;
	}
	else {
		$('#p3').text(alertMsg); //this segment displays the validation rule for email
		inputtext.focus();
		return false;
	}
}

// Function that checks whether a user entered valid telephone number or not and displays alert message on wrong telephone format.

function phoneValidation(inputtext, alertMsg) {
	var phoneExp = /^\([\d]{3}\) [\d]{3}-[\d]{4}$/; //done
	if (inputtext.value.match(phoneExp)) {
		return true;
	}
	else {
		$('#p4').text(alertMsg); //this segment displays the validation rule for phone
		inputtext.focus();
		return false;
	}
}

//function that checks if entered city is valid or not

function cityValidation(inputtext, alertMsg) {
	var cityExp = /^[A-Z][a-z]{0,20}?( [A-Z][a-z]{0,10})?( [A-Z][a-z]{0,20})?$/; //Possibly Done
	if (inputtext.value.match(cityExp)) {
		return true;
	}
	else {
		$('#p5').text(alertMsg); // this segment displays the validation rule for city 
		inputtext.focus();
		return false;
	}
}

// Function that checks whether a option is selected from the selector and if it's not it displays an alert message.

function trueSelection(inputtext, alertMsg) {
	if (inputtext.value == "(Choose a state)") {
		$('#p6').text(alertMsg); //this segment displays the validation rule for state selection
		inputtext.focus();
		return false;
	}
	else {
		return true;
	}
}

//function that checks if entered zipcode is valid

function zipValidate(inputtext, alertMsg) {
	var numericExp = /^([\d]{5})(?:(-[\d]{4}))?$/; //done
	if (inputtext.value.match(numericExp)) {
		return true;
	}
	else {
		$('#p7').text(alertMsg); //this segment displays the validation rule for zip
		inputtext.focus();
		return false;
	}
}

//function that checks if the checkbox for terms is checked

function termsValidate(inputcheck, alertMsg) {
	if (inputcheck.checked == true) {
		return true;
	}
	else {
		$('#p8').text(alertMsg); //this segment displays the validation rule for the terms
		inputcheck.focus();
		return false;
	}
}
