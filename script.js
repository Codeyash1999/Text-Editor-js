/**
 * Done: Update the text in the "Formatted Text" section as a user types in the textarea
 * Done:     TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * Done Add an .underline class to "Formatted Text" when Underline button is clicked
 * TODO: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */


const documentedTextOutput = document.querySelector("#text-output");
const documentedTextInput = document.querySelector("#text-input");
const bold = document.querySelector("#bold");
bold.innerText = "Bold";
/**
 * Update the output text as a user types in the textarea
 * HINT: Use the onkeydown function inside HTML
*/
function updateText() {
    // // CODE GOES HERE
    documentedTextOutput.textContent = documentedTextInput.value;
}


/**
 * Toggle the bold class for the output text
 * HINT: Use the onclick function insite HTML
 * HINT: Look into using this keyword
 * HINT: Use the classList property
 * HINT: Toggle .active class for the button
 */
function makeBold(elem) {
    //CODE GOES HERE
    elem.classList.toggle('bold');
    documentedTextOutput.classList.toggle('bold');
}

/**
 * Toggle the italic class for the output text
 */
function makeItalic(elem) {
    elem.classList.toggle('bold');
    documentedTextOutput.classList.toggle('italic')
}

/**
 * Toggle the underline class for the output text
 * HINT: Toggle the .active class for the button
 * HINT: Use the classList property
 * HINT: Use contains, remove, and add functions
 */
function makeUnderline(elem) {
    elem.classList.toggle('bold');
    documentedTextOutput.classList.toggle('underline')
}

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */
function alignText(elem, alignType) {
    // CODE GOES HERE
    const list = document.getElementsByClassName('align btn btn-light');
    // for (let i = 0; i < list.length; i++) {
    //     list[i].classList.remove('active');
    // }
    [...list].forEach((elem) => elem.classList.remove('active'));
    document.getElementById('text-output').style.textAlign = alignType;
    elem.classList.add('active');
}
