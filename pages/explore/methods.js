/* eslint-disable max-len */
import React from 'react';

import NavBar from '../../components/nav';
import Text from '../../constants/methods';
import Vector from '../../components/vectors-explore';

export default function Methods() {
  return (
    <div className="mt-16 text-xl bg-offwhite text-darker thin">
      <NavBar />
      <div className="m-10 flex flex-col">
        <Vector name="dark-logo" className="h-1/2 w-1/2 mt-10 self-center" />
        <div className="py-5 bg-dark text-offwhite">
          <div className="text-center font-bold text-4xl">Methodology</div>
        </div>
        <div className="pt-5 pl-5">All data was gotten from Our World in Data: Plastic Pollution. We saved and pulled in csv data from their visualizations into three different Python scripts. The data from these Python scripts were then cleaned, manipulated and written into a JavaScript-readable JSON format with correct attributes to match the visualizations we wanted to portray. To put the visualizations into JavaScript we used React Chart.js, which we loaded the JSON data into and tweaked for styling purposes.</div>
        <div className="mt-10 py-5 bg-dark text-offwhite">
          <div className="text-center font-bold text-4xl">Sources</div>
        </div>
        <div className="pt-10 font-bold text-3xl">Data &amp; Background Information:</div>
        <div className="pt-5 pl-5">{Object.keys(Text).map((t) => <div key={t} className="py-2 ml-10 indent">{Text[t]}</div>)}</div>
      </div>
      <footer className="footer">
          Powered by OceanUS &copy; 2021
      </footer>
    </div>
  );
}
