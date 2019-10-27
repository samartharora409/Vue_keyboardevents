new Vue ({
    el: '#app',
    data: {
        name: 'Sam',

        age: 25
    },

    methods: {
        logname: function(){
            alert(this.name);
        },

        logage: function(){
            alert(this.age);
        }

    }
});