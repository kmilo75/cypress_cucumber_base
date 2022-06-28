const report = require("multiple-cucumber-html-reporter");
const environment = "UAT";
report.generate({
    jsonDir: "cypress/cucumber-json",  // ** Path of .json file **//
    reportPath: "./reports/cucumber-htmlreport.html",
    metadata: {
        browser: {
            name: "Chrome",
            version: "100",
        },
        device: "Web",
        platform: {
            name: "windows",
            version: "10",
        },
    },

    customData: {
        title: 'Title environment ' + environment,
        data: [
            { label: 'Project', value: 'Example Project' },
            { label: 'Release', value: '1.0' },
            { label: 'Environment', value: environment },
            { label: 'Cycle', value: 'Regression' },
        ]
    },
    pageTitle: "Example Project",
    reportName: "Example report name",
    displayReportTime: true,
    openReportInBrowser:true

});