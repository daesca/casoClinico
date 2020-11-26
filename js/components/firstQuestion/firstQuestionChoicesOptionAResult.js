const firstQuestionChoicesOptionAResult = {
    components: {

        'audio-container': audioContainer,
        'complement-resources' : complementResources

    },
    template: `

    <div class="ed-container">
        <div class="ed-item s-100 m-100 lg-50 xl-50">
            <div class="choice-identify big">
                A
            </div>
            <p class="text-center">
                A pesar de ser un hombre joven, <b>sin factores de riesgo cardiovascular</b>
            con excepción del antecedente familiar (se debe preguntar a <b>que edad
                tuvo el padre el IAM</b>), tiene un dolor anginoso característico sugestivo de
            un <b>síndrome coronario agudo</b> y debe descartarse ese diagnostico,
            iniciando con la toma de un electrocardiograma lo mas pronto posible
            <b>(antes de 10 minutos de haber llegado al servicio de urgencias)</b>. Si esta
            es la causa de dolor de pecho y no se hace el manejo adecuado del
            paciente y se da de alta sin estudiarlo, tiene un riesgo muy alto de
            regresar con un infarto agudo de miocardio en evolución <b>o sufrir una
                muerte súbita.</b>
            </p>
            <div class="text-center mt-2em">      
                <a href="javascript:void(0)" @click="$emit('to-location', 'first-choices')" class="btn">Volver a intentarlo</a>
            </div>
        </div>
        <div class="ed-item s-100 m-100 lg-50 xl-50">
            <div class="lateral-image">
                <img src="img/icons/muerto.png" alt="Logo Cruz">
            </div>
        </div>
    </div>
    <audio-container></audio-container>
    <complement-resources></complement-resources>
    
    `,


}