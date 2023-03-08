# Google Books API Search Engine Refactor with GraphQL

## User Story
AS A user of a Google Books API search engine
I WANT to search for books and save them to my personal reading list
SO THAT I can keep track of books I want to read and have read.

## Table of Contents

1. [Description](#description)
2. [Technology](#Technology)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Screenshots](#screenshots)
6. [Contributing](#contributing)
7. [Questions](#questions)

## Description:

This is a Google Books API search engine that allows users to search for books and save them to a personal reading list. The original version of the app was built using a RESTful API and now it has been refactored to use a GraphQL API built with Apollo Server. The application is built using the MERN stack with a React front-end, MongoDB database, and Node.js/Express.js server and API.

The new version of the application allows for a more performant user experience by using GraphQL's ability to fetch only the data the user needs, reducing the amount of unnecessary data transfer. This application also demonstrates how to use Apollo Server, a powerful and flexible GraphQL server that allows for easy integration with different data sources.

## Technology:

- React
- GraphQL
- Apollo Server
- MongoDB
- Node.js/Express.js

## Installation:
1. Clone the repository to your local machine
2. Navigate to the root directory in your terminal
3. Run `npm install` to install the necessary dependencies

## Usage:
1. Start the server by running `npm start` in the root directory
2. Open your browser and navigate to `http://localhost:3000`
3. Use the search bar to search for books by title, author, or keywords
4. Click "Save" to save a book to your reading list
5. Click "View" to see your saved books
6. Click "Delete" to remove a book from your reading list

## Screenshots:

### Here is a screenshot of the homepage
![Homepage](./client/public/screenshots/homepage.png)

### Here is a screenshot of the search results page
![Search Results](./client/public/screenshots/search-results.png)

### Here is a screenshot of the saved books page
![Saved Books](./client/public/screenshots/saved-books.png)

## Contributing:
If you would like to contribute to this project, please feel free to submit a pull request. Any contributions are welcome and appreciated!

## Questions:
If you have any questions about this project, please feel free to contact me:

- [Email](mailto:your-email@example.com)
- [Github](https://github.com/your-username)
