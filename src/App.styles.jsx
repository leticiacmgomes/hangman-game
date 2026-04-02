import { styled } from "styled-components";

import backgroundMobile from './assets/images/background-mobile.svg'
import backgroundTablet from './assets/images/background-tablet.svg'
import backgroundDesktop from './assets/images/background-desktop.svg'

export const AppContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    font-family: 'Mouse Memoirs', sans-serif;
    background-image: url("${backgroundMobile}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 1.5rem;
    display: grid;

    @media screen and (min-width: 768px) {
        background-image: url("${backgroundTablet}");
    }

    @media screen and (min-width: 1440px) {
        background-image: url("${backgroundDesktop}");
    }
`;