## User Data Explorer and Discovery App

- This application is a single-page React application designed to fetch, display, and explore user data from a mock external API. It features a main user listing view, a detailed view for individual users, and a dedicated route for discovering a random user.

## 🚀 Key Features

- User Listing: Displays a paginated list of all fetched users (via DataTable component).

- User Details: Provides an in-depth, stylized view of a single user's information.

- Random Discovery: A dedicated route to fetch and display a completely random user.

- Shadcn/UI Inspired Styling: Uses pure CSS styling to achieve a clean, dark-themed, minimalist aesthetic.

- Client-Side Routing: Utilizes react-router-dom for seamless navigation between views.

## 📦 Project Structure

The core application logic is contained within App.jsx, which handles data fetching and routing.

### File/Directory

Description

| File/Directory                   | Description                                                                    |
| -------------------------------- | ------------------------------------------------------------------------------ |
| `src/App.jsx`                    | Main application component. Handles initial data fetch and defines all routes. |
| `src/components/DataTable.jsx`   | Component responsible for displaying the list of users.                        |
| `src/components/Userdetails.jsx` | Component for showing a single user's detailed information.                    |
| `src/components/Random.jsx`      | Component for fetching and displaying a single random user.                    |
| `src/lib/backend.js`             | Placeholder for API fetching logic (e.g., `dataRequest`).                      |

### 🗺️ Application Routes

The application defines three main routes for navigation:
| Path | Component | Purpose | API Endpoint Used |
| ----- | ----- | ----- | ----- |
| `/` | `DataTable` | Home page. Lists all users initially fetched. | `getUsers` |
| `/user/:id` | `Userdetails` | Displays the full profile of a specific user. | `getUserById` |
| `/random` | `Random` | Fetches a new random user and displays their details. | `getARandomUser` |

## ⚙️ Data Flow & APIs

The application interacts with external services to provide data. The primary data source used is the Hashnode Free API suite:

### Initial Data Fetch (/)

The main App.jsx component calls the getUsers endpoint once on load to populate the initial user list:

- Endpoint: https://freeapi.hashnode.space/api-guide/apireference/getUsers

### User Details Fetch (/user/:id)

The Userdetails component is responsible for fetching the detailed information for the specific user ID passed in the URL parameter.

- Endpoint: https://freeapi.hashnode.space/api-guide/apireference/getUserById

### Random User Fetch (/random)

The Random component calls the getARandomUser endpoint to find and display a completely new, random user profile.

- Endpoint: https://freeapi.hashnode.space/api-guide/apireference/getARandomUser

## ▶️ Getting Started

To run this project locally, ensure you have Node.js and npm (or yarn) installed.

Clone the repository:

```
git clone git@github.com:akshayWork-19/React_Apis.git
cd Random-users
```

Install dependencies:

```
npm install

# or

yarn install
```

Start the development server:

```
npm run dev

# or

yarn dev
```

The application should now be running in your browser, typically at http://localhost:5173.

#### made by akshay
