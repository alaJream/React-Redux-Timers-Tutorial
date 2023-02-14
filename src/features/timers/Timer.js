const myTimer = createTimer('Workout');

export default function createTimer(name) {
    return {
      name, 
      time: 0, 
      isRunning: false
    }
  }