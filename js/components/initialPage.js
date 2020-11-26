const initialPage = {
    mounted(){

        document.querySelector('body').classList.add('backg-initial');

    },
    template: `
    <div id="main">
        <div class="ed-container">
            <div class="ed-item s-100 m-100 lg-45 xl-45 lg-to-right xl-to-right">
                <img src="img/logos/logo_curso.png" alt="Logo de Curso">
            </div>
            <div class="ed-item s-100 m-100 lg-25 xl-25 lg-to-left xl-to-left text-size-1-2rem">
                <p>
                    Una de las estrategias educativas en la <b>investigación</b> de modalidades de enseñanza significativa de la <b>electrocardiografía</b>
                </p>
            </div>
            <div class="ed-item s-100 s-center m-center lg-center xl-center mt-2em">
                <a href="javascript:void(0)" @click="$emit('to-location', '/first')" class="btn">Conocer caso clínico</a>
            </div>
        </div>
    </div>
    
    `,
    methods: {
        // goToFirstIntro() {
        //     this.$router.push({ path: '/first' })
        // },
    }

}