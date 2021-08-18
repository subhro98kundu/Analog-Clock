setInterval(() => {
    let t = new Date();
    let htime = t.getHours();
    let mtime = t.getMinutes();
    let stime = t.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
    //console.log(t);
}, 1000);