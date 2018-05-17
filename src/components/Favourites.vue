<template>
  <div class="container is-fluid">
    <h1>{{ msg }}</h1>
    <h2>Your favourites</h2>
    <div v-if="$store.state.favourites.length <= 0" class="empty-cart">
      <p>Wow, such empty! 😞</p>
      <router-link to="/">
        <button>Browse!</button>
      </router-link>
    </div>
    <div v-else>
      <input class="input" placeholder="Search..." v-model="search"/>
      <router-link to="/" exact>Home</router-link>

      <div class="tile is-ancestor">

          <div class="tile is-parent is-3" v-for="fav in filteredList">
              <div class="tile is-child">
                <div class="card">
                <div class="card-image">
                  <a :href="fav.result.id.label">
                  <span v-for="i in fav.result" v-if="i[1]">
                    <img :src="i[2].label " />
                  </span>
                  </a>
                </div>
                <div class="card-content">
                  <p>
                    {{fav.result.title.label}}
                  </p>
              </div>
            </div>

            </div>
          </div>
    </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Favourites',
  data () {
    return {
      msg: 'Welcome to bTunes!',
      search: ''
    }
  },
  computed: {
    filteredList () {
      return this.$store.state.favourites.filter(result => {
      return result.result.title.label.toLowerCase().includes(this.search.toLowerCase())
    })
    }
  },
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.tile.is-ancestor {
  flex-wrap: wrap;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
