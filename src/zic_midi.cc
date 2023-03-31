#include <napi.h>

#include "zic_node.h"
#include "zic_node_midi.h"

Napi::Object Init(Napi::Env env, Napi::Object exports)
{
    exports.Set(Napi::String::New(env, "getMidiDevices"), Napi::Function::New(env, getMidiDevices));
    exports.Set(Napi::String::New(env, "setMidiCallback"), Napi::Function::New(env, setMidiCallback));
    exports.Set(Napi::String::New(env, "subscribeMidiInput"), Napi::Function::New(env, subscribeMidiInput));
    exports.Set(Napi::String::New(env, "unsubscribeMidiInput"), Napi::Function::New(env, unsubscribeMidiInput));
    exports.Set(Napi::String::New(env, "closeMidiOutput"), Napi::Function::New(env, closeMidiOutput));
    exports.Set(Napi::String::New(env, "sendMidiMessage"), Napi::Function::New(env, sendMidiMessage));
    return exports;
}

NODE_API_MODULE(zicMidi, Init)
