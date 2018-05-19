<template>
    <nav>
      <router-link to="/" exact>
        <span class="logo"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="#ff0000"><circle cx="19" cy="33" r="9"/><path d="M24 6v27h4V14l11 3v-7z"/></g></svg>bTunes!</span>
      </router-link>
      <div class="social-share">
        <vue-goodshare-twitter
         button_design="gradient"
         page_url="#"
         has_icon
        ></vue-goodshare-twitter>
        <vue-goodshare-facebook
          page_url="#"
          has_icon
        ></vue-goodshare-facebook>
      </div>
    </nav>
</template>

<script>
import VueGoodshareTwitter from 'vue-goodshare/src/providers/Twitter.vue'
import VueGoodshareFacebook from 'vue-goodshare/src/providers/Facebook.vue'

export default {
  name:'TopBar',
  components: {
    VueGoodshareTwitter,
    VueGoodshareFacebook
  }
}
</script>

<style>
.social-share {
  float: right;
}
<style>
