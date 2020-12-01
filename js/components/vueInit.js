const app = Vue.createApp({
    components: {
        'header-template': headerTemplate,
        'clinic-history': clinicHistory,
        'audio-container': audioContainer,
        'complement-resource': complementResources,
        'footer-template': footerTemplate
    },

});

app.mount('#app');