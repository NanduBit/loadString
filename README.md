# 📦 loadstring

A lightweight Node.js utility to execute JavaScript from strings or URLs — inspired by Lua's `loadstring()`.
---
### Note: Requires Node v20 or higher

## 🚀 Features

- ✅ Execute JavaScript from a code string
- 🌐 Load & run code from a remote URL
- ⚡ Easy, async-friendly API
- ✨ Zero Dependencies Module

---

## 📥 Installation

```bash
npm install loadstring
```


## ✨ Usage

### 1. Run a JavaScript string

```js
const { loadString } = require('loadstring');

loadString(`console.log("Hello from string!");`);
loadString(`
    console.log("1")
    console.log("2")
`)
```

### 2. Run JavaScript from a URL

```js
const { loadStringFromURL } = require('loadstring');

loadStringFromURL('https://example.com/script.js');
```

If `https://example.com/script.js` contains:

```js
console.log("🔥 Remote code executed!");
```

You’ll see in the console:

```
🔥 Remote code executed!
```

---

## 📘 API

### `loadString(code: string): void`

Executes a string of JavaScript code.

- `code` – JavaScript source code as a string.

---

### `loadStringFromURL(url: string): Promise<void>`

Fetches and executes JavaScript from a URL.

- `url` – Must point to valid JS code (e.g., a `.js` file on a server or raw GitHub).

---

## ⚠️ Warning

This module uses `new Function()` under the hood.
Do **NOT** use it with untrusted or user-generated content, as it allows full code execution.

---

## 🔒 License

MIT
