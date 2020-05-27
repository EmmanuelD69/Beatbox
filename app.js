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
          this.kickAudio.play();
        }
        if (bar.classList.contains("clap-pad")) {
          this.clapAudio.play();
        }
        if (bar.classList.contains("crash-pad")) {
          this.crashAudio.play();
        }
        if (bar.classList.contains("hihat-pad")) {
          this.hihatAudio.play();
        }
        if (bar.classList.contains("openhat-pad")) {
          this.openhatAudio.play();
        }
        if (bar.classList.contains("perc-pad")) {
          this.percAudio.play();
        }
        if (bar.classList.contains("snare-pad")) {
          this.snareAudio.play();
        }
        if (bar.classList.contains("tom-pad")) {
          this.tomAudio.play();
        }
        if (bar.classList.contains("other-pad")) {
          this.otherAudio.play();
        }
      }
    });
    this.index++;
  }
  start() {
    const interval = (60 / this.bpm) * 1000;
    setInterval(() => {
      this.repeat();
    }, interval);
  }
}

const drumKit = new Drumkit();

drumKit.pads.forEach((pad) => {
  pad.addEventListener("click", drumKit.activePad);
  pad.addEventListener("animationend", function () {
    this.style.animation = "";
  });
});

drumKit.playBtn.addEventListener("click", () => drumKit.start());
