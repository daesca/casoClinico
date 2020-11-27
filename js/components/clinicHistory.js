const clinicHistory = {

    template: 
    `
        <div id="clinic-history">
            <div class="ed-container full">
                <div class="ed-item s-100 m-100 lg-30 xl-30 backg-orange">
                    <div id="pain-chest-image" class="text-center">
                        <img src="img/pain_chest_image_alt.png" alt="Imagen dolor en el pecho alterna">
                    </div>
                </div>
                <div class="ed-item s-100 m-100 lg-45 xl-45 ed-container backg-orange">
                    <div class="s-100 m-100 lg-50 xl-50">
                        <div class="container-circle-logo-alt">
                            <img src="img/icons/edad.png" alt="Edad">
                            <span><b>47 años</b></span>
                        </div>
                    </div>
                    <div class="s-100 m-100 lg-50 xl-50">
                        <div class="container-circle-logo-alt">
                            <img src="img/icons/dolor.png" alt="Dolor">
                            <span><b>Tengo dolor en el pecho</b></span>
                        </div>
                    </div> 
                    <div class="s-100 m-100 lg-100 xl-100">
                        <p class="text-center text-black">
                            Viene hace <b>3 días</b> con sensación <b>opresiva en tórax</b> que solo aparece en relación
                            con el esfuerzo físico, presento dos episodios el día de hoy con dolor esternal,
                            opresivo <b>de 10 minutos</b> de duración, mientras jugaba con sus hijos, irradiado a
                            cuello, acompañado de <b>disnea y diaforesis</b>, sin vértigo, ni 
                            palpitaciones , ni nauseas, como fue de una intensidad de <b>8/10</b> lo hace consultar
                        </p>

                        <p class="text-center text-black">
                            Tiene como antecedentes: HTA manejada con <b>losartan</b> y su
                            padre tuvo un <b>IAM</b>
                            EF: PA: 143/98, FC: 80/min FR: 20/ min, 
                            Buenas condiciones generales No hay 
                            hallazgos anormales 
                        </p>
                    </div>  
                </div>
                <div class="ed-item s-100 m-100 lg-10 xl-10 backg-orange pain-chest-alt_lateral_borders">
                    <a href="javascript:void(0)" @click="activeSection" class="pain-chest-alt_lateral">
                        <div class="back-icon">
                            <img src="" alt="">
                        </div>
                        <div class="globe-icon">
                            <img src="img/icons/historia.png" alt="Icono Historia">
                        </div>
                        <span class="text-white"><b>HISTORIAL CLÍNICO</b></span>
                    </a>
                </div>
            </div>
        </div>

    `,

    methods:{

        activeSection(){

            let element = document.querySelector("#clinic-history");

            if(element.classList.contains('active')){

                element.classList.remove('active');

            }else{

                element.classList.add('active');

            }

        }

    }

}