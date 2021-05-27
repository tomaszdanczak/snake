// Set up canvas
const canvas = document.getElementById("canvas");
export const ctx = canvas.getContext("2d");

export const width = 400;
export const height = 400;

export const blockSize = 10;
export const widthInBlocks = width / blockSize;
export const heightInBlocks = height / blockSize;

export let score = { value: 0 };
