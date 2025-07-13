const { loadString, loadStringFromURL, load } = require("../index.js");
//const { loadString, loadStringFromURL, load } = require("loadstring");


loadString(`console.log("Hello from loadString!");`); // loadString and loadstring are the same and works same
loadStringFromURL(`https://pastebin.com/raw/3VtWCViH`); // demo link, replace with your own
load(`console.log("Hello from load!");`); // local code
load(`https://pastebin.com/raw/3VtWCViH`); // remote code

// there will be delay for the the code from URL to load. u can controll it by using `await` in a async function to run code line by line.

