<template>
  <div class="container is-fluid">
    <input class="input search-input" placeholder="Search for a song..." v-model="search"/>
    <p v-if="$store.state.loading">Good things take time...</p>
    <transition-group tag="div" name="card" class="tile is-ancestor">
        <div class="tile is-parent is-3" v-for="(result,index) in filteredList" :key="result.id.attributes['im:id']">
            <div class="tile is-child">
              <div class="card" tabindex="0">
              <div class="card-image">
                  <a :href="result.id.label">
                  <img :src="result['im:image'][2].label " :alt="result.title.label" />
                  <span class="term-tag">{{result.category.attributes['term']}}</span>
                  </a>
              </div>
              <div class="card-content">
                <span class="song-name">{{result['im:name'].label}}</span>
                <span class="artist-name">{{result['im:artist'].label}}</span>
                <span><b><small>Price:</small></b> {{result['im:price'].label}}</span>
                <span><b><small>Release Date:</small></b> {{result['im:releaseDate'].attributes.label}}</span>
            </div>
          </div>
          </div>
        </div>
      </transition-group>
  </div>
</template>

<script>
export default {
  name: 'ItemList',
  data () {
    return {
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
    this.loading = true
    this.$store.dispatch('loadResult')
    }
  }

</script>

<style scoped lang="scss">
.container {
  padding: 0 60px;

  @media(max-width: 992px) {
    padding: 0 30px;
  }
}

.tile.is-ancestor {
  flex-wrap: wrap;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.button-social {
    padding: 2px 6px !important;
}

.card {
  overflow: hidden;
  box-shadow: none;
  border: 1px solid #eee;
  height: 100%;

  &:hover, &:focus {
    box-shadow: 1px 0 14px 0 #ddd;
    outline: none;

    .card-content {
      bottom: 0;
      transition: 0.3s bottom ease;
    }
  }

  .card-image {
    height: 100%;
    a {
      width: 100%;
      height: 100%;
      display: inline-block;
      position: relative;
      z-index: 1;
    }
    &:after {
      content: '';
      position: absolute;
      background: #eee;
      top:0;
      left:0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }
  }
  .term-tag  {
    position: absolute;
    top: 0;
    background: #ff0000;
    padding: 4px;
    color: #fff;
    right: 0;
    font-weight: bold;
    font-size: 13px;
  }

  .card-content {
    padding: 15px;
    position: absolute;
    bottom: -64px;
    width: 100%;
    background: #fff;
    transition: 0.3s bottom ease;
    z-index: 2;
    span {
      display: block;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 6px;
      &.song-name {
        font-size: 14px;
        margin-bottom: 4px;
      }
      &.artist-name {
        font-size: 13px;
        font-weight: bold;
        margin-bottom: 6px;
      }
    }
  }
}
</style>
