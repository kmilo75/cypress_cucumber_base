# CYPRESS & CUCUMBER

This project contains a template to start with the automation with cypress and cucumber

## Pre-requisits
Install **node Js v17.6.0**

## Instalation
In the terminal placed in to the folder type
```bash
npm install
```

## Executing test in headless mode
```bash
npm run cy:test
```

## Executing the GUI for cypress
```bash
npx cypress open
```

## Reporting
follow the steps:
* Modify the variable **"ambiente"** in file **_cucumber-htm-report.js_** according with the dessired environment
* In a terminal type
```bash
node cucumber-html-reports.js
```
* Open the report in **./reports/cucumber-htmlreport/index.html**


### report automated?
This generate a report with the data of the last run
```bash
npm run cy:report
```

##Authors
* **Juan Camilo Cañas G** - Initial work - _twitter_ *@brucetape*
