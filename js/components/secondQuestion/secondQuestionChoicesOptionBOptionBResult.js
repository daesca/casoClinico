const secondQuestionChoicesOptionBOptionBResult = {
    components: {

        'audio-container': audioContainer,
        'complement-resources' : complementResources

    },
    template: `

        <div id="second-question-choices_option-B_result-B">
            <div class="ed-container">
                <div class="ed-item s-100 m-100 lg-50 xl-50">
                    <div class="choice-identify big">
                        B
                    </div>
                    <div>
                        <ul>
                            <li>                    
                                <b>Decisión correcta</b>, aunque el dolor es característico, los cambios del
                                electrocardiograma no son contundentes para tomar una decisión de
                                <b>remitir el paciente aun</b> y se debe evaluar la evolución y esperar a ver
                                un nuevo electrocardiograma de control donde  podrá ver <b>posibles
                                cambios dinámicos</b> y con los resultados de la <b>determinación de
                                troponinas</b> y la <b>placa de tórax</b>, podrá tomar una <b>decisión apropiada.</b>
                                
                            </li>
                        </ul>
                    </div>
                    <div class="text-center mt-2em">
                        <a href="javascript:void(0)" @click="$emit('to-location', '/third-intro')" class="btn">Siguiente pregunta</a>
                    </div>
                </div>
                <div class="ed-item s-100 m-100 lg-50 xl-50 d-flex align-items-center">
                    <div class="lateral-image">
                        <img src="img/img3.png" alt="">
                    </div>
                </div>
            </div>
            <audio-container></audio-container>
        </div>
    
    `,


}