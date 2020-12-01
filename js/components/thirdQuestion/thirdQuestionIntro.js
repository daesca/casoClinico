const thirdQuestionIntro = {
    components:{
        'slider' : slider
    },
    template:
    `
        <div class="ed-container">
            <div class="ed-item s-100 m-100 lg-95 xl-95 text-center">
                Este es el <b>electrocardiograma tomado a la hora de haber ingresado</b>, las troponinas convencionales son informadas como negativas y la placa de tórax fue
                <b>leída como en limites normales</b>.
            </div>
            <slider></slider>
            <div class="ed-item s-100 s-center m-center lg-center xl-center mt-2em">
                <a href="javascript:void(0)" @click="$emit('to-location', '/third-choices')" class="btn">Siguiente pregunta</a>
            </div>
        </div>
    
    `

}