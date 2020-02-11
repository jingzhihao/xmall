import Vue from 'vue'

Vue.prototype.$go = function(id) {
    this.$router.push({
        name: 'detail',
        params: {
            id: id
        }
    })
}