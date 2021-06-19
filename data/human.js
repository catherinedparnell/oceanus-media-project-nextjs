import PlasticInOceanData from './cleaned/cleaned-plastic-in-oceans.json';

const Colors = ['#F25F5C', '#C9E3CA', '#A7E4FA', '#9BBD51', '#4AA9CC', '#F2925C', '#FFCFCF'];

// data from https://journals.plos.org/plosone/article/figure?id=10.1371/journal.pone.0111913.t001
const Data = {
  labels: PlasticInOceanData.ocean_labels,
  datasets: [{
    label: 'Count of microplastics in surface oceans in trillions',
    data: PlasticInOceanData.microplastic_values,
    backgroundColor: Colors,
    borderWidth: 1,
  }],
};

export default Data;
