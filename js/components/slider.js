const slider = {
    setup() {
        onMounted(() => {
            document.addEventListener( 'DOMContentLoaded', function () {
                new Splide( '.splide' ).mount();
            } );
        })
    },
    template: `
 
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
                                
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    
    `,

}