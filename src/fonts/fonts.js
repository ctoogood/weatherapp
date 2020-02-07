import { createGlobalStyle } from 'styled-components';

import Bahnschrift from './bahnschrift.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Bahnschrift';
        src: local('Bahnschrift'),
        url(${Bahnschrift}) format('ttf');
        font-weight: 200, 400;
        font-style: normal;
    }
`;
