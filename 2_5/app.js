new Vue({
    el: '#app',
    data: {
        title: 'Learning Vue',
        name: 'Nick',
        url: 'http://www.youtube.com',
        classes:['one', 'two']
    },
    methods: {
        greet(time){
            return `Hello there, ${this.name} the time is currently ${time}`
        }
    }
})