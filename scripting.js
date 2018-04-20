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

// adding and dropping classes
var classes = ["accounting", "principles", "i", "intercultural", "relationships", "world", "civilization", "contemporary", "mathematics", "general", "psychology", "foundations", "of", "business", "accounting principles i", "intercultural relationships", "world civilization", "contemporary mathematics", "general psychology", "foundations of business"];
var search;
var searchFor;
var color;
var n;
var i;
var foundWord = "";
var accCount = 1;
var relaCount = 1;
var civCount = 1;
var matCount = 1;
var psyCount = 1;
var busCount = 1;

function searchFor()
{
	foundWord = "";
	searchFor = "";
	searchFor = document.getElementById("searchFor").value;
	searchFor = searchFor.toLowerCase();
	for (i = 0; i < classes.length; i++){
		if(classes[i] == searchFor){
			foundWord = searchFor;
		}
	}
	if(foundWord == ""){
		document.getElementById("noneFound").innerHTML = "No match found.";
	}else {
		document.getElementById("regClasses").style.display = "none";
		document.getElementById("addClasses").style.display = "none";
		if((foundWord == "accounting") || (foundWord == "principles") || (foundWord == "i") || (foundWord == "accounting principles i")){
		document.getElementById("foundClass").innerHTML = "Accouting Principles I";
		}else if ((foundWord == "intercultural") || (foundWord == "relationships") || (foundWord == "intercultural relationships")){
			document.getElementById("foundClass").innerHTML = "Intercultural Relationships";
		}else if ((foundWord == "world") || (foundWord == "civilization") || (foundWord == "world civilization")){
			document.getElementById("foundClass").innerHTML = "World Civilization";
		}else if ((foundWord == "contemporary") || (foundWord == "mathematics") || (foundWord == "Contemporary Mathematics")){
			document.getElementById("foundClass").innerHTML = "Contemporary Mathematics";
		}else if ((foundWord == "General") || (foundWord == "psy") || (foundWord == "general psychology")){
			document.getElementById("foundClass").innerHTML = "General Psychology";
		}else if ((foundWord == "business") || (foundWord == "of") || (foundWord == "business") || (foundWord == "foundations of business")){
			document.getElementById("foundClass").innerHTML = "Foundations of Business";
		}else{
			document.getElementById("noneFound").innerHTML = "No match found.";
		}
	}
}

function drop()
{
	document.getElementById("coursesList").style.display = "none";
	document.getElementById("coursesListDrop").style.display = "block";
	var one = document.getElementById("one");
	var two = document.getElementById("two");
	var three = document.getElementById("three");
	var four = document.getElementById("four");
	var five = document.getElementById("five");
	var six = document.getElementById("six");
	var seven = document.getElementById("seven");
	var eight = document.getElementById("eight");
	var nine = document.getElementById("nine");
	var ten = document.getElementById("ten");
	var eleven = document.getElementById("eleven");

	one.style.fontWeight = "bold";
	two.style.fontWeight = "bold";
	three.style.fontWeight = "bold";
	four.style.fontWeight = "bold";
	five.style.fontWeight = "bold";
	six.style.fontWeight = "bold";
	seven.style.fontWeight = "bold";
	eight.style.fontWeight = "bold";
	nine.style.fontWeight = "bold";
	ten.style.fontWeight = "bold";
	eleven.style.fontWeight = "bold";
}

function dropClasses()
{
	document.getElementById("coursesListDrop").style.display = "none";
	document.getElementById("coursesList").style.display = "block";
}

function register()
{
	
	if (accCount == 0){
		document.getElementById("class1").innerHTML = "Accounting Principles I";
		document.getElementById('class1').style.color = '#383838';
		document.getElementById('acc').style.color = '#383838';

		document.getElementById("six").innerHTML = "Accounting Principles I";
		document.getElementById('six').style.color = '#383838';
		accCount = 1;
	}

	if (psyCount == 0){
		document.getElementById('class2').innerHTML = "General Psychology";
		document.getElementById('class2').style.color = '#383838';
		document.getElementById('psy').style.color = '#383838';

		document.getElementById('seven').innerHTML = "General Psychology";
		document.getElementById('seven').style.color = '#383838';
		psyCount = 1;
	}

	if (busCount == 0){
		document.getElementById('class3').innerHTML = "Foundations of Business";
		document.getElementById('class3').style.color = '#383838';
		document.getElementById('bus').style.color = '#383838';

		document.getElementById('eight').innerHTML = "Foundations of Business";
		document.getElementById('eight').style.color = '#383838';
		busCount = 1;
	}

	if (matCount == 0){
		document.getElementById('class4').innerHTML = "Contemporary Mathematics";
		document.getElementById('class4').style.color = '#383838';
		document.getElementById('mat').style.color = '#383838';

		document.getElementById('nine').innerHTML = "Contemporary Mathematics";
		document.getElementById('nine').style.color = '#383838';
		matCount = 1;
	}

	if (relaCount == 0){
		document.getElementById('class5').innerHTML = "Intercultural Relationships";
		document.getElementById('class5').style.color = '#383838';
		document.getElementById('rela').style.color = '#383838';

		document.getElementById('ten').innerHTML = "Intercultural Relationships";
		document.getElementById('ten').style.color = '#383838';
		relaCount = 1;
	}

	if (civCount == 0){
		document.getElementById('class6').innerHTML = "World Civilization";
		document.getElementById('class6').style.color = '#383838';
		document.getElementById('civ').style.color = '#383838';

		document.getElementById('eleven').innerHTML = "World Civilization";
		document.getElementById('eleven').style.color = '#383838';
		civCount = 1;
	}
}

function acc()
{
	color = document.getElementById('acc').style.color;
	if (accCount == 0){
		document.getElementById('acc').style.color = '#383838';
		accCount = 1;
	}else{
		document.getElementById('acc').style.color = '#cfebfd';
		accCount = 0;
	}
}

function rela()
{
	color = document.getElementById('rela').style.color;
	if (relaCount == 0){
		document.getElementById('rela').style.color = '#383838';
		relaCount = 1;
	}else{
		document.getElementById('rela').style.color = "#cfebfd";
		relaCount = 0;
	} 
}

function civ()
{
	color = document.getElementById('civ').style.color;
	if (civCount == 0){
		document.getElementById('civ').style.color = '#383838';
		civCount = 1;
	}else{
		document.getElementById('civ').style.color = "#cfebfd";
		civCount = 0;
	}
}

function mat()
{
	color = document.getElementById('mat').style.color;
	if (matCount == 0){
		document.getElementById('mat').style.color = '#383838';
		matCount = 1;
	}else{
		document.getElementById('mat').style.color = "#cfebfd";
		matCount = 0;
	} 
}

function psy()
{
	color = document.getElementById('psy').style.color;
	if (psyCount == 0){
		document.getElementById('psy').style.color = '#383838';
		psyCount = 1;
	}else{
		document.getElementById('psy').style.color = "#cfebfd";
		psyCount = 0;
	}
}

function bus()
{
	color = document.getElementById('bus').style.color;
	if (busCount == 0){
		document.getElementById('bus').style.color = '#383838';
		busCount = 1;
	}else{
		document.getElementById('bus').style.color = "#cfebfd";
		busCount = 0;
	}
}

function uploadOnChange()
{
	var filename = this.value;
	var lastIndex = filename.lastIndexOf("\\");
	if (lastIndex >= 0) {
		filename = filename.substring(lastIndex + 1);
	}
	document.getElementById('filename').value = "Upload " + filename;
}