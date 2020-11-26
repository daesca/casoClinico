const thirdQuestionChoicesOptionAOptionAResult = {
    components: {

        'audio-container': audioContainer,
        'complement-resources' : complementResources

    },
    template: `

        <div id="third-question-choices-option-A-option-A-result">
            <div class="ed-container">
                <div class="ed-item s-100 m-100 lg-50 xl-50 d-flex align-items-center">
                    <div class="lateral-image">
                        <img src="img/icons/img4.png" alt="Logo Estetoscopio">
                    </div>
                </div>
                <div class="ed-item s-100 m-100 lg-50 xl-50">
                    <div class="choice-identify big">
                        A
                    </div>
                    <div>
                        <ul>
                            <li>                    
                                Ante un <b>dolor anginoso</b> característico, así no se hayan visto los
                                cambios dinámicos que se aprecian  en el electrocardiograma de
                                control, se debe cerrar la investigación con una <b>prueba de
                                inducción de isquemia o una tac de coronarias</b>. Pues el paciente
                                puede desarrollar próximamente un IAM si tiene una <b>obstrucción
                                coronaria</b> que se esta desestabilizando
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