/**
 * Executes a string of JavaScript code.
 * @param {string} code - The JavaScript code to execute.
 */
function loadString(code) {
  try {
    const fn = new Function(code);
    fn();
  } catch (err) {
    console.error("Error running code:", err);
  }
}

/**
 * Fetches JavaScript code from a URL and executes it.
 * @param {string} url - The URL pointing to a JavaScript file.
 * @returns {Promise<void>} Resolves when the code is fetched and executed.
 */
async function loadStringFromURL(url) {
  try {
    const response = await fetch(url);
    const code = await response.text();
    const fn = new Function(code);
    fn();
  } catch (err) {
    console.error("Error fetching or running code:", err);
  }
}

module.exports = {
  loadString,
  loadstring: loadString,
  loadStringFromURL,
};
