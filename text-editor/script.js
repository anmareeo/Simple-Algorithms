/**
 

 * TODO: Add an .underline class to "Formatted Text" when Underline button is clicked
 * TODO: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */


/**
*Updated the text in the "Formatted Text" section as a user types in the textarea. 
* Used the onkeydown function inside HTML
 */
function updateText(){
  let text = document.getElementById('text-input').value; //.value is an attribute that takes the value of (in other words,whatever the user types into the document field) the user's input from the DOM. Also, note that 'text-input' is the id that was assigned to the text areas in the associated html doc.
document.getElementById('text-output').innerText = text; //here we are using the variable text, which is what the user types into the "Your Document Text" box, and then we are using that variable again so that the output in the "Formatted Text" box is equal to the input.
}

/**
 * Added a .bold class to "Formatted Text" for when that button is clicked
 * Toggled the bold class for the output text
 * Used the onclick function insite HTML
 * Used the this keyword in html on makeBold ---the "this" keyword passes in the element
 * Used the classList property
 * Toggled .active class for the button
 */
function makeBold(elem){
  elem.classList.toggle('active') //The classList property returns the class name(s) of an element, as a DOMTokenList object. This property is useful to add, remove and toggle CSS classes on an element. The word 'active' is a class. Be sure to use the "this" keyword in html.
  document.getElementById('text-output').classList.toggle('bold')//note that the word 'bold' is what the class is named on the CSS classList (classes have a "." before them; ids have a "#")
}

/**
 * Added a .italic class to "Formatted Text" for when that button is clicked
 * Toggled the italic class for the output text
 * Used the onclick function insite HTML
 * Used the this keyword in html on makeItalic
 * Used the classList property
 * Toggled .active class for the button
 */
 
function makeItalic(elem){
  elem.classList.toggle('active')
  return document.getElementById('text-output').classList.toggle('italic')  //note that i used the return keyword to ensure that i understood what was going on. I am used to seeing that, and it helps me understand. Having the word return still worked as the one above.
}

/**
 * Added a .underline class to "Formatted Text" for when that button is clicked
 * Toggled the underline class for the output text
 * Used the onclick function insite HTML
 * Used the this keyword in html on makeUnderline
 * Used the classList property
 * Toggled .active class for the button
 * Used contains, remove, and add functions
 */
function makeUnderline(elem){
  elem.classList.toggle("active")
  let formattedText = document.getElementById('text-output')
  if (formattedText.classList.contains('underline')){
    formattedText.classList.remove('underline')
    } else {
    formattedText.classList.add('underline');
  }
}

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */
function alignText(elem, alignType){
  elem.classList.toggle("active")
  document.getElementById('text-output').style.textAlign=alignType
  let buttonsList = document.getElementsByClassName('align')//note that on the html, each align button has a class that begins with align, so we use that keyword.
  for (let i = 0; i <buttonsList.length; i++){
  buttonsList[i].classList.remove("active")
    }
  elem.add.classList.add("active)")//this shows the alignment that is active
  }
  
/**
 * One problem with the text editor is that the verion in the format part is always one keystroke behind. Here is why:
 * 
 *  When we are listening on a keyboard event, there are three funtions that happen/events that fire--1. onKeyDown() 2. onKeyPress() 3. onKeyUp(). This last one is where the finger comes off the key. Those three functions happen very quickly, but the order is still important. The value gets saved on the input at step 3-- onKeyUp(), but the first function onKeyDown() fired too soon. 
 *
 * In our code, we only have onKeyDown(); the others just happen automatically. We can change the code to say onKeyUp() because that is where the data is saved to the input. That works well unless you want to copy and paste something. It won't work if it is done with a mouse because no keys are pressed. The solution is to change onKeyDown to oninput. I have done that. I believe the oninput handler is an upgrade and that the others will soon just not be used.
 */