function checkForm() {
		 var fname = document.getElementById('fname').value;
		 var lname = document.getElementById('lname').value;
		 var address = document.getElementById('address').value;
		 var city = document.getElementById('city').value;
		 var state = document.getElementById('state').value;
		 var zip = document.getElementById('zip').value;
		 var ptype = document.getElementById('ptype').value;
		 var email = document.getElementById('email').value;
		 var phone = document.getElementById('phone').value;

		 var numbers = /^[0-9]+$/;
		 var emailformat = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/; /*email format*/


				if(fname==""||lname=="",address==""||city=="",state==""||zip=="",ptype==""||email=="") {
					 alert("Please Fill All Required Field");
					 return false;
				}


				if(fname.length<=1||lname.length<=1,address.length<=1||city.length<=1,zip.length<=1||email.length<=1) {
					 alert("input must be greater than one character");
				}


				if((!zip.match(numbers)) || zip.length!==5){
					 alert('enter only numbers or length of zip code must be equal to 5');
				}


				if((!phone.match(numbers)) || phone.length!==10){
					 alert('enter only numbers or length of Phone number must be equal to 10');
				}

				
				if((!email.match(emailformat))){
					 alert('please enter valid email id');
				}
		 }
