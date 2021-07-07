const fetchPromise = fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
let mainContent = '',
    main = document.querySelector('#posts');
fetchPromise.then(response => {
    return response.json();
}).then(posts => {
    posts.forEach(posts => {
        mainContent += `
  	  <p> ${posts.title}</p> 
  	<img src="${posts.url}" alt="${posts.title}">
  `;
    });
    console.log(posts);
    main.innerHTML = mainContent;
});
