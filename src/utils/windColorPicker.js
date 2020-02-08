/* eslint-disable no-nested-ternary */
const windColorPicker = (windSpeed) => ((
   windSpeed <= 10) ? 'ten'
    : (windSpeed <= 20) ? 'twenty'
      : (windSpeed <= 30) ? 'thirty'
        : (windSpeed <= 40) ? 'forty'
          : (windSpeed <= 50) ? 'fifty'
            : (windSpeed <= 60) ? 'sixty'
              : 'windy');

export default windColorPicker;
