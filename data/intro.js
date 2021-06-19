import PlasticPerPerson from './cleaned/plastic-per-person.json';

const { countries } = PlasticPerPerson;
const { amount } = PlasticPerPerson;
const Colors = ['#F25F5C', '#C9E3CA', '#A7E4FA', '#9BBD51', '#4AA9CC', '#F2925C'];
const Y = [0, -0.4, -0.3, 0.1, 0.2, 0.4];
const X = [0, 1, -1, 2, -2, 0];

const dataArray = [];
// eslint-disable-next-line no-plusplus
for (let i = 0; i < countries.length; i++) {
  dataArray.push({
    label: countries[i],
    data: [{
      x: X[i],
      y: Y[i],
      r: amount[i] * 2.20462 * 100,
    }],
    backgroundColor: [
      Colors[i],
    ],
    borderColor: '#435058',
    borderWidth: 0,
    hoverOffset: 4,
  });
}

const Data = {
  pie: {
    labels: [
      'Ocean Plastics',
      'Other',
    ],
    datasets: [{
      label: 'Total World Plastic Production',
      data: [8, 381 - 8],
      backgroundColor: [
        '#4AA9CC',
        '#F25F5C',
      ],
      borderColor: '#435058',
      borderWidth: 0,
      hoverOffset: 4,
    }],
  },
  bar2: {
    labels: countries,
    datasets: [{
      label: 'Average individual plastic waste per day (lbs)',
      data: amount.map((x) => { return x * 2.20462; }),
      backgroundColor: Colors,
      borderColor: '#435058',
      borderWidth: 0,
      hoverOffset: 4,
    }],
  },
  bubble: {
    datasets: dataArray,
    // axisX: {
    //   gridThickness: 0,
    //   tickLength: 0,
    //   lineThickness: 0,
    //   labelFormatter() {
    //     return ' ';
    //   },
    // },
    // axisY: {
    //   gridThickness: 0,
    //   tickLength: 0,
    //   lineThickness: 0,
    //   labelFormatter() {
    //     return ' ';
    //   },
    // },
  },
};

export default Data;
