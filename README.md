# 🎭 Playwright End-to-End Testing Setup

This project uses **[Playwright](https://playwright.dev/)** for fast, reliable end-to-end testing across multiple browsers — **Chromium**, **Firefox**, and **WebKit**.  
It includes example tests, configuration files, and **Allure reporting** integration.

---

## 📁 Project Structure

| File | Description |
|------|--------------|
| `./tests/example.spec.js` | Example Playwright end-to-end test |
| `./playwright.config.js` | Main Playwright configuration file |

---

## 🚀 Running Tests

### ✅ Run Tests in All Browsers (Headless Mode)
```bash
npx playwright test example.spec.js
```

### 🧭 Run Tests in Chromium (Headless)
```bash
npx playwright test example.spec.js --project=chromium
```

### 🪟 Run Tests in Chromium (Headed Mode)
```bash
npx playwright test example.spec.js --project=chromium --headed
```

### 🐞 Run Tests in Debug Mode
```bash
npx playwright test example.spec.js --project=chromium --headed --debug
```

---

## ✨ Auto-Generate Tests with Codegen

Playwright’s **Codegen** can record your browser interactions and automatically generate test scripts:

```bash
npx playwright codegen
```

---

## 📊 Allure Reporting Setup

Allure provides a powerful and interactive test reporting dashboard.

### 🧩 Installation

```bash
npm i -D @playwright/test allure-playwright
npm install -g allure-commandline --save-dev
```

### ⚙️ Configuration

In your `playwright.config.js`, update the **reporter** section:

```js
reporter: [
  ['list'],
  ['html'],
  ['json', { outputFile: 'test-results.json' }],
  ['junit', { outputFile: 'results.xml' }],
  ['allure-playwright', { outputFolder: 'allure-results' }],
],
```

### ▶️ Run and Generate Reports

1. **Run your tests**
   ```bash
   npx playwright test example.spec.js
   ```

2. **Generate Allure report**
   ```bash
   allure generate allure-results -o allure-report --clean
   ```

3. **Open the report**
   ```bash
   allure open allure-report
   ```

   Example:
   ```
   Starting web server...
   Server started at http://127.0.0.1:63721
   Press <Ctrl+C> to exit
   ```

---

## ⚙️ Recommended Playwright Config Settings

### Parallel Execution
Disable parallel tests if your test flow involves sessions or dependent operations:
```js
fullyParallel: false
```

### Artifacts (Trace, Screenshot, Video)
Capture helpful debugging data:
```js
trace: 'retain-on-failure',
screenshot: 'only-on-failure',
video: 'retain-on-failure'
```

---

## 🌐 Additional Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Allure Framework Docs](https://docs.qameta.io/allure/)

---

### 💡 Tip

Use the combination of **headed + debug mode** during test creation and troubleshooting:
```bash
npx playwright test example.spec.js --project=chromium --headed --debug
```

---

**Happy Testing! 🧪**
