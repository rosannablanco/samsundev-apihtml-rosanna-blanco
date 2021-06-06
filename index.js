const inputFile = document.querySelector('#video-file');
const typeVideo = ['video/mp4', 'video/webm', 'video/ogg'];
const reader = new FileReader();

// comprobar formato del video
const handleFileInput = (e) => {
  const file = e.target.files[0];
  if (comprobarTypeVideo(file) < 0) {
    alert('El video no se ha podido cargar');
  } else {
    alert('El video se ha podido cargar correctamente');
    reader.readAsDataURL(file);
    addEventReader();
  }
};

// comprobar tipo de video
const comprobarTypeVideo = (pFile) => {
  const typeVideoMatch = typeVideo.indexOf(pFile.type);
  return typeVideoMatch;
};

// mostrar carga
const mostrarLoading = (e) => {
  if (e.target.readyState == '2') {
    alert('Cargando...');
  }
  mostrarVideo();
};

//mostrar video
const mostrarVideo = () => {
  const videoFile = document.querySelector('#video');
  videoFile.volume = 0.5;
  videoFile.src = reader.result;
  const videoContainer = document.querySelector('#section');
  videoContainer.classList.remove('hidden');
  addControlBotones(videoFile);
};

//add eventos a los botones
const addControlBotones = (file) => {
  const reproducirBtn = document.querySelector('#reproducir');
  const pausaBtn = document.querySelector('#pausa');
  const subirVolumBtn = document.querySelector('#subir-volumen');
  const bajarVolumBtn = document.querySelector('#bajar-volumen');
  reproducirBtn.addEventListener('click', () => {
    file.play();
  });
  pausaBtn.addEventListener('click', () => {
    file.pause();
  });
  subirVolumBtn.addEventListener('click', () => {
    console.log(file.volume);
    file.volume += 0.1;
  });
  bajarVolumBtn.addEventListener('click', () => {
    file.volume -= 0.1;
  });
};

const addEventReader = () => {
  reader.addEventListener('loadend', mostrarLoading);
};

inputFile.addEventListener('change', handleFileInput);
