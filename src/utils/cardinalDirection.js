/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';

import RightArrow from '../images/right-arrow.svg';

const Wind = styled.section`
    height:20px;
    width:20px;
    position:relative;

    img {
        object-fit:cover;
    }
    .south-east {
        transform:rotate(45deg);
    }
    .south {
        transform:rotate(90deg);
    }
    .south-west {
        transform:rotate(135deg);
    }
    .west {
        transform:rotate(180deg);
    }
    .north-west {
        transform:rotate(225deg);
    }
    .north {
        transform:rotate(-90deg);
    }
    .north-east {
        transform:rotate(-45deg);
    }
`;

const cardinalDirection = (angle) => {
  const degreePerDirection = 360 / 8;
  const offsetAngle = angle + degreePerDirection / 2;
  return (
    <>
      <Wind>
        {(offsetAngle >= 0 * degreePerDirection && offsetAngle < 1 * degreePerDirection) ? <img className="north" src={RightArrow} alt="N" />
          : (offsetAngle >= 1 * degreePerDirection && offsetAngle < 2 * degreePerDirection) ? <img className="north-east" src={RightArrow} alt="NE" />
            : (offsetAngle >= 2 * degreePerDirection && offsetAngle < 3 * degreePerDirection) ? <img className="east" src={RightArrow} alt="E" />
              : (offsetAngle >= 3 * degreePerDirection && offsetAngle < 4 * degreePerDirection) ? <img className="south-east" src={RightArrow} alt="SE" />
                : (offsetAngle >= 4 * degreePerDirection && offsetAngle < 5 * degreePerDirection) ? <img className="south" src={RightArrow} alt="S" />
                  : (offsetAngle >= 5 * degreePerDirection && offsetAngle < 6 * degreePerDirection) ? <img className="south-west" src={RightArrow} alt="SW" />
                    : (offsetAngle >= 6 * degreePerDirection && offsetAngle < 7 * degreePerDirection) ? <img className="west" src={RightArrow} alt="W" />
                      : <img className="north-west" src={RightArrow} alt="NW" />}
      </Wind>
    </>
  );
};

export default cardinalDirection;
