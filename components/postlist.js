import { createPost } from './post.js';

// Function to render a list of posts into a given container
export function renderPosts(posts, container) {
    container.innerHTML = ''; // Clear the container
    posts.forEach(post => {
        const postElement = createPost(post); // Create a post element
        container.appendChild(postElement); // Append the post to the container
    });
}
