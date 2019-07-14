<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
    }
  },
  created () {
    this.getLunbotu()
  },
  methods: {
    getLunbotu () {
      Toast('加载成功')
      this.$http.get('http://vue.studyit.io/api/getlunbo').then(result => {
        console.log(result.body)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: pink;
    }
    &:nth-child(2) {
      background-color: red;
    }
    &:nth-child(3) {
      background-color: blue;
    }
  }
}
</style>
