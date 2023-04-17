import { createGlobalStyle } from "styled-components";
import { setScrollBarStyled } from "./animations";

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  ${setScrollBarStyled()};
}
body, button,input {
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-style: normal;
}
body{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Ropa Sans', sans-serif;
  overflow: hidden;
  #__next {
    width: 100%;
  }
  p {
    margin: unset;
  }
  hr {
    margin-bottom: 0;
  }
}
input, textarea, button {
  font-family: 'Montserrat', sans-serif;
}

h1,span{
  margin: 0px;
  padding:0px
}
`;
