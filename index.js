let htmldiv = document.getElementById("htmldiv");

let first_div = document.getElementById("firstdiv");

let htmlarr = ["What does HTML stand for?",
    "Which HTML element is used to define a paragraph?",
    "Which tag is used to create a hyperlink?",
    "Which HTML element is used to insert an image?",
    "What is the correct HTML element for inserting a line break?",
    "Which tag is used to define an unordered list?",
    "Which attribute is used to provide a unique identifier to an element?",
    `What does the title tag do in HTML?`, "Which tag is used to define a table row?",
    "Which tag is self-closing in HTML?"];

let htmlans = ["Hyper Text Markup Language",
    "<p>",
    "<a>",
    "<img>",
    "<br>",
    "<ul>",
    "id",
    "Defines the document's title shown in the browser tab",
    "<tr>",
    "<img>"
];

let htmloptarray = [["Hyperlinks and Text Markup Language",
    "Home Tool Markup Language",
    "Hyper Text Markup Language",
    "Hyper Tool Multi Language"],
["<p>", "<para>", "<paragraph>", "<text>"],
["<link>", "<a>", "<href>", "<url>"],
["<pic>", "<image>", "<img>", "<src>"],
["<br>", "<lb>", "<break>", "<line>"],
["<ol>", "<ul>", "<li>", "<list>"],
["class", "id", "name", "key"],
[
    "Sets the page heading",
    "Adds a tooltip to text",
    "Defines the document's title shown in the browser tab",
    "Displays a title inside the page body"
],
["<td>", "<tr>", "<th>", "<table>"],
["<div>", "<img>", "<span>", "<a>"]]

let htmlcount = 0;
var questiondiv = document.createElement("div");
questiondiv.classList = "questiondiv";
let next = document.createElement("button");
next.classList = "btn btn-outline-success";
next.innerHTML = "Next";
let deletebtn = document.createElement("button");
deletebtn.innerHTML = "Exit";
deletebtn.classList = "btn btn-outline-danger";

let htmloptions = () => {
    while (questiondiv.firstChild) {
        questiondiv.removeChild(questiondiv.firstChild);
    }
    let innerdiv = document.createElement("div");
    questiondiv.appendChild(innerdiv);
    if (htmlcount < htmlarr.length) {
        let q = document.createElement("h2");
        q.innerHTML = `${htmlcount + 1}. ` + htmlarr[htmlcount];
        innerdiv.appendChild(q);
        let x = htmloptarray[htmlcount];
        for (let i of x) {
            let p = document.createElement("p");
            p.setAttribute("class", "useranswer");
            let text = document.createTextNode(i);
            p.appendChild(text);
            p.setAttribute("onclick", "checkans(this)");
            innerdiv.appendChild(p);
        }
        innerdiv.appendChild(next);
        innerdiv.appendChild(deletebtn)
        htmlcount++;
    }
    else if (htmlcount >= htmlarr.length) {
        let p = document.createElement("p");
        p.innerHTML = `Your Right Answer is ${htmlresult} out of 10`;
        p.setAttribute("id", "anspara");
        let h6 = document.createElement("h6");
        h6.innerHTML = htmlresult > 5 ? `Well done! Your html is strong, keep it up <i class="fa-solid fa-thumbs-up"></i>` : `Bad! Your html is weak, keep it hard work <i class="fa-solid fa-thumbs-down"></i>`;
        innerdiv.appendChild(p);
        innerdiv.appendChild(h6);
        innerdiv.appendChild(deletebtn);
        innerdiv.style.display = "flex";
        innerdiv.style.flexDirection = "column"
        innerdiv.style.gap = "10px";
    }
}

next.addEventListener("click", htmloptions);

// create a new div;

htmldiv.addEventListener("click", () => {
    htmlcount = 0;
    htmlresult = 0;
    document.body.appendChild(questiondiv);
    htmloptions();
    first_div.style.display="none";
});


// check answer wrong or right

let htmlresult = 0

let checkans = (id) => {
    if (id.innerText == htmlans[htmlcount - 1]) {
        id.style.backgroundColor = "lightblue";
        htmlresult++;
    }
    else {
        id.style.backgroundColor = "rgba(255, 0, 0, 0.498)";
    }
    setTimeout(htmloptions, 1000);
    return htmlresult;
}

// exit in any question

deletebtn.addEventListener("click", () => {
    document.body.removeChild(questiondiv);
    first_div.style.display="flex";
})


// css quiz
let cssdiv = document.getElementById("cssdiv");

let cssarr = ["Which property is used to change the background color of an element?",
    "What does CSS stand for?",
    " Which CSS property controls the text size?",
    "How do you select an element with id 'header'?",
    "What is the default position value of an HTML element?",
    "Which unit is relative to the root element in CSS?",
    "What pseudo-class is used to style a link when it is hovered over?",
    "Which property is used to make text bold in CSS?",
    "Which value of the `display` property makes an element not appear at all?",
    "Which property is used to add space inside the border of an element?"
];

let cssans = ["background-color", "Cascading Style Sheets", "font-size", "#header", "static", "rem", ":hover", "font-weight", "none", "padding"];

let cssopt = [["color", "background-color", "bgcolor", "background"],
["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
["font-style", "text-style", "font-size", "text-size"],
["#header", ".header", "header", "*header"],
["static", "relative", "absolute", "fixed"],
["em", "px", "rem", "%"],
[":active", ":visited", ":hover", ":link"],
["font-style", "font-weight", "text-decoration", "font-variant"],
["none", "hidden", "block", "invisible"],
["margin", "spacing", "padding", "border-spacing"],
];

let cssnext=document.createElement("button");
cssnext.classList = "btn btn-outline-success";
cssnext.innerHTML = "Next";

let cssoptions = () => {
    while (questiondiv.firstChild) {
        questiondiv.removeChild(questiondiv.firstChild);
    }
    let innerdiv = document.createElement("div");
    questiondiv.appendChild(innerdiv);
    if (htmlcount < cssarr.length) {
        let q = document.createElement("h2");
        q.innerHTML = `${htmlcount + 1}. ` + cssarr[htmlcount];
        innerdiv.appendChild(q);
        let x = cssopt[htmlcount];
        for (let i of x) {
            let p = document.createElement("p");
            p.setAttribute("class", "useranswer");
            let text = document.createTextNode(i);
            p.appendChild(text);
            p.setAttribute("onclick", "csscheckans(this)");
            innerdiv.appendChild(p);
        }
        innerdiv.appendChild(cssnext);
        innerdiv.appendChild(deletebtn)
        htmlcount++;
    }
    else{
        let p = document.createElement("p");
        p.innerHTML = `Your Right Answer is ${htmlresult} out of 10`;
        p.setAttribute("id", "anspara");
        let h6 = document.createElement("h6");
        h6.innerHTML = htmlresult > 5 ? `Well done! Your Css is strong, keep it up <i class="fa-solid fa-thumbs-up"></i>` : `Bad! Your Css is weak, keep it hard work <i class="fa-solid fa-thumbs-down"></i>`;
        innerdiv.appendChild(p);
        innerdiv.appendChild(h6);
        innerdiv.appendChild(deletebtn);
        innerdiv.style.display = "flex";
        innerdiv.style.flexDirection = "column"
        innerdiv.style.gap = "10px";
    }
}

cssdiv.addEventListener("click", () => {
    htmlcount = 0;
    htmlresult = 0;
    document.body.appendChild(questiondiv);
    cssoptions();
    first_div.style.display="none";
});

cssnext.addEventListener("click", cssoptions);

// check css answers

let csscheckans = (id) => {
    if (id.innerText == cssans[htmlcount - 1]) {
        id.style.backgroundColor = "lightblue";
        htmlresult++;
    }
    else {
        id.style.backgroundColor = "rgba(255, 0, 0, 0.498)";
    }
    setTimeout(cssoptions, 1000);
    return htmlresult;
}


// js quiz 

let jsdiv = document.getElementById("jsdiv");

let jsarr = [
  "What is the correct syntax to print a message in the console in JavaScript?",
  "Which keyword is used to declare a variable in JavaScript?",
  "How do you write a comment in JavaScript?",
  "What will `typeof null` return?",
  "Which method converts a JSON string into a JavaScript object?",
  "Which symbol is used for strict equality comparison in JavaScript?",
  "What is the output of `Boolean(0)` in JavaScript?",
  "Which loop is guaranteed to execute at least once?",
  "How can you create an array in JavaScript?",
  "What does the `push()` method do in JavaScript arrays?"
];

let jsans = [
  "console.log()",
  "let",
  "// This is a comment",
  "object",
  "JSON.parse()",
  "===",
  "false",
  "do...while",
  "let arr = [1, 2, 3]",
  "Adds an element to the end of an array"
];

let jsopt = [
  ["console.write()", "console.print()", "console.log()", "print()"],
  ["var", "dim", "let", "define"],
  ["<!-- This is a comment -->", "// This is a comment", "# This is a comment", "** This is a comment"],
  ["null", "undefined", "object", "boolean"],
  ["JSON.stringify()", "JSON.parse()", "parse.JSON()", "JSON.toObject()"],
  ["===", "==", "=", "!=="],
  ["true", "false", "0", "undefined"],
  ["for", "while", "do...while", "foreach"],
  ["let arr = [1, 2, 3]", "arr = 1,2,3", "arr = new Array[]", "arr = (1,2,3)"],
  ["Removes the last element", "Adds an element to the end of an array", "Adds an element to the beginning", "Sorts the array"]
];

let jsnext=document.createElement("button");
jsnext.classList = "btn btn-outline-success";
jsnext.innerHTML = "Next";

let jsoptions = () => {
    while (questiondiv.firstChild) {
        questiondiv.removeChild(questiondiv.firstChild);
    }
    let innerdiv = document.createElement("div");
    questiondiv.appendChild(innerdiv);
    if (htmlcount < jsarr.length) {
        let q = document.createElement("h2");
        q.innerHTML = `${htmlcount + 1}. ` + jsarr[htmlcount];
        innerdiv.appendChild(q);
        let x = jsopt[htmlcount];
        for (let i of x) {
            let p = document.createElement("p");
            p.setAttribute("class", "useranswer");
            let text = document.createTextNode(i);
            p.appendChild(text);
            p.setAttribute("onclick", "jscheckans(this)");
            innerdiv.appendChild(p);
        }
        innerdiv.appendChild(jsnext);
        innerdiv.appendChild(deletebtn)
        htmlcount++;
    }
    else{
        let p = document.createElement("p");
        p.innerHTML = `Your Right Answer is ${htmlresult} out of 10`;
        p.setAttribute("id", "anspara");
        let h6 = document.createElement("h6");
        h6.innerHTML = htmlresult > 5 ? `Well done! Your JS is strong, keep it up <i class="fa-solid fa-thumbs-up"></i>` : `Bad! Your JS is weak, keep it hard work <i class="fa-solid fa-thumbs-down"></i>`;
        innerdiv.appendChild(p);
        innerdiv.appendChild(h6);
        innerdiv.appendChild(deletebtn);
        innerdiv.style.display = "flex";
        innerdiv.style.flexDirection = "column"
        innerdiv.style.gap = "10px";
    }
}

jsdiv.addEventListener("click", () => {
    htmlcount = 0;
    htmlresult = 0;
    document.body.appendChild(questiondiv);
    jsoptions();
    first_div.style.display="none";
});

jsnext.addEventListener("click", jsoptions);

// check css answers

let jscheckans = (id) => {
    if (id.innerText == jsans[htmlcount - 1]) {
        id.style.backgroundColor = "lightblue";
        htmlresult++;
    }
    else {
        id.style.backgroundColor = "rgba(255, 0, 0, 0.498)";
    }
    setTimeout(jsoptions, 1000);
    return htmlresult;
}










