function loadpost2(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res =>res.json())
    .then(data =>displayPosts(data))

}

// 1.get the container element where you want to add the new elements
/*
2.create child element
3.set innerText or innerHTML
4.appendchild

*/

function displayPosts(posts){
    const postscontainer = document.getElementById('posts-container');
    postscontainer.classList.add("hidden");
    for(const post of posts){
       
        const postdiv =document.createElement('div');
        postdiv.classList.add('post')
        postdiv.innerHTML = `
        
        <h4>user- ${post.id}<h4>
        <h5>Post: ${post.title} title<h5>
        <p>post Description: ${post.body}</p>
        `;

        postscontainer.appendChild(postdiv);
    }
}



function createApost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

function patchApost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
          title: 'foo',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }

    function deleteApost(){
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE',
          });
    }

    function updateApost(){
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
              id: 1,
              title: 'foo',
              body: 'bar',
              userId: 1,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }