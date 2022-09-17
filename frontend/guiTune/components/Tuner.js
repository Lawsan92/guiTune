import PitchFinder from 'pitchfinder';
// import Recording from "react-native-recording"; // doesn't work
import { Audio } from 'expo-av';

console.log('PitchFinder:', PitchFinder)




/*
const Tuner = () => {
  let middleA = 440;
  let semitone = 69;
  let noteStrings = [
    "C",
    "C♯",
    "D",
    "D♯",
    "E",
    "F",
    "F♯",
    "G",
    "G♯",
    "A",
    "A♯",
    "B",
  ];

  const sampleRate = 22050;
  const bufferSize = 2048;
  const pitchFinder = new PitchFinder.YIN({sampleRate: sampleRate});

  const start = () => {

      Recording.init({
      sampleRate: this.sampleRate,
      bufferSize: this.bufferSize,
    });
    Recording.start();
    Recording.addRecordingEventListener((data) => {
      const frequency = this.pitchFinder(data);
      if (frequency && this.onNoteDetected) {
        const note = getNote(frequency);
        this.onNoteDetected({
          name: this.noteStrings[note % 12],
          value: note,
          cents: this.getCents(frequency, note),
          octave: parseInt(note / 12) - 1,
          frequency: frequency,
        });
      }
    });

  }

  const getNote = (frequency) => {
    const note = 12 * (Math.log(frequency / this.middleA) / Math.log(2));
    return Math.round(note) + semitone;
  }

  const getStandardFrequency = (note) => {
    return middleA * Math.pow(2, (note - semitone) / 12);
  }

  const getCents = (frequency, note) => {
    return Math.floor(
      (1200 * Math.log(frequency / getStandardFrequency(note))) /
        Math.log(2)
    );
  }

}
*/

 class Tuner {
  middleA = 440;
  semitone = 69;
  noteStrings = [
    "C",
    "C♯",
    "D",
    "D♯",
    "E",
    "F",
    "F♯",
    "G",
    "G♯",
    "A",
    "A♯",
    "B",
  ];

  constructor(sampleRate = 22050, bufferSize = 2048) {
    this.sampleRate = sampleRate;
    this.bufferSize = bufferSize;
    this.pitchFinder = new PitchFinder.YIN({ sampleRate: this.sampleRate });
  }

  // start() {
  //   Recording.init({
  //     sampleRate: this.sampleRate,
  //     bufferSize: this.bufferSize,
  //   });
  //   Recording.start();
  //   Recording.addRecordingEventListener((data) => {
  //     const frequency = this.pitchFinder(data);
  //     if (frequency && this.onNoteDetected) {
  //       const note = this.getNote(frequency);
  //       this.onNoteDetected({
  //         name: this.noteStrings[note % 12],
  //         value: note,
  //         cents: this.getCents(frequency, note),
  //         octave: parseInt(note / 12) - 1,
  //         frequency: frequency,
  //       });
  //     }
  //   });
  // }

  /**
   * get musical note from frequency
   *
   * @param {number} frequency
   * @returns {number}
   */
  getNote(frequency) {
    const note = 12 * (Math.log(frequency / this.middleA) / Math.log(2));
    return Math.round(note) + this.semitone;
  }

  /**
   * get the musical note's standard frequency
   *
   * @param note
   * @returns {number}
   */
  getStandardFrequency(note) {
    return this.middleA * Math.pow(2, (note - this.semitone) / 12);
  }

  /**
   * get cents difference between given frequency and musical note's standard frequency
   *
   * @param {float} frequency
   * @param {int} note
   * @returns {int}
   */
  getCents(frequency, note) {
    return Math.floor(
      (1200 * Math.log(frequency / this.getStandardFrequency(note))) /
        Math.log(2)
    );
  }
}
export default Tuner;