const firstQuestionChoices = {
    components: {

        'audio-container': audioContainer

    },
    template: `
    
        <h2 class="title">¿Que conducta toma?</h2>
        <div class="ed-container">
            <div class="ed-item s-100 m-100 lg-40 xl-40 mrl-auto">
                <a href="javascript:void(0)" @click="$emit('to-location', '/first-choices-a')" class="choice-container">
                    <div class="choice-identify">
                        A
                    </div>
                    <p>
                        Considera que es un dolor de pecho
                        de origen muscular, le formula un
                        antinﬂamatorio y que consulte
                        ambulatoriamente si tiene síntomas
                        de alarma. 
                    </p>
                </a>
            </div>
            <div class="ed-item s-100 m-100 lg-40 xl-40 mrl-auto">
                <a href="javascript:void(0)" @click="$emit('to-location', '/first-choices-b')" class="choice-container">
                    <div class="choice-identify">
                        B
                    </div>
                    <p>
                        Le explica al paciente que lo va a 
                        estudiar y solicita la toma inmediata
                        de un electrocardiograma.
                    </p>
                </a>
            </div>
        </div>
        <audio-container></audio-container>
    
    `,


}