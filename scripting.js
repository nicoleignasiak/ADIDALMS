// Username and password validation 
function validate()
{
	if(document.getElementById("username").value == "student" && document.getElementById("password").value == "pass")
	{
		location.href="student/coursesHomepage.html";
	}
	else if
	(document.getElementById("username").value == "professor" && document.getElementById("password").value == "pass")
	{
		location.href="professor/coursesHomepage.html";
	}
	else
	{
		alert( "Username and/or Password are incorrect. Please enter in a valid Username and Password.");
		location.href="index.html";
	}
}

// Back button functionality
function goBack() 
{
	window.history.back();
}

// Show update
function show()
{
	document.getElementById('submitUpdate').style.display = "block";
}

// Hide update
function hide()
{
	document.getElementById('submitUpdate').style.display = "none";
	var newUpdate = document.getElementById('profUpdate').value;
	document.getElementById('update').innerHTML = newUpdate;
}