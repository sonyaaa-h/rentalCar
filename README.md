React + Vite: RentalCar🚘 Frontend
Overview
This project is the frontend part of the "RentalCar" web application designed for car rentals. It interacts with a backend API, documentation is available here: https://car-rental-api.goit.global/api-docs/.

The goal is to provide a user-friendly interface for browsing available cars, filtering them, adding to favorites, and booking.

Key Features
Browse the car catalog.

Filter cars by brand, price, and mileage range (filtering performed on the backend).

Add and remove cars from favorites, with favorites stored locally and persisted on page reload.

Detailed car page with description, photos, and booking form.

“Load More” button for loading additional cars with applied filters (backend pagination).

Mileage displayed with thousand separators for better readability (e.g., "5 000 km").

Technologies Used
React with Vite bundler

Redux Toolkit for state management

React Router for routing

Axios for HTTP requests

CSS Modules for styling

Formik and Yup for form validation

react-datepicker

Routes
/ — Home page with banner and call to action

/catalog — Catalog page with filters and car listings

/catalog/:id — Detailed car page with booking form

Author 👩🏻‍💼
Sofiia Horiacha

