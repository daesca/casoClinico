const thirdQuestionChoicesOptionB = {
    components: {

        'audio-container': audioContainer,

    },
    template: 
    `
        <div id="third-question-choises-option-a">
            <div class="ed-container">
                <div class="ed-item s-100 m-100 lg-70 xl-70 ed-container">
                    <div class="ed-item s-100 m-100 lg-100 xl-100">
                        <div class="choice-identify">
                            B
                        </div>
                        <h2 class="title">¿Cual es entonces su decisión?</h2>
                    </div>
                    <div class="ed-item s-100 m-100 lg-100 xl-100 ed-container">
                        <div class="ed-item s-100 m-100 lg-50 xl-50">
                            <a href="javascript:void(0)" @click="$emit('to-location', '/third-choices-b-option-a-result')" class="choice-container">
                                <div class="choice-identify">
                                    A
                                </div>
                                <p>
                                    1.- Lo da de alta , programando una
                                    prueba de inducción de isquemia o
                                    una TAC de coronarias lo mas pronto
                                    posible y lo instruye sobre síntomas
                                    de alarma. 
                                </p>
                            </a>
                        </div>
                        <div class="ed-item s-100 m-100 lg-50 xl-50">
                            <a href="javascript:void(0)" @click="$emit('to-location', '/third-choices-b-option-b-result')" class="choice-container">
                                <div class="choice-identify">
                                    B
                                </div>
                                <p>
                                    2.- Lo remite a una institución donde puedan
                                    hacer una coronariografía. 
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="ed-item s-100 m-100 lg-30 xl-30">
                    <div class="heart-image">
                        <img src="img/heart.png" alt="Imagen Corazón Humano">
                    </div>
                </div>
            </div>
            <audio-container></audio-container>
        </div>
    
    `
}