var my_view = new Vue({
    el: '#my_view',

    ready: function() {

        // GET request
        this.$http.get('http://127.0.0.1:8000/api/task/1', function (data) {
            // set data on vm
            this.$set('data', data)

        }).error(function (data, status, request) {
            // handle error
        })

      }
})