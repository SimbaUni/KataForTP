# KataForTP

Code Kata for Job Interview, Pharmacy stock list including new medication entry, updating stock and removing entries.

Using MongoDB, Express, Node.js and Embedded JavaScript

## Installation

```bash
# install dependencies
$ npm install

# replace example mongoDB connection in config.js
const config = {
    db: {
        username: "Your username goes here",
        connection: "Your mongoDB connection link goes here"
    }
}

# run using localhost:3000
$ node app.js
```

## Usage

### The Add New Medication Display Form

![Alt text](https://github.com/SimbaUni/KataForTP/blob/Screenshots/AddMedicationDisplay.PNG?raw=true)

### The Edit Stock of Medication Display Form

![Alt text](https://github.com/SimbaUni/KataForTP/blob/Screenshots/EditItemDisplay.PNG?raw=true)

### The Table Displaying Medications in Stock

![Alt text](https://github.com/SimbaUni/KataForTP/blob/Screenshots/InStockDisplay.PNG?raw=true)

### An example of the terminal output used with console.table(newMedication)

![Alt text](https://github.com/SimbaUni/KataForTP/blob/ConsoleTable.PNG/ConsoleTable.PNG?raw=true)

## Issues

Connect-flash is currently not working and due to time constraints this will not be updated.

## Roadmap

Potential updates to front-end display.

## License
[MIT](https://choosealicense.com/licenses/mit/)
