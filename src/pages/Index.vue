<template>

  <div>
    <Layout>
      <Home_1/>
      <Home_2/>
      <Home_3/>
      <Home_4/>
    </Layout>
  </div>

</template>

<script>
import Home_1 from '~/components/Home/Home_1.vue'
import Home_2 from '~/components/Home/Home_2.vue'
import Home_3 from '~/components/Home/Home_3.vue'
import Home_4 from '~/components/Home/Home_4.vue'
export default {
  components: {
    Home_1,
    Home_2,
    Home_3,
    Home_4,
  },
  metaInfo: {
    title: 'Главная'
  }
}
</script>

<style lang="scss">
/* .home-links a {
  margin-right: 1rem;
}
p{
  font-size:2.5rem ;
  color: white;
} */
</style>
