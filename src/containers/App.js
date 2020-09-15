import React, { useState, useEffect, useRef } from "react";
import Setting from "../components/Setting";
import DisplayInfo from "../components/DisplayInfo";
import Genetics from "../genetics";

const initSetting = {
  target: "Test ",
  maxPop: 200,
  mutRate: 0.01,
};
const App = () => {
  const genetics = useRef(new Genetics(initSetting));
  const prevTimeRef = useRef();
  const reqRef = useRef();
  const [setting, setSetting] = useState(initSetting);
  const [generations, setGenerations] = useState(0);


  const handleChange = (id) => ({ target: { value } }) => {
    setSetting({
      ...setting,
      [id]: value,
    });
  };
  const handleUpdate = () => {
    console.log(setting);
  };
  const runGenetics = (time) => {
    if (prevTimeRef.current) {
      const dTime = time - prevTimeRef.current;
      if (dTime > 500) {
        if (genetics.current.run()) {
          cancelAnimationFrame(reqRef.current);
          return;
        }

        setGenerations(genetics.current.getGens());
        prevTimeRef.current = time;
      }
    } else {
      prevTimeRef.current = time;
    }

    reqRef.current = requestAnimationFrame(runGenetics);
  };
  useEffect(() => {
    reqRef.current = requestAnimationFrame(runGenetics);
    return () => cancelAnimationFrame(reqRef.current);
  });

  return (
    <div>
      <Setting
        value={setting.target}
        handleChange={handleChange("target")}
        handleUpdate={handleUpdate}
      />
      <DisplayInfo
        maxPop={setting.maxPop}
        mutRate={setting.mutRate}
        generations={generations}
      />
    </div>
  );
};

export default App;
