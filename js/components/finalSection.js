const finalSection = {
    components: {

        'audio-container': audioContainer,

    },
    template: 
    `   
        <div id="final-section">
            <div class="ed-container">
                <div class="ed-item s-100 m-100 lg-95 xl-95 text-center">
                    <p>
                        Los colegas no apreciaron los cambios sutiles de la repolarización, lo dejaron en observación 6 horas, le tomaron este electrocardiograma a las 6 horas y la 
                        troponina fue negativa. Se dio de alta y se programo una prueba de esfuerzo que se hizo a los 3 días, la cual fue positiva para enfermedad coronaria, se remitió
                        para coronariografía, la cual mostro una lesión del 90 en la descendente anterior y se realizo una ACTP mas colocación de stent.
                    </p>
                </div>
                <div class="ed-item s-100 m-100 lg-100 xl-100 text-center">
                    <div>
                        <img src="img/slide_images/Imagen7.png" alt="Cardiograma">
                    </div>
                </div>
                <div class="ed-item s-100 s-center m-center lg-center xl-center mt-2em">
                    <a href="javascript:void(0)" @click="$emit('to-location', '/second')" class="btn">Finalizar</a>
                </div>
            </div>
            <audio-container></audio-container>
        </div>

    `

}