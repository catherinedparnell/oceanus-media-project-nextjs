import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function BarChart(props) {
  const { width, height, data } = props;
  return (
    <div>
      <Bar data={data}
        width={width}
        height={height}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}
