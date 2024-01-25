const DarkTheme = {
  colors: {
    primary: "#0d1b2a",
    secondary: "#1b263b",
    taskContainer: "#415a77",
    taskItem: "#778da9",
    button: "#e0e1dd",
    checked: "#415a77",
    text: "#fff",
  },
} as const;

const LightTheme = {
  colors: {
    primary: "#dee2e6",
    secondary: "#e9ecef",
    taskContainer: "#f5f5f5",
    taskItem: "#e9e9e9",
    button: "#7f8284",
    checked: "#adb5bd",
    text: "#000",
  },
} as const;

export { DarkTheme, LightTheme };
