const { exec } = require('child_process');

// Set the delay time (in milliseconds)
const delayTime = 2 * 60 * 60 * 1000; // 2 hours

// Function to shut down the computer
function shutdownComputer() {
  exec('shutdown /s /f /t 0', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}

// Schedule the shutdown after the delay
setTimeout(shutdownComputer, delayTime);

console.log(`The computer will shut down in 2 hours.`);
