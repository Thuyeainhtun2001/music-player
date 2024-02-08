// variable names
let songImage = document.querySelector(".image");
let songName = document.querySelector(".songName");
let songArtist = document.querySelector(".artist");
let songAudio = document.querySelector(".audio");
let playBtn = document.querySelector(".playBtn");
let pauseBtn = document.querySelector(".pauseBtn");
let totalTime = document.querySelector(".totalTime");
let currentTime = document.querySelector(".currentTime");
let currentLength = document.querySelector(".currentLength");
let isRun = false;
let count = 0;
// for songlist array
const songList = [
    {
        image : "./image/music1.jpg",
        name : "Nyi Lay",
        artist : "Myo Gyi",
        path : "./music/music1.mp3"
    },
    {
        image : "./image/music2.png",
        name : "Ta Yat Tot Ngo Pr",
        artist : "Aye Myat Nandar",
        path : "./music/music2.mp3"
    },
    {
        image : "./image/music3.jpg",
        name : "Tar Gyi Tot Aye Say",
        artist : "Raymond & Han Nay Tar",
        path : "./music/music3.mp3"
    },
];
//creat start function
function start(){
    songImage.style.backgroundImage = "url(" + songList[count].image + ")";
    songName.innerHTML = songList[count].name;
    songArtist.innerHTML = songList[count].artist;
    songAudio.src = songList[count].path;
}
// next function
function next(){
    if( count == 2){
        return;
    }
    if( count < 3){
        count++;
         start();
        if(isRun){
            songAudio.play();
        }
    }
    bgColor();
}
// previous function
function previous(){
    if(count==0){
        return;
    }
    if ( count > 0){
        count--;
        start();
        if(isRun){
            songAudio.play();
        }
    }
    bgColor();
}
// play function
function play(){
    songAudio.play();
    isRun = true;
    playBtn.classList.add("hidden");
    pauseBtn.classList.remove("hidden");
}
// pause function
function pause(){
    songAudio.pause();
    isRun = false;
    playBtn.classList.remove("hidden");
    pauseBtn.classList.add("hidden");
}
// aboutTime
songAudio.addEventListener("loadeddata",function(){
    let totalDuration = Math.floor(songAudio.duration);
    console.log(totalDuration);
    // for totalTime
    let minutes = Math.floor(totalDuration / 60);
    let seconds = Math.floor(totalDuration % 60);
    totalTime.innerHTML = (minutes < 10 ? "0"+minutes : minutes)
    +":"+
    (seconds < 10 ? "0"+seconds : seconds);
    songAudio.addEventListener("timeupdate",function(){
        let currentDuration = songAudio.currentTime;
        // for currentTime
        let minutes = Math.floor(currentDuration / 60);
        let seconds = Math.floor(currentDuration % 60);
        currentTime.innerHTML = (minutes < 10 ? "0"+minutes : minutes)
        +":"+
        (seconds < 10 ? "0"+seconds : seconds);
        // for currentLength
        currentLength.style.width = (currentDuration / totalDuration) * 400 +"px";
    })
})
// for background color
function bgColor(){
    let red = Math.floor((Math.random()*256)+46);
    let green = Math.floor((Math.random()*256)+46);
    let blue = Math.floor((Math.random()*256)+46);
    let color = "rgb("+red+","+green+","+blue+")";
    document.body.style.background = color;
}
// recall start function
start();