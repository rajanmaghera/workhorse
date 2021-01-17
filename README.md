# Workhorse

![Alt text](/screenshots/home.jpg)

A workplace shift scheduler. Created by Youngwoo Seo, Tane Torres, and Rajan Maghera for HackED 2021. Based on the Angular and Nebular framework.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.7.

## Inspiration

This program schedules people into a work timetable. Employees can specify certain timeblocks they to or don't really want. As well, they can view their pay information, upcoming shift information, and check into shifts.

## What it does

This program schedules people into a work timetable. Employees can specify certain timeblocks they to or don't really want.

## How we built it

We built it on Angular and Nebular in Node.JS.

## Challenges we ran into

For everyone, this was the first time coding in Angular. For one of us, the first time in JS. Needless to say, this was a learning experience we are proud of.

Our largest hurdle was connecting a database to store information. Our last used framework Django had all of this functionality built in. However, using Angular, we had to supply and connect our own. We ended up choosing MySQL as the service even though we barely got it working. In hindsight, another database such as mongo.db might have been easier to set up for us.

## Accomplishments that we're proud of

We used Nebular to create a (in our humble opinion) stunning looking webapp. 

## What's next for Workhorse

We'd like to continue working on this to hopefully implement it in production use in the real world. Some required tasks to reach that goal are:

* Setting up authentication and security
* Connecting form methods to DB
* Connecting front-end elements to DB

Some other tasks include:

* Adding in (or writing) a proper calendar for the scheduler
* Advancing the payment information fields
* Import/export from .csv/other files
* Profile pictures
* and more!

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
