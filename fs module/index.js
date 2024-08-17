const fs = require("fs");
const prompt = require("prompt-sync")();
console.log(
  "1) create File \n 2) read file \n 3) rename file \n 4) Update file \n 5) delete file"
);
let choice = prompt();

switch (choice) {
  case "1":
    console.log("enter file name :- ");
    let fileName = prompt();
    console.log("enter code");
    let newCode = prompt();

    fs.writeFile(fileName, newCode, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(
          "File created successfully! Now opening in default browser..."
        );
      }
    });
    break;

  case "2":
    console.log("enter file name :- ");
    let read_fileName = prompt();
    fs.readFile(read_fileName, "utf8", (err, data) => {
      if (err) {
        console.log(err)
      } else {
        console.log(data)
      }
    });
    break;

  case "3":
    console.log("enter file name :- ");
    let update_fileName = prompt();
    console.log("enter code");
    let new_filename = prompt();

    fs.rename(update_fileName, new_filename, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Renamed successfully!");
      }
    });
    break;

  case "4":
    console.log("enter file name :- ");
    let Contant_fileName = prompt();
    console.log("enter code");
    let contant = prompt();
    fs.appendFile(Contant_fileName, contant, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Content appended successfully!");
      }
    });
    break;

  case "5":
    console.log("enter file name :- ");
    let delete_fileName = prompt();

    fs.unlink(delete_fileName, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File deleted successfully!");
      }
    });
}
