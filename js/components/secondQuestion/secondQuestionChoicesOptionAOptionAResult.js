const secondQuestionChoicesOptionAOptionAResult = {
    components: {

        'audio-container': audioContainer,
        'complement-resources' : complementResources

    },
    template: `

        <div id="second-question-choices_option-A_result-A">
            <div class="ed-container">
                <div class="ed-item s-100 m-100 lg-50 xl-50 d-flex align-items-center">
                    <div class="lateral-image">
                        <img src="img/icons/muerto.png" alt="Logo Cruz">
                    </div>
                </div>
                <div class="ed-item s-100 m-100 lg-50 xl-50">
                    <div class="choice-identify big">
                        A
                    </div>
                    <div>
                        <ul>
                            <li>                    
                                <b>No es un electrocardiograma</b> en limites normales, tiene una
                                frecuencia de <b>100/min</b>, en ritmo sinusal y el segmento ST
                                presenta un cambio sutil de rectiﬁcación y en V6 tiene
                                tendencia a se descendente.
                            </li>
                            <li>
                                Estos cambios sutiles obligan a vigilar estrechamente al
                                paciente, <b>solicitar un electrocardiograma</b> de control para ver
                                posibles cambios dinámicos e idealmente solicitar una
                                determinación de troponinas y una placa de tórax.
                            </li>
                            <li>
                                Si lo da de alta, <b>tiene un riesgo alto</b> de regresar con un <b>infarto
                                    de miocardio</b> en evolución o muerto.
                            </li>
                        </ul>
                    </div>
                    <div class="text-center mt-2em">
                        <a href="javascript:void(0)" @click="$emit('to-location', 'second')" class="btn">Volver por intentarlo</a>
                    </div>
                </div>
            </div>
            <audio-container></audio-container>
            <complement-resources></complement-resources>
        </div>
    
    `,


}