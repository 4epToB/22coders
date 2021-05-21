<template>
  <Layout>
    <Case_item_1/>
        <h1>{{$page.case}}</h1>
  </Layout>
</template>
<page-query>
query ($id: ID!){
  case(id: $id){
    task
    sitename
    name
  }
}
</page-query>
<script>
import Case_item_1 from '../components/Case_item/Case_item_1.vue'
export default {
  metaInfo() {
      return{
        title: this.$page.case.name
      }

  },
  components: {
    Case_item_1
  },
}
</script>