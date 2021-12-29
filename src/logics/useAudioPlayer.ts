import { useEffect, useState } from 'react';

export default function useAudioPlayer() {
    const [audioPlaying, setAudioPlaying] = useState<boolean>(false);
    const [resetAudio, setResetAudio] = useState<boolean>(false);

    const [musicPlaying, setMusicPlaying] = useState<boolean>(false);
    const [resetMusic, setResetMusic] = useState<boolean>(false);

    useEffect(() => {
        const audio: HTMLMediaElement & any = document.getElementById('audio');
        const music: HTMLMediaElement & any = document.getElementById('music');

        if (music) {
            musicPlaying ? music.play() : music.pause();
            if (resetMusic) {
                music.pause();
                music.currentTime = 0;
            }
        }

        if (audio) {
            if (audioPlaying) audio.play();

            if (resetAudio) {
                audio.pause();
                audio.currentTime = 0;
            }
        }
    }, [audioPlaying, musicPlaying]);

    return { audioPlaying, setAudioPlaying, setResetAudio, musicPlaying, setMusicPlaying, setResetMusic };
}