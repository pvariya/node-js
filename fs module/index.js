const fs = require("fs");

//   fs.writeFile("index.html","purv", (err) => {
//     if (err) {
//       console.log(err);

//     } else {
//       console.log(
//         "File created successfully! Now opening in default browser..."
//       )
//     }
//   });



// fs.readFile("index.html", "utf8", (err, data) => {
//   if (err) {
//     console.log(err); 
//   } else {
//     console.log(data);
//   }
// });



// fs.rename("index.html", "purv.html", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Renamed successfully!");
//   }
// });



// fs.appendFile("purv.html","\n This is the new content", (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Content appended successfully!");
//     }
// })


// fs.unlink("purv.html", (err) => {
//         if (err) {
//             console.log(err);
//         }
//         else{
//             console.log("File deleted successfully!");
//         }
// })