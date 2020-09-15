import React, { useState, useEffect, useRef } from "react";
import Setting from "../components/Setting";
import DisplayInfo from "../components/DisplayInfo";
import DisplayWords from "../components/DisplayWords";
import Genetics from "../genetics";
import Divider from "@material-ui/core/Divider";
import { REFRESH_TIME } from "../const/Time";

const initSetting = {
  target: "Hello world",
  maxPop: 200,
  mutRate: 0.01,
};
const App = () => {
  const prevTimeRef = useRef();
  const reqRef = useRef();
  const [genetics, setGenetics] = useState(new Genetics(initSetting));
  const [setting, setSetting] = useState(initSetting);
  const [info, setInfo] = useState({
    generations: 0,
    bestWord: "",
  });

  const handleChange = (id) => ({ target: { value } }) => {
    setSetting({
      ...setting,
      [id]: value,
    });
  };

  const handleUpdate = (e) => {
    if (e) e.preventDefault();
    setGenetics(new Genetics(setting));
  };

  useEffect(() => {
    const runGenetics = (time) => {
      if (!prevTimeRef.current) prevTimeRef.current = time;
      const dTime = time - prevTimeRef.current;

      if (dTime > REFRESH_TIME) {
        prevTimeRef.current = time;
        const completed = genetics.run();
        setInfo({
          generations: genetics.getGens(),
          bestWord: genetics.getBestDNA(),
        });

        if (completed) {
          cancelAnimationFrame(reqRef.current);
          return;
        }
      }

      reqRef.current = requestAnimationFrame(runGenetics);
    };

    reqRef.current = requestAnimationFrame(runGenetics);
    return () => cancelAnimationFrame(reqRef.current);
  }, [genetics]);

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
        generations={info.generations}
        bestWord={info.bestWord}
      />

      <Divider variant="inset" style={{ margin: 8 }} />
      <DisplayWords words={genetics.getWords(100)} />
    </div>
  );
};

export default App;
