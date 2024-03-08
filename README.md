## Project Structure Overview

1. **`core.module.ts`:**
   - Description: Houses core functionalities.
2. **Authentication and Logger:**

   - Note: Authentication and logger functionalities have been added. Feel free to remove them if not needed.
   - Files: `authentication.service.ts`, `logging.service.ts`
   - Update: Make adjustments in `core.module.ts` accordingly by removing references.

3. **Feature Modules:**

   - Each feature will become a module inside the `modules` folder:
     - `home`
     - `portfolio`
     - `search`
     - `watchlist`

4. **API Services:**

   - `api.service.ts`: General API calls can go here.
   - `finnhub-api.service.ts`: Specific API calls for the Finnhub service.

5. **Services Folder:**

   - Location: `services`
   - Contains:
     - Portfolio services.
     - Watchlist services.

6. **Utils:**

   - Location: `utils`
   - File: `validate-mongodb-id.ts`
   - Description: Utilizes this file to validate MongoDB IDs.

7. **Assets:**

   - Location: `assets`
   - Description: Houses images, fonts, etc.

8. **Styles:**

   - Location: `styles`
   - Description: Global styles.

9. **Configuration:**
   - Location: `config`
   - Files:
     - `environment.prod.ts`
     - `environment.ts`

# StockApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.3.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
