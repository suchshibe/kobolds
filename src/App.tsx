import React, { useReducer } from "react";
import "./App.css";
import Buildings from "./Buildings";
import areaFields from "./areaFields";
import areaCavern from "./areaCavern";
import areaForest from "./areaForest";
import areaLake from "./areaLake";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const localClicks = Number(localStorage.getItem("clicks"));

const globalclicks = { clicks: localClicks };

function UpdateCount(count: { clicks: number }) {
  const newCount = count.clicks + 1;

  localStorage.setItem("clicks", newCount.toString());

  return { clicks: newCount };
}

function App(): JSX.Element {
  const [State, IncrementState] = useReducer(UpdateCount, globalclicks);

  return (
    <Router>
      <div id="grid">
        <button onClick={() => IncrementState()}>Click Me</button>
        <div className="menu gamemenu">Game Menu</div>
        <Buildings />
        <div className="menu content">
          <Switch>
            <Route path="/Fields" component={areaFields} />
            <Route path="/Cavern" component={areaCavern} />
            <Route path="/Forest" component={areaForest} />
            <Route path="/Lake" component={areaLake} />
          </Switch>
        </div>
        <div className="menu resources">Clicked: {State.clicks}</div>
        <div className="menu otherstuff">other stuff here</div>
        <div className="menu footer">Footer</div>
      </div>
    </Router>
  );
}

export default App;
