let value;

value = document.documentElement;

// random properties
value = document.doctype;
value = document.URL;
value = document.characterSet;
value = document.contentType;

// form
value = document.forms;
value = document.forms[0];
value = document.forms[0].action;
value = document.forms[0].method;
value = document.forms[0].id;

// change form id
document.forms[0].id = "first-form";

// get links
value = document.links;
value = document.links[1];
value = document.links[1].href;
value = document.links[1].id;
document.links[1].id = "about-id";
value = document.links[1].className;
value = document.links[1].classList;
value = document.links[1].classList[2];

// get images
value = document.images;
value = document.images[0];
value = document.images[0].src;
console.log(value);
