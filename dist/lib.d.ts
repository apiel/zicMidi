export interface MidiDeviceInfo {
    name: string;
    port: number;
}
export interface MidiDevices {
    input: MidiDeviceInfo[];
    output: MidiDeviceInfo[];
}
export declare const getMidiDevices: () => MidiDevices;
export interface MidiMessage {
    port: number;
    deltatime: number;
    message: number[];
}
export interface MidiError {
    port: number;
    error: string;
}
export declare const setMidiCallback: (callback: (data: MidiMessage | MidiError) => void) => void;
export declare const subscribeMidiInput: (inputPort: number, ignoreTypes?: {
    midiSysex: boolean;
    midiTime: boolean;
    midiSense: boolean;
}) => void;
export declare const unsubscribeMidiInput: (inputPort: number) => void;
export declare const closeMidiOutput: (outputPort: number) => void;
export declare const sendMidiMessage: (outputPort: number, message: number[]) => void;
//# sourceMappingURL=lib.d.ts.map