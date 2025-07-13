# 📦 loadstring

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
  console.log("Line 1");
  console.log("Line 2");
`);
```

---

### 2. Run JavaScript from a URL

```js
const { loadStringFromURL } = require('loadstring');
// import { loadStringFromURL } from 'loadstring';

loadStringFromURL('https://example.com/script.js');
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
