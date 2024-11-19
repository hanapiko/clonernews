## CLONERNEWS
This project is a user interface (UI) for the [HackerNews API](https://github.com/HackerNews/API), designed to keep users informed about the latest tech news, jobs, and polls in an appealing and user-friendly manner. The UI dynamically handles and presents various types of posts, comments, and live data updates, ensuring users stay up to date with the most recent content in real-time.

## Features

### Posts
- Supports different post types:
  - **Stories**: Displays the latest stories.
  - **Jobs**: Lists the newest tech-related job opportunities.
  - **Polls**: Shows ongoing polls.
- **Pagination**: Posts are loaded dynamically as the user scrolls, preventing excessive API calls.

### Comments
- **Parent-child relationships**: Comments are displayed under their respective posts, maintaining the proper hierarchy.
- **Nested comments** (optional): For stories, jobs, and polls, sub-comments can be handled recursively to display deeply nested comment threads.

### Live Data Updates
- **Real-time updates**: Users are notified every 5 seconds when new posts or comments are available.
- **Efficient data fetching**: Live data is fetched in a way that does not overload the API, optimizing user experience and performance.

## Optimization Techniques

- **Throttling and Debouncing**: The UI leverages these techniques to regulate API requests, ensuring that only necessary data is fetched. This helps avoid overwhelming the API with too many requests in a short time.
- **Event-driven loading**: Posts and comments are loaded incrementally, only when needed by the user (e.g., as they scroll through the page).

## Getting Started

### Prerequisites
- Node.js (version 12.x or higher)
- A modern web browser (Chrome, Firefox, Edge)

### Installation

1. Clone the repository:
   ```bash
   git clone https://learn.zone01kisumu.ke/git/hanapiko/clonernews

2. Navigate to the project directory
```bash
cd clonernews
```

3. Install the dependencies
```bash
npm install
```
4. Run the project
```bash
npm start
```
5. open your browser and navigate to:
```bash
http: //localhost:3000
```

## Usage
- Scroll through posts to load more data.
- Click on posts to view comments.
- Receive notifications for new posts or updates in real time.

## Contributing

Contributions are welcome! Please submit a pull request with detailed descriptions of the changes or improvements.

## License
This project is licensed under the MIT License - see the LICENSE file for details.



