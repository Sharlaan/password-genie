# Password Genie

![npm](https://img.shields.io/npm/v/npm.svg)
![GitHub package version](https://img.shields.io/github/package-json/v/badges/shields.svg)

![David](https://img.shields.io/david/expressjs/express.svg)
![David](https://img.shields.io/david/dev/expressjs/express.svg)

![SonarQube Coverage](https://img.shields.io/sonar/http/sonar.petalslink.com/org.ow2.petals%3Apetals-se-ase/coverage.svg)
![SonarQube Tech Debt](https://img.shields.io/sonar/http/sonar.petalslink.com/org.ow2.petals%3Apetals-se-ase/tech_debt.svg)

![Github All Releases](https://img.shields.io/github/downloads/atom/atom/total.svg)
![npm](https://img.shields.io/npm/dm/localeval.svg)
![GitHub stars](https://img.shields.io/github/stars/badges/shields.svg?style=social&label=Stars)
![GitHub followers](https://img.shields.io/github/followers/espadrine.svg?style=social&label=Follow)

Original project: https://nourabusoud.github.io/password-genie/

Alternative boilerplate (separated templates in html files):  
https://dev.to/georgehanson/building-vuejs-applications-with-typescript-1j2n

## Table of Contents

- [Password Genie](#password-genie)
  - [Table of Contents](#table-of-contents)
  - [Preview (Live demo)](#preview-live-demo)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Todo list](#todo-list)

## Preview ([Live demo](https://sharlaan.github.io/password-genie))

![preview](https://i.imgur.com/tDfimCq.png)

## Features

- Generate a random password based on simple settings:  
  total length, number of digits, and number of symbols  
  (upper/lower-cased letters are used to fill remaining slots)
- Customise settings, and additional settings are available
- Copy the generated password to anywhere from your clipboard
- Random background from unsplash.org
- Based on Javascript ES7, VueJS, Typescript, Material (Vuetify)
- Score calculation inspired from Jeff Todnem's [password-meter](http://www.passwordmeter.com/)

## Installation

Install `yarn` globally with `npm i -g yarn`  
`git clone` the project,  
Navigate into the project directory  
Execute `yarn` (this will install all dependencies).

## Usage

`yarn serve`: Serve the development build @ http://localhost:8080/  
`yarn unit`: Execute unit tests (\*.test.ts)  
`yarn e2e`: Execute functional test suites (\*.spec.ts)  
`yarn e2e:open`:  
`yarn build`: Used for publishing the production build  
`yarn lint`: Used in pre-commit hook

## Todo list

- [ ] Update badges

- [ ] Test the strength of your own password, inspired from [Vuetify's progress-bar example](https://vuetifyjs.com/en/components/text-fields#example-progress-bar)

- [ ] Electron-based desktop tool
