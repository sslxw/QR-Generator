import inquirer from 'inquirer';
import * as qrs from 'qr-image';
import * as fs from 'node:fs';

inquirer
  .prompt([
    {
      name: 'qr',
      message: 'What link do you want to be connected with the QR?'
    },
  ])
  .then(answers => {
    generateQR(answers.qr);
  });


  function generateQR (qr){
    var qr_png = qrs.image(qr, { type: 'png' });
    qr_png.pipe(fs.createWriteStream('qr_image.png'));
 
    fs.writeFile("message.txt", qr, (err) => {
        if (err) throw err;
        console.log("the file has been saved");
        });
  }