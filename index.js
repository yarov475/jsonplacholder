const fetchPromise = fetch("https://jsonplaceholder.typicode.com/posts/");
let mainContent = '',
    main = document.querySelector('#posts');

fetchPromise.then(response => {
    return response.json();
}).then(posts => {
    posts.forEach(posts => {
        mainContent += `
  <div class="col-md-6 film-heroku my-3">
    <div class="card border-primary">
  	<div class="card-header bg-primary text-light">
  	  <div class="card-title">
  	    <h2>${posts.title}</h2>
  	 
  	  </div>
  	</div>
  	<div class="card-body">
  	  <div class="card-text">${posts.body}</div>
     </div>
    </div>
  </div>`;
    });
    console.log(posts);
    main.innerHTML = mainContent;
});
