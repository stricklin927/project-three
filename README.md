[LIVE DEMO](https://landingpageuniversity.herokuapp.com/Home)

# Infotech University
![Homepage](/client/src/images/homeDemo1.png)
![Login](/client/src/images/loginDemo.png)

## Description
  A University webpage designed for three users that upon registering and logging in gain access to different features. The users are prospective students, faculty staff and alumni.

[Click here](https://landingpageuniversity.herokuapp.com/Home) to see a live demo of this project.
  
## Table of Contents
  1. [Technologies](#technologies)
  2. [Usage](#usage)
  3. [Contribution](#contribution)
  4. [License](#license)
  5. [Questions](#questions)

  ## Technologies
  ### Front-end
  * React
  * React-Bootstrap
  * Bootstrap

  ### Back-end
  * Node.js
  * Express
  * ESLint

  ### Database
  * MongoDB
  * Mongoose
  
  ### Authentication
  * Passport
  * Passportjwt
  * Validator
  * Is-empty
  * Bcryptjs

  ### Deployment
  * Heroku

  ## Usage
  The functionality is varied based on the type and role of user: Faculty, Student, Alumni, Admin.

  * Faculty: User is able to view different employee categories and each employee profile which comprises of the instructor's profile, email and phone number. This is also accessible via a search function. Administrator can add and delete employees via an add & delete function which is hidden from non-administrators using role-based authentication.

    ![Faculty 1](/client/src/images/facultyDemo1.png)
    ![Faculty 2](/client/src/images/facultyDemo2.png)


  * Students: User is able to view the different schools/colleges, each major offered in those schools and the corresponding instructor/professor profile that consists of the instructor's email. The user is also able to access the admissions office contact.

    ![Students 1](/client/src/images/studentsDemo1.png)
    ![Students 2](/client/src/images/studentsDemo2.png)


  * Alumni: User is able to make a donation. The donation amount is grouped in different tiers which have different badges. There is an "Alumni Wall of Givers" which is the donation list which is compiled in a descending order based on the tier - with users with highest donations placed above. A thank you message is rendered to each user who donates.
  
    ![Alumni 1](/client/src/images/alumniDemo.png)

  * Admin: User is able to access administrator pages only available to users assigned an "admin" role in the database. From there, admins can create, update, or delete entries from faculty, donors, and college.majors databases. Login in as "admin@admin.com" with "123456789" as your password to take a look. 

  ## Contribution
  - [Alexandra Stricklin](https://github.com/stricklin927)
  - [Brian Short](https://github.com/brianrshort)
  - [Imari Pickens](https://github.com/Picke1id)
  - [James Masaviru](https://github.com/jmasaviru)
  - [Tynesia Davis](https://github.com/Sivad13)
  
   ## License
  *  ![License badge](https://img.shields.io/badge/License-MIT-green)

  ## Questions
  * If you have questions, email me at: 

## Links

* Video link for demonstration :

* Heroku link : https://landingpageuniversity.herokuapp.com/Home

* Info Tech University GitHub repository URL: (https://github.com/brianrshort/project-three)
