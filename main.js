studentnamearray= [];

function submit()
{
 var name_1= document.getElementById("student1").value;
 var name_2= document.getElementById("student2").value;
 var name_3= document.getElementById("student3").value;
 var name_4= document.getElementById("student4").value;

studentnamearray.push(name_1);
studentnamearray.push(name_2);
studentnamearray.push(name_3);
studentnamearray.push(name_4);

console.log(studentnamearray);

document.getElementById("display_name").innerHTML= studentnamearray;
document.getElementById("submit_button").style.display= "none";
document.getElementById("sort_button").style.display="inline-block";
}

function sorting()
{
    studentnamearray.sort()
    console.log(studentnamearray);
    document.getElementById("display_name").innerHTML = studentnamearray; 
} 