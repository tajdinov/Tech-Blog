async function deleteFormHandler(event) {
    event.preventDefault();

    // const id = window.location.toString().split('/')[
    //     window.location.toString().split('/').length - 1
    // ];

    let id = document.querySelector('.comment_id');


    const response = await fetch(`/api/comments/${id.textContent}`, {
        method: 'DELETE',
        body: JSON.stringify({
            comment_id: id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }

}

document.querySelector('.delete-comment-btn').addEventListener('click', deleteFormHandler);