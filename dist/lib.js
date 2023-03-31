"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMidiMessage = exports.closeMidiOutput = exports.unsubscribeMidiInput = exports.subscribeMidiInput = exports.setMidiCallback = exports.getMidiDevices = void 0;
const bindings_1 = __importDefault(require("bindings"));
const zicMidi = (0, bindings_1.default)('zicMidi');
exports.getMidiDevices = zicMidi.getMidiDevices;
exports.setMidiCallback = zicMidi.setMidiCallback;
exports.subscribeMidiInput = zicMidi.subscribeMidiInput;
exports.unsubscribeMidiInput = zicMidi.unsubscribeMidiInput;
exports.closeMidiOutput = zicMidi.closeMidiOutput;
exports.sendMidiMessage = zicMidi.sendMidiMessage;
