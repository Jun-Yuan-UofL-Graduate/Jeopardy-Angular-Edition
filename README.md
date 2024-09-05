# IMPORTANT NOTICE ABOUT THIS PROJECT
This project is NOT intended for profit or commercial use. This project was designed for personal use with family. This repository exists to demonstrate my current skills and abilities with Angular, HTML, CSS, and Typescript to employers. Any copyright infringement regarding Jeopardy or any IPs used in these questions is not intended. Each IP is the property of each respective company and owner.

# Jeopardy-Angular-Edition Patch Notes
## Version 1.5.0
* Added Timer Service, reducing redundant code across different components

## Version 1.4.0
* Added Final Jeopardy functionality, allowing eligible players to wager points in a final question
* Added visible timers to Question and Daily Double components, giving players a clear indication of how long they have to answer.
* Added Results component, which shows the winning player's name and their final score

## Version 1.3.0
* Added Daily Double functionality, allowing the current player to wager a chosen amount of points.

## Version 1.2.1
* Fixed a bug that caused the wrongGuess boolean to not be updated when a player answered incorrectly

## Version 1.2.0
* Updated repository to include Double Jeopardy functionality

## Version 1.1.0
* Added lastCorrect and wrongGuess booleans to interface Player
* Added security functionality, which ensures that the same player cannot attempt to guess the same question twice

## Version 1.0.0
* This is the initial deployment of Jeopardy-Angular-Edition, which allows up to three players to play the Jeopardy board game.

# Jeopardy-Angular-Edition

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
