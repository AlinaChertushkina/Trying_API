//Создаю обработчик, чтобы скрипт не выполнялся раньше, чем загрузится страница

document.addEventListener('DOMContentLoaded', () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const container = document.getElementById('container');
    fetchPosts(url, container);
});

//Создаю HTML-элементы

function createPostHtml(post) {
    return `
        <div>
          <h2>Заголовок: ${post.title}</h2>
          <p>Пост: ${post.body}</p>
          <hr>
        </div>`
        ;
}

//Добавляю HTML-элементы на страницу

function addHtmlToContainer(html, container) {
    container.insertAdjacentHTML('beforeend', html);
}

//Получаю данные из API

function fetchPosts(url, container) {
    fetch(url)
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const html = createPostHtml(post);
                addHtmlToContainer(html, container);
            });
        })
        .catch(error => console.error(error));
}
