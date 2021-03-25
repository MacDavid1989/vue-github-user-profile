// github user card component
Vue.component('github-user-card',{
    // template the component is referencing
    template: '#github-user-card-template',
    // props defined so that the component will accept the values passed
    props: {
        username: {
            type: String,
            required: true
        }
    },
    // lifecycle hook makes an axios request when the username is submitted 
    updated(){
        axios
        .get(`https://api.github.com/users/${this.username}`)
        .then(response => {
            // sets the user data object to the response.data
            return this.user = response.data
        })
        .catch(console.error())
    },
    data() {
        return {
            user: {}
        }
    },
    computed: {
        // computed profile property to provide a profile link when the username is entered
        profile: function() {
            return `https://github.com/${this.username}`
        },
        // computed followers property to provide a followers link when the username is entered
        followers: function() {
            return `https://github.com/${this.username}?tab=followers`
        },
    }
})

// New Vue Instance
new Vue({
    // Element in which the instance will be created
    el: '#app',
    // Root data object
    data: {
        username: ""
    },
    methods: {
        // method to set data username of root to the input value
        submit(event) {
            this.username = event.target.value
        }
    }
})