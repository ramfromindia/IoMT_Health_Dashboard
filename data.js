"use strict";

/*
|--------------------------------------------------------------------------
| DEVICE REGISTRY
|--------------------------------------------------------------------------
*/

const devices = [
    {
        id: "IOMT-001",

        patient: {
            id: "P001",
            name: "Patient A"
        },

        metrics: {
            heartRate: 72,
            oxygen: 98,
            temperature: 36.8,
            battery: 91,
            latency: 35
        },

        status: "ONLINE",

        lastUpdated: Date.now()
    }
];

/*
|--------------------------------------------------------------------------
| DASHBOARD STATE
|--------------------------------------------------------------------------
*/

const dashboardState = {
    activeDeviceId: "IOMT-001",
    alertCount: 0,
    totalDevices: devices.length
};

/*
|--------------------------------------------------------------------------
| THRESHOLDS
|--------------------------------------------------------------------------
*/

const _thresholds = {
    heartRate: {
        min: 60,
        max: 100
    },

    oxygen: {
        min: 95,
        max: 100
    },

    temperature: {
        min: 36,
        max: 38
    },

    battery: {
        min: 20
    },

    latency: {
        max: 150
    }
};

/*
|--------------------------------------------------------------------------
| HELPER
|--------------------------------------------------------------------------
*/

function getActiveDevice() {
    return devices.find(
        device =>
            device.id ===
            dashboardState.activeDeviceId
    );
}

/*
|--------------------------------------------------------------------------
| INITIAL RENDER
|--------------------------------------------------------------------------
*/

const device = getActiveDevice();

document.getElementById(
    "heartRate"
).textContent =
    `${device.metrics.heartRate} BPM`;

document.getElementById(
    "oxygen"
).textContent =
    `${device.metrics.oxygen}%`;

document.getElementById(
    "temperature"
).textContent =
    `${device.metrics.temperature}°C`;

document.getElementById(
    "battery"
).textContent =
    `${device.metrics.battery}%`;

document.getElementById(
    "latency"
).textContent =
    `${device.metrics.latency} ms`;

document.getElementById(
    "deviceStatus"
).textContent =
    device.status;
