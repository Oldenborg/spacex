import "./App.sass";

import React, { useEffect, useState } from "react";

import { LaunchCard } from "./components/LaunchCard";
import classnames from "classnames";
import moment from "moment";
import spacex from "./api/spacex";

function App() {
  const [latestLaunch, setLatestLaunch] = useState<any>();
  const [showDescription, setShowDescription] = useState<boolean>(false);
  const [launches, setLaunches] = useState<any[]>();
  const [filtered, setFiltered] = useState<any[]>();

  useEffect(() => {
    spacex.latestLaunch().then(function (response) {
      setLatestLaunch(response);
    });
    spacex.launches().then(function (response) {
      setLaunches(response);
      setFiltered(response);
    });
  }, []);

  const sortBySuccess = () => {
    setFiltered(
      launches?.filter((launch) => {
        return launch.success;
      })
    );
  };

  const sortByFailure = () => {
    setFiltered(
      launches?.filter((launch) => {
        return !launch.success;
      })
    );
  };

  const showAll = () => {
    setFiltered(launches);
  };

  const toggleDetails = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className={classnames("App", "container")}>
      <div className={"menu"}>
        <button onClick={sortBySuccess} className="button--success">
          Show success
        </button>
        <button onClick={sortByFailure} className="button--fail">
          Show fails
        </button>
        <button onClick={showAll}>Show all</button>
        <button onClick={toggleDetails}>Toggle details</button>
      </div>
      <div className="latest">
        {latestLaunch && launches && (
          <LaunchCard
            detailed={true}
            date={moment
              .unix(latestLaunch.date_unix)
              .format("MMMM Do YYYY, hh:mm:ss")}
            title={latestLaunch.name}
            text={latestLaunch.details}
            success={latestLaunch.success}
          />
        )}
      </div>
      <div className={"launches"}>
        {filtered?.map((launch) => (
          <LaunchCard
            detailed={showDescription}
            key={launch.id}
            date={moment
              .unix(launch.date_unix)
              .format("MMMM Do YYYY, hh:mm:ss")}
            title={launch.name}
            text={launch.details}
            success={launch.success}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
