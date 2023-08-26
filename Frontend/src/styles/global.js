import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
    font-family: "Poppins", sans-serif;
  }

  body {
    background: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    -webkit-font-smoothing: antialiased;
    font-size: 1.6rem;
    width: 100%;
    height: 100vh;
  }

  input, button, textarea {
    font-family: "Poppins", sans-serif;
  }

  input {
    border: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  button, a {
    cursor: pointer;
    border: none;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.8);
  }

    /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`
