let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function changenglish() {
    document.getElementById("titulo").innerHTML = "Computer Science Technologist";
    document.getElementById("aboutme").innerHTML = "About me";
    document.getElementById("desc").innerHTML = "My name is Facundo Camilo. I am an IT Technologist and currently a student of Computer Engineering (FING). Since August 2023, I have been working as a web developer in the IT department at República Microfinanzas. I am very passionate about software development, especially web development, both front-end and back-end, and I have a good level of English. I am always open to learning new technologies and facing new challenges.";
    document.getElementById("perfil").innerHTML = '"Graduates of the IT Technologist program will be capable of building and evaluating IT solutions encompassing tasks such as software design and development, testing, and documentation, eventually integrating various technologies."'
    //document.getElementById("perfiltit").innerHTML = "IT Technologist: ";
    document.getElementById("datapersonal").innerHTML = "Personal Information";
    document.getElementById("cargo").innerHTML = "Position";
    document.getElementById("intereses").innerHTML = "Interests";
    document.getElementById("musica").innerHTML = "Music";
    document.getElementById("viajes").innerHTML = "Travel";
    document.getElementById("deportes").innerHTML = "Sports";
    document.getElementById("libros").innerHTML = "Reading";
    document.getElementById("dedicacion").innerHTML = "Dedication";
    document.getElementById("equipo").innerHTML = "Teamwork";
    document.getElementById("creatividad").innerHTML = "Creativity";
    document.getElementById("ing").innerHTML = "English";
    document.getElementById("por").innerHTML = "Portuguese";
    document.getElementById("extra").innerHTML = "I have also worked on projects with other technologies or programming languages ​​such as: Java, Genexus, ReactJS, Angular, C++, Python.";
    document.getElementById("cv").innerHTML = "Resume";
    document.getElementById("educacion").innerHTML = "Education";
    document.getElementById("titing").innerHTML = "IT Engineering";
    document.getElementById("tittec").innerHTML = "IT Technologist";
    document.getElementById("exp").innerHTML = "Work Experience";
    document.getElementById("tecdesc").innerHTML = "At UTEC, we began working on software development in a more professional manner.Through the completion of multiple projects throughout the entire course of my studies, I learned many programming languages, became accustomed to teamwork, and graduated as a software developer."
    document.getElementById("tittec").innerHTML = "Bachelor's Degree in IT";
    document.getElementById("utudesc").innerHTML = "In this high school program, I started making my first steps in the world of computing, learning my first programming languages, and understanding software development from scratch. We also worked on other topics such as equipment repair, databases, networks, etc.";
    document.getElementById("rmsatit").innerHTML = "Web developer";
    document.getElementById("repdesc").innerHTML = "In August 2023, I began working at República Microfinanzas, initially as a helpdesk assistant, providing technical support within the company. I am now in the development area, collaborating on the design and development of the company's various web applications.";
    document.getElementById("bunkerdesc").innerHTML = "Bunker360 is a software company where I worked for almost two years. My main role was to manage the customer support portal and address issues related to the systems provided by the company. I also undertook some specific development tasks using WordPress, JavaScript, SQL, and HTML/CSS.";
    document.getElementById("bunkertit").innerHTML = "Support and web development";
    document.getElementById("vegadesc").innerHTML = "While studying, I worked at Vega Multimedia (a company dedicated to selling computer supplies) for a whole year, repairing PCs, installing software, and providing technical support to customers";
    document.getElementById("vegatit").innerHTML = "PC Repair Technician";
    document.getElementById("genexustit").innerHTML = "Genexus Jr. Analyst";
    document.getElementById("genexusdesc").innerHTML = "In the IT Technologist program, we were given the opportunity to take a Junior Analyst Genexus exam, which I passed with a 71% approval rate.";
    document.getElementById("ini").innerHTML = "HOME";
    document.getElementById("sobmi").innerHTML = "ABOUT ME";
    document.getElementById("res").innerHTML = "RESUME";
    document.getElementById("sk").innerHTML = "SKILLS";
}

function changespanish() {
    document.getElementById("titulo").innerHTML = "Tecnólogo en Informática";
    document.getElementById("aboutme").innerHTML = "Sobre mi";
    document.getElementById("desc").innerHTML = "Mi nombre es Facundo Camilo, soy Tecnólogo en Informática y actualmente estudiante de Ingeniería en Computación (FING). Trabajo desde agosto de 2023 como desarrollador web en el área TI de República Microfinanzas. Me gusta mucho todo lo que es el desarrollo de software, sobre todo web, tanto front-end como back-end y tengo un buen nivel de inglés. Siempre estoy muy abierto a aprender nuevas tecnologías y enfrentar nuevos desafíos.";
    document.getElementById("perfil").innerHTML = '"Los egresados de la carrera Tecnólogo en Informática serán capaces de construir y evaluar soluciones informáticas abarcando las tareas de diseño y desarrollo de software, pruebas y documentación, integrando eventualmente distintas tecnologías."'
    //document.getElementById("perfiltit").innerHTML = "IT Technologist: ";
    document.getElementById("datapersonal").innerHTML = "Datos personales";
    document.getElementById("cargo").innerHTML = "Cargo";
    document.getElementById("intereses").innerHTML = "Intereses";
    document.getElementById("musica").innerHTML = "Musica";
    document.getElementById("viajes").innerHTML = "Viajar";
    document.getElementById("deportes").innerHTML = "Deportes";
    document.getElementById("libros").innerHTML = "Libros";
    document.getElementById("dedicacion").innerHTML = "Dedicación";
    document.getElementById("equipo").innerHTML = "Trabajo en equipo";
    document.getElementById("creatividad").innerHTML = "Creatividad";
    document.getElementById("ing").innerHTML = "Inglés";
    document.getElementById("por").innerHTML = "Portugues";
    document.getElementById("extra").innerHTML = "También he trabajado en proyectos con otras tecnologías o lenguajes de programación como pueden ser: Java, .NET, Genexus, ReactJS, Angular, C++, Python.";
    document.getElementById("cv").innerHTML = "Currículum";
    document.getElementById("educacion").innerHTML = "Educación";
    document.getElementById("titing").innerHTML = "Ingeniería en Computación";
    document.getElementById("tittec").innerHTML = "Tecnólogo en Informática";
    document.getElementById("exp").innerHTML = "Experiencia";
    document.getElementById("tecdesc").innerHTML = "En UTEC empezamos a trabajar el desarrollo de software de una manera más profesional. Mediante la realización de múltiples proyectos a lo largo de toda la carrera aprendí muchos lenguajes de programación, me acostumbré al trabajo en equipo y logré egresar siendo un desarrollador de software más."
    document.getElementById("tittec").innerHTML = "Bachillerato en Informática";
    document.getElementById("utudesc").innerHTML = "En este bachillerato comencé a hacer mis primeras armas en el mundo de la informática, viendo mis primeros lenguajes de programación y aprendiendo desde cero lo que es el desarrollo de software. También se trabajaba en otros temas como puede ser reparación de equipos, bases de datos, redes, etc";
    document.getElementById("rmsatit").innerHTML = "Desarrollador web";
    document.getElementById("repdesc").innerHTML = "En agosto de 2023 comencé a trabajar en República Microfinanzas, en un principio ahora como asistente en mesa de ayuda, brindando soporte técnico dentro de la empresa. Ahora me encuentro en el área de desarrollo, colaborando con el diseño y el desarrollo de las distintas aplicaciones web de la empresa.";
    document.getElementById("bunkerdesc").innerHTML = "Bunker360 es una empresa de software, trabajé allí por casi dos años donde mi rol principal era estar pendiente del portal de soporte a clientes y atender los problemas relacionados a los sistemas que la empresa proveía. También realicé algunos trabajos puntuales de desarrollo, utilizando Wordpress, Javascript, SQL, HTML/CSS";
    document.getElementById("bunkertit").innerHTML = "Soporte y desarrollo web";
    document.getElementById("vegadesc").innerHTML = "Mientras estudiaba, trabajé en Vega Multimedia (una empresa dedicada a la venta de insumos informáticos) a lo largo de todo un año reparando PC, instalando softwares y dando soporte técnico a clientes.";
    document.getElementById("vegatit").innerHTML = "Técnico en reparación de PC";
    document.getElementById("genexustit").innerHTML = "Analista Jr. Genexus";
    document.getElementById("genexusdesc").innerHTML = "En la carrera de Tecnólogo en Informática se nos dió la posibilidad de rendir un exámen de Analista Jr. Genexus, el cuál salvé con el 71% de aprobación";
    document.getElementById("ini").innerHTML = "INICIO";
    document.getElementById("sobmi").innerHTML = "SOBRE MI";
    document.getElementById("res").innerHTML = "CURRICULUM";
    document.getElementById("sk").innerHTML = "HABILIDADES";
}
function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("htmlcss");
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("php");
        habilidades[3].classList.add("sql");
        habilidades[4].classList.add("java");
        habilidades[5].classList.add("trabajo");
        habilidades[6].classList.add("creatividad");
        habilidades[7].classList.add("dedicacion");
        habilidades[8].classList.add("ingles");
        habilidades[9].classList.add("portugues");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 