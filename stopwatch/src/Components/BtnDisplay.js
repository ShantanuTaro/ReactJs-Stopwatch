import React from 'react';

function BtnDisplay(time1) {
  return (
    <div>
        {(time1.status === 0)?
            <button className="stopwatch-btn stopwatch-btn-gre"
            onClick={time1.start}>Start</button> : ""
        }

        {(time1.status === 1)?
            <div>
                <button className="stopwatch-btn stopwatch-btn-red"
                onClick={time1.stop}>Stop</button>

                <button className="stopwatch-btn stopwatch-btn-yel"
                onClick={time1.restart}>Restart</button>
            </div> : ""
        }

        {(time1.status === 2)?
            <div>
                <button className="stopwatch-btn stopwatch-btn-gre"
                onClick={time1.resume}>Resume</button>
                
                <button className="stopwatch-btn stopwatch-btn-yel"
                onClick={time1.restart}>Restart</button>
            </div> : ""
        }
    </div>

  );
}

export default BtnDisplay;
