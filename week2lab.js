	/*
	Jack Rola
	Week 2
	lab2
	*/

function submitform(){

var fname = document.getElementById('fname');						/* declares fname, so we can use it*/
var error_fname = document.getElementById('error_fname');
var hasErrors = false;
			
		if ( !fname.value.length){								/* checks if any words are recorded, and validates it*/
			error_fname.innerHTML = "*";
			fname.className = "error_box";
			hasErrors = true;
		} else {
			error_fname.innerHTML = "";
			fname.className = "good_box";
		}
		
var lname = document.getElementById('lname');
var error_lname = document.getElementById('error_lname');			/* checks if any words are recorded, and validates it*/

		if ( !lname.value.length){
			error_lname.innerHTML = "*";
			lname.className = "error_box";
			hasErrors = true;
		} else {
			error_lname.innerHTML = "";
			lname.className = "good_box";
		}
				
var email = document.getElementById('email');
var error_email = document.getElementById('error_email');				/* checks if it has a @ and (.) then validates it*/
			
		if ( !email.value.length ){
			error_email.innerHTML = "*";
			email.className = "error_box";
			hasErrors = true;
		}else if (email.value.indexOf("@") == -1) { 
			error_email.innerHTML = "MISSING (@)";
			email.className = "error_box";
			hasErrors = true;
		}else if (email.value.indexOf(".") == -1) { 
			error_email.innerHTML = "MISSING (.)";
			email.className = "error_box";
			hasErrors = true;		
		}else{
			error_email.innerHTML = "";
			email.className = "good_box";
		}	
			
var comment = document.getElementById('comment');
var error_commnet = document.getElementById('error_commnet');
	
		if ( !comment.value.length ){								/* checks if any words are recorded, and validates it */
			error_commnet.innerHTML = "*";
			comment.className = "error_box";
			hasErrors = true;
		}else if (comment.value.length > 150) { 
			error_commnet.innerHTML = "	to many characters";
			comment.className = "error_box";
			hasErrors = true;
		}else{
			error_commnet.innerHTML = "";
			comment.className = "good_box";
			}
	
		if(!hasErrors){
			var confirmation = document.getElementById('confirmation');					/* takes the results makes a new page and displays them*/
			confirmation.style.display = "block";
			var main_form = document.getElementById('main_form');
			main_form.style.display = "none";
			var results = "";
			results += "First Name: " + fname.value + "<br />";
			var confirmation_result = document.getElementById('confirmation_result');
			confirmation_result.innerHTML =  results;
			results += "Last Name: " + lname.value + "<br />";
			var confirmation_result = document.getElementById('confirmation_result');
			confirmation_result.innerHTML =  results;
			results += "Email: " + email.value + "<br />";
			var confirmation_result = document.getElementById('confirmation_result');
			confirmation_result.innerHTML =  results;
			results += "Commnet: " + comment.value + "<br />";
			var confirmation_result = document.getElementById('confirmation_result');
			confirmation_result.innerHTML =  results;
		
		}
		
	}
		
