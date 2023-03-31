"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("./lib");
console.log('Zic midi');
// console.log('getAudioDeviceInfo', getAudioDeviceInfo());
const midiDevices = (0, lib_1.getMidiDevices)();
console.log('getMidiDevices', midiDevices);
(0, lib_1.setMidiCallback)((data) => {
    console.log('midi callback', data);
});
midiDevices.input.forEach((input) => {
    if (input.name.startsWith('APC Key 25')) {
        (0, lib_1.subscribeMidiInput)(input.port);
    }
});
const midiOutput = midiDevices.output.find((output) => output.name.includes('APC Key 25 mk2 C'));
if (midiOutput) {
    (0, lib_1.sendMidiMessage)(midiOutput.port, [0x96, 0x00, 0x05]);
}
