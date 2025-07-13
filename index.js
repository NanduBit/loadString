/**
 * Executes a string of JavaScript code.
 * @param {string} code - JavaScript code to execute.
 */
function loadString(code) {
  try {
    const fn = new Function(code);
    fn();
  } catch (err) {
    console.error("❌ Error running code:", err);
  }
}

/**
 * Alias for loadString (Lua-style).
 * @param {string} code - JavaScript code to execute.
 */
const loadstring = loadString;

/**
 * Fetches and executes JavaScript from a remote URL.
 * @param {string} url - URL pointing to a .js file.
 * @returns {Promise<void>}
 */
async function loadStringFromURL(url) {
  try {
    const response = await fetch(url);
    const code = await response.text();
    const fn = new Function(code);
    fn();
  } catch (err) {
    console.error("❌ Error fetching or running code:", err);
  }
}

/**
 * Smart loader: runs local code or loads from URL.
 * @param {string} input - A string of code or a URL.
 * @returns {Promise<void>}
 */
async function load(input) {
  const isURL = /^https?:\/\//i.test(input);
  if (isURL) {
    await loadStringFromURL(input);
  } else {
    loadString(input);
  }
}

module.exports = {
  loadString,
  loadstring,
  loadStringFromURL,
  load
};
