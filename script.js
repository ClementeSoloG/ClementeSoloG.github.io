$(document).ready(function() {
    const apiKey = '2142f2aff25e43c9bb91efba3f7fe1c3'; 
    const apiUrl = `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${apiKey}`;

    $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function(response) {
            const articles = response.articles.slice(0,10);

            // Iterar sobre los artículos y agregar HTML dinámico
            articles.forEach(function(article) {
                const articleHTML = `
                    <div class="col-2 mb-4">
                        <div class="card">
                            <img src="${article.urlToImage}" class="card-img-top" alt="Article Image">
                            <div class="card-body">
                                <h5 class="card-title">${article.title}</h5>
                                <p class="card-text">${article.description}</p>
                                <a href="${article.url}" target="_blank" class="btn btn-primary">Leer más</a>
                            </div>
                            <div class="card-footer text-muted">
                                Fuente: ${article.source.name}
                            </div>
                        </div>
                    </div>
                `;

                // Agregar el artículo al contenedor en el DOM
                $('#articles-container').append(articleHTML);
            });
        },
        error: function() {
            alert('Hubo un error al cargar los artículos.');
        }
    });
});
