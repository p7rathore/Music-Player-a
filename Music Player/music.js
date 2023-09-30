
let songData = [
    {
      "title": "Death Bed",
      "artist": "Powfu",
      "artwork": "https://samplesongs.netlify.app/album-arts/death-bed.jpg",
      "url": "https://samplesongs.netlify.app/Death%20Bed.mp3",
      "id": "1"
    },
    {
      "title": "Bad Liar",
      "artist": "Imagine Dragons",
      "artwork": "https://samplesongs.netlify.app/album-arts/bad-liar.jpg",
      "url": "https://samplesongs.netlify.app/Bad%20Liar.mp3",
      "id": "2"
    },
    {
      "title": "Faded",
      "artist": "Alan Walker",
      "artwork": "https://samplesongs.netlify.app/album-arts/faded.jpg",
      "url": "https://samplesongs.netlify.app/Faded.mp3",
      "id": "3"
    },
    {
      "title": "Hate Me",
      "artist": "Ellie Goulding",
      "artwork": "https://samplesongs.netlify.app/album-arts/hate-me.jpg",
      "url": "https://samplesongs.netlify.app/Hate%20Me.mp3",
      "id": "4"
    },
    {
      "title": "Solo",
      "artist": "Clean Bandit",
      "artwork": "https://samplesongs.netlify.app/album-arts/solo.jpg",
      "url": "https://samplesongs.netlify.app/Solo.mp3",
      "id": "5"
    },
    {
      "title": "Without Me",
      "artist": "Halsey",
      "artwork": "https://samplesongs.netlify.app/album-arts/without-me.jpg",
      "url": "https://samplesongs.netlify.app/Without%20Me.mp3",
      "id": "6"
    }
  ];


  let img = document.querySelector(".img");
  let SongName = document.querySelector(".name-s"); 
  let nameArtist = document.querySelector(".name-artist");
  let cecentDuration = document.querySelector(".recent-duration");
  let totalDuration = document.querySelector(".total-duration");
  let range = document.getElementById("range");
  let preview = document.getElementById("preview");
  let playBTN = document.getElementById("play");
  let next = document.getElementById("next");
  let audio = document.getElementById("audio");
  let musicImg = document.querySelector(".music-img");
  let songNum = 0;
  let isplay = false;

  // load data show displaye 

  music();
  function music(){
    let beet = songData[songNum];
   img.src=`${beet.artwork}`;
   audio.src = `${beet.url}`;
   SongName.innerHTML = beet.title;
   nameArtist.innerHTML = beet.artist;
  }
  
  // playMusic function
   
  function playMusic(){
    isplay = true;
    audio.play();
    playBTN.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    musicImg.classList.add("animation");
  }

  //pauseMusic function

  function pauseMusic(){
    isplay = false;
    audio.pause();
    playBTN.innerHTML = `<i class="fa-solid fa-play"></i>`;
    musicImg.classList.remove("animation");
  }

// play pause btn
playBTN.addEventListener("click",()=>{
  isplay ? pauseMusic() : playMusic();
});



 // next btn 
 next.addEventListener("click",()=>{
  songNum = songNum +1;
  if (songNum > songData.length -1 ) {
    songNum = 0;
  }
  music();
  nextbackPlay();
 });

  //next click button play song 
  function nextbackPlay(){
    audio.play();
    musicImg.classList.add("animation");
  }

 //preview btn
 preview.addEventListener("click",()=>{
   songNum = songNum -1;
   if (songNum < 0 ) {
    songNum = songData.length-1;
  }
   music();
   nextbackPlay();
 });

// end song redirect next song 
audio.addEventListener("ended",()=>{
  songNum = songNum +1;

});

// audio 
audio.addEventListener("ended",()=>{
  songNum = songNum +1;
  if (songNum > songData.length -1 ) {
    songNum = 0;
  }
  music();
  nextbackPlay();
})

 // seek function
 audio.addEventListener("timeupdate",()=>{
  let seekTo = parseInt((audio.currentTime/audio.duration)*100);
  range.value = seekTo;
  let currentMinutes = Math.floor(audio.currentTime / 60);
  let currentSeconds = Math.floor(audio.currentTime - currentMinutes * 60);
  let durationMinutes = Math.floor(audio.duration / 60);
  let durationSeconds = Math.floor(audio.duration - durationMinutes * 60); 

  cecentDuration.innerHTML = currentMinutes;
  totalDuration.innerHTML = durationMinutes;
  
   // Add a zero to the single digit time values
   if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
   if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
   if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
   if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
    // Display the updated duration
    cecentDuration.textContent = currentMinutes + ":" + currentSeconds;
    totalDuration.textContent = durationMinutes + ":" + durationSeconds;
 });

 