const thirdQuestionChoices = {

    template: 
    `
        <div id="third-question-choices">
            <h2 class="title">3.- Como interpreta este electrocardiograma</h2>
            <div class="ed-container">
                <div class="ed-item s-100 m-100 lg-1-3 xl-1-3 ml-auto">
                    <a href="javascript:void(0)" @click="$emit('to-location', '/third-choices-a')" class="choice-container">
                        <div class="choice-identify">
                            A
                        </div>
                        <p>
                        3.1.- No hay cambios
                        </p>
                    </a>
                </div>
                <div class="ed-item s-100 m-100 lg-1-3 xl-1-3 mr-auto">
                    <a href="javascript:void(0)" @click="$emit('to-location', '/third-choices-b')" class="choice-container">
                        <div class="choice-identify">
                            B
                        </div>
                        <p>
                            3.2- Hay cambios dinámicos de la
                            repolarización
                        </p>
                    </a>
                </div>
            </div>
        </div>       
    
    `


}