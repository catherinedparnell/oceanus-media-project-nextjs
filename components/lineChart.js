import React from 'react';
import { Line } from 'react-chartjs-2';

export default function LineChart(props) {
  const { width, height, data } = props;
  return (
    <div>
      <Line data={data}
        width={width}
        height={height}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
}
