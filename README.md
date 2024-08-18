# EatzOn - Food Delivery Website

EatzOn is a web-based platform that allows customers to order food online from various restaurants. The platform provides an easy-to-use interface for customers to browse menus, add items to their cart, and pay for their orders using card payments. Admins have the capability to manage the menu and track orders through an admin panel.

## Features

### Customer Features
- **Browse Menu:** Customers can explore the menu and view detailed descriptions and prices of food items.
- **Add to Cart:** Customers can add multiple items to their cart.
- **Secure Payments:** Card payments are securely processed using Stripe.
- **Order Tracking:** Customers can track the status of their orders.

### Admin Features
- **Add Food Items:** Admins can add, update, and delete food items on the menu.
- **Track Orders:** Admins can view and manage all orders placed by customers.

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Payment Gateway:** Stripe

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/EatzOn.git
    cd EatzOn
    ```

2. **Install dependencies:**
    ```bash
    npm install
    cd client
    npm install
    cd ..
    ```

3. **Set up environment variables:**
   - Create a `.env` file in the root directory with the following environment variables:
    ```plaintext
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    STRIPE_SECRET_KEY=your_stripe_secret_key
    STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
    ```
   - Create a `.env` file in the `client` directory with the following environment variables:
    ```plaintext
    REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
    ```

4. **Run the application:**

    In the root directory, run the following commands to start both the backend and frontend:
    ```bash
    npm run dev
    ```

5. **Access the application:**
    - Open your browser and go to `http://localhost:3000` to access the frontend.
    - The backend server will run on `http://localhost:5000`.

## Usage

- **Customer:**
  1. Sign up or log in to your account.
  2. Browse the available food items and add your desired items to the cart.
  3. Proceed to checkout and pay securely using your credit card.
  4. Track your order status until it is delivered.

- **Admin:**
  1. Log in with admin credentials.
  2. Add new food items or update existing items in the menu.
  3. View and manage all customer orders.

## Contributing

If you wish to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, please reach out to [your-email@example.com].
