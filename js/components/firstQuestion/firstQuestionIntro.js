const firstQuestionIntro = {
    mounted(){

        document.querySelector('body').classList.remove('backg-initial');

    },
    template: `
    
        <div id="first-question-intro">
            <div class="ed-container">
                <div class="ed-item s-100 m-100 lg-50 xl-50">
                    <div id="pain-chest-image">
                        <img src="img/pain_chest_image.png" alt="Imagen dolor en el pecho">
                    </div>
                </div>
                <div class="ed-item s-100 m-100 lg-50 xl-50 ed-container full">
                    <div class="s-100 m-100 lg-50 xl-50">
                        <div class="container-circle-logo">
                            <img src="img/icons/edad_color.png" alt="Edad">
                            <span><b>47 años</b></span>
                        </div>
                    </div>
                    <div class="s-100 m-100 lg-50 xl-50">
                        <div class="container-circle-logo">
                            <img src="img/icons/dolor_color.png" alt="Dolor">
                            <span><b>Tengo dolor en el pecho</b></span>
                        </div>
                    </div> 
                    <div class="s-100 m-100 lg-100 xl-100">
                        <p class="text-center">
                            Viene hace <b>3 días</b> con sensación <b>opresiva en tórax</b> que solo aparece en relación
                            con el esfuerzo físico, presento dos episodios el día de hoy con dolor esternal,
                            opresivo <b>de 10 minutos</b> de duración, mientras jugaba con sus hijos, irradiado a
                            cuello, acompañado de <b>disnea y diaforesis</b>, sin vértigo, ni 
                            palpitaciones , ni nauseas, como fue de una intensidad de <b>8/10</b> lo hace consultar
                        </p>
                        <div class="container-box">
                            <p class="text-center">
                                Tiene como antecedentes: HTA manejada con <b>losartan</b> y su
                                padre tuvo un <b>IAM</b>
                                EF: PA: 143/98, FC: 80/min FR: 20/ min, 
                                Buenas condiciones generales No hay 
                                hallazgos anormales 
                            </p>
                        </div>
                        <div class="text-center mt-2em">
                            
                            <a href="javascript:void(0)" @click="$emit('to-location', 'first-choices')" class="btn">pregunta</a>
                        </div>
                    </div>  
                </div>
            </div>
        </div>

    `,

};