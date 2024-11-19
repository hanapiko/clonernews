const API_BASE_URL = 'https://hacker-news.firebaseio.com/v0'; // Base URL for Hacker News API

// Fetch a post/item by ID
export async function fetchPost(postId) {
    const response = await fetch(`${API_BASE_URL}/item/${postId}.json`);
    return response.json(); // Return post data as JSON
}

// Fetch top posts, limited to the specified number
export async function fetchTopPosts(type = 'topstories', limit = 10) {
    const response = await fetch(`${API_BASE_URL}/${type}.json`);
    const postIds = await response.json(); // Get list of post IDs
    const limitedPostIds = postIds.slice(0, limit); // Limit the number of posts
    const postPromises = limitedPostIds.map(fetchPost); // Fetch details for each post
    return Promise.all(postPromises); // Return all posts
}

// Fetch comments for a given post
export async function fetchComments(post) {
    if (!post.kids) return []; // Return empty array if no comments
    const commentPromises = post.kids.map(fetchPost); // Fetch each comment by ID
    return Promise.all(commentPromises); // Return all comments
}
