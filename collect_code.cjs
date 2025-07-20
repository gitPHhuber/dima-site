const fs = require('fs');
const path = require('path');

const projectRoot = '.'; 

const outputFile = 'project_contents.txt'; 

const ignoreDirs = new Set(['node_modules', '.git', 'dist', 'build', '.vscode']);

const ignoreFiles = new Set(['package-lock.json', '.DS_Store', outputFile]);

const ignoreExtensions = new Set(['.log', '.svg', '.png', '.jpg', '.jpeg', '.gif', '.ico', '.webp', '.lock']);


async function aggregateProjectFiles() {
    console.log(`Начинаю сборку файлов проекта...`);
    const outputStream = fs.createWriteStream(outputFile, { encoding: 'utf-8' });

    async function walk(directory) {
        let items;
        try {
            items = await fs.promises.readdir(directory, { withFileTypes: true });
        } catch (err) {
            console.error(`Не удалось прочитать директорию: ${directory}`, err);
            return;
        }

        for (const item of items) {
            const fullPath = path.join(directory, item.name);

            if (item.isDirectory()) {
                if (!ignoreDirs.has(item.name)) {
                    await walk(fullPath);
                }
            } else {
                const ext = path.extname(item.name).toLowerCase();
                if (ignoreFiles.has(item.name) || ignoreExtensions.has(ext)) {
                    continue;
                }

                const relativePath = path.relative(projectRoot, fullPath);
                
                try {
                    const content = await fs.promises.readFile(fullPath, 'utf-8');
                    outputStream.write(`--- START OF FILE: ${relativePath} ---\n\n`);
                    outputStream.write(content);
                    outputStream.write(`\n\n--- END OF FILE: ${relativePath} ---\n\n`);
                    outputStream.write("=".repeat(80) + "\n\n");
                } catch (err) {
                    console.error(`Не удалось прочитать файл ${fullPath}:`, err);
                }
            }
        }
    }

    await walk(projectRoot);
    outputStream.end();
    console.log(`\x1b[32m%s\x1b[0m`, `\nГотово! Весь код проекта сохранен в файле: ${outputFile}`);
}

aggregateProjectFiles();
