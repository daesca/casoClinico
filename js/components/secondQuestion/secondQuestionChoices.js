const secondQuestionChoices = {
    components: {

        'audio-container': audioContainer

    },
    template: `
    
        <div id="second-question-choices">
            <h2 class="title">¿Cómo interpreta el <br>
                electrocardiograma anterior?</h2>
            <div class="ed-container">
                <div class="ed-item s-100 m-100 lg-1-3 xl-1-3">
                    <a href="javascript:void(0)" @click="$emit('to-location', '/second-choices-a')" class="choice-container">
                        <div class="choice-identify">
                            A
                        </div>
                        <p>
                            2.-1.- Esta en limites normales
                        </p>
                    </a>
                </div>
                <div class="ed-item s-100 m-100 lg-1-3 xl-1-3">
                    <a href="javascript:void(0)" @click="$emit('to-location', '/second-choices-b')" class="choice-container">
                        <div class="choice-identify">
                            B
                        </div>
                        <p>
                            2.-2.-Tiene una taquicardia sinusal y
                            cambios inespecíﬁcos de la
                            repolarización.
                        </p>
                    </a>
                </div>
                <div class="ed-item s-100 m-100 lg-1-3 xl-1-3">
                    <a href="javascript:void(0)" @click="$emit('to-location', '/second-choices-c-result')" class="choice-container">
                        <div class="choice-identify">
                            C
                        </div>
                        <p>
                            2.3.- Presenta cambios deﬁnidos para
                            concluir que tiene un IAM
                        </p>
                    </a>
                </div>
            </div>
        </div>
    
    `,


}