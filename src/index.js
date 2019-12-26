    import ReactDom from 'react-dom';
    import React from 'react';
    import App from './App';
    import { ThemeProvider } from 'styled-components';
    import theme from './utils/theme';
    import GlobalStyles from './utils/global';

    ReactDom.render(
        <ThemeProvider theme={theme}>
            <>
                <App />
                <GlobalStyles/>
        </>
        </ThemeProvider>,
        
     document.getElementById('root')
     );