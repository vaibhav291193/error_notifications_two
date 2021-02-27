
function formValidationOne()
{
var errors = "";
var petName = document.petForm1.petName1;
var petType = document.petForm1.petType1;
var confirm = document.petForm1.confirm1;

document.getElementById("errHeading").innerHTML = "";
document.getElementById("formErrList").innerHTML = errors;
document.getElementById("formErrors").tabindex = "-1";
document.getElementById("formErrors").style.display = "none";

document.getElementById("petName1").classList.remove("error");
document.getElementById("petNameError1").style.display = "none";
document.getElementById("petNameErrText1").innerHTML="";

document.getElementById("petType1").classList.remove("error");
document.getElementById("petTypeError1").style.display = "none";
document.getElementById("petTypeErrText1").innerHTML="";

document.getElementById("confirmError1").style.display = "none";
document.getElementById("confirmErrText1").innerHTML="";


if(!petNameValidation(petName, 5)) {
errors = errors + "<li><a href=#petName1>The pet&rsquo;s name is too short.</a></li>";
document.getElementById("petNameErrText1").innerHTML=" Error: The pet&rsquo;s name is too short.";
document.getElementById("petName1").classList.add("error");
document.getElementById("petNameError1").style.display = "";
}
if(!petTypeValidation(petType)) {
errors = errors + "<li><a href=#petType1>You must select an option.</a></li>";
document.getElementById("petTypeErrText1").innerHTML=" Error: You must select an option.";
document.getElementById("petType1").classList.add("error");
document.getElementById("petTypeError1").style.display = "";
}
if(!confirmValidation(confirm)) {
errors = errors + "<li><a href=#confirm1>You must confirm your pet&rsquo;s information.</a></li>";
document.getElementById("confirmErrText1").innerHTML=" Error: You must confirm your pet&rsquo;s information.";
document.getElementById("confirmError1").style.display = "";
}
if(errors != "") {
document.getElementById("errHeading").innerHTML = "The form contains errors:";
document.getElementById("formErrList").innerHTML = errors;
document.getElementById("formErrors").style.display = "block";
document.getElementById("formErrors").tabindex = "0";
document.getElementById("formErrors").focus();
return false;
}
return true;
}


function formValidationTwo()
{
var errors = [];
var petName = document.petForm2.petName2;
var petType = document.petForm2.petType2;
var confirm = document.petForm2.confirm2;

document.getElementById("errCountText").innerHTML = "";
document.getElementById("errLink").innerHTML = "";

document.getElementById("formErrors2").style.display = "none";

document.getElementById("petName2").classList.remove("error");
document.getElementById("petNameError2").style.display = "none";
document.getElementById("petNameErrText2").innerHTML="";

document.getElementById("petType2").classList.remove("error");
document.getElementById("petTypeError2").style.display = "none";
document.getElementById("petTypeErrText2").innerHTML="";

document.getElementById("confirmError2").style.display = "none";
document.getElementById("confirmErrText2").innerHTML="";


if(!petNameValidation(petName, 5)) {
errors.push(1);
document.getElementById("petNameErrText2").innerHTML=" Error: The pet&rsquo;s name is too short.";
document.getElementById("petName2").classList.add("error");
document.getElementById("petNameError2").style.display = "";
}
if(!petTypeValidation(petType)) {
errors.push(2);
document.getElementById("petTypeErrText2").innerHTML=" Error: You must select an option.";
document.getElementById("petType2").classList.add("error");
document.getElementById("petTypeError2").style.display = "";
}
if(!confirmValidation(confirm)) {
errors.push(3);
document.getElementById("confirmErrText2").innerHTML=" Error: You must confirm your pet&rsquo;s information.";
document.getElementById("confirmError2").style.display = "";
}
if(errors.length > 0) {
document.getElementById("formErrors2").style.display = "";
document.getElementById("errCountText").innerHTML = "There are <b>" + errors.length + " error(s) </b>" + "in this section.";
document.getElementById("errLink").innerHTML = "Go to error.";
document.getElementById("errLink").setAttribute('href', hrefSelector(errors[0]));
document.getElementById("errLink").focus();
return false;
}
return true;
}
function petNameValidation(petName, minlength)
{
var petNameLen = petName.value.length;
if (petNameLen < minlength)
{
return false;
}
return true;
}




function petTypeValidation(petType)
{
var petTypeValue = petType.value;
if (petTypeValue <= 0)
{
return false;
}
return true;
}
function confirmValidation(confirm)
{
var confirmChd = confirm.checked;
if (confirmChd == false)
{
return false;
}
return true;
}

function hrefSelector(fieldNo) {
if(fieldNo == 1) {
return "#petName2";
} else if(fieldNo == 2) {
return "#petType2";
} else if(fieldNo == 3) {
return "#confirm2";
}
}

