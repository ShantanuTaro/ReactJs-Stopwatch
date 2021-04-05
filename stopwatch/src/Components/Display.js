import React from 'react';

function Display(time1) {
    return (
        <div>
            <span>{(time1.time.h >= 10)? time1.time.h:"0"+time1.time.h}</span>&nbsp;:&nbsp;
            <span>{(time1.time.m >= 10)? time1.time.m:"0"+time1.time.m}</span>&nbsp;:&nbsp;
            <span>{(time1.time.s >= 10)? time1.time.s:"0"+time1.time.s}</span>&nbsp;:&nbsp;
            <span>{(time1.time.ms >= 10)? time1.time.ms:"0"+time1.time.ms}</span>&nbsp;
        </div>

  );
}

export default Display;
