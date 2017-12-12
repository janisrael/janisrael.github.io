var my_view = new Vue({
    el: '#my_view',

    ready: function() {

        // GET request
        this.$http.get('http://digitaliron.com/jan_tools/janisrael.github.io/my-rest-api/department/read.php', function (data) {
            // set data on vm
            this.$set('data', data)

        }).error(function (data, status, request) {
            // handle error
        })

      }
})