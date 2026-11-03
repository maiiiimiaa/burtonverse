
'use strict';

const $ = (s, root = document) => root.querySelector(s);

const movies = [
  {
    id: 'nightmare',
    title: 'El extraño mundo de Jack',
    year: 1993,
    category: 'Animación',
    genre: 'Animación · Fantasía musical',
    characters: 'Jack Skellington, Sally, Zero y Oogie Boogie',
    synopsis: 'Jack, el Rey Calabaza de Halloween, descubre la Navidad e intenta llevarla a su mundo. Su entusiasmo desata una aventura extraña, divertida y llena de canciones.',
    fact: 'Fue dirigida por Henry Selick a partir de una historia y personajes de Tim Burton.',
    colors: ['#72527f', '#11101a'],
    image: 'jack.jpg'
  },
  {
    id: 'corpse',
    title: 'El cadáver de la novia',
    year: 2005,
    category: 'Animación',
    genre: 'Animación · Fantasía romántica',
    characters: 'Victor Van Dort, Emily y Victoria Everglot',
    synopsis: 'Victor coloca por accidente un anillo en la mano de Emily, una novia fallecida. Así comienza un viaje entre el mundo de los vivos y el de los muertos.',
    fact: 'Fue realizada con animación stop-motion, cuadro por cuadro.',
    colors: ['#527a91', '#151322'],
    image: 'corpse-bride.jpg'
  },
  {
    id: 'beetlejuice',
    title: 'Beetlejuice',
    year: 1988,
    category: 'Comedia oscura',
    genre: 'Comedia · Fantasía sobrenatural',
    characters: 'Beetlejuice, Lydia, Barbara y Adam Maitland',
    synopsis: 'Una pareja de fantasmas intenta asustar a los nuevos habitantes de su casa y recurre a un espíritu caótico que convierte todo en un desastre sobrenatural.',
    fact: 'Combina humor macabro, efectos prácticos y escenarios surrealistas.',
    colors: ['#8a9b45', '#21132d'],
    image: 'beetlejuice.jpg'
  },
  {
    id: 'edward',
    title: 'El joven manos de tijera',
    year: 1990,
    category: 'Drama fantástico',
    genre: 'Fantasía · Drama',
    characters: 'Edward, Peg Boggs, Kim Boggs y el inventor',
    synopsis: 'Edward es un joven artificial que tiene tijeras en lugar de manos. Cuando una familia lo recibe, intenta encontrar su lugar en una comunidad que primero lo admira y después lo teme.',
    fact: 'La historia explora la diferencia, la soledad y la necesidad de ser aceptado.',
    colors: ['#77849b', '#171321'],
    image: 'edward.jpg'
  },
  {
    id: 'frankenweenie',
    title: 'Frankenweenie',
    year: 2012,
    category: 'Animación',
    genre: 'Animación · Ciencia ficción',
    characters: 'Victor Frankenstein, Sparky y Elsa Van Helsing',
    synopsis: 'Tras perder a su querido perro Sparky, Victor usa la ciencia para traerlo de vuelta. El experimento funciona, pero sus consecuencias sorprenden a todo el pueblo.',
    fact: 'Es una película en blanco y negro realizada con stop-motion.',
    colors: ['#7b8792', '#15141d'],
    image: 'frankenweenie.jpg'
  },
  {
    id: 'missperegrine',
    title: 'Miss Peregrine y los niños peculiares',
    year: 2016,
    category: 'Fantasía',
    genre: 'Fantasía · Aventura',
    characters: 'Jake, Miss Peregrine, Emma y los niños peculiares',
    synopsis: 'Jake descubre un hogar escondido donde viven niños con habilidades extraordinarias y una directora capaz de protegerlos de amenazas que acechan fuera de su refugio.',
    fact: 'Está basada en la novela de Ransom Riggs.',
    colors: ['#8a694a', '#1a1422'],
    image: 'miss-peregrine.jpg'
  },
  {
    id: 'charlie',
    title: 'Charlie y la fábrica de chocolate',
    year: 2005,
    category: 'Fantasía',
    genre: 'Fantasía · Comedia',
    characters: 'Charlie Bucket, Willy Wonka y los Oompa-Loompas',
    synopsis: 'Charlie gana un boleto dorado para visitar la misteriosa fábrica de Willy Wonka junto con otros chicos. Cada sala es una sorpresa.',
    fact: 'Es una adaptación de la novela de Roald Dahl.',
    colors: ['#9a5a39', '#25122e'],
    image: 'wonka.jpg'
  },
  {
    id: 'bigfish',
    title: 'El gran pez',
    year: 2003,
    category: 'Drama fantástico',
    genre: 'Drama · Fantasía',
    characters: 'Edward Bloom, Will Bloom y Sandra Bloom',
    synopsis: 'Will intenta separar la verdad de las historias fantásticas que su padre cuenta sobre su vida y descubre cuánto pueden revelar los relatos sobre una persona.',
    fact: 'La película combina recuerdos, leyendas y realismo mágico.',
    colors: ['#627e83', '#171421'],
    image: 'big-fish.jpg'
  },
  {
    id: 'sleepyhollow',
    title: 'La leyenda del jinete sin cabeza',
    year: 1999,
    category: 'Fantasía',
    genre: 'Terror gótico · Misterio',
    characters: 'Ichabod Crane, Katrina Van Tassel y el Jinete',
    synopsis: 'El investigador Ichabod Crane llega a Sleepy Hollow para resolver una serie de misteriosos crímenes atribuidos a un jinete sin cabeza.',
    fact: 'Se inspira en el relato de Washington Irving.',
    colors: ['#5d6a62', '#111019'],
    image: 'sleepy-hollow.jpg'
  },
  {
    id: 'mars',
    title: '¡Marcianos al ataque!',
    year: 1996,
    category: 'Comedia oscura',
    genre: 'Ciencia ficción · Sátira',
    characters: 'Los marcianos y distintos habitantes de la Tierra',
    synopsis: 'Una llegada extraterrestre que parecía diplomática se convierte en una invasión disparatada, con humor absurdo y una mirada satírica a la humanidad.',
    fact: 'Su estética retro rinde homenaje a las películas de ciencia ficción de los años cincuenta.',
    colors: ['#6d9b56', '#181026'],
    image: 'mars-attacks.jpg'
  },
  {
    id: 'sweeney',
    title: 'Sweeney Todd',
    year: 2007,
    category: 'Drama fantástico',
    genre: 'Musical · Drama gótico',
    characters: 'Sweeney Todd, Mrs. Lovett y Anthony Hope',
    synopsis: 'Un barbero regresa a Londres decidido a ajustar cuentas con quienes destruyeron su vida. La historia mezcla tragedia, música y una atmósfera victoriana oscura.',
    fact: 'Está basada en el musical teatral de Stephen Sondheim.',
    colors: ['#687b83', '#151019'],
    image: 'sweeney-todd.jpg'
  },
  {
    id: 'alice',
    title: 'Alicia en el país de las maravillas',
    year: 2010,
    category: 'Fantasía',
    genre: 'Fantasía · Aventura',
    characters: 'Alicia, Sombrerero, Reina Roja y Gato de Cheshire',
    synopsis: 'Alicia vuelve a un mundo fantástico lleno de criaturas extrañas y debe descubrir su propio valor mientras intenta cambiar el destino de sus habitantes.',
    fact: 'Reimagina personajes de las obras de Lewis Carroll.',
    colors: ['#678c87', '#21132b'],
    image: 'alice.jpg'
  },
  {
    id: 'batman',
    title: 'Batman',
    year: 1989,
    category: 'Fantasía',
    genre: 'Acción · Fantasía oscura',
    characters: 'Bruce Wayne, Batman, Joker y Vicki Vale',
    synopsis: 'Batman protege Gotham City mientras se enfrenta al peligroso Joker, un criminal que convierte la ciudad en un escenario de caos.',
    fact: 'Es una de las películas de Batman dirigidas por Tim Burton.',
    colors: ['#343c55', '#11101a'],
    image: 'batman.jpg'
  },
  {
    id: 'beetlejuice2',
    title: 'Beetlejuice Beetlejuice',
    year: 2024,
    category: 'Comedia oscura',
    genre: 'Comedia · Fantasía sobrenatural',
    characters: 'Beetlejuice, Lydia, Astrid y Delia',
    synopsis: 'La familia Deetz regresa a Winter River y una nueva situación sobrenatural vuelve a abrir las puertas del más allá.',
    fact: 'Es la continuación de la película Beetlejuice de 1988.',
    colors: ['#899b49', '#21132d'],
    image: 'beetlejuice-2.jpg'
  },
  {
    id: 'darkshadows',
    title: 'Sombras tenebrosas',
    year: 2012,
    category: 'Comedia oscura',
    genre: 'Fantasía · Comedia gótica',
    characters: 'Barnabas Collins, Angelique y Victoria Winters',
    synopsis: 'Barnabas Collins despierta después de siglos y encuentra que su antigua familia necesita ayuda para recuperar su lugar.',
    fact: 'Está basada en la serie televisiva Dark Shadows.',
    colors: ['#625477', '#17111f'],
    image: 'dark-shadows.jpg'
  },
  {
    id: 'dumbo',
    title: 'Dumbo',
    year: 2019,
    category: 'Fantasía',
    genre: 'Aventura · Fantasía familiar',
    characters: 'Dumbo, Holt Farrier, Milly y Joe',
    synopsis: 'Un pequeño elefante con enormes orejas descubre que puede volar y se convierte en el centro de una aventura extraordinaria.',
    fact: 'Es una adaptación de acción real del clásico animado de Disney.',
    colors: ['#8b6a8f', '#171321'],
    image: 'dumbo.jpg'
  }
];

let currentCategory = 'Todas';
let quizIndex = 0;
let score = 0;
let answered = false;

const questions = [
  {
    q: '¿Cómo se llama el perro de Victor en Frankenweenie?',
    options: ['Zero', 'Sparky', 'Scraps', 'Pongo'],
    correct: 1,
    why: '¡Correcto! Sparky es el perro que Victor intenta devolver a la vida.'
  },
  {
    q: '¿Quién es el Rey Calabaza en El extraño mundo de Jack?',
    options: ['Oogie Boogie', 'Victor', 'Jack Skellington', 'Beetlejuice'],
    correct: 2,
    why: 'Jack Skellington es el Rey Calabaza de Halloween.'
  },
  {
    q: '¿Qué técnica se utilizó en El cadáver de la novia?',
    options: ['Stop-motion', 'Solo acción real', 'Animación con arena', 'Títeres de sombra'],
    correct: 0,
    why: 'La película se animó cuadro por cuadro con stop-motion.'
  },
  {
    q: '¿Qué tiene Edward en lugar de manos?',
    options: ['Ramas', 'Guantes mágicos', 'Tijeras', 'Relojes'],
    correct: 2,
    why: 'Edward tiene tijeras en lugar de manos.'
  },
  {
    q: '¿Quién dirige la fábrica de chocolate en la película de 2005?',
    options: ['Victor Frankenstein', 'Willy Wonka', 'Ichabod Crane', 'Edward Bloom'],
    correct: 1,
    why: 'Willy Wonka es el excéntrico dueño de la fábrica.'
  }
];

// ===== PELÍCULAS Y BUSCADOR =====

function renderMovies() {
  const grid = $('#movieGrid');
  const searchInput = $('#searchInput');

  if (!grid || !searchInput) return;

  const term = searchInput.value.trim().toLocaleLowerCase('es');

  const visible = movies.filter(m =>
    (currentCategory === 'Todas' || m.category === currentCategory) &&
    [m.title, m.year, m.genre, m.characters, m.synopsis]
      .join(' ')
      .toLocaleLowerCase('es')
      .includes(term)
  );

  grid.innerHTML = '';

  const counter = $('#counter');
  if (counter) {
    counter.innerHTML =
      String(visible.length).padStart(2, '0') +
      ' <small>EXPEDIENTES</small>';
  }

  const empty = $('#empty');
  if (empty) empty.hidden = visible.length !== 0;

  visible.forEach(m => {
    const card = document.createElement('article');

    card.className = 'movie-card';
    card.tabIndex = 0;
    card.setAttribute('aria-label', 'Abrir expediente: ' + m.title);

    card.innerHTML = `
      <div class="poster" style="--a:${m.colors[0]};--b:${m.colors[1]}">
        <img
          src="${m.image}"
          alt="Póster de ${m.title}"
          class="movie-poster"
          loading="lazy"
          onerror="this.style.display='none';"
        >
        <span class="poster-year">${m.year}</span>
      </div>

      <div class="movie-info">
        <span class="category">${m.category}</span>
        <h3>${m.title}</h3>
        <p>${m.genre}</p>

        <div class="meta">
          <span>${m.year}</span>
          <span>Expediente cinematográfico</span>
        </div>

        <div class="bottom">
          <span class="tag">${m.category}</span>
          <button class="open-card" type="button">Ver ficha ↗</button>
        </div>
      </div>
    `;

    card.addEventListener('click', () => openMovie(m));

    card.addEventListener('keydown', e => {
      if (e.target !== card) return;

      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openMovie(m);
      }
    });

    $('.open-card', card).addEventListener('click', e => {
      e.stopPropagation();
      openMovie(m);
    });

    grid.appendChild(card);
  });
}

// ===== FICHAS Y VENTANAS =====

function openModal(id) {
  const el = $('#' + id);
  if (!el) return;

  el.classList.add('open');
  document.body.classList.add('lock');
  el.setAttribute('aria-hidden', 'false');

  const close = $('[data-close]', el);
  if (close) close.focus();
}

function closeModal(el) {
  if (!el) return;

  el.classList.remove('open');
  el.setAttribute('aria-hidden', 'true');

  if (!document.querySelector('.backdrop.open')) {
    document.body.classList.remove('lock');
  }
}

function openMovie(m) {
  const modalPoster = $('#modalPoster');

  if (modalPoster) {
    modalPoster.style.setProperty('--a', m.colors[0]);
    modalPoster.style.setProperty('--b', m.colors[1]);
  }



  if ($('#modalYear')) {
    $('#modalYear').textContent = m.year;
  }

  if ($('#modalCategory')) {
    $('#modalCategory').textContent =
      'EXPEDIENTE / ' + m.category.toUpperCase();
  }

  if ($('#modalTitle')) $('#modalTitle').textContent = m.title;
  if ($('#modalMeta')) $('#modalMeta').textContent = m.genre;
  if ($('#modalSynopsis')) $('#modalSynopsis').textContent = m.synopsis;
  if ($('#modalCharacters')) $('#modalCharacters').textContent = m.characters;
  if ($('#modalFact')) $('#modalFact').textContent = m.fact;

  // ENLACE AL TRÁILER

  const trailer = $('#modalTrailer');

  if (trailer) {
    trailer.href =
      'https://www.youtube.com/results?search_query=' +
      encodeURIComponent(m.title + ' tráiler oficial');

    trailer.target = '_blank';
    trailer.rel = 'noopener noreferrer';
  }

  // MOSTRAR EL PÓSTER

  if (modalPoster) {
    let img = $('.modal-movie-image', modalPoster);

    if (!img) {
      img = document.createElement('img');
      img.className = 'modal-movie-image';
      img.alt = 'Póster de ' + m.title;
      modalPoster.appendChild(img);
    }

    img.style.display = 'block';
    img.src = m.image;
    img.alt = 'Póster de ' + m.title;

    img.onerror = () => {
      img.style.display = 'none';
    };

    img.onload = () => {
      img.style.display = 'block';
    };
  }

  openModal('movieModal');
}

function setCategory(category) {
  currentCategory = category;

  document.querySelectorAll('.filters button').forEach(b => {
    b.classList.toggle('active', b.dataset.category === category);
  });

  renderMovies();
}

// ===== NAVEGACIÓN Y FILTROS =====

$('#searchInput')?.addEventListener('input', renderMovies);

$('#filters')?.addEventListener('click', e => {
  const b = e.target.closest('button[data-category]');
  if (b) setCategory(b.dataset.category);
});

$('#menuBtn')?.addEventListener('click', () => {
  $('#nav')?.classList.toggle('open');
});

$('#nav')?.addEventListener('click', e => {
  if (e.target.closest('a')) {
    $('#nav').classList.remove('open');
  }
});

$('#clearSearch')?.addEventListener('click', () => {
  const searchInput = $('#searchInput');

  if (searchInput) searchInput.value = '';

  setCategory('Todas');
});

document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    $('#searchInput')?.focus();
  }

  if (e.key === 'Escape') {
    document.querySelectorAll('.backdrop.open').forEach(closeModal);
  }
});

document.querySelectorAll('[data-close]').forEach(b => {
  b.addEventListener('click', () => {
    closeModal(b.closest('.backdrop'));
  });
});

document.querySelectorAll('.backdrop').forEach(b => {
  b.addEventListener('click', e => {
    if (e.target === b) closeModal(b);
  });
});

// ===== CÓDIGO SECRETO =====

$('#secretForm')?.addEventListener('submit', e => {
  e.preventDefault();

  const answer = $('#secretCode').value.trim().toLocaleLowerCase('es');
  const feedback = $('#secretFeedback');

  if (!feedback) return;

  if (answer === 'burtonverse' || answer === 'burton verse') {
    feedback.textContent =
      'ACCESO CONCEDIDO. "La locura de algunos, es la realidad de otros." ✦';

    feedback.classList.add('success');
  } else {
    feedback.textContent =
      'Acceso denegado… La pista está más cerca de lo que pensás.';

    feedback.classList.remove('success');
  }
});

// ===== TRIVIA =====

function showQuestion() {
  const q = questions[quizIndex];

  answered = false;

  $('#quizNumber').textContent =
    `PREGUNTA ${String(quizIndex + 1).padStart(2, '0')} / ${questions.length}`;

  $('#progress').style.width =
    `${quizIndex / questions.length * 100}%`;

  $('#quizTitle').textContent = q.q;
  $('#quizFeedback').textContent = '';
  $('#nextQuestion').disabled = true;
  $('#nextQuestion').hidden = false;

  $('#nextQuestion').textContent =
    quizIndex === questions.length - 1
      ? 'Ver resultado ↗'
      : 'Siguiente pregunta →';

  $('#quizResult').hidden = true;

  const options = $('#quizOptions');
  options.innerHTML = '';

  q.options.forEach((opt, i) => {
    const b = document.createElement('button');

    b.className = 'option';
    b.textContent = opt;

    b.addEventListener('click', () => {
      if (answered) return;

      answered = true;
      score += i === q.correct ? 1 : 0;

      b.classList.add(i === q.correct ? 'correct' : 'wrong');

      if (i !== q.correct) {
        options.children[q.correct].classList.add('correct');
      }

      [...options.children].forEach(x => {
        x.disabled = true;
      });

      $('#quizFeedback').textContent =
        (i === q.correct ? '¡Muy bien! ' : 'No exactamente. ') + q.why;

      $('#nextQuestion').disabled = false;
    });

    options.appendChild(b);
  });
}

$('#startQuiz')?.addEventListener('click', () => {
  quizIndex = 0;
  score = 0;

  showQuestion();
  openModal('quizModal');
});

$('#nextQuestion')?.addEventListener('click', () => {
  if (quizIndex < questions.length - 1) {
    quizIndex++;
    showQuestion();
    return;
  }

  $('#progress').style.width = '100%';
  $('#quizOptions').innerHTML = '';
  $('#quizFeedback').textContent = '';
  $('#quizTitle').textContent = 'Expediente completado';
  $('#nextQuestion').hidden = true;

  const result = $('#quizResult');
  result.hidden = false;

  const label =
    score === 5
      ? 'Detective de lo extraño'
      : score >= 3
        ? 'Explorador de sombras'
        : 'Aprendiz del misterio';

  result.innerHTML = `
    <strong>${score} / ${questions.length}</strong>
    <p>
      ${label}.
      ${
        score === 5
          ? 'Tenés una memoria cinematográfica impecable.'
          : score >= 3
            ? 'Conocés bastante bien estos mundos; todavía quedan secretos por descubrir.'
            : 'Cada expediente es una nueva pista. Volvé a intentarlo y seguí explorando.'
      }
    </p>
    <button class="btn" id="retryQuiz">JUGAR OTRA VEZ ↻</button>
  `;

  $('#retryQuiz').addEventListener('click', () => {
    quizIndex = 0;
    score = 0;
    showQuestion();
  });
});

// ===== INICIAR SITIO =====

renderMovies();
