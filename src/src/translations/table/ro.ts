const ro = {
  table: {
    common: {
      actions: 'Acțiuni',
    },
    header: {
      id: 'Id',
      code: 'Cod ISO',
      name: 'Nume',
      continent: 'Continent',
      country: {
        area: 'Suprafață',
        population: 'Populație',
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
