# Personal Finance Visualizer

A simple web application for tracking personal finances. This application allows users to add, edit, and delete transactions, view a list of transactions, and visualize monthly expenses through a bar chart.

## Features

- Add, edit, and delete transactions with details such as amount, date, and description.
- View a list of all transactions.
- Display a monthly expenses bar chart using Recharts.
- Responsive design with error states for better user experience.
- Basic form validation to ensure correct data entry.

## Tech Stack

- **Frontend**: Next.js, React, shadcn/ui, Recharts
- **Backend**: MongoDB for data storage

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd personal-finance-visualizer
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Create a `.env.local` file in the root directory and add your MongoDB connection string:

   ```
   MONGODB_URI=<your-mongodb-connection-string>
   ```

### Running the Application

To start the development server, run:

```
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to view the application.

### Usage

- Use the transaction form to add new transactions.
- Edit or delete existing transactions from the transaction list.
- View the monthly expenses bar chart to analyze spending patterns.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.