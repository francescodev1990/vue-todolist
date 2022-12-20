const { createApp } = Vue;

createApp({
    data() {
        return {
            todolist: [
                'Comprare il pane',
                'Comprare la frutta',
                'Comprare il cane',
                'Comprare il gatto',
                'Comprare il pappagallo',
                'Creare un recinto per animali',
            ]
        }
    }
}).mount('#app');