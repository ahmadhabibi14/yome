"use client"
import * as musicMetadata from "music-metadata-browser";
import React, { useState } from "react";
import Image from "next/image";

const arrayBufferToBase64 = (buffer) => {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
};

function AudioPlayer() {
  const [audio, setAudio] = useState(null);
  const [albumCover, setAlbumCover] = useState(null);

  const handleAudioChange = (event) => {
    const audioFile = event.target.files[0];
    if (audioFile) {
      setAudio(URL.createObjectURL(audioFile));
      const metadata = musicMetadata.parseBlob(audioFile).then(metadata => {
        console.log(metadata);
        const picture = metadata.common.picture ? metadata.common.picture[0] : null;
        if (picture) {
          const base64String = arrayBufferToBase64(picture.data);
          setAlbumCover(`data:${picture.format};base64,${base64String}`);
        }
      })

      console.log("Metadata @", metadata);
    }
  }
  return (
    <main className="w-full mt-20">
      <h2>Hello</h2>
      <div>
        <input
          onChange={handleAudioChange}
          type="file"
          name="audio-upload"
          id="audio-upload"
          accept="audio/*"
        />

        <audio controls id="audio-player" src={audio} ></audio>
      </div>
      <div>
        { albumCover &&
          <Image
            alt="Album Cover"
            src={albumCover}
            width={120}
            height={120}
            />
        }
      </div>
    </main>
  );
}

export default AudioPlayer;