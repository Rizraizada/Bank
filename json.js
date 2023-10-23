 function loadUser(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res =>res.json())
      .then(data=>DisplayUser(data))
 }

 function DisplayUser(data){
      const ul =document.getElementById('users-list');
      for(const user of data){
            console.log(user.name);
            const li =document.createElement('li');
            li.innerText=user.email;
            ul.appendChild(li);
          // console.log(user.phone);
      }
 }

 // function post api
function loadPosts(){
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res=>res.json())
      .then(data=>displayPosts(data))
}

 function displayPosts(posts){
      const postsContainer=document.getElementById('posts-container');
      for(const post of posts){
            const postDiv =document.createElement('div');

            postDiv.innerHTML=

            `<h4>User-${post.userId}</h4>
            <h5> post : ${post.title}</h5>
            <p>Post Description:${post.body}</p>`;

            postsContainer.appendChild(postDiv);

      }
 }

 loadPosts();