Vue.component('filter-el', {
    data() {
        return {
            userSearch: ''
        }
    },
    template: `
        <form action="#" class="searchForm" @submit.prevent="$parent.$refs.products.filter(userSearch)">
            <input type="text" class="search-goods" v-model="userSearch">
            <button class="search-button" type="submit">
                <i class="fas fa-search"></i>
            </button>
        </form> 
    `
});