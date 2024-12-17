import path from 'path';
import fs from 'fs';

function getTargetDir(year: string) {
    return path.resolve(__dirname, `../years/${year}`);
}

function doesYearProjectExist(year: string) {
    return fs.existsSync(getTargetDir(year));
}

function generateYearProject() {
    const currentYear = new Date().getFullYear().toString();

    if (doesYearProjectExist(currentYear)) {
        console.log(`${currentYear} project already exists. Nothing to do.`);

        return;
    }

    const targetDir = getTargetDir(currentYear);

    fs.mkdirSync(targetDir)

    for (let i = 1; i <= 25; i++) {
        const day = `day-${i}`;
        fs.mkdirSync(path.resolve(targetDir, day));
        fs.writeFileSync(path.resolve(targetDir, day, 'index.ts'), '');
        fs.writeFileSync(path.resolve(targetDir, day, 'input.txt'), '');
        fs.writeFileSync(path.resolve(targetDir, day, 'input-test.txt'), '');
    }
}

generateYearProject();
