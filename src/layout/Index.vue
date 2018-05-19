<template>
  <div>
    <TopBar/>
    <div class="product-list-wrap">
      <ItemList/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import ItemList from '@/components/ItemList'
import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'

export default {
  name: 'index',
  components: {
    ItemList,
    TopBar,
    Footer
  }
}
</script>
