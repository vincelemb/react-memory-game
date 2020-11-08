export default function TimeFormat(seconds: number) {
    let displaySeconds: number;
    let displayMinutes: number;

    function numberTimeFormat(string, pad, length) {
        return (new Array(length + 1).join(pad) + string).slice(-length);
    }

    displayMinutes = Math.floor(seconds / 60);
    displaySeconds = seconds - displayMinutes * 60;

    let finalTime =
        numberTimeFormat(displayMinutes, '0', 2) +
        ':' +
        numberTimeFormat(displaySeconds, '0', 2);

    return finalTime;
}
