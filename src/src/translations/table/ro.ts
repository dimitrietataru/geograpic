const ro = {
  table: {
    common: {
      actions: 'Acțiuni',
    },
    header: {
      id: 'Id',
      code: 'Cod ISO',
      name: 'Nume',
      googleId: 'Google ID',
      coordinates: 'Coordonate',
      countries: {
        area: 'Suprafață',
        population: 'Populație',
        continent: 'Continent',
      },
    },
    footer: {
      all: 'Toate',
    },
    continents: {
      id: 'Id',
      name: 'Nume',
    },
    countries: {
      id: 'Id',
      name: 'Nume',
      area: 'Suprafață',
      population: 'Populație',
    },
  },
} as const;

export default ro;
