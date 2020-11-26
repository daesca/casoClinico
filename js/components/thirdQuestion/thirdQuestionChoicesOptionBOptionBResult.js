const thirdQuestionChoicesOptionBOptionBResult = {
    components: {

        'audio-container': audioContainer,

    },
    template: `

        <div id="third-question-choices-option-A-option-B-result">
            <div class="ed-container">
                <div class="ed-item s-100 m-100 lg-50 xl-50 d-flex align-items-center">
                    <div class="lateral-image">
                        <img src="img/icons/img4.png" alt="Logo Estetoscopio">
                    </div>
                </div>
                <div class="ed-item s-100 m-100 lg-50 xl-50">
                    <div class="choice-identify big">
                        B
                    </div>
                    <div>
                        <ul>
                            <li>                    
                                Es la <b>opción correcta</b>, pues los cambios dinámicos, están
                                indicando un <b>síndrome coronario agudo</b> que requiere una
                                evaluación prioritaria de la anatomía de las <b>arterias coronarias</b>
                            </li>
                        </ul>
                    </div>
                    <div class="text-center mt-2em">
                        <a href="javascript:void(0)" @click="$emit('to-location', '/final')" class="btn">Siguiente</a>
                    </div>
                </div>
            </div>
            <audio-container></audio-container>
        </div>
    
    `,


}