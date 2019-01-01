<template>
  <Scroll
    :data="list"
    :pull-up-load="pullUp"
    :pull-down-refresh="pullDown"
    direction="vertical"
    style="width:100%;overflow: hidden;"
    @pullDownAction="pullDownAction"
    @pullUpAction="pullUpAction" >
    <List
      :list="list"
      @jumpUser="jumpUser"
      @jumpDetail="jumpDetail"/>
  </Scroll>
</template>
<script>
import Scroll from '../scroll/Scroll'
import List from '../list/IndexView'
export default {
  name: 'TopicList',
  components: {
    Scroll,
    List
  },
  props: {
    list: {
      type: Array,
      default () {
        return []
      },
      required: true
    },
    pullUp: {
      type: Boolean,
      default: true,
      required: true
    },
    pullDown: {
      type: Boolean,
      default: true,
      required: true
    }
  },
  methods: {
    pullDownAction () {
      this.$emit('pullDownAction')
    },
    pullUpAction () {
      this.$emit('pullUpAction')
    },
    jumpDetail (id) {
      this.$emit('jumpDetail', id)
    },
    jumpUser (name) {
      this.$emit('jumpUser', name)
    }
  }
}
</script>
