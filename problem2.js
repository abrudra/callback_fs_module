// Problem 2:

const fs = require("fs");

const path = "../Test/lipsum.txt";

//     Using callbacks and the fs module's asynchronous functions, do the following:
//         1. Read the given file lipsum.txt
//         2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
//         3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to
//            a new file. Store the name of the new file in filenames.txt
//         4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
//         5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.

// importe FS module...

//    1. Read the given file lipsum.txt...!

let problem2 = () => {
  fs.readFile(path, function (error, data) {
    if (error) {
      console.error("While Accessing File Error occured: ", error);
      return;
    }
    console.log("Content in File: ", data.toString());

    // 2. Convert the content to uppercase & write to a new file. Store the name of...!the name of the new
    //    file in filenames.txt

    let upperCase = data.toString().toUpperCase();

    fs.writeFile("filenames.txt", upperCase, function (error) {
      if (error) {
        console.error("While writing file Error occoured : ", error);
        return;
      }
      console.log("filenames .txt File created successfully..");

      //3. Read the new file and convert it to lower case. Then split the contents into sentences.
      //Then write it to a new file. Store the name of the new file in filenames.txt

      fs.readFile("filenames.txt", "utf8", function (error, data) {
        if (error) {
          console.error("While reading filenames.txt error occured", error);
        }
        console.log("File Contains:", data);
        let lowerCase = data.toLowerCase().split(". ");

        let newLine = lowerCase.reduce((acc, curr) => {
          acc = acc + "\n" + curr;
          return acc;
        }, "");
        console.log(newLine);
        fs.writeFile("filenames.txt", newLine, function (error) {
          if (error) {
            console.error("while writing file incounter error:", error);
          }
          console.log("filenames.txt File created successfully..");
          //Read the new files, sort the content, write it out to a new file.
          //Store the name of the new file in filenames.txt

          fs.readFile("filenames.txt", "utf8", function (error, data) {
            if (error) {
              console.log("Error while reading filenames.txt....", error);
            }
            console.log("File Content: ", data);

            let sortedData = data.split(" ").sort().join(" ");
            console.log("Sorted Data: ", sortedData);
            fs.writeFile("filenames.txt", sortedData, function (error) {
              if (error) {
                console.log("While writing file error Incountered: ", error);
              }
              console.log("File writed successfully...!");
              // 5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.
              fs.readFile("filenames.txt", "utf8", function (error, data) {
                if (error) {
                  console.log(
                    "While reading files from filenames.txt error incounter:",
                    error
                  );
                }
                console.log("File Content: ", data);

                fs.unlink("filenames.txt", function (error) {
                  if (error) {
                    console.log("Error While Deleting Filenames.txt");
                  }
                  console.log("File deleted successfully..");
                });
              });
            });
          });
        });
      });
    });
  });
};

module.exports = { problem2 };
