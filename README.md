# 🚘 RentalCar Frontend

This project is the **client side** (frontend) of the RentalCar web application developed for car rental.  
It interacts with the backend API, the documentation for which is available here:  
👉 [car-rental-api.goit.global/api-docs](https://car-rental-api.goit.global/api-docs/)

The main goal of the project is to provide a **convenient and intuitive interface** for:
- viewing available cars,
- filtering them,
- adding them to favorites,
- and booking.

---

## ✨ Key Features

- **Browse the Car Catalog**  
  A user-friendly interface for viewing all available cars.

- **Car Filtering**  
  Ability to filter cars by brand, price, and mileage range.  
  *Filtering is performed on the backend to optimize performance.*

- **Add/Remove from Favorites**  
  Functionality to add/remove cars to/from favorites.  
  Favorites are stored locally and remain available after page reload.

- **Car Detail Page**  
  A dedicated page for each car with a full description, additional photos, and a booking form.

- **Load More Pagination**  
  A "Load More" button allows loading additional cars based on filters.  
  *Pagination is implemented on the backend.*

- **Mileage Formatting**  
  Mileage is displayed with thousands separators for better readability (e.g. `5,000 km`).

---

## 🛠️ Technologies Used

- **React** – Modern JS library for building UI.
- **Vite** – Lightning-fast development build tool.
- **Redux Toolkit** – Efficient state management.
- **React Router** – Declarative routing.
- **Axios** – HTTP client for API requests.
- **CSS Modules** – Scoped component-level styling.
- **Formik** & **Yup** – Form handling and validation.
- **react-datepicker** – Beautiful date picker component.

---

## 🚀 Routes

- `/` – **Home Page**: Contains a banner and call-to-action.
- `/catalog` – **Catalog Page**: List of cars + filter panel.
- `/catalog/:id` – **Car Detail Page**: Full details and booking form for selected car.

---

## 👩🏻‍💼 Author

[Sofiia Horiacha](https://github.com/sonyaaa-h)
