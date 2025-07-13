const { loadString, loadStringFromURL } = require("../index.js");

loadString(`console.log("Hello from loadString!");`);

async function executeFromURL() {
  await loadStringFromURL("https://yourdomain.com/path/to/your/script.js");
}

executeFromURL();


