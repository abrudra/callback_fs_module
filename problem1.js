// Problem 1:

// Using callbacks and the fs module's asynchronous functions, do the following:
//     1. Create a directory of random JSON files
//     2. Delete those files simultaneously

const fs = require("fs");
//const path = require('./Test')

// Create a directory of random JSON files

let createDir = () => {
  fs.mkdir("TestDir", function (error) {
    if (error) {
      console.error("error occurred while creating directory", error);
      return;
    }
    console.log("Directory created successfully.....");
  });

  let obj = {
    name: "Atul",
    house: "Alpha",
  };
  // Json File Create in Directory..!

  for (let i = 0; i < 10; i++) {
    let fileName = "../Test/TestDir/File" + i + ".json";

    fs.writeFile(fileName, JSON.stringify(obj, null, 4), function (error) {
      if (error) {
        console.error("error occurred while creating File..!", error);
        return;
      }
      console.log(`File created successfully${fileName}...!`);

      // JSON files delete in Directory.....!

      fs.unlink(fileName, function (error) {
        if (error) {
          console.error("error occurred while deleting File..!", error);
          return;
        }
        console.log(`File deleted successfully${fileName}...!`);
      });
    });
  }
};
// console.log('ddd')

module.exports = { createDir };
