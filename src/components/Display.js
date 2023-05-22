import React, { useState, useEffect } from 'react';
import soundFile from './MetalGearSolidCodecSound.mp3';

const Display = ({ time, mode , handleToggleMode, handleReset }) => {
    const [formattedTime, setFormattedTime] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const formatted = formatTime(time);
        setFormattedTime(formatted);
        if (time === 0 && !isPlaying) {
            setIsPlaying(true);
            playSound();
            handleTimerEnd();
        }
    }, [time]);

    const playSound = () => {
        const audio = new Audio(soundFile);
        audio.play();

        audio.onended = () => {
            setIsPlaying(false);
        };
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        return `${minutes.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
        })}:${seconds.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
        })}`;
    };

    const handleTimerEnd = () => {
        console.log('Timer ended!');
         handleToggleMode();
    };

    return (
        <div className="display">
            <h2>{mode === 'work' ? 'Work Time' : 'Break Time'}</h2>
            <p>{formattedTime}</p>
        </div>
    );
};

export default Display;
