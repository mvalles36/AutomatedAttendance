[![Build Status](https://travis-ci.org/Automated-Attendance/AutomatedAttendance.svg?branch=master)](https://travis-ci.org/Automated-Attendance/AutomatedAttendance)
[![Coverage Status](https://coveralls.io/repos/github/Automated-Attendance/AutomatedAttendance/badge.svg?branch=master)](https://coveralls.io/github/Automated-Attendance/AutomatedAttendance?branch=master)
[![dependencies Status](https://david-dm.org/Automated-Attendance/AutomatedAttendance/status.svg)](https://david-dm.org/Automated-Attendance/AutomatedAttendance)




# Automated Attendance

> A facial recognition based automated attendance system for Hack Reactor students and staff.
> <a href="https://automatedattendance.herokuapp.com/">automatedattendance.herokuapp.com</a>"


## Team

  - Jason Chambers
  - Han Zhao
  - Duy Nguyen
  - Andrew Alonis

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Roadmap](#roadmap)
1. [Contributing](#contributing)

## Usage

> Students sign in with GitHub to create an account.
> Administrators control enrollment, attendance scheduling and editing.
> Attendance is recorded when students are recognized walking through the front door.
> Students receive confirmation emails and late notices.

## Requirements

- Node 6.4.x
- etc
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g bower
npm install
bower install
```

### Local development

```sh
npm run build
npm run s
```

### Testing

```sh
npm test
```
> Then view code coverage by opening ~/coverage/report/index.html
ßß
### Technology

- React, NodeJS, ExpressJS, MySQL
- Kairos API (facial recoginition)
- Cloudinary API (photo storage)
- Mailgun API (emails)
- OAuth API (accounts)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
