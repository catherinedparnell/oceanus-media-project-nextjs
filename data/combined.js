import FuturePlasticData from './cleaned/future-plastic-data.json';

const Data = {
  macroplasticData: {
    labels: FuturePlasticData.years,
    datasets: [{
      label: 'Outputs growth to 2050',
      data: FuturePlasticData.macro_by_2050,
      backgroundColor: [
        '#4AA9CC',
      ],
      borderColor: '#435058',
      borderWidth: 0,
      hoverOffset: 4,
    }, {
      label: 'Outputs level to 2020',
      data: FuturePlasticData.macro_level_by_2020,
      backgroundColor: [
        '#F25F5C',
      ],
      borderColor: '#435058',
      borderWidth: 0,
      hoverOffset: 4,
    }, {
      label: 'Outputs stop in 2020',
      data: FuturePlasticData.macro_stop_by_2020,
      backgroundColor: [
        '#9BBD51',
      ],
      borderColor: '#435058',
      borderWidth: 0,
      hoverOffset: 4,
    }],
  },
  microplasticData: {
    labels: FuturePlasticData.years,
    datasets: [{
      label: 'Outputs growth to 250',
      data: FuturePlasticData.micro_by_2050,
      backgroundColor: [
        '#4AA9CC',
      ],
      borderColor: '#435058',
      borderWidth: 0,
      hoverOffset: 4,
    }, {
      label: 'Outputs level to 2020',
      data: FuturePlasticData.micro_level_by_2020,
      backgroundColor: [
        '#F25F5C',
      ],
      borderColor: '#435058',
      borderWidth: 0,
      hoverOffset: 4,
    }, {
      label: 'Outputs stop in 2020',
      data: FuturePlasticData.micro_stop_by_2020,
      backgroundColor: [
        '#9BBD51',
      ],
      borderColor: '#435058',
      borderWidth: 0,
      hoverOffset: 4,
    }],

  },
};

export default Data;
