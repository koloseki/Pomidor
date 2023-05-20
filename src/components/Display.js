import React, { useState, useEffect } from 'react';

const Display = ({ time, mode }) => {
    const [formattedTime, setFormattedTime] = useState('');

    useEffect(() => {
        const formatted = formatTime(time);
        setFormattedTime(formatted);
    }, [time]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        return `${minutes.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
        })}:${seconds.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
        })}`;
    };

    return (
        <div className="display">
            <h2>{mode === 'work' ? 'Work Time' : 'Break Time'}</h2>
            <p>{formattedTime}</p>
        </div>
    );
};

export default Display;
