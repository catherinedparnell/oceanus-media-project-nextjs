import React from 'react';
import { Pie } from 'react-chartjs-2';

export default function PieChart(props) {
  const { width, height, data } = props;
  return (
    <div>
      <Pie data={data}
        width={width}
        height={height}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
}
