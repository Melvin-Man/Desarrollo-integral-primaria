
// =============================================
// MODO OSCURO - FUNCIONALIDAD COMPLETA
// =============================================

// Inicializar modo oscuro
function initDarkMode() {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    // Aplicar modo oscuro si está activado
    if (isDarkMode) {
        document.documentElement.classList.add('dark-mode');
    }
    
    // Configurar evento del botón
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            const isCurrentlyDark = document.documentElement.classList.contains('dark-mode');
            
            if (isCurrentlyDark) {
                // Cambiar a modo claro
                document.documentElement.classList.remove('dark-mode');
                localStorage.setItem('darkMode', 'false');
            } else {
                // Cambiar a modo oscuro
                document.documentElement.classList.add('dark-mode');
                localStorage.setItem('darkMode', 'true');
            }
        });
    }
}

// Ejecutar cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    initDarkMode();
    // ... el resto de tu código existente
});

// --- Contenido Consolidado de los Documentos (Datos) ---
const DINAMICAS = [
    // Área Afectiva
    { area: "Área Afectiva", grado: "6.º Primaria", nombre: "Clases de música divertidas", objetivo: "Fomentar la expresión de emociones y la autoestima a través de la música.", motivacion: "Presentar canciones alegres y motivadoras. Animar a compartir cómo se sienten. Finalizar con reflexión sobre la importancia de expresar emociones grupales.", referencia: "https://www.youtube.com/watch?v=Y2WrzhKZecA&t=2s" },
    { area: "Área Afectiva", grado: "4.º a 6.º Primaria", nombre: "Coordinación Musical - \"Anaconda\"", objetivo: "Fortalecer los lazos afectivos entre estudiantes a través de la música y la coordinación grupal.", motivacion: "La música y el movimiento son herramientas poderosas para conectar emocionalmente. Experimentar cómo la sincronización genera un ambiente positivo.", referencia: "https://www.youtube.com/watch?v=b0WCcWf4iNA" },
    { area: "Área Afectiva", grado: "1.º a 3.º Primaria", nombre: "\"La Familia Dedos\" - Chiquitín", objetivo: "Stimular la expresión afectiva a través de juegos de manos y canciones.", motivacion: "Disfrutar de un juego que combina ritmo, coordinación y expresión afectiva, promoviendo la acogida mutua.", referencia: "https://www.youtube.com/watch?v=Tf8zL88f33w" },
    { area: "Área Afectiva", grado: "5.º a 6.º Primaria", nombre: "El Tren del Amor", objetivo: "Representar el 'Tren del Amor' con seguridad en sí mismos, promoviendo la expresión emocional y la creatividad grupal.", motivacion: "Permite a cada grupo modificar los pasos de manera original, fomentando la confianza y la colaboración.", referencia: "https://www.youtube.com/watch?v=qqZ9Q3gScfA" },
    
    // Área Emocional
    { area: "Área Emocional", grado: "1.º Primaria", nombre: "Creación de figuras con círculos", objetivo: "Fomentar la expresión creativa a través de figuras.", motivacion: "Crear una figura libre con 36 círculos de colores que represente una emoción, objeto o idea personal, y compartir su significado con el grupo.", referencia: "No disponible" },
    { area: "Área Emocional", grado: "1.º Primaria", nombre: "Secuencias con figuras geométricas (Tangram)", objetivo: "Fortalecer la concentración mediante seriaciones con tangram.", motivacion: "Realizar seriaciones (de lo simple a lo complejo). Al finalizar, expresar cómo se sintieron: felices, tranquilos, frustrados, orgullosos.", referencia: "https://www.youtube.com/watch?v=uGKg2VHVdks" },
    { area: "Área Emocional", grado: "4.º a 6.º Primaria", nombre: "Seven Jumps Dance", objetivo: "Fomentar el equilibrio emocional a través de la música y el movimiento.", motivacion: "Mediante el movimiento del cuerpo, experimentar el ritmo de la música como un medio para desarrollar su crecimiento emocional y expresivo.", referencia: "https://www.youtube.com/watch?v=X1vbDTbJ0UQ" },
    { area: "Área Emocional", grado: "1.º a 3.º Primaria", nombre: "Juegos para Trabajar las Emociones", objetivo: "Fomentar la identificación, expresión y regulación de las emociones en los estudiantes.", motivacion: "Disfrutar de juegos que les permitirán reconocer y expresar sus emociones de manera divertida y educativa.", referencia: "Referencia en formato APA" },
    
    // Área Psicológica
    { area: "Área Psicológica", grado: "6.º Primaria", nombre: "Pitágoras", objetivo: "Fortalecer el razonamiento lógico al explorar la relación entre música y matemáticas.", motivacion: "Mostrar el video 'Donald y Pitágoras', observar proporciones (1:2, 2:3) y experimentar con distintas longitudes de cuerdas para escuchar cambios.", referencia: "https://www.youtube.com/watch?v=p_QbloiWy-8&t=116s" },
    { area: "Área Psicológica", grado: "3.º y 4.º Primaria", nombre: "Pintura al estilo Picasso", objetivo: "Expresar emociones a través del color y las formas.", motivacion: "Crear un retrato, desarrollando imaginación y creatividad, usando colores y formas que reflejen cómo se sienten, mientras aprenden sobre el estilo de Picasso.", referencia: "https://www.youtube.com/watch?v=Bt0uEG3pu4o&t=69s" },
    { area: "Área Psicológica", grado: "1.º a 3.º Primaria", nombre: "Coreokids: \"Soy un superhéroe\"", objetivo: "Fomentar en los estudiantes la autoestima y la confianza en sí mismos mediante el baile de Superman.", motivacion: "Los estudiantes tendrán disfraces para usar, estimulando la imaginación, el juego simbólico y la expresión personal.", referencia: "https://www.youtube.com/watch?v=bY46YUjvaSQ" },
    
    // Área Social
    { area: "Área Social", grado: "5.º a 6.º Primaria", nombre: "Shimi, Shami", objetivo: "Fortalecer la comunicación asertiva en las estudiantes.", motivacion: "Juego rompehielos rítmico y grupal que permite generar confianza, motivación y entusiasmo.", referencia: "https://www.youtube.com/watch?v=Je6FmO4ra70" },
    { area: "Área Social", grado: "3.º a 6.º Primaria", nombre: "Dinámica 'La llenca'", objetivo: "Fomentar la cooperación y la autoestima.", motivacion: "Mostrar un ejemplo de los pasos básicos de la coreografía. Dar un momento para que los estudiantes estiren sus músculos y se relajen.", referencia: "https://www.youtube.com/watch?v=cEHfDRlqs70" },
    { area: "Área Social", grado: "1.º a 3.º Primaria", nombre: "Zumba", objetivo: "Mejorar la coordinación motriz y la cooperación a través de la actividad rítmica.", motivacion: "Preparar un espacio amplio y seguro. Explicar y mostrar movimientos básicos. Realizar la rutina junto con los niños, guiándolos y animándolos.", referencia: "https://www.youtube.com/watch?v=ymigWt5TOV8&t=1s" },
    { area: "Área Social", grado: "1.º a 6.º Primaria", nombre: "Ositos de lana. Manualidad para niños", objetivo: "Cultivar la creatividad y las habilidades manuales mediante la elaboración de una mascota que refleje una moraleja.", motivacion: "Fomentar el trabajo manual acompañado de música instrumental para estimular la concentración y la expresión artística.", referencia: "https://www.youtube.com/watch?v=OW3Gz4Jz8Hg" },
    
    // Área Ética
    { area: "Área Ética", grado: "4.º a 6.º Primaria", nombre: "La maleta de problemas", objetivo: "Reflexionar sobre los problemas cotidianos y cómo afectan decisiones y comportamientos.", motivacion: "Al compartir y reflexionar sobre los problemas, reconocerán la importancia de tomar decisiones éticas que mejoren su bienestar y los conviertan en ciudadanos responsables.", referencia: "https://www.youtube.com/watch?v=coQ6XWODjzc" },
    { area: "Área Ética", grado: "1.º a 3.º Primaria", nombre: "7 juegos Divertidos", objetivo: "Fomentar actividades en casa para mejorar la comunicación.", motivacion: "Los niños disfrutarán en casa ejercitando dinámicas que les permitan divertirse mientras practican valores como el respeto, la cooperación y la responsabilidad.", referencia: "https://www.youtube.com/watch?v=2_RIsnpq0gY&t=2s" },
    { area: "Área Ética", grado: "4.º a 6.º Primaria", nombre: "Duelo del Tangram", objetivo: "Fomentar valores como la cooperación y la paciencia a través del juego Tangram, promoviendo el razonamiento ético.", motivacion: "Despertar el interés por aprender de manera divertida y generar una conversación sobre cómo las decisiones afectan al otro.", referencia: "No disponible" },
    
    // Área Moral
    { area: "Área Moral", grado: "1.º a 3.º Primaria", nombre: "9 juegos para los cumpleaños de los niños", objetivo: "Fortalecer la participación equitativa de los estudiantes, fomentando el respeto y la colaboración durante los juegos.", motivacion: "Aprenderán a concentrarse y respetar los turnos de cada participante, desarrollando habilidades sociales y de convivencia.", referencia: "https://www.youtube.com/watch?v=YKVvQj_b6EE&t=61s" },
    { area: "Área Moral", grado: "4.º a 6.º Primaria", nombre: "El ovillo de lana", objetivo: "Crear dinámicas creativas grupales para aprender a crecer con valores.", motivacion: "Los integrantes expresarán sus conocimientos previos con confianza dentro del grupo.", referencia: "https://www.youtube.com/watch?v=dKkMhYDr6hE" },
    { area: "Área Moral", grado: "3.º a 6.º Primaria", nombre: "𝟱 técnicas de arte Increíbles", objetivo: "Explorar la imaginación de los estudiantes a través de la pintura, favoreciendo el desarrollo de la expresión artística.", motivacion: "La pintura se convierte en un instrumento de expresión y autoconocimiento, fortaleciendo la conciencia sobre sus acciones y su entorno.", referencia: "No disponible" },
    
    // Área Espiritual
    { area: "Espiritualidad Salesiana", grado: "5.º y 6.º Primaria", nombre: "Es un río", objetivo: "Fomentar la reflexión interna reconociendo sus experiencias, desafíos y aprendizajes, y promoviendo la conciencia de su propio crecimiento espiritual.", motivacion: "Imaginar la vida como un río (calma, obstáculos, aprendizajes). El audiovisual crea un ambiente relajado para la introspección.", referencia: "https://www.youtube.com/watch?v=FpdTL2EdEGI" },
    { area: "Espiritualidad Salesiana", grado: "6.º Primaria", nombre: "Mira lo que hizo Dios", objetivo: "Expresar la fe y la alegría a través del baile.", motivacion: "Preparar un espacio amplio y seguro. Practicar los movimientos. Reflexionar sobre el mensaje de la canción.", referencia: "https://www.youtube.com/watch?v=3qj8ESOCJyE&t=1s" },
    { area: "Espiritualidad Salesiana", grado: "1.º a 2.º Primaria", nombre: "Un niño diferente", objetivo: "Que los estudiantes reconozcan que, con la ayuda de Jesús y mediante valores (gratitud, servicio, respeto, alegría), pueden ser 'niños diferentes' en el buen sentido.", motivacion: "Transformar el aula en un ambiente de gozo, donde cada niño sienta la presencia de Jesús, guiando sus acciones.", referencia: "https://www.youtube.com/watch?v=lBHIRogR2SY" },
];

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Funcionalidad de Acordeón (Area Cards) ---
    // Solo ejecutar si estamos en la página de áreas y dinámicas
    const toggleButtons = document.querySelectorAll('.area-toggle-button');
    if (toggleButtons.length > 0) {
        toggleButtons.forEach(button => {
            button.addEventListener('click', () => {
                const content = button.parentElement.nextElementSibling;
                const chevronDown = button.querySelector('.chevron-down');
                const chevronUp = button.querySelector('.chevron-up');

                // Alternar clases de visibilidad
                content.classList.toggle('max-h-0');
                content.classList.toggle('opacity-0');
                content.classList.toggle('max-h-96'); // 24rem = 96 * 0.25rem
                content.classList.toggle('opacity-100');

                // Alternar iconos
                chevronDown.classList.toggle('hidden');
                chevronUp.classList.toggle('hidden');
            });
        });
    }

    // --- 2. Funcionalidad de Pestañas (Dinamicas) ---
    // Solo ejecutar si estamos en la página de áreas y dinámicas
    const tabContainer = document.getElementById('dinamica-tabs');
    const cardContainer = document.getElementById('dinamica-card-container');
    const activeAreaLabel = document.getElementById('dinamica-active-area');
    
    if (tabContainer && cardContainer && activeAreaLabel) {
        let activeTab = "Área Afectiva"; // Estado inicial

        // Función para renderizar las tarjetas de dinámicas
        function renderDinamicas(area) {
            // Limpiar contenedor
            cardContainer.innerHTML = '';
            
            const filteredDinamicas = DINAMICAS.filter(d => d.area === area);

            if (filteredDinamicas.length === 0) {
                cardContainer.innerHTML = `
                    <p class="text-lg text-gray-500 p-10 text-center bg-white rounded-xl shadow-lg md:col-span-2 lg:col-span-3">
                        No se encontraron dinámicas específicas para esta área en los documentos.
                    </p>`;
                return;
            }

            filteredDinamicas.forEach(dinamica => {
                const hasValidReference = dinamica.referencia && dinamica.referencia !== 'No disponible' && dinamica.referencia.startsWith('http');
                const referenceHTML = hasValidReference ? `
                    <a 
                        href="${dinamica.referencia}" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        class="text-yellow-600 hover:text-yellow-700 font-medium text-sm mt-2 inline-flex items-center transition"
                    >
                        Ver Referencia (YouTube)
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                ` : '';

                const cardHTML = `
                    <div class="bg-white p-5 rounded-lg shadow-md border-l-4 border-yellow-500 hover:shadow-lg transition">
                        <h4 class="text-lg font-bold text-gray-800 mb-1">${dinamica.nombre}</h4>
                        <div class="flex flex-wrap gap-2 text-sm mb-3">
                            <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">Grado: ${dinamica.grado}</span>
                        </div>
                        
                        <div class="mb-3">
                            <p class="text-sm font-semibold text-gray-700">Objetivo:</p>
                            <p class="text-sm text-gray-600">${dinamica.objetivo}</p>
                        </div>
                        <div class="mb-3">
                            <p class="text-sm font-semibold text-gray-700">Motivación:</p>
                            <p class="text-sm text-gray-600">${dinamica.motivacion}</p>
                        </div>
                        
                        ${referenceHTML}
                    </div>
                `;
                cardContainer.innerHTML += cardHTML;
            });
        }

        // Manejador de clic en las pestañas
        tabContainer.addEventListener('click', (e) => {
            const clickedButton = e.target.closest('.dinamica-tab-button');
            if (!clickedButton) return;

            const newActiveArea = clickedButton.dataset.area;
            if (newActiveArea === activeTab) return; // No hacer nada si ya está activo

            // Actualizar estado
            activeTab = newActiveArea;
            activeAreaLabel.textContent = activeTab;

            // Actualizar estilos de los botones
            document.querySelectorAll('.dinamica-tab-button').forEach(button => {
              if (button.dataset.area === activeTab) {
                  button.classList.add('bg-magenta', 'text-white', 'shadow-md');
                  button.classList.remove('bg-turquesa-light', 'text-turquesa-dark', 'hover:bg-turquesa', 'hover:text-white');
               } else {
                  button.classList.remove('bg-magenta', 'text-white', 'shadow-md');
                  button.classList.add('bg-turquesa-light', 'text-turquesa-dark', 'hover:bg-turquesa', 'hover:text-white');
               }
           });

            // Renderizar nuevas tarjetas
            renderDinamicas(activeTab);
        });

        // Renderizar el estado inicial (Área Afectiva)
        renderDinamicas(activeTab);
    }
});

// =============================================
// NAVEGACIÓN ACTIVA AUTOMÁTICA
// =============================================

function setActiveNavigation() {
    // Obtener el nombre del archivo actual (ej: "index.html")
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    console.log('Página actual:', currentPage); // Para verificar que funciona
    
    // Seleccionar todos los botones de navegación
    const navButtons = document.querySelectorAll('.nav-button');
    
    navButtons.forEach(button => {
        // Remover clases de estado activo (magenta)
        button.classList.remove('bg-magenta', 'text-white', 'shadow-md');
        
        // Agregar clases de estado normal (turquesa)
        button.classList.add('bg-turquesa-light', 'text-turquesa-dark', 'hover:bg-turquesa', 'hover:text-white');
        
        // Verificar si este botón corresponde a la página actual
        const buttonHref = button.getAttribute('href');
        
        if (buttonHref === currentPage) {
            console.log('Botón activo:', buttonHref); // Para verificar
            // Aplicar estilo activo (magenta)
            button.classList.remove('bg-turquesa-light', 'text-turquesa-dark', 'hover:bg-turquesa', 'hover:text-white');
            button.classList.add('bg-magenta', 'text-white', 'shadow-md');
        }
    });
}

// Ejecutar cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    setActiveNavigation();
    
    // También ejecutar las otras funciones que ya tenías
    // (tu código existente permanece aquí)
});