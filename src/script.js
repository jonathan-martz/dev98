document.addEventListener("DOMContentLoaded", function () {
    let app = new Vue({
        el: '#app',
        data: {
            channel: {
                image: {
                    url: ''
                }
            }
        },
        methods: {
            load: function () {
                let that = this;
                fetch('https://rss-to-json.digital/read.php')
                    .then(response => response.json())
                    .then(function(data){
                       that.channel = data.channel;
                    });
            },
            parseDate: function(data){
                return data;
            }
        },
        mounted() {
            this.load();
        }
    })

});