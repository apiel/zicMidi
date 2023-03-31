{
  "targets": [
    {
      "target_name": "zicMidi",
      "cflags!": [
        "-fno-exceptions"
      ],
      "cflags_cc!": [ 
        "-fno-exceptions",
      ],
      "sources": [
        "src/zic_midi.cc",
        "lib/rtmidi/RtMidi.cpp",
      ],
      "include_dirs": [
        "<!@(node -p \"require('node-addon-api').include\")",
        'lib/rtmidi',
      ],
      'libraries': [
          '-lasound -lpthread',
      ],
      'defines': [ 
        'NAPI_DISABLE_CPP_EXCEPTIONS', 
        '__LINUX_ALSA__=1',
        '_REENTRANT=1',
      ],
    }
  ]
}
