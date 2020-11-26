const secondQuestionChoicesOptionAOptionBResult = {
    components: {

        'audio-container': audioContainer,
        'complement-resources' : complementResources

    },
    template: `

        <div id="second-question-choices_option-A_result-B">
            <div class="ed-container">
                <div class="ed-item s-100 m-100 lg-50 xl-50 d-flex align-items-center">
                    <div class="lateral-image">
                        <img src="img/img3.png" alt="">
                    </div>
                </div>
                <div class="ed-item s-100 m-100 lg-50 xl-50">
                    <div class="choice-identify big">
                        B
                    </div>
                    <div>
                        <ul>
                            <li>                    
                                <b>No es un electrocardiograma</b> en limites normales, tiene una
                                frecuencia de <b>100/min</b>, en ritmo sinusal y el segmento ST presenta
                                un cambio sutil de rectiﬁcación y en V6 tiene <b>tendencia a se
                                descendente</b>
                            </li>
                            <li>
                                Si se interpreto el ecg como normal, tomo una decisión prudente,
                                pues no siempre es fácil ver los cambios sutiles y en un
                                electrocardiograma de control podrá ver posibles cambios dinámicos
                                y ante lo sugestivo del cuadro clínico, debe complementarse con la
                                determinación <b>de troponinas</b> y ver idealmente una <b>placa de torax</b>.
                            </li>
                        </ul>
                    </div>
                    <div class="text-center mt-2em">
                        <a href="javascript:void(0)" @click="$emit('to-location', '/second')" class="btn">Volver por intentarlo</a>
                    </div>
                </div>
            </div>
            <audio-container></audio-container>
            <complement-resources></complement-resources>
        </div>
    
    `,


}