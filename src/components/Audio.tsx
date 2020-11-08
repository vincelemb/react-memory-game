import React from "react";

import Path from '../consts'

type AudioProps = {
    audioFile:string;
    id:string;
    toggleMusic?:(event: any) => void;
}

const Audio:React.FC<AudioProps> = (props: React.PropsWithChildren<AudioProps>) => {
  return (
      <audio src={`${Path.audioPath}${props.audioFile}`} id={props.id} onClick={props.toggleMusic && props.toggleMusic}></audio>
  );
}

export default Audio;
