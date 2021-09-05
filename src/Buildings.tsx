import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Buildings() {
    return (
        <div className="menu buildingsmenu">
        <h5 className="title buildings">
          Area Selector
        </h5>
        <Link to="/Fields"><li className="areaItem">Fields</li></Link>
        <Link to="/Cavern"><li className="areaItem">Cavern</li></Link>
        <Link to="/Forest"><li className="areaItem">Forest</li></Link>
        <Link to="/Lake"><li className="areaItem">Lake</li></Link>
      </div>
    );
}
export default Buildings