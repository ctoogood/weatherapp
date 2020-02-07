import { createGlobalStyle } from 'styled-components';

import Bahnschrift from './bahnschrift.ttf';
import FrostedCupcake from './frostedCupcake.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Frosted Cupcake';
        url(${FrostedCupcake}) format('ttf'),
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Bahnschrift';
        url(${Bahnschrift}) format('ttf'),
        font-weight: 200, 400;
        font-style: normal;
    }
`;
