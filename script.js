const refs = {
    timer: document.querySelector("#timer-1"),
    daysOut: document.querySelector('[data-value="days"]'),
    hoursOut: document.querySelector('[data-value="hours"]'),
    minsOut: document.querySelector('[data-value="mins"]'),
    secsOut: document.querySelector('[data-value="secs"]')
  };
  
  class CountdownTimer {
    constructor(id, date) {
      this.id = id;
      this.targetDate = new Date(date);
      this.daysOut = this.id.querySelector('[data-value="days"]');
      this.hoursOut = this.id.querySelector('[data-value="hours"]');
      this.minsOut = this.id.querySelector('[data-value="mins"]');
      this.secsOut = this.id.querySelector('[data-value="secs"]');
    }
    calculateTimer() {
      setInterval(() => {
        this.currentDate = Date.now();
        let time = this.targetDate - this.currentDate;
        this.days = Math.floor(time / (1000 * 60 * 60 * 24));
        this.hours = Math.floor(
          (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        this.mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        this.secs = Math.floor((time % (1000 * 60)) / 1000);
        refs.daysOut.textContent = this.days;
        refs.hoursOut.textContent = this.hours;
        refs.minsOut.textContent = this.mins;
        refs.secsOut.textContent = this.secs;
      }, 1000);
    }
  }
  
  const timer1 = new CountdownTimer(
    document.querySelector("#timer-1"),
    "Jul 17, 2020"
  );
  
  timer1.calculateTimer();