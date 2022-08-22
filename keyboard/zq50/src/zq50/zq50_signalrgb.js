export function Name() { return "ZhaQian zq50"; }
export function VendorId() { return 0x00AA; }
export function ProductId() { return 0xAA16; }
export function Publisher() { return "ZhaQian"; }
export function Size() { return [14, 4]; }
export function DefaultPosition() { return [10, 100]; }
export function DefaultScale() { return 8.0; }
export function ControllableParameters() {
    return [
        { "property":"bkset", "group": "lighting", "label":"BackLight Enable","type":"boolean","default":"true"},
        { "property":"ugset", "group": "lighting", "label":"Underglow Enable","type":"boolean","default":"true"},
        { "property": "LightingMode", "group": "lighting", "label": "Lighting Mode", "type": "combobox", "values": ["Canvas", "Forced"], "default": "Canvas" },
        { "property": "forcedColor", "group": "lighting", "label": "Forced Color", "min": "0", "max": "360", "type": "color", "default": "009bde" },
    ];
}

const vKeys =
    [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
        14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
        27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
        40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
        50, 51, 52, 53, 54, 55, 56, 57,
        58, 59, 60, 61, 62, 63, 64, 65,
    ];

const vKeyNames =
    [
        "Esc", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "Delete", "Backspace", "Home",
        "Tap", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "Enter", "Page Up",
        "Left Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "Right Shift", "Up Arrow", "Page Down",
        "Left Ctrl", "Left Win", "Left Alt", "Space1", "Space2", "Fn", "Right Ctrl", "Left Arrow", "Down Arrow", "Right Arrow",
        "ug1", "ug2", "ug3", "ug4", "ug5", "ug6", "ug7", "ug8",
        "ug9", "ug10", "ug11", "ug12", "ug13", "ug14", "ug15", "ug16",
    ];

const vKeyPositions =
    [
        [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0], [11, 0], [12, 0], [13, 0],
        [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1], [9, 1], [10, 1], [11, 1], [13, 1],
        [0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2], [7, 2], [8, 2], [9, 2], [10, 2], [11, 2], [13, 2],
        [0, 3], [1, 3], [2, 3], [4, 3], [6, 3], [8, 3], [9, 3], [10, 3], [11, 3], [13, 3],
        [13, 3], [12, 3], [10, 3], [8, 3], [6, 3], [4, 3], [2, 3], [0, 3],
        [0, 0], [2, 0], [4, 0], [6, 0], [8, 0], [10, 0], [12, 0], [13, 0],
    ];

export function LedNames() {
    return vKeyNames;
}

export function LedPositions() {
    return vKeyPositions;
}

export function Initialize() {
    ClearReadBuffer();
    GetProtocolVersion();
    GetDeviceInfo();
    effectEnable();
}

export function Render() {
    sendColors();
}

export function Shutdown() {
    effectDisable();
}

var trans_times;

function ClearReadBuffer(timeout = 10) {
    let count = 0;
    let readCounts = [];
    device.flush();

    while (device.getLastReadSize() > 0) {
        device.read([0x00], 64, timeout);
        count++;
        readCounts.push(device.getLastReadSize());
    }
}

function GetProtocolVersion() {
    let packet = [];
    packet[0] = 0x00;
    packet[1] = 0xAA;
    packet[2] = 0x01;
    device.write(packet, 64);
    packet = device.read(packet, 64);
    let SingalRGBProtocolVersion = packet[3];
    device.log("SignalRGB Protocol Version: " + SingalRGBProtocolVersion);
    device.pause(30);
}

function GetQMKVersion() {
    let packet = [];
    packet[0] = 0x00;
    packet[1] = 0xAA;
    packet[2] = 0x02;
    device.write(packet, 64);
    packet = device.read(packet, 64);

    let num = packet[3];
    var QMKVersion = [];
    for (let iIdx = 0; iIdx < num; iIdx++) {
        QMKVersion[iIdx] = packet[iIdx + 4];
    }
    // device.log("QMK Version: " + QMKVersion);
    device.pause(30);
}


function GetDeviceInfo() {
    let packet = [];
    packet[0] = 0x00;
    packet[1] = 0xAA;
    packet[2] = 0x03;
    device.write(packet, 64);
    packet = device.read(packet, 64);
    let num = packet[3];
    device.log("Driver Led Total: " + num + " " + packet[1] + " "  + packet[2]);
    trans_times = packet[4];
    device.log("Transfer Times: " + trans_times);
    device.pause(30);
}

function effectEnable() {
    let packet = [];
    packet[0] = 0x00;
    packet[1] = 0xAA;
    packet[2] = 0x05;
    packet[3] = 0x01;
    device.write(packet, 64);
}

function effectDisable() {
    let packet = [];
    packet[0] = 0x00;
    packet[1] = 0xAA;
    packet[2] = 0x05;
    packet[3] = 0x00;
    device.write(packet, 64);
}

export function onbksetChanged(){
    setrgbctrl(0, bkset)
}

export function onugsetChanged(){
    setrgbctrl(1, ugset)
}

function setrgbctrl(val, set){
    let packet = [];
    packet[0] = 0x00;
    packet[1] = 0xAA;
    packet[2] = 0x06;
    packet[3] = val;
    packet[4] = set;
    device.write(packet, 64);
    device.log(`setrgbctrl to ${val} ${set}`)
}

function grabColors(shutdown = false) {
    let rgbdata = [];

    for (let iIdx = 0; iIdx < vKeys.length; iIdx++) {
        let iPxX = vKeyPositions[iIdx][0];
        let iPxY = vKeyPositions[iIdx][1];
        let color;

        if (shutdown) {
            color = hexToRgb(shutdownColor);
        }
        else if (LightingMode === "Forced") {
            color = hexToRgb(forcedColor);
        }
        else {
            color = device.color(iPxX, iPxY);
        }

        let iLedIdx = vKeys[iIdx] * 3;
        rgbdata[iLedIdx] = color[0];
        rgbdata[iLedIdx + 1] = color[1];
        rgbdata[iLedIdx + 2] = color[2];
    }

    return rgbdata;
}

function sendColors() {
    let rgbdata = grabColors();

    for (var index = 0; index < trans_times; index++) {
        let packet = [];
        let offset = index * 20;
    	packet[0] = 0x00;
        packet[1] = 0xAA;
        packet[2] = 0x04;
        packet[3] = offset;
        packet[4] = 0x14;
        packet = packet.concat(rgbdata.splice(0, 60));
        device.write(packet, 65);
    }
}

function hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    let colors = [];
    colors[0] = parseInt(result[1], 16);
    colors[1] = parseInt(result[2], 16);
    colors[2] = parseInt(result[3], 16);

    return colors;
}

export function Validate(endpoint) {
    return (endpoint.interface === 1 && endpoint.usage_page === 0xff59) || (endpoint.interface === 2 && endpoint.usage_page === 0xff59);
}

export function Image() {
}
