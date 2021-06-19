import React from 'react';
import { Bubble } from 'react-chartjs-2';

export default function BubbleChart(props) {
  const { width, height, data } = props;
  return (
    <div>
      <Bubble data={data}
        width={width}
        height={height}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}
