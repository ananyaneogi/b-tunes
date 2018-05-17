<template>
  <div class="container is-fluid">
    <h1>{{ msg }}</h1>
    <input class="input" placeholder="Search..." v-model="search"/>
    <div class="tile is-ancestor">

        <div class="tile is-parent is-3" v-for="result in filteredList">
            <div class="tile is-child">
            <!-- <a :href="result.id.label">
            <span v-for="i in result" v-if="i[1]">
              <img :src="i[2].label " :alt="result.title.label" />
            </span>
            </a>
              <p>
                <span v-for="i in result">{{i[3]}}</span>
                {{result.title.label}}
                  <input type="checkbox" @change="addToFavourite(result)">
              </p> -->

              <div class="card">
              <div class="card-image">
                  <a :href="result.id.label">
                  <span v-for="i in result" v-if="i[1]">
                    <img :src="i[2].label " :alt="result.title.label" />
                  </span>
                  </a>
              </div>
              <div class="card-content">
                <span></span>
                <span v-for="i in result">{{i[3]}}</span>
                {{result.title.label}}
                <input type="checkbox" @change="addToFavourite(result)">
            </div>
          </div>

          </div>
        </div>
  </div>
  </div>
</template>

<script>

export default {
  name: 'ItemList',
  data () {
    return {
      msg: 'Welcome to bTunes!',
      search: ''
    }
  },
  computed: {
    filteredList () {
      return this.$store.state.results.filter(result => {
      return result.title.label.toLowerCase().includes(this.search.toLowerCase())
    })
    }
  },
  created () {
    this.$store.dispatch('loadResult')
  },
  methods: {
    addToFavourite(result) {
    this.$store.dispatch('addToFavourite', result)
    }
  }
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

img.ui.image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
