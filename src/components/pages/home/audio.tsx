"use client"
import * as musicMetadata from "music-metadata-browser";
import React, { ChangeEvent, useState } from "react";
import Image from "next/image";

const arrayBufferToBase64 = (buffer: Uint8Array): string => {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  for (let i in bytes) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
};

const AudioPlayer: React.FC = () => {
  const [audio, setAudio] = useState<string>("");
  const [albumCover, setAlbumCover] = useState<string>("");

  const handleAudioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const audioFile: File = event.target.files?.[0] as File;
    if (audioFile) {
      setAudio(URL.createObjectURL(audioFile));
      const metadata: Promise<any> = musicMetadata.parseBlob(audioFile).then(metadata => {
        console.log(metadata);
        const picture = metadata.common.picture ? metadata.common.picture[0] : null;
        if (picture) {
          const base64String: string = arrayBufferToBase64(picture.data as Uint8Array);
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