class Drumkit {
  constructor() {
    this.playBtn = document.querySelector(".play");
    this.pads = document.querySelectorAll(".pad");
    this.kickAudio = document.querySelector(".kick-sound");
    this.clapAudio = document.querySelector(".clap-sound");
    this.crashAudio = document.querySelector(".crash-sound");
    this.hihatAudio = document.querySelector(".hihat-sound");
    this.openhatAudio = document.querySelector(".openhat-sound");
    this.percAudio = document.querySelector(".perc-sound");
    this.snareAudio = document.querySelector(".snare-sound");
    this.tomAudio = document.querySelector(".tom-sound");
    this.otherAudio = document.querySelector(".other-sound");
    this.index = 0;
    this.bpm = 126;
    this.isPlaying = null;
  }
  activePad() {
    this.classList.toggle("active");
  }
  repeat() {
    let step = this.index % 8;
    const activeBars = document.querySelectorAll(`.B${step}`);
    /* Loop over on the pads */
    activeBars.forEach((bar) => {
      bar.style.animation = `playTrack 0.35s alternate ease-in-out 2`;
      /* Check if pads are active */
      if (bar.classList.contains("active")) {
        /* Check each audio */
        if (bar.classList.contains("kick-pad")) {
          this.kickAudio.currentTime = 0;
          this.kickAudio.play();
        }
        if (bar.classList.contains("clap-pad")) {
          this.clapAudio.currentTime = 0;
          this.clapAudio.play();
        }
        if (bar.classList.contains("crash-pad")) {
          this.crashAudio.currentTime = 0;
          this.crashAudio.play();
        }
        if (bar.classList.contains("hihat-pad")) {
          this.hihatAudio.currentTime = 0;
          this.hihatAudio.play();
        }
        if (bar.classList.contains("openhat-pad")) {
          this.openhatAudio.currentTime = 0;
          this.openhatAudio.play();
        }
        if (bar.classList.contains("perc-pad")) {
          this.percAudio.currentTime = 0;
          this.percAudio.play();
        }
        if (bar.classList.contains("snare-pad")) {
          this.snareAudio.currentTime = 0;
          this.snareAudio.play();
        }
        if (bar.classList.contains("tom-pad")) {
          this.tomAudio.currentTime = 0;
          this.tomAudio.play();
        }
        if (bar.classList.contains("other-pad")) {
          this.otherAudio.currentTime = 0;
          this.otherAudio.play();
        }
      }
    });
    this.index++;
  }

  /* fonction lancée à chaque "clic" sur le bouton "PLAY" */
  start() {
    /* réglage du Tempo */
    const interval = (60 / this.bpm) * 1000;
    /* Si "this.isPlaying" = null */
    if (this.isPlaying == null) {
      /* change le text du Btn avec "STOP" */
      this.playBtn.innerText = "STOP";
      /* ajoute la classe "active" au bouton */
      this.playBtn.classList.add("active");
      /* donne une valeur à "this.isPlaying" */
      this.isPlaying = setInterval(
        () => {
          /* lance la fonction "repeat()" */
          this.repeat();
        },
        /* relance la fonction repeat() tous les "interval" millisecondes */
        interval
      );
    } else {
      /* sinon */
      /* change le text du Btn par "PLAY" */
      this.playBtn.innerText = "PLAY";
      /* efface la classe "active" du bouton */
      this.playBtn.classList.remove("active");
      /* efface la valeur de "this.isPlaying" */
      clearInterval(this.isPlaying);
      /* attribut la valeur "null" à (this.isPlaying) */
      this.isPlaying = null;
    }
  }
}

const drumKit = new Drumkit();

drumKit.pads.forEach((pad) => {
  pad.addEventListener("click", drumKit.activePad);
  pad.addEventListener("animationend", function () {
    this.style.animation = "";
  });
});

drumKit.playBtn.addEventListener("click", function () {
  // drumKit.updateBtn();
  drumKit.start();
});
