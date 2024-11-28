const fs = require('fs');
/*
    Function to split example.txt into 3 chunks and store them into `chunks` folder
    This function will also distribute each chunks to fileA, fileB and fileC folder.
*/
const splitFilePieces = (filePath, numChunks) => {
    const fileBuffer = fs.readFileSync(filePath);
    const chunkSize = Math.ceil(fileBuffer.length / numChunks);

    const chunks = [];
    for(let i = 0; i < numChunks; i++){
        const start = i * chunkSize;
        const end = Math.min(start + chunkSize, fileBuffer.length);
        chunks.push(fileBuffer.slice(start, end));
        fs.writeFileSync(`./files/chunks/chunk${i+1}`, fileBuffer.slice(start, end));
        fs.writeFileSync(`./files/file${String.fromCharCode(65 + i)}/chunk${i+1}`, fileBuffer.slice(start, end));
    }

    // return chunks;
    // chunks.forEach((chunk, index) => {
    //     console.log(chunk.toString());
    // })
}

splitFilePieces('./files/example.txt',3);