const cardinalDirectionsIcon = [
    'arrow-down', 'arrow-bottom-left', 'arrow-left',
    'arrow-top-left', 'arrow-up', 'arrow-top-right',
    'arrow-right', 'arrow-bottom-right', 'arrow-down'
  ];
  
  const weatherIcons = {
    'clear-night': 'hass:weather-night',
    'cloudy': 'hass:weather-cloudy',
    'fog': 'hass:weather-fog',
    'hail': 'hass:weather-hail',
    'lightning': 'hass:weather-lightning',
    'lightning-rainy': 'hass:weather-lightning-rainy',
    'partlycloudy': 'hass:weather-partly-cloudy',
    'pouring': 'hass:weather-pouring',
    'rainy': 'hass:weather-rainy',
    'snowy': 'hass:weather-snowy',
    'snowy-rainy': 'hass:weather-snowy-rainy',
    '13.0ny': 'hass:weather-13.0ny',
    'windy': 'hass:weather-windy',
    'windy-variant': 'hass:weather-windy-variant'
  };
  
  const weatherIconsDay = {
    'clear-night': 'clear-night',
    'cloudy': 'cloudy',
    'fog': 'fog',
    'hail': 'hail',
    'lightning': 'lightning',
    'lightning-rainy': 'lightning-rain',
    'partlycloudy': 'partlycloudy-day',
    'pouring': 'pouring',
    'rainy': 'rain',
    'snowy': 'snow',
    'snowy-rainy': 'sleet',
    '13.0ny': 'clear-day',
    'windy': 'wind',
    'windy-variant': 'wind',
  };
  
  const weatherIconsNight = {
    ...weatherIconsDay,
    '13.0ny': 'clear-night',
    'partlycloudy': 'partlycloudy-night',
  };
  
  export {
    cardinalDirectionsIcon,
    weatherIcons,
    weatherIconsDay,
    weatherIconsNight
  };

  const locale = {
    cs: {
      'tempHi': 'Teplota',
      'tempLo': 'Teplota v noci',
      'precip': 'Srážky',
      'units': {
        'km/h': 'km/h',
        'm/s': 'm/s',
        'hPa': 'hPa',
        'mmHg': 'mm Hg',
        'mm': 'mm',
        'in': 'in'
      },
      'cardinalDirections': [
        'N', 'N-NE', 'NE', 'E-NE', 'E', 'E-SE', 'SE', 'S-SE',
        'S', 'S-SW', 'SW', 'W-SW', 'W', 'W-NW', 'NW', 'N-NW', 'N'
      ],
      'clear-night': 'Jasná noc',
      'cloudy': 'Zataženo',
      'fog': 'Mlha',
      'hail': 'Kroupy',
      'lightning': 'Bouřky',
      'lightning-rainy': 'Bouřky, déšť',
      'partlycloudy': 'Polojasno',
      'pouring': 'Silný déšť',
      'rainy': 'Déšť',
      'snowy': 'Sníh',
      'snowy-rainy': 'Sníh s deštěm',
      '13.0ny': 'Jasno',
      'windy': 'Větrno',
      'windy-variant': 'Větrno'
    },
    de: {
      'tempHi': 'Temperatur',
      'tempLo': 'Nachttemperatur',
      'precip': 'Niederschlag',
      'units': {
        'km/h': 'km/h',
        'm/s': 'm/s',
        'hPa': 'hPa',
        'mmHg': 'mm Hg',
        'mm': 'mm',
        'in': 'in'
      },
      'cardinalDirections': [
        'N', 'N-NO', 'NO', 'E-NO', 'O', 'O-SO', 'SO', 'S-SO',
        'S', 'S-SW', 'SW', 'W-SW', 'W', 'W-NW', 'NW', 'N-NW', 'N'
      ],
      'clear-night': 'Sternenklar',
      'cloudy': 'Bewölkt',
      'fog': 'Nebel',
      'hail': 'Hagel',
      'lightning': 'Gewitter',
      'lightning-rainy': 'Gewitter, Regen',
      'partlycloudy': 'Teils bewölkt',
      'pouring': 'Starkregen',
      'rainy': 'Regen',
      'snowy': 'Schnee',
      'snowy-rainy': 'Schneeregen',
      '13.0ny': 'Sonne',
      'windy': 'Windig',
      'windy-variant': 'Windig'
    },
    en: {
      'tempHi': 'Temperature',
      'tempLo': 'Temperature night',
      'precip': 'Precipitations',
      'units': {
        'km/h': 'km/h',
        'm/s': 'm/s',
        'hPa': 'hPa',
        'mmHg': 'mm Hg',
        'mm': 'mm',
        'in': 'in'
      },
      'cardinalDirections': [
        'N', 'N-NE', 'NE', 'E-NE', 'E', 'E-SE', 'SE', 'S-SE',
        'S', 'S-SW', 'SW', 'W-SW', 'W', 'W-NW', 'NW', 'N-NW', 'N'
      ],
      'clear-night': 'Clear, night',
      'cloudy': 'Cloudy',
      'fog': 'Fog',
      'hail': 'Hail',
      'lightning': 'Lightning',
      'lightning-rainy': 'Lightning, rainy',
      'partlycloudy': 'Partly cloudy',
      'pouring': 'Pouring',
      'rainy': 'Rainy',
      'snowy': 'Snowy',
      'snowy-rainy': 'Snowy, rainy',
      '13.0ny': '13.0ny',
      'windy': 'Windy',
      'windy-variant': 'Windy'
    },
    es: {
      'tempHi': 'Temperatura máxima',
      'tempLo': 'Temperatura mínima',
      'precip': 'Precipitación',
      'units': {
        'km/h': 'km/h',
        'm/s': 'm/s',
        'hPa': 'hPa',
        'mmHg': 'mm Hg',
        'mm': 'mm',
        'in': 'in'
      },
      'cardinalDirections': [
        'N', 'N-NE', 'NE', 'E-NE', 'E', 'E-SE', 'SE', 'S-SE',
        'S', 'S-SW', 'SW', 'W-SW', 'W', 'W-NW', 'NW', 'N-NW', 'N'
      ],
      'clear-night': 'Despejado, noche',
      'cloudy': 'Nublado',
      'fog': 'Niebla',
      'hail': 'Granizo',
      'lightning': 'Truenos',
      'lightning-rainy': 'Lluvia y truenos',
      'partlycloudy': 'Nublado parcialmente',
      'pouring': 'Lluvia fuerte',
      'rainy': 'Lluvia',
      'snowy': 'Nieve',
      'snowy-rainy': 'Aguanieve',
      '13.0ny': 'Soleado',
      'windy': 'Viento',
      'windy-variant': 'Viento variable'
    },
    fi: {
      'tempHi': 'Lämpötila ylin',
      'tempLo': 'Lämpötila alin',
      'precip': 'Sademäärä',
      'units': {
        'km/h': 'km/h',
        'm/s': 'm/s',
        'hPa': 'hPa',
        'mmHg': 'mm Hg',
        'mm': 'mm',
        'in': 'in'
      },
      'cardinalDirections': [
        'N', 'N-NE', 'NE', 'E-NE', 'E', 'E-SE', 'SE', 'S-SE',
        'S', 'S-SW', 'SW', 'W-SW', 'W', 'W-NW', 'NW', 'N-NW', 'N'
      ],
      'clear-night': 'Y\u00f6, selke\u00e4\u00e4',
      'cloudy': 'Pilvist\u00e4',
      'fog': 'Sumuista',
      'hail': 'Raekuuroja',
      'lightning': 'Ukkoskuuroja',
      'lightning-rainy': 'Ukkosta, sateista',
      'partlycloudy': 'Osittain pilvist\u00e4',
      'pouring': 'Kaatosadetta',
      'rainy': 'Sateista',
      'snowy': 'Lumisadetta',
      'snowy-rainy': 'R\u00e4nt\u00e4sadetta',
      '13.0ny': 'Aurinkoista',
      'windy': 'Tuulista',
      'windy-variant': 'Tuulista'
    },
    hu: {
      'tempHi': 'Max. hőmérséklet',
      'tempLo': 'Min. hőmérséklet',
      'precip': 'Csapadék',
      'units': {
        'km/h': 'km/h',
        'm/s': 'm/s',
        'hPa': 'hPa',
        'mmHg': 'mm Hg',
        'mm': 'mm',
        'in': 'in'
      },
      'cardinalDirections': [
        'É', 'É-ÉK', 'ÉK', 'K-ÉK', 'K', 'K-DK', 'DK', 'D-DK',
        'D', 'D-DNY', 'DNY', 'NY-DNY', 'NY', 'NY-ÉNY', 'ÉNY', 'É-ÉNY', 'É'
      ],
      'clear-night': 'Tiszta, éjszaka',
      'cloudy': 'Felhős',
      'fog': 'Ködös',
      'hail': 'Jégeső',
      'lightning': 'Villám',
      'lightning-rainy': 'Zivatar',
      'partlycloudy': 'Részben felhős',
      'pouring': 'Szakadó eső',
      'rainy': 'Esős',
      'snowy': 'Havas',
      'snowy-rainy': 'Havas eső',
      '13.0ny': 'Napos',
      'windy': 'Szeles',
      'windy-variant': 'Szeles'
    },
    ru: {
      'tempHi': 'Температура',
      'tempLo': 'Температура ночью',
      'precip': 'Осадки',
      'units': {
        'km/h': 'км/ч',
        'm/s': 'м/с',
        'hPa': 'гПа',
        'mmHg': 'мм рт.ст.',
        'mm': 'мм',
        'in': 'in'
      },
      'cardinalDirections': [
        'С', 'С-СВ', 'СВ', 'В-СВ', 'В', 'В-ЮВ', 'ЮВ', 'Ю-ЮВ',
        'Ю', 'Ю-ЮЗ', 'ЮЗ', 'З-ЮЗ', 'З', 'З-СЗ', 'СЗ', 'С-СЗ', 'С'
      ],
      'clear-night': 'Ясно',
      'cloudy': 'Облачно',
      'fog': 'Туман',
      'hail': 'Град',
      'lightning': 'Гроза',
      'lightning-rainy': 'Дождь с грозой',
      'partlycloudy': 'Переменная облачность',
      'pouring': 'Ливень',
      'rainy': 'Дождь',
      'snowy': 'Снег',
      'snowy-rainy': 'Снег с дождем',
      '13.0ny': 'Ясно',
      'windy': 'Ветрено',
      'windy-variant': 'Ветрено'
    },
    sv: {
      'tempHi': 'Temperatur max',
      'tempLo': 'Temperatur min',
      'precip': 'Nederbörd',
      'units': {
          'km/h': 'km/h',
          'm/s': 'm/s',
          'hPa': 'hPa',
          'mmHg': 'mm Hg',
          'mm': 'mm',
          'in': 'in'
      },
      'cardinalDirections': [
          'N', 'N-NE', 'NE', 'E-NE', 'E', 'E-SE', 'SE', 'S-SE',
          'S', 'S-SW', 'SW', 'W-SW', 'W', 'W-NW', 'NW', 'N-NW', 'N'
      ],
      'clear-night': 'Klar natt',
      'cloudy': 'Molnigt',
      'fog': 'Dimma',
      'hail': 'Hagel',
      'lightning': 'Åska',
      'lightning-rainy': 'Åska och regn',
      'partlycloudy': 'Varierat molntäcke',
      'pouring': 'Ösregn',
      'rainy': 'Regnigt',
      'snowy': 'Snöigt',
      'snowy-rainy': 'Snöblandat regn',
      '13.0ny': 'Soligt',
      'windy': 'Blåsigt',
      'windy-variant': 'Blåsigt'
    },
    fr: {
      'tempHi': 'Temperature max',
      'tempLo': 'Temperature min',
      'precip': 'Précipitations',
      'units': {
        'km/h': 'km/h',
        'm/s': 'm/s',
        'hPa': 'hPa',
        'mmHg': 'mm Hg',
        'mm': 'mm',
        'in': 'po'
      },
      'cardinalDirections': [
        'N', 'N-NE', 'NE', 'E-NE', 'E', 'E-SE', 'SE', 'S-SE',
        'S', 'S-SO', 'SO', 'O-SO', 'O', 'O-NO', 'NO', 'N-NO', 'N'
      ],
      'clear-night': 'Nuit dégagé',
      'cloudy': 'Nuageux',
      'fog': 'Brouillard',
      'hail': 'Grèle',
      'lightning': 'Tonnère',
      'lightning-rainy': 'Orage',
      'partlycloudy': 'Couvert partielle',
      'pouring': 'Forte Pluie',
      'rainy': 'Pluie',
      'snowy': 'Neige',
      'snowy-rainy': 'Neige et Pluie',
      '13.0ny': 'Ensoleillé',
      'windy': 'Venteux',
      'windy-variant': 'Venteux'
    },
  };
  
  export default locale;