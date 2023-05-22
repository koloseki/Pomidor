import React from 'react';

const Controls = ({ isRunning, onStartStop, onReset, onToggleMode }) => {
    return (
        <div className="controls">
            <button onClick={onStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
            <button onClick={onToggleMode}>Toggle Mode</button>
        </div>
    );
};

export default Controls;
