const secondQuestionChoicesOptionBOptionAResult = {
    components: {

        'audio-container': audioContainer,
        'complement-resources' : complementResources

    },
    template: `

        <div id="second-question-choices_option-B_result-A">
            <div class="ed-container">
                <div class="ed-item s-100 m-100 lg-50 xl-50">
                    <div class="choice-identify big">
                        A
                    </div>
                    <div>
                        <ul>
                            <li>                    
                                Aunque el dolor <b>es característico</b>, los cambios del
                                electrocardiograma <b>no son contundentes</b> para tomar una decisión de
                                remitir el paciente aun. Se debe evaluar evolución y un
                                electrocardiograma de control donde  podrá ver posibles cambios
                                dinámicos, complementar con la <b>determinación de troponinas</b> e
                                idealmente ver <b>una placa de tórax</b>.
                                
                            </li>
                            <li>
                                Usted esta tratando de darle la mayor seguridad a su paciente, pero
                                va a recibir <b>una nota donde le critican una remisión inapropiada.</b>
                            </li>

                        </ul>
                    </div>
                    <div class="text-center mt-2em">
                        <a href="javascript:void(0)" @click="$emit('to-location', '/second')" class="btn">Volver por intentarlo</a>
                    </div>
                </div>
                <div class="ed-item s-100 m-100 lg-50 xl-50 d-flex align-items-center">
                    <div class="lateral-image">
                        <img src="img/img2.png" alt="">
                    </div>
                </div>
            </div>
            <audio-container></audio-container>
            <complement-resources></complement-resources>
        </div>
    
    `,


}