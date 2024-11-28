const fs = require('fs');
const crypto = require('crypto');

const generateRandomFile = (filePath, sizeInMB) => {
    const sizeInBytes = sizeInMB * 1024 * 1024;
    const writeStream = fs.createWriteStream(filePath);

    console.log(`Generating ${sizeInMB}MB file...`);

    let writtenBytes = 0;

    while(writtenBytes < sizeInBytes){
        // Generate random data (up to 16kb at a time)
        const chunkSize = Math.min(16 * 1024, sizeInBytes - writtenBytes);
        const randomData = crypto.randomBytes(chunkSize);
        console.log(randomData);
        writeStream.write(randomData);
        writtenBytes += chunkSize;
    }

    writeStream.end(() => {
        console.log(`File generated successfully: ${filePath}`);
    });
}


generateRandomFile('./files/randomData', 10);