//just making sure that my javascript file is connected to my html
console.log("connected")

//accessing the element with id of 'container' in the html
//storing it in a variable named 'container'
let container = document.getElementById("container");
//logging the value of the 'container' variable
console.log(container)
//accessing the element with id of 'container' in the html
//storing it in a variable named 'containerId'
let containerId = document.querySelector("#container");
//logging the value of the 'containerId' variable
console.log(containerId)
//accessing all of the p tag elements in the html
//storing it in a variable called paragraphTags
let paragraphTags = document.querySelectorAll("p");
//logging the value of the 'paragraphTags' variable
console.log(paragraphTags)
//accessing all of the p tag elements in the html
//storing it in a variable called allParagraphTags
let allParagraphTags = document.getElementsByTagName("p");
//logging the value of the 'paragraphTags' variable
console.log(allParagraphTags)
//accessing all of the elements with a class of "alerts" in the html
//storing it in a variable called 'alerts'
let alerts = document.querySelectorAll(".alert")
//logging the value of the 'alerts' variable
console.log(alerts)

//logging the text value of the html with an id of 'intro'
//the text of the h1 tag with the id of intro is currently 'Hello, World'
console.log(document.getElementById("intro").innerText);
//we are changing the text of the h1 tag with the id of intro to 'Hello, Whatever'
document.getElementById("intro").innerText = "Hello, whatever"
//logging the text value of the html with an id of 'intro'
//the text of the h1 tag with the id of intro is now 'Hello, whatever'
console.log(document.getElementById("intro").innerText);

//accessing the inner html of the element with an id of 'container'
//storing it in a variable named 'containerInnterHtml'
let containerInnerHtml = document.getElementById("container").innerHTML;
//logging the value of the 'containerInnerHtml' variable
console.log(containerInnerHtml)
//accessing the text value of the html with an id of 'container'
//storing it in a variable called 'containerText'
let containerText = document.getElementById("container").innerText;
//logging the value of the 'containerText' variable
console.log(containerText)

//logging the styles of the html element with an id of 'intro'
console.log(document.getElementById("intro").style);
//logging the color style of the html element with an id of 'intro'
console.log(document.getElementById("intro").style.color);
//changing the color style of the html element with an id of 'intro' to blue
document.getElementById("intro").style.color = "blue";
//logging the color style of the html element with an id of 'intro' after the change
console.log(document.getElementById("intro").style.color);

//logging the first html element with a class of 'alert'
console.log(document.querySelector(".alert").classList)
//adding a class called 'addedClass' to the first html element with a class of 'alert'
document.querySelector(".alert").classList.add("addedClass")
//logging the first html element with a class of 'alert' to see the added class
console.log(document.querySelector(".alert").classList)

//accessing all of the html elements with a class of 'alert'
//storing it in a variable named 'allAlertClasses'
const allAlertClasses = document.querySelectorAll('.alert');
//looping through all of the elements with a class of 'alerts'
for(let i = 0; i < allAlertClasses.length; i++){
    //adding a class named 'anotherAddedClass' to each of the elements with a class of 'alerts'
    //look for 'anotherAddedClass' in the styles
    allAlertClasses[i].classList.add("anotherAddedClass")
}

//getting all of the attributes for the first html element with a class of 'alert'
console.log(document.querySelector(".alert").attributes)
//getting the value of an attribute named 'customAttribute' for the first html element with a class of 'alert'
//look in the html for the customAttribute set on the html item
console.log(document.querySelector(".alert").getAttribute("customAttribute"))

//creating a new paragraph tag
let newPTag = document.createElement("p");
//giving the new paragraph tag the text of 'new child'
newPTag.innerText = "new child"
//giving the new paragraph tag an id of 'new-element'
newPTag.id = "new-element"
//adding the 'addedClass' class to the new paragraph tag
newPTag.classList.add("addedClass")
//accessing the html element with an id of 'container' and adding the new paragraph tag as a child element to that html element
document.getElementById("container").appendChild(newPTag);
//logging the inner html of the html element named 'container'
//this is to show that the new child html element exists
console.log(document.getElementById("container"))

//creating a new paragraph tag
let newPTagToBeRemoved = document.createElement("p");
//giving the new paragraph tag the text of 'new child to be removed'
newPTagToBeRemoved.innerText = "new child to be removed"
//giving the new paragraph tag an id of 'new-element-to-be-removed'
newPTagToBeRemoved.id = "new-element-to-be-removed"
//accessing the html element with an id of 'container' and adding the new paragraph tag as a child element to that html element
document.getElementById("container").appendChild(newPTagToBeRemoved);
//logging the inner html of the html element named 'container'
//this is to show that the new child html element exists
console.log(document.getElementById("container"))

//uncomment lines 110,112,114 to show the removal of the html element
//accessing the html element with an id of 'new-element-to-be-removed'
//let removedPTag = document.querySelector("#new-element-to-be-removed")
//accessing the html element with an id of 'container' and removing the paragraph tag with an id of 'new-element-to-be-removed'
//document.getElementById("container").removeChild(removedPTag)
//this is to show that the new child html element is removed
//console.log(document.getElementById("container"))

//logging how many html elements there are with the class of 'alert'
console.log(document.querySelectorAll('.alert').length)

//looping through all of the html elements with a class of 'alerts'
for(let i = 0; i < document.querySelectorAll('.alert').length; i++){
    //logging each html element with a class of 'alert'
    console.log(document.querySelectorAll('.alert')[i])
}
//looping through all of the html elements with a class of 'alerts'
document.querySelectorAll('.alert').forEach(function(element){
    //logging each html element with a class of 'alert'
    console.log(element)
})

//logging an element that doesn't exist
console.log(document.querySelector("#this-element-doesnt-exist"))

//accessing the 2nd html element with a class of 'shopping-list__item'
//storing it in a variable called 'secondItemQuerySelector'
let secondItemQuerySelector = document.querySelector(".shopping-list__item:nth-child(2)");
// changing the text value of the 2nd html element with a class of 'shopping-list__item' to 'Orange Juice'
secondItemQuerySelector.innerText = "Orange Juice"
//accessing all of the html elements with a class of 'shopping-list__item'
//storing it in a variable named 'secondItemQuerySelectorAll'
let secondItemQuerySelectorAll = document.querySelectorAll(".shopping-list__item");
//accessing the 2nd (from 0 index) html element with a class of 'shopping-list__item' and changing it's text value to 'Mango Juice'
secondItemQuerySelectorAll[1].innerText = "Mango Juice"

//accessing the html element with an id of 'hero__header'
//storing it in a variable called 'heroHeader'
let heroHeader = document.querySelector("#hero__header");
//changing the font size style of the hero header to '6rem'
heroHeader.style.fontSize = "6rem"
//changing the border style of the hero header to '2px solid black'
heroHeader.style.border = "2px solid black"

//accessing all of the html elements with a class of 'alert'
//storing it in a variable called 'firstAlertClass'
let firstAlertClass = document.querySelectorAll(".alert")
//checking if the first element with a class of 'alert' contains a class named 'removedClass'
console.log(firstAlertClass[0].classList.contains("removedClass"))
//removing a class name 'removedClass' from the first element with a class of 'alert'
firstAlertClass[0].classList.remove("removedClass")
//checking if the first element with a class of 'alert' contains a class named 'removedClass'
console.log(firstAlertClass[0].classList.contains("removedClass"))
//checking if the first element with a class of 'alert' contains a class named 'addedClass'
console.log(firstAlertClass[0].classList.contains("addedClass"))
//if the first element with a class of 'alert' has a class called 'addedClass', then remove that class from that element
//if the first element with a class of 'alert' does not have a class called 'addedClass', then add that class to that element
firstAlertClass[0].classList.toggle("addedClass")
//logging all the classes for the first element with a class of 'alert'
console.log(firstAlertClass[0].classList)
//if the first element with a class of 'alert' has a class called 'addedClass', then remove that class from that element
//if the first element with a class of 'alert' does not have a class called 'addedClass', then add that class to that element
firstAlertClass[0].classList.toggle("addedClass")
//logging all the classes for the first element with a class of 'alert'
console.log(firstAlertClass[0].classList)

