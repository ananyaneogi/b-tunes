<template>
  <div>
    <TopBar/>
    <div class="product-list-wrap">
      <ItemList/>
    </div>
  </div>
</template>

<script>
import ItemList from '@/components/ItemList'
import TopBar from '@/components/TopBar'

export default {
  name: 'index',
  components: {
    ItemList,
    TopBar
  }
}
</script>
