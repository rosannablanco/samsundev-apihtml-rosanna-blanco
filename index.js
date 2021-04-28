const inputFile = document.querySelector('#video-file');
const reader = new FileReader();
//comprobar formato del video
const handleFileInput = (e) => {
  const file = e.target.files[0];
  reader.readAsDataURL(file);
  addEventReader();
};
inputFile.addEventListener('change', handleFileInput);

const addEventReader = () => {
  reader.addEventListener('loadend', handleEventReader);
};

const handleEventReader = (e) => {
  console.dir(e);
  if (e.type == 'loadend') {
    alert('Cargando...');
  }
  mostrarVideo();
};

//mostrar video
const mostrarVideo = () => {
  const videoFile = document.querySelector('#video');
  videoFile.src = reader.result;
  const videoContainer = document.querySelector('#section');
  videoContainer.classList.remove('hidden');

  addControlBotones(videoFile);
};

//botones control del video
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
    file.volume += 0.5;
  });
  bajarVolumBtn.addEventListener('click', () => {
    file.volume -= 0.5;
  });
};
