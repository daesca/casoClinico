const thirdQuestionChoicesOptionAOptionBResult = {
    components: {

        'audio-container': audioContainer,
        'complement-resources' : complementResources

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
                                <b>Así no haya visto los cambios</b> dinámicos en la repolarización, las
                                troponinas negativas y la placa de tórax en limites normales, el
                                hecho de tener un <b>dolor anginoso característico</b>, debe solicitar
                                una prueba de <b>inducción de isquemia</b> como una prueba de
                                esfuerzo convencional o una ecocardiografía de estrés con
                                ejercicio o una <b>TAC de coronarias</b> los próximos días . Le explica al
                                paciente y le insiste en que mientras le hacen la evaluación si
                                vuelve a tener dolor de pecho <b>acuda de nuevo a urgencias.</b>
                            </li>
                        </ul>
                    </div>
                    <div class="text-center mt-2em">
                        <a href="javascript:void(0)" @click="$emit('to-location', '/third-choices')" class="btn">Volver por intentarlo</a>
                    </div>
                </div>
            </div>
            <audio-container></audio-container>
            <complement-resources></complement-resources>
        </div>
    
    `,


}