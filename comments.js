document.addEventListener("DOMContentLoaded", function () {
    const commentList = document.getElementById("comment-list");
    const commentForm = document.getElementById("comment-form");

    // Function to fetch and display comments
    function fetchComments() {
        // Replace this URL with your backend API endpoint
        fetch("/api/comments")
            .then((response) => response.json())
            .then((data) => {
                // Clear existing comments
                commentList.innerHTML = "";

                // Append retrieved comments to the list
                data.forEach((comment) => {
                    const listItem = document.createElement("li");
                    listItem.innerHTML = `<strong>${comment.name}:</strong> ${comment.comment}`;
                    commentList.appendChild(listItem);
                });
            });
    }

    // Event listener for form submission
    commentForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get user input
        const name = document.getElementById("name").value;
        const commentText = document.getElementById("comment").value;

        // Create a new comment object
        const newComment = {
            name: name,
            comment: commentText,
        };

        // Send the comment to the backend
        fetch("/api/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newComment),
        })
            .then((response) => response.json())
            .then((data) => {
                // Clear the form
                document.getElementById("name").value = "";
                document.getElementById("comment").value = "";

                // Fetch and display updated comments
                fetchComments();
            });
    });

    // Fetch and display comments when the page loads
    fetchComments();
});
