import {
    getMidiDevices,
    setMidiCallback,
    subscribeMidiInput,
    sendMidiMessage,
} from './lib';

console.log('Zic midi');

// console.log('getAudioDeviceInfo', getAudioDeviceInfo());

const midiDevices = getMidiDevices();
console.log('getMidiDevices', midiDevices);
setMidiCallback((data) => {
    console.log('midi callback', data);
});
midiDevices.input.forEach((input) => {
    if (input.name.startsWith('APC Key 25')) {
        subscribeMidiInput(input.port);
    }
});

const midiOutput = midiDevices.output.find((output) => output.name.includes('APC Key 25 mk2 C'));
if (midiOutput) {
    sendMidiMessage(midiOutput.port, [0x96, 0x00, 0x05]);
}
