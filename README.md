# 🚘 RentalCar Frontend

This project is the client side (frontend) of the RentalCar web application developed for car rental. It interacts with the backend API, the documentation for which is available here: [https://car-rental-api.goit.global/api-docs/](https://car-rental-api.goit.global/api-docs/).

The main goal of the project is to provide a convenient and intuitive interface for viewing available cars, filtering them, adding them to favorites, and booking them.

## ✨ Key Features

** **Browse the car catalog**: A user-friendly interface for viewing all available cars.
** **Car filtering**: Ability to filter cars by brand, price and mileage range. Filtering is performed on the backend to optimize performance.
** **Add/Remove from Favorites**: Functionality for adding and removing cars to/from the list of favorites. Favorites are saved locally and remain available after the page reloads.
** **Car detail page**: A separate page for each car with a full description, additional photos and a booking form.
* **Load More Pagination**: "Load More" button for uploading additional cars based on the applied filters (pagination is implemented on the backend).
* Mileage formatting**: Vehicle mileage is displayed with thousands separators for better readability (e.g. "5,000 km").

## 🛠️ Technologies Used

** **React**: Modern JavaScript library for building user interfaces.
* Vite: A fast builder tool for developing modern web projects.
* Redux Toolkit: An effective tool for managing application state.
* React Router: A library for routing in React applications.
* Axios: A process-oriented HTTP client for making API requests.
* CSS Modules: A method for isolating CSS styles at the component level to prevent conflicts.
** **Formik** and **Yup**: Libraries to simplify form creation and validation.
** **react-datepicker**: Component for date picker.

## 🚀 Routes

* `/` &mdash; **Home Page**: Contains a banner and a call to action.
* `/catalog` &mdash; **Catalog Page**: Displays a list of cars, a filter panel.
* `/catalog/:id` &mdash; **Car detail page**: Displays detailed information about a specific car and a booking form.

## 👩🏻‍💼 Author

[Sofiia Horiacha](https://github.com/sonyaaa-h)