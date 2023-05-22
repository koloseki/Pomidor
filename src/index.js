import  React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Timer from './components/Timer';
import gearSolidSvg from './gear-solid.svg';

ReactDOM.render(

    <React.StrictMode>
        <div className="title">
            <p>pomidor</p>
            <img src={gearSolidSvg} alt="Gear Icon" className="svg-icon" />
        </div>
        <Timer />
    </React.StrictMode>,
    document.getElementById('root')
);
