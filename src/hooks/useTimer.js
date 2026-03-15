import { useState, useEffect, useRef } from "react";

export const useTimer = (duration) => {
    const [seconds, setSeconds] = useState(duration * 60)
    const [running, setRunning] = useState(false)
    const intervalRef = useRef(null)

    useEffect(() => {
        if (running) {
            intervalRef.current = setInterval(() => {
                setSeconds(prev => {
                    if(prev <= 1){
                        clearInterval(intervalRef.current)
                        setRunning(false)
                        return 0
                    }
                    return prev - 1
                })
            }, 1000)
        } else {
            clearInterval(intervalRef.current)
        }
        return () => clearInterval(intervalRef.current)
    }, [running])

    const start = () => setRunning(true)
    const pause = () => setRunning(false)
    const reset = () => {
        setRunning(false)
        setSeconds(duration * 60)
    }

    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60
    const display = `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`

    return { display, running, start, pause, reset, finished: seconds === 0 }
}