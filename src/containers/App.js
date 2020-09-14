import React, { useState, useEffect, useRef } from "react";
import Setting from "../components/Setting";
import Population from "../genetics/Population";
import Genetics from "../genetics";
import genetic from "../genetics";


const App = () => {
  const population = useRef(null);
  const [setting, setSetting] = useState({
    target: "abdefghijklmnopqrs",
    maxPop: 200,
    mutRate: 0.01,
  });
  const handleChange = (id) => ({ target: { value } }) => {
    setSetting({
      ...setting,
      [id]: value,
    });
  };
  const handleUpdate = () => {
    console.log(setting);
  };

  useEffect(() => {
    const genetics = new Genetics(setting);
    while (!genetics.run());
    // const population = new Population(setting);
    // console.log("called");
    // while (!population.completed) {
    //   population.naturalSelection();
    //   population.generateGens();
    //   // population.printAll();

    //   console.log(population.generations, population.bestDNA);
    // }
  }, [setting]);
  return (
    <div className="App">
      <Setting
        value={setting.target}
        handleChange={handleChange("target")}
        handleUpdate={handleUpdate}
      />
    </div>
  );
};

export default App;
