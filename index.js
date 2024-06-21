class Publicacion{
    constructor(titulo, anyo){
        this.titulo = titulo;
        this.anyo = anyo;
    }
}

class Libro extends Publicacion{
    constructor(titulo,anyo,autor,genero){
        super(titulo, anyo);
        this.autor = autor;
        this.genero = genero;
    }
}


const libros = [];


function aggLibro(){

    var titulo = document.getElementById('titulo').value;
    var anyo = document.getElementById('anyo').value;
    var autor = document.getElementById('escritor').value;
    var genero = document.getElementById('genero').value;

    var libro = new Libro(titulo, anyo, autor, genero);

    libros.push(libro);

    document.getElementById('titulo').value = '';
    document.getElementById('anyo').value = '';
    document.getElementById('escritor').value = '';
    document.getElementById('genero').value = '';
    
}



function mostrarLibros(){
    const libro = document.getElementById('libros-todos');

    const br = document.createElement('br');
    libros.forEach(el => {
        const li = document.createElement('li');
        li.textContent = el.titulo + ', ' + el.anyo + ', ' + el.autor + ', ' + el.genero;
        libro.appendChild(li);
        libro.appendChild(br);
    });
}

function filtrarGenero(){
    const libro = document.getElementById('libros-genero');
    var genero = document.getElementById('dato').value;
    //alert(genero);

    const br = document.createElement('br');
    libros.forEach(el => {
        if(genero == el.genero){
            const li = document.createElement('li');
            li.textContent = el.titulo + ', ' + el.anyo + ', ' + el.autor + ', ' + el.genero;
            libro.appendChild(li);
            libro.appendChild(br);
        }
    });
}