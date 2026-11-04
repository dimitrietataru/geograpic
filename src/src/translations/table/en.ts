const en = {
  table: {
    common: {
      actions: 'Actions',
    },
    header: {
      id: 'Id',
      code: 'ISO Code',
      name: 'Name',
      googleId: 'Google ID',
      coordinates: 'Coordinates',
      continents: {},
      countries: {
        area: 'Area',
        population: 'Population',
        continent: 'Continent',
      },
    },
    footer: {
      all: 'All',
    },
    continents: {
      id: 'Id',
      name: 'Name',
    },
    countries: {
      id: 'Id',
      name: 'Name',
      area: 'Area',
      population: 'Population',
    },
  },
} as const;

export default en;
