import { createGlobalStyle } from 'styled-components';

import Bahnschrift from '../fonts/Bahnschrift.ttf';
import FrostedCupcake from '../fonts/Frosted Cupcake.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Frosted Cupcake';
        src: local('Frosted Cupcake'), local('FrostedCupcake'),
        url(${FrostedCupcake}) format('ttf'),
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Bahnschrift';
        src: local('Bahnschrift'), local('Bahnschrift'),
        url(${Bahnschrift}) format('ttf'),
        font-weight: 200, 400;
        font-style: normal;
    }
`;
