const secondQuestionChoicesOptionA = {

    template: 
    `
        <div id="second-question-choices_option-A">
            <div class="ed-container">
                <div class="ed-item s-100 m-100 lg-70 xl-70 ed-container">
                    <div class="ed-item s-100 m-100 lg-100 xl-100">
                        <div class="choice-identify">
                            A
                        </div>
                        <h2 class="title">¿Qué decisión toma?</h2>
                    </div>
                    <div class="ed-item s-100 m-100 lg-100 xl-100 ed-container">
                        <div class="ed-item s-100 m-100 lg-50 xl-50">
                            <a href="javascript:void(0)" @click="$emit('to-location', '/second-choices-a-option-a-result')" class="choice-container">
                                <div class="choice-identify">
                                    A
                                </div>
                                <p>
                                    Concluye que no es un dolor 
                                    originado en un síndrome coronario
                                    agudo, le explica al paciente, le
                                    formula analgésicos y lo instruye
                                    sobre síntomas de alarma. 
                                </p>
                            </a>
                        </div>
                        <div class="ed-item s-100 m-100 lg-50 xl-50">
                            <a href="javascript:void(0)" @click="$emit('to-location', '/second-choices-a-option-b-result')" class="choice-container">
                                <div class="choice-identify">
                                    B
                                </div>
                                <p>
                                    Por las características del dolor y los
                                    antecedentes del paciente, lo deja en
                                    observación, programa un
                                    electrocardiograma de control en 30
                                    minutos o si vuelve a tener dolor, pide
                                    una determinación de troponinas y
                                    solicita una placa de Torax .
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="ed-item s-100 m-100 lg-30 xl-30">
                    <div class="heart-image">
                        <img src="img/heart.png" alt="Imagen Corazón Humano">
                    </div>
                </div>
            </div>
        </div>
    
    `,

}