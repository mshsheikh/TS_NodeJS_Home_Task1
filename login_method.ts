/* Q1: */

/* let email: string = "salman@gmail.com";
let password: string = "002255";

if (email === "salman@gmail.com" && password.length === 6) {
    console.log("Successfully Signed-in");
} else {
    console.log("Password must be 6 characters long!");
} */

let email: string = "salman@gmail.com";
let password: string = "S4YA62";

if (email === "salman@gmail.com" && password.length === 6
    && password[0] === password[0].toUpperCase()) {
    console.log("Successfully Signed-in");
} else {
    console.log("Password must be 6 characters long and start with capital letter!");
}