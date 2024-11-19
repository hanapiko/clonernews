export function createComment(comment) {
    const commentElement = document.createElement('div'); // Create a div for the comment
    commentElement.className = 'comment'; // Assign 'comment' class to the div
    commentElement.innerHTML = `
        <p>${comment.text || 'Comment not available'}</p> 
        <p><small>By ${comment.by}</small></p> 
    `;
    
    // Check if there are child comments (replies) to render
    if (comment.kids && comment.kids.length) {
        const replies = document.createElement('div'); // Create a div for replies
        replies.className = 'replies'; // Assign 'replies' class to the div
        comment.kids.forEach(async kidId => {
            const reply = await fetchPost(kidId); // Fetch each child comment by ID
            replies.appendChild(createComment(reply)); // Recursively render replies
        });
        commentElement.appendChild(replies); // Append replies to the comment
    }
    return commentElement; // Return the constructed comment element
}
