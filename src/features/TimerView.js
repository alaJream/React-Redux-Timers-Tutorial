import React from "react";
import TimerView from './TimerView'
import { toggleTimer } from "../features/timers/timersSlice"; 
import { formatTime } from '../utils';
import './TimerView.css'


export default function TimerView({ index, name, time, isRunning }) {
    const dispatch = useDispatch()
	return (
		<div className="TimerView">
			<h2>{name}</h2>
			<h1>{formatTime(timer.time)}</h1>
			<button>
                {isRunning? "Stop" : "Start"}
            </button>
		</div>
	)
}