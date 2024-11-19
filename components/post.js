import { fetchComments } from '../api/hackerNews.js';
import { createComment } from './comment.js';

export function createPost(post) {
    const postElement = document.createElement('div');
    postElement.className = 'post';
    postElement.innerHTML = `
        <h2><a href="${post.url || '#'}" target="_blank">${post.title}</a></h2>
        <p>By ${post.by}</p>
    `;

    // Load comments on demand
    const commentContainer = document.createElement('div');
    commentContainer.className = 'comment-container';
    postElement.appendChild(commentContainer);

    const loadCommentsButton = document.createElement('button');
    loadCommentsButton.innerText = 'Load Comments';
    loadCommentsButton.onclick = async () => {
        loadCommentsButton.disabled = true;
        const comments = await fetchComments(post);
        comments.forEach(comment => {
            const commentElement = createComment(comment);
            commentContainer.appendChild(commentElement);
        });
    };
    postElement.appendChild(loadCommentsButton);
    
    return postElement;
}
