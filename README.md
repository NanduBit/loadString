![20250821_1716_Sleek LoadString Banner_simple_compose_01k3675a5aey7aejb6q20f9mzd~2](https://github.com/user-attachments/assets/136bd6c4-9a0a-4795-8015-cb251faadc1b)

<h1 align="center">💉 loadstring</h1>

A lightweight Node.js utility to execute JavaScript from strings or remote URLs — inspired by Lua's `loadstring()`.

---

### ⚙️ Requires Node.js **v20 or higher**

---

## 🚀 Features

- ✅ Run JavaScript from a string
- 🌐 Load & execute code from a remote URL
- 🧠 Smart `load()` function auto-detects string vs. URL
- ✨ Zero Dependencies
- ⚡ Simple, async-friendly API

---

## 📥 Installation

```bash
npm install loadstring
```

---

## ✨ Usage

### 1. Run a JavaScript string

```js
const { loadString } = require('loadstring');
// import { loadString } from 'loadstring';

loadString(`console.log("Hello from string!");`);

loadString(`
  console.log("Log 1");
  console.log("Log 2");
`);
```

---

### 2. Run JavaScript from a URL

```js
const { loadStringFromURL } = require('loadstring');
// import { loadStringFromURL } from 'loadstring';

loadStringFromURL('https://example.com/script.js');
// We recommend using pastebin links to inject yiur code via link (make sure u have pastebin link to the raw code)
```

If `https://example.com/script.js` contains:

```js
console.log("🔥 Remote code executed!");
```

You’ll see:

```
🔥 Remote code executed!
```

---

### 3. Smart `load()` — automatically runs string or URL

```js
const { load } = require('loadstring');
// import { load } from 'loadstring';

// Runs a code string
load('console.log("From string!")');

// Loads and runs from a remote URL
load('https://example.com/hello.js');
```

---

## 📘 API

### `loadString(code: string): void`

Executes a string of JavaScript code.

---

### `loadStringFromURL(url: string): Promise<void>`

Fetches JavaScript code from a remote URL and executes it.

---

### `load(input: string): Promise<void>`

Smart loader — detects if the input is a URL and runs accordingly.

---

## ⚠️ Security Warning

This module uses `new Function()` under the hood.

> ❗️ Never run untrusted or user-generated input — this allows full code execution.

---

## 🔒 License

MIT
