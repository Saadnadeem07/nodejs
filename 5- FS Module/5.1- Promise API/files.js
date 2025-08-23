import * as fs from "fs/promises";

try {
  //will create new file named README.md with content learning nodejs
  //NOTE: if file already exists it will replace its content with learning nodejs
  //"utf-8" is compulsory otherwise you will be getting something else means not properly formatted data

  await fs.writeFile("README.md", "Hello World!");
  let fileData = await fs.readFile("README.md", "utf-8");
  console.log("Reading FileData first time = ", fileData);

  await fs.writeFile("README.md", "Again writing in the File");
  fileData = await fs.readFile("README.md", "utf-8");
  console.log("Reading FileData after re-writing  = ", fileData);

  //WHAT IF I WANT TO ADD SOME DATA IN THAT FILE NOT OVERWRITE IT???
  fileData = await fs.appendFile(
    "README.md",
    "This sentence will be appended at EOF(end of file)"
  );
  fileData = await fs.readFile("README.md", "utf-8");
  console.log("FileData after appending  = ", fileData);

  fs.copyFile("README.md", "copiedFile.txt");
  //this will create a new file named copiedFile.txt with all content in README.md
  fileData = await fs.readFile("copiedFile.txt", "utf-8");
  console.log("content of copiedFile.txt = ", fileData);

  //GET STATS of this copiedFile.txt
  let txtStats = await fs.stat("copiedFile.txt");
  console.log("STATS of this copiedFile.txt = ", txtStats);
  console.log("copiedFile.txt is a File = ", txtStats.isDirectory());
  console.log("copiedFile.txt is a Directory = ", txtStats.isFile());
} catch (error) {
  console.error(error);
}
