# caption

Generate captions/subtitles for any video from the command line, offline, using
[whisper.cpp](https://github.com/ggerganov/whisper.cpp) for transcription and
[ffmpeg](https://ffmpeg.org/) for audio handling.

```console
$ caption your-video.mp4
[caption] extracting audio: your-video.mp4 -> 16 kHz mono wav
[caption] transcribing with whisper-cli (model: ggml-base.en.bin, lang: auto)
[caption] captions written:
  your-video.srt
[caption] done.
```

## What it does

1. **Extracts** the audio track with `ffmpeg` into the 16 kHz mono PCM WAV that
   whisper.cpp expects.
2. **Transcribes** it with `whisper-cli`, writing `SRT` / `VTT` / `TXT`
   subtitle files next to the video.
3. **Optionally burns** the subtitles into a new `*.captioned.mp4` (`--burn`).

Everything runs locally — no audio ever leaves your machine.

## Requirements

- **ffmpeg** — `apt install ffmpeg`, `brew install ffmpeg`, etc.
- **whisper.cpp** — build the CLI and put `whisper-cli` on your `PATH`:
  ```sh
  git clone https://github.com/ggerganov/whisper.cpp
  cd whisper.cpp && cmake -B build && cmake --build build --config Release
  # the binary lands at build/bin/whisper-cli
  ```
  (Older builds call it `main`; `caption` auto-detects either, or set
  `WHISPER_BIN`.)

A GGML model is needed too. If you don't pass one with `-m`, `caption`
downloads and caches the `--model-size` model (default `base.en`) from the
official Hugging Face repo on first run.

## Install

Drop the `caption` script somewhere on your `PATH`:

```sh
install -m 0755 caption /usr/local/bin/caption
# or just run it from the repo:  ./caption your-video.mp4
```

## Usage

```
caption [options] <video-file>

Options:
  -m, --model PATH       Path to a whisper ggml model (.bin). If omitted, a
                         model of size --model-size is downloaded and cached.
      --model-size SIZE  Model to auto-download when -m is not given
                         (tiny, tiny.en, base, base.en, small, medium,
                         large-v3, ...). Default: base.en
  -l, --language LANG    Spoken language code, or "auto" to detect. Default: auto
  -f, --format FMT       Subtitle format: srt, vtt, txt, or all. Default: srt
  -o, --output DIR       Output directory. Default: alongside the input file.
  -b, --burn             Also render <name>.captioned.mp4 with burned-in subs.
  -t, --threads N        Threads for whisper-cli. Default: number of CPUs.
      --keep-wav         Keep the intermediate 16 kHz wav file.
  -h, --help             Show help.
  -V, --version          Show version.
```

### Examples

```sh
# Simplest case — auto-downloads base.en, writes your-video.srt
caption your-video.mp4

# English, all formats, using the small model
caption --model-size small -l en -f all clip.mov

# Use a specific model and burn subtitles into a copy of the video
caption -m ~/models/ggml-base.en.bin --burn interview.mkv
```

### Environment variables

| Variable             | Purpose                                             |
| -------------------- | --------------------------------------------------- |
| `WHISPER_BIN`        | Path/name of the whisper.cpp binary (auto-detected).|
| `WHISPER_MODEL`      | Default model path (same as `-m`).                  |
| `WHISPER_MODEL_SIZE` | Default model size for auto-download.               |
| `WHISPER_MODEL_DIR`  | Model cache directory (default `~/.cache/whisper.cpp`).|
| `WHISPER_LANGUAGE`   | Default language.                                   |

## License

MIT
