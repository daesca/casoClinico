const firstQuestionChoicesOptionBResult = {
    components: {

        'audio-container': audioContainer,

    },
    // mounted(){

    //     document.addEventListener( 'DOMContentLoaded', function () {    
    //         new Splide( '.splide' ).mount();
    //     } );

    // },
    template: `
        <script>
            document.addEventListener( 'DOMContentLoaded', function () {    
                new Splide( '.splide' ).mount();
            } );
        </script>
        <div class="ed-container">
            <div class="ed-item s-100 m-100 lg-5 xl-5">
                <div class="choice-identify big m-none">
                    B
                </div>
            </div>
            <div class="ed-item s-100 m-100 lg-95 xl-95 text-center">
                Es la conducta correcta, mientras se toma el electrocardiograma, ampliar la historia, indagar sobre la edad a la cual sufrió el IAM el padre y por
                otros factores de riesgo cardiovascular (sedentarismo, dislipidemia, aspectos emocionales). Este es el electrocardiograma que se tomo a los 7
                minutos de ingresar a urgencias:
            </div>
            <div class="ed-item s-100 m-100 lg-100 xl-100 text-center">
                <div class="splide">
                    <div class="splide__arrows">
                        <button class="splide__arrow splide__arrow--prev">
                            <img src="img/slide_images/izquierda.png" alt="Tirador Slider Izquierdo">
                        </button>
                        <button class="splide__arrow splide__arrow--next">
                            <img src="img/slide_images/derecha.png" alt="Tirador Slider Derecho">
                        </button>
                    </div>
                    
                    <div class="splide__track">
                        <ul class="splide__list">
                            <li class="splide__slide">
                                <div class="image-slider">
                                    <img src="img/slide_images/Imagen1.png" alt="Cardiograma">
                                </div>
                            </li>
                            <li class="splide__slide">
                                <div class="image-slider">
                                    <img src="img/slide_images/Imagen2.png" alt="Cardiograma">
                                </div>
                            </li>
                            <li class="splide__slide">
                                <div class="image-slider">
                                    <img src="img/slide_images/Imagen3.png" alt="Cardiograma">
                                </div>
                            </li>
                            <li class="splide__slide">
                                <div class="image-slider">
                                    <img src="img/slide_images/Imagen4.png" alt="Cardiograma">
                                </div>
                            </li>
                            <li class="splide__slide">
                                <div class="image-slider">
                                    <img src="img/slide_images/Imagen5.png" alt="Cardiograma">
                                </div>
                            </li>
                            <li class="splide__slide">
                                <div class="image-slider">
                                    <img src="img/slide_images/Imagen6.png" alt="Cardiograma">
                                </div>
                            </li>
                            <li class="splide__slide">
                                <div class="image-slider">
                                    <img src="img/slide_images/Imagen7.png" alt="Cardiograma">
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="ed-item s-100 s-center m-center lg-center xl-center mt-2em">
                <a href="javascript:void(0)" @click="$emit('to-location', '/second')" class="btn">Siguiente pregunta</a>
            </div>
        </div>
        <audio-container></audio-container>
    `,


}