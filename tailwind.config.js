module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg-color)',
        secondary: 'var(--bg-secondary)',
        text: 'var(--text-color)',
        btn: 'var(--btn-bg)',
        btnHover: 'var(--btn-hover-bg)',
        border: 'var(--border-color)',
        highlight: 'var(--highlight-color)',
      }
    }
  },
  plugins: [require("daisyui")],
};
