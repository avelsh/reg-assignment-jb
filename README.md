# RegAssignmentJb

Hello!

The task was: 

"Design and develop an accessible registration form with fields for email, password, and username, plus a "Show Password" toggle button, ensuring keyboard navigability and screen reader compatibility."

But I got carried away and made a mini application to show off my skills in web development. I chose the Angular framework because I regularly work with it and it is familiar to me. I didn’t think about the design for a long time and just took the JetBrains design.

I have implemented the following things:

Start Login page, where you can log in to the site, register or recover your password.
Password recovery and registration are made as pop-up components (for variety).
After successful login, you are logged into the system.
For this I used routing.
I didn't use real hosting because it would require a lot of time. Therefore, saving occurs in localStorage.

All confidential data is stored in encrypted form. I also implemented primitive protection against direct access to the admin area (without authentication).
You can also log out and select the option to remember the password.
For the initial input filed design, I took a simple template that can be found on the Internet and adjusted, added animation and functionality. Also implemented some validation of forms and fields, adding error messages.

I used almost all the features that are usually used in Angular, including the use of RxJS.

I'll be looking forward to your feedback!

Feel free to ask in case you have a problems with the app :)

-----------------------------------------------------

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.14.

## you may need to install NodeJS and Angular CLI first

first download NodeJS (see nodejs.org.) 

## check nodejs

node -v 

npm -v

## install Angular CLI

npm install -g @angular/cli@16


## Run application from the prodject folder

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
