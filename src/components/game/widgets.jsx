import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setTime, resetTime, startTicking, stopTicking } from '../../reducers/etc/stopWatchSlice';
import '../../index.css';

const StopWatch = () => {
    const time = useSelector((state) => state.stopWatch.time);
    const isTicking = useSelector((state) => state.stopWatch.isTicking);
    const dispatch = useDispatch();

    useEffect(() => {
        let timer = null;
        if (isTicking) {
            timer = setInterval(() => {
                dispatch(setTime({ time: (time + 0.01).toFixed(2) }));
            }, 10);
        }

        return () => {
            if (timer) clearInterval(timer);
        };
    }, [isTicking, time, dispatch]);

    useEffect(() => {
        dispatch(setTime({ time: 0 }));
        dispatch(startTicking());

        return () => {
            dispatch(stopTicking());
            dispatch(resetTime());
        }
    }, [dispatch]);

    return (
        <div className="stopwatch-container animate-float-to-top-left fixed">
            <div className="font-noto text-2xl textShadow">
                {time.toFixed(2)}
            </div>
        </div>
   );
 };

export default StopWatch;
