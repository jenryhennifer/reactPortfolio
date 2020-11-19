const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/dbPortfolio',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

const projectSeed = [
    {
        id : 1,
        name : "Employee Directory",
        description : "An employee directory that can be sorted by name, position, and status in the company. User can also search by name. Planet Express (Futurama) was used as the sample employee list for this project.",
        repo : "https://github.com/jenryhennifer/employeeDirectory",
        demo: "https://jenryhennifer.github.io/employeeDirectory/",
        image: "https://raw.githubusercontent.com/jenryhennifer/employeeDirectory/main/sample.png"
    },
    {
        id : 2,
        name : "Fitness Tracker",
        description : "A fitness tracker made to save multiple exercises in a workout and display statistical data",
        repo : "https://github.com/jenryhennifer/fitnessTracker",
        demo: "https://calm-ridge-04693.herokuapp.com/",
        image: ""
    },
    {
        id : 3,
        name : "Password Generator",
        description : "A password generator that prompts a user for elements of a desired password.",
        repo : "https://github.com/jenryhennifer/passwordGenerator",
        demo: "https://jenryhennifer.github.io/passwordGenerator/",
        image: ""
    },
    {
        id : 4,
        name : "Employee Tracker",
        description : "An app that allows a workplace to track employee information based on department, role, and manager",
        repo : "https://github.com/jenryhennifer/employeeTracker",
        demo: "https://www.youtube.com/watch?v=7gOH9BgTj5E&feature=youtu.be",
        image: "https://raw.githubusercontent.com/jenryhennifer/employeeTracker/main/images/SAMPLE.png"
    },
    {
        id : 5,
        name : "Original Portfolio",
        description : "My first attempt at my portfolio :)",
        repo : "https://github.com/jenryhennifer/responsive_portfolio",
        demo: "https://jenryhennifer.github.io/responsive_portfolio/",
        image: "https://raw.githubusercontent.com/jenryhennifer/responsive_portfolio/master/images/updatedAboutMe.jpeg"
    },
    {
        id : 6,
        name : "Memory Game",
        description : "A memory game where you have to click theimageonly once. If you click one more than once you lose. King of the Hill was the inspiration for this game",
        repo : "https://github.com/jenryhennifer/clickyGame",
        demo: "https://jenryhennifer.github.io/clickyGame/",
        image: "https://raw.githubusercontent.com/jenryhennifer/clickyGame/main/public/media/sample.png"
    },
    {
        id : 7,
        name : "Work Schedule",
        description : "",
        repo : "https://github.com/jenryhennifer/workDaySchedule",
        demo: "https://jenryhennifer.github.io/workDaySchedule/",
        image: "https://raw.githubusercontent.com/jenryhennifer/workDaySchedule/masterimagepng"
    }
]
