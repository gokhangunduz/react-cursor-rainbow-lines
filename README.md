![react-cursor-rainbow-lines](/docs/images/banner.png "react-cursor-rainbow-lines")

# React Cursor Rainbow Lines

React Cursor Rainbow Lines provides an integration for React applications to create visually colorful lines. This package allows you to visualize the path followed by the user's cursor with colorful lines.

## Installation

You can install the package via npm or yarn:

```
npm install react-cursor-rainbow-lines
```

or

```
yarn add react-cursor-rainbow-lines
```

## Usage

To use the package, simply use the `<ReactCursorRainbowLines />` component:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ReactCursorRainbowLines from "react-cursor-rainbow-lines";

ReactDOM.render(
  <React.StrictMode>
    <ReactCursorRainbowLines />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

After adding this component, colorful lines will appear as you move the cursor over your application.

## Contributing

Please contribute by visiting the GitHub repository: [react-cursor-rainbow-lines GitHub Repository](https://github.com/gokhangunduz/react-cursor-rainbow-lines)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
