# Welcome to Hotels listing 👋

> This application uses a static data set to fetch a list of hotel properties and their respective details.
  - shows a list of properties on offer with their details like address, price, offers, etc.

## Install

```sh
npm install
```

## Usage

```sh
npm run start
```
When you start the application it will be available on:
```text
http://localhost:1234/
```

>By default you will be presented with the homepage showing the list of hotels. It also lists all hotels showing the rating out of 5 for each property.

## Inclusions

- Hotels list with a default sort order of prices low-to-high.

## Tradeoffs

- Haven't used any logging library for logging errors.
- Haven't added media queries for fully responsive due to time constraint.
- Instead of showing ratings stars or circles, I've instead just listed the rating out of 5. But can add that in provided more time.

## Design decisions

- Used flexbox CSS across the application for consistent cross-browser behaviour for UI and for easier responsive design.
- Used a theme file for controlling styling details like fonts, spacing, screen sizes, etc.
- Used redux as the state management tool for easier access to data across components.
- Used separated connectors for components connected to redux for better reusability and making it easier to test.
- Kept components quite dumb, by doing all the data heavy-lifting in the actions layer instead and components just receive and display data. This makes components more flexible and easier to test, and hence saving on additional processing time in renders.
- Used PropTypes for component props validations.
- Tried to match the styling to the provided mock.

## Run tests

```sh
npm run test
```
NOTE: For this coding test, I have missed a few unit tests. But I can certainly add them provided some additional time.

## Built With

  - Application Bundler: ParcelJS (https://parceljs.org/)
  - Front End Framework: ReactJS
  - Roboto font used across the application
  - Additional Frameworks Used:
    - State management: Redux
    - For styling components: styled-components
  - Testing libraries used:
    - MochaJS as the test-runner
    - Enzyme for react component level testing
    - ChaiJS and SinonJS for test assertions

## Author

👤 **Eshaan Mehta**
