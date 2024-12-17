import fs from 'fs';
import path from 'path';

export function readInput(dir: string) {
    const isRealInput = process.env.INPUT_TYPE === 'real';
    return fs.readFileSync(path.resolve(dir, isRealInput ? 'input.txt' : 'input-test.txt'), 'utf-8');
}