import yargs from 'yargs';
import { exec } from 'child_process';
import { exit } from 'process';

const args = yargs(process.argv).argv;

function getInput() {
    const options = yargs(process.argv)
        .option('year', {
            number: true,
            description: 'Which year you want to run.',
            default: new Date().getFullYear(),
        })
        .option('day', {
            number: true,
            description: 'Which day you want to run.',
            default: new Date().getDate(),
        })
        .option('inputType', {
            choices: ['test', 'real'] as const,
            default: 'test',
        }).parseSync();

        console.log('*** options:', options);

    return options;
}

function runDay() {
    const { year, day, inputType } = getInput();
    
    console.log(`Running day-${day} with '${inputType}' input...`);

    exec(`INPUT_TYPE=${inputType} npx tsx src/years/${year}/day-${day}/index.ts`, (err, stdout, stderr) => {
        if (err) {
            console.error(stderr);

            exit(1);
        }

        console.log(stdout);
    });
}

runDay();