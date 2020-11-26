const thirdQuestionChoicesOptionBOptionAResult = {
    components: {

        'audio-container': audioContainer,
        'complement-resources' : complementResources

    },
    template: `

        <div id="third-question-choices-option-B-option-A-result">
            <div class="ed-container">
                <div class="ed-item s-100 m-100 lg-50 xl-50 d-flex align-items-center">
                    <div class="lateral-image">
                        <img src="img/icons/img5.png" alt="Logo Gafas">
                    </div>
                </div>
                <div class="ed-item s-100 m-100 lg-50 xl-50">
                    <div class="choice-identify big">
                        A
                    </div>
                    <div>
                        <ul>
                            <li>                    
                                <b>Puede ser una opción</b>, pero por  los cambios dinámicos del
                                segmento ST, a ese paciente se le debe hacer una <b>evaluación
                                invasiva</b> de las arterias coronarias. Si se da de alta, puede
                                desarrollar un IAM o tener una <b>muerte súbita</b> que se pudo
                                prevenir.
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