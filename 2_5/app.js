new Vue({
    el: '#app',
    data: {
        title: 'Learning Vue',
        name: 'Nick'
    },
    methods: {
        greet(time){
            return `Hello there, ${this.name} the time is currently ${time}`
        }
    }
})