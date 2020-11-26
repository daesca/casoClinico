const thirdQuestionChoicesOptionA = {
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
                            A
                        </div>
                        <h2 class="title">¿Qué decisión toma?</h2>
                    </div>
                    <div class="ed-item s-100 m-100 lg-100 xl-100 ed-container">
                        <div class="ed-item s-100 m-100 lg-50 xl-50">
                            <a href="javascript:void(0)" @click="$emit('to-location', '/third-choices-a-option-a-result')" class="choice-container">
                                <div class="choice-identify">
                                    A
                                </div>
                                <p>
                                    3.1.1.- Con esta conclusión, las 
                                    troponinas negativas y la placa de
                                    tórax en limites normales, descarta
                                    que el origen del dolor sea coronario.
                                    Le explica al paciente y lo da de alta,
                                    con analgésicos e instrucciones.
                                </p>
                            </a>
                        </div>
                        <div class="ed-item s-100 m-100 lg-50 xl-50">
                            <a href="javascript:void(0)" @click="$emit('to-location', '/third-choices-a-option-b-result')" class="choice-container">
                                <div class="choice-identify">
                                    B
                                </div>
                                <p>
                                    3.1.2.- Con esta conclusión, las troponinas
                                    negativas y la placa de tórax en limites
                                    normales, disminuye la posibilidad que el
                                    origen del dolor sea coronario, pero por las
                                    características del dolor, debe solicitar una
                                    prueba de inducción de isquemia como una
                                    prueba de esfuerzo convencional o una
                                    ecocardiografía de estrés con ejercicio los
                                    próximos días. Le explica al paciente y le insiste
                                    en que mientras le hacen la evaluación si
                                    vuelve a tener dolor de pecho acuda de nuevo
                                    a urgencias.
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