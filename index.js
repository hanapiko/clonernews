import { fetchTopPosts } from './api/hackerNews.js';
import { renderPosts } from './components/postlist.js';
import { debounce } from './utils/debounce.js';

// Getting DOM elements for the post list container, the post type dropdown, and the refresh button
const postListContainer = document.getElementById('post-list');
const postTypeSelect = document.getElementById('postType');
const refreshButton = document.getElementById('refreshPosts');

// Async function to load posts based on the selected post type
async function loadPosts() {
    const postType = postTypeSelect.value;
    
    const posts = await fetchTopPosts(postType);
    
    renderPosts(posts, postListContainer);
}

const debouncedLoadPosts = debounce(loadPosts, 300);

postTypeSelect.addEventListener('change', debouncedLoadPosts);

refreshButton.addEventListener('click', loadPosts);

loadPosts();
