const secondQuestionChoicesOptionCResult = {
    components: {

        'audio-container': audioContainer,
        'complement-resources': complementResources

    },
    template: 
    `
        <div id="second-question-choices_option-C-result">
            <div class="ed-container">
                <div class="ed-item s-100 m-100 lg-70 xl-70 ed-container">
                    <div class="ed-item s-100 m-100 lg-50 xl-50 mrl-auto">
                        <div class="choice-identify">
                            C
                        </div>
                        <p class="text-center">
                            <b>No hay signos de infarto agudo de miocardio</b> y si
                            usted toma una decisión de manejarlo como tal,
                            puede <b>poner en riesgo</b> de tener una complicación
                            hemorrágica severa, o si lo remite con ese diagnostico,
                            va a recibir una <b>nota de remisión inadecuada</b>.
                        </p>
                        <div class="text-center mt-2em">
                            <a href="javascript:void(0)" @click="$emit('to-location', 'second')" class="btn">Volver por intentarlo</a>
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
            <complement-resources></complement-resources>
        </div>
    
    `,

}