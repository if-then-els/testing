// JavaScript to handle toggling of content
const blogPosts = document.querySelectorAll('.blog-post');

blogPosts.forEach((post) => {
    const title = post.querySelector('h2');
    const content = post.querySelector('.content');

    title.addEventListener('click', () => {
        post.classList.toggle('active');
    });
});
