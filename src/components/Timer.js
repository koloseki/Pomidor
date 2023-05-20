import React, { useState, useEffect } from 'react';
import Display from './Display';
import Controls from './Control';

const Timer = () => {
    const [initialTime, setInitialTime] = useState(25 * 60); // 25 minut (lub inna wartość początkowa)
    const [time, setTime] = useState(initialTime);
    const [mode, setMode] = useState('work');
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId = null;

        if (isRunning) {
            intervalId = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        } else {
            clearInterval(intervalId);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isRunning]);

    const handleStartStop = () => {
        setIsRunning(!isRunning);
    };

    const handleReset = () => {
        setTime(initialTime);
        setIsRunning(false);
    };

    const handleToggleMode = () => {
        const newMode = mode === 'work' ? 'break' : 'work';
        setMode(newMode);
        setTime(newMode === 'work' ? 25 * 60 : 5 * 60);
    };

    return (
        <div className="timer">
            <h1>Pomodoro Timer</h1>
            <Display time={time} mode={mode} />
            <Controls
                isRunning={isRunning}
                onStartStop={handleStartStop}
                onReset={handleReset}
                onToggleMode={handleToggleMode}
            />
        </div>
    );
};

export default Timer;
