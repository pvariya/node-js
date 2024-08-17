const {
  sum,
  subtraction,
  Multiplication,
  division,
  modulo,
} = require("./math.");

const prompt = require("prompt-sync")();

do {
  console.log(
    " 1 for addition \n 2 for subtraction \n 3 for multiplication \n 4 for division \n 5 for modulo \n 0 to exit\n"
  );
  let choice = prompt();

  if (choice === "0") {
    console.log("exiting...");
    break;
  }

  console.log("enter A :- ");
  let a = prompt();
  console.log("enter B :- ");
  let b = prompt();

  switch (choice) {
    case "1":
      console.log("======sum======");
      console.log("result is : ", sum(a, b));
      console.log("===============\n\n");
      break;
    case "2":
      console.log("======subtraction======");
      console.log("result is : ", subtraction(a, b));
      console.log("=======================\n\n");
      break;
    case "3":
      console.log("======multiplication======");
      console.log("result is : ", Multiplication(a, b));
      console.log("==========================\n\n");
      break;
    case "4":
      console.log("======division======");
      console.log("result is : ", division(a, b));
      console.log("====================\n\n");
      break;
    case "5":
      console.log("======modulo======");
      console.log("result is : ", modulo(a, b));
      console.log("==================\n\n");
      break;
    // case "0":
    //   console.log("exiting...");
    //   break;
    default:
      console.log("invalid choice");
  }
} while (true);
