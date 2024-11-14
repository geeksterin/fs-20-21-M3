const wifi = require("node-wifi");
const greetUser = require("divyansh_project_first"); // Import

greetUser("XYZ");

wifi.init({
  iface: null,
});

wifi.scan((err, networks) => {
  if (err) {
    console.log("ERROR READING AVAILABLE WIFIs", err);
    return;
  }
  console.log(networks);
});
