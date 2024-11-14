// import fs from "fs"; // ESM Imports
const fs = require("node:fs"); // CJS Imports
const readline = require("node:readline");
const path = require("node:path");
const childProcess = require("node:child_process");

// CRUD

// Read
// Async
// fs.readFile("sample.txt", (err, data) => {
//   if (err) {
//     console.log("ERROR READING FILE", err);
//     return;
//   }
//   console.log(data.toString());
// });

// Sync
// try {
//   const data = fs.readFileSync("sample.txt", { encoding: "utf-8" });
//   console.log(data);
// } catch (err) {
//   console.log("ERROR READING FILE", err);
// }

// Create
// const str = "44444";
// setTimeout(() => {
//   fs.writeFile("demo.txt", str, (err) => {
//     if (err) {
//       console.log("ERROR WRITING FILE", err);
//       return;
//     }
//     console.log("FILE WRITTEN / SAVED SUCCESSFULLY");
//   });
// }, 2000);

// const str2 = "222222";
// fs.writeFile("demo.txt", str2, (err) => {
//   if (err) {
//     console.log("ERROR WRITING FILE", err);
//     return;
//   }
//   console.log("FILE WRITTEN / SAVED SUCCESSFULLY");
// });

// Update
// const updateStr = "\nhello";
// fs.appendFile("demo.txt", updateStr, (err) => {
//   if (err) {
//     console.log("ERROR UPDATING FILE", err);
//     return;
//   }
//   console.log("FILE UPDATED SUCCESSFULLY");
// });

// Change the content of the file at the specific position
/**
 * 1. Read file
 * 2. Modify the content
 * 3. Write the file
 */

const modifyFileAtSpecificPosition = () => {
  try {
    const data = fs.readFileSync("demo.txt", { encoding: "utf-8" });
    console.log(data);
    const updatedData = data.replace("hi", "hello");
    console.log(updatedData);
    fs.writeFileSync("demo.txt", updatedData);
  } catch (err) {
    console.log(err);
  }
};

// modifyFileAtSpecificPosition();

const dataToUpdate = [
  {
    id: 1,
    name: "XYZ",
  },
];
// try {
//   fs.writeFileSync("demo.txt", JSON.stringify(dataToUpdate));
// } catch (err) {
//   console.log(err);
// }

// Delete
// fs.unlink("sample.txt", (err) => {
//   if (err) {
//     console.log("ERROR DELETING FILE", err);
//     return;
//   }
//   console.log("FILE DELETED SUCCESSFULLY");
// });

// Readline module

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter your name ", (answer) => {
//   console.log(`Hello, ${answer}`);
//   rl.close();
// });

const joinedPath = path.join("users", "profilepictures", "photo.jpg");
console.log("JOINED PATH => ", joinedPath);

const resolvedPath = path.resolve("../users/pictures/../");
console.log("RESOLVED PATH =>", resolvedPath);

const extName = path.extname("/picutes/users/123/resume.pdf");
console.log("EXTNAME => ", extName);

const parsedPath = path.parse("/picutres/users/123/resume.pdf");
console.log("PARSED PATH => ", parsedPath);

console.log("__dirname", __dirname);
console.log("__filename", __filename);

childProcess.exec("start https://www.google.co.in/");