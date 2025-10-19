## 🛍️ Random Product Catalog Explorer

- This application is a single-page React application designed to fetch, display, and explore product data from a mock external FauxStore API. It features a main product catalog listing, a detailed view for individual products, and a dedicated route for discovering a random item.

## 🚀 Key Features

- Product Listing: Displays a paginated list of all fetched products (via ProductsPage component).

- Product Details: Provides an in-depth, stylized view of a single product's information.

- Random Discovery: A dedicated route (/random) to fetch and display a completely random product.

- Shopping Cart: Components (Cart) to manage adding, viewing, and removing items.

- Styling: Uses Tailwind CSS for a clean, modern e-commerce aesthetic.

- Client-Side Routing: Utilizes react-router-dom for seamless navigation between views.

## 📦 Project Structure

The core application logic is contained within App.jsx, which handles data fetching and routing.

| File/Directory                      | Description                                                                       |
| :---------------------------------- | :-------------------------------------------------------------------------------- |
| `src/App.jsx`                       | Main application component. Defines all routes and houses core state/context.     |
| `src/components/Header.jsx`         | Navigation bar, includes links and a quick view of the cart.                      |
| `src/components/ProductsPage.jsx`   | Component responsible for displaying the list of all products (the main catalog). |
| `src/components/ProductCard.jsx`    | Component used to render a single, clickable product item within the listing.     |
| `src/components/ProductDetails.jsx` | Component for showing a single product's detailed information (`/product/:id`).   |
| `src/components/Random.jsx`         | Component for fetching and displaying a single random product (`/random`).        |
| `src/components/Cart.jsx`           | Component for managing the shopping cart state.                                   |
| `src/lib/api.js`                    | Placeholder for API fetching logic (e.g., `fetchProducts`, `fetchRandom`).        |

## 🗺️ Application Routes

The application defines three main routes for navigation:
| Path | Component | Purpose | API Endpoint Used |
| ----- | ----- | ----- | ----- |
| `/` | `ProductsPage` | Home page. Lists all available products. | `GET /products` |
| `/product/:id` | `ProductDetails` | Displays the full details of a specific product. | `GET /products/:id` |
| `/random` | `Random` | Fetches a new random product and displays its details. | `GET /random` |

## ⚙️ Data Flow & APIs

The application interacts with external services to provide product and catalog data.

### Base URL

https://freeapi.hashnode.space/api-guide/apireference/getProducts
| Action | Component | Endpoint | Details |
| :--- | :--- | :--- | :--- |
| **Initial Catalog Fetch** | `ProductsPage` | `GET /products` | Retrieves the entire product catalog (supports pagination/filtering). |
| **Product Details Fetch** | `ProductDetails` | `GET /products/:id` | Fetches comprehensive data for one specific product ID. |
| **Random Product Fetch** | `Random` | `GET /random` | Returns a single product object selected at random. |
| **Cart Management: Get** | `Cart` | `GET /cart` | Retrieves the contents of the user's current basket. |
| **Cart Management: Add** | `Cart` | `POST /cart/items` | Requires JSON body with `productId` and `quantity`. |
| **Cart Management: Remove** | `Cart` | `DELETE /cart/items/:id` | Requires cart item ID (`:id`) to remove a product from the basket. |

## ▶️ Getting Started

To run this project locally, ensure you have Node.js and npm (or yarn) installed.

#### Clone the repository:

```
git clone git@github.com:akshayWork-19/React_Apis.git
cd Random-products
```

#### Install dependencies:

```
npm install
# or
yarn install
```

#### Start the development server:

```
npm run dev
# or
yarn dev
```

The application should now be running in your browser, typically at http://localhost:5173.

##### made by akshay
