# JavaScript Calculator

A responsive, modern calculator built with **HTML**, **CSS**, and **JavaScript**. It features **keyboard input**, **dark mode toggle**, and **calculation history** using local storage.

![Calculator Preview](https://github.com/WisdomUdo/javaScript-calculator/blob/main/Screenshot.png)

---

## Features

- Basic Arithmetic Operations ( + − × ÷ )
- Click & Keyboard Input Support
- Light/Dark Theme Toggle 
- Live Calculation History (stored in localStorage)
- Clear & Backspace Functionality
- Mobile Responsive Design

---

## Screenshot

> Dark Mode + History Preview

<img src=".screenshot.png" width="400" alt="Calculator Screenshot" />

---

## How It Works

- **Display:** Shows typed or calculated values.
- **press()**: Adds button/key values to the display.
- **calculate()**: Evaluates the expression using `eval()` (safely).
- **clearDisplay()**: Clears the entire display.
- **backspace()**: Removes last character.
- **addToHistory()**: Saves recent calculations (up to 5) in localStorage.
- **toggleTheme()**: Switches between light and dark UI.

---

## Technologies Used

- **HTML5** – Structure
- **CSS3** – Styling and responsive design
- **JavaScript (ES6)** – Functionality and logic

---

## Project Structure

 calculator/
├── index.html
├── style.css
├── app.js
├── screenshot.png
└── README.md

## Mobile Responsive

- Fits smaller screens with a fluid layout
- Adjusts button size and layout in `@media` queries

---

## Note

This calculator uses JavaScript's `eval()` for simplicity, but in real-world production apps, using a proper expression parser is **strongly recommended** for security and control.

---

## Author

**Wisdom Udo**  
Passionate JavaScript Developer & Learner  
Nigeria  
🔗 [GitHub](https://github.com/WisdomUdo)

---

## License

This project is open source and available under the [MIT License](LICENSE).

---
