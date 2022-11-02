const varisuReleaseDate = new Date('January 12 2023 00:00:00')

const lyric = ['Leaner','Meaner','Stronger','can you feel the','Power','Terror','Fire','....']
var time = 0;
function updateTime(){
    const currentDate = new Date();
    const diff = varisuReleaseDate-currentDate;
    const lyricBox = document.querySelector('#lyric')
    lyricBox.innerHTML = lyric[time]
    console.log(lyric[time])
    time++
    if(time>=lyric.length){
        time=0
    }



    const d = Math.floor(diff/1000/60/60/24)
    const h = Math.floor((diff/1000/60/60)%24)
    const m = Math.floor((diff/1000/60)%60)
    const s = Math.floor((diff/1000)%60)

    const days = document.querySelector('#days')
    days.innerHTML = d<10?"0"+d:d;
    const hours = document.querySelector('#hours')
    hours.innerHTML = h<10?"0"+h:h;
    const mins = document.querySelector('#mins')
    mins.innerHTML = m<10?"0"+m:m;
    const secs = document.querySelector('#secs')
    secs.innerHTML = s<10?"0"+s:s;
}
updateTime();

setInterval(updateTime, 1000);
