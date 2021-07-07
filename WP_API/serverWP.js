// fetch('http://localhost/wordpress/wp-json/wp/v2/posts/6?_embed')
//     .then(response => response.json())
//     .then(posts => console.log(posts.content.rendered));


const fetchPromise = fetch('http://localhost/wordpress/wp-json/wp/v2/posts/');
let mainContent = '',
main = document.querySelector('#posts');

fetchPromise.then(response => {
 return response.json();
 }).then(posts => {
 posts.forEach(posts => {
 mainContent += `
<h2>${posts.title.rendered}</h2>
 ${posts.content.rendered}
 `;
 });
  console.log(posts);
  main.innerHTML = mainContent;
});
