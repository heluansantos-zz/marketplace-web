import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root{
    --pme2: #7D8EB2
    --pme1: #5C7099;
    --p: #3C4F76;
    --pma1: #283859;
    --pma2: #192640;
    --sme2: #95DCE5;
    --sme1: #77CDD9;
    --s: #43BCCD;
    --sma1: #268B99;
    --sma2: #176773;
    --comp1: #537D8D;
    --comp2: #CB5159;
    --comp3: #1BC47D;
    --c1: #F8F8FA;
    --c2: #F3F2F5;
    --c3: #E9E9EB;
    --c4: #E1E0E5;
    --c5: #D5D4D9;
    --c6: #B7B6BA;
    --c7: #AEADB1;
    --c8: #868689;
    --c9: #56565A;
    --c10: #313033;
  }
  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: 'Nunito', sans-serif;
  }
`
