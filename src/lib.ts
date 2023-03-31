import bindings from 'bindings';

const zicMidi = bindings('zicMidi');

export interface MidiDeviceInfo {
    name: string;
    port: number;
}

export interface MidiDevices {
    input: MidiDeviceInfo[];
    output: MidiDeviceInfo[];
}

export const getMidiDevices: () => MidiDevices = zicMidi.getMidiDevices;

export interface MidiMessage {
    port: number;
    deltatime: number;
    message: number[];
}

export interface MidiError {
    port: number;
    error: string;
}

export const setMidiCallback: (callback: (data: MidiMessage | MidiError) => void) => void =
    zicMidi.setMidiCallback;

export const subscribeMidiInput: (
    inputPort: number,
    ignoreTypes?: { midiSysex: boolean; midiTime: boolean; midiSense: boolean },
) => void = zicMidi.subscribeMidiInput;
export const unsubscribeMidiInput: (inputPort: number) => void = zicMidi.unsubscribeMidiInput;
export const closeMidiOutput: (outputPort: number) => void = zicMidi.closeMidiOutput;
export const sendMidiMessage: (outputPort: number, message: number[]) => void = zicMidi.sendMidiMessage;
