<template>
  <dl :class="{active:isActive}">
    <dt v-ripple @click="toggle">
      <div class="name">
        <v-icon>{{ items.icon }}</v-icon>
        <label>{{ items.name }}</label>
      </div>
      <v-icon class="arrow up" v-if="isActive">mdi-chevron-up</v-icon>
      <v-icon class="arrow down" v-else>mdi-chevron-down</v-icon>
    </dt>
    <dd :class="isActive ? 'active' : 'close'">
      <ul>
        <li
          v-for="(item, index) in items.child"
          :key="index"
          v-ripple
          :class="{
            active: currentRoute(item.path),
            close: !currentRoute(item.path),
          }"
          @click="$router.push(item.path)"
        >
          <v-icon>mdi-menu-right</v-icon>
          <label>{{ item.name }}</label>
        </li>
      </ul>
    </dd>
  </dl>
</template>

<script>
export default {
  props: ["items"],
  data() {
    return {
      isActive: true,
    };
  },

  computed: {
    nowPath() {
      return this.$route.path;
    },
  },

  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
    currentRoute(path) {
      return this.nowPath === path;
    },
  },
};
</script>

<style lang="scss" scoped>
dl {
  position: relative;
  left: -1px;
  border-left: 1px solid #292929;
  padding: 0px;
  

  dt {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    height: 50px;

    .name {
      display: flex;
      align-items: center;

      .v-icon {
        color: #fff;
        font-size: 18px;
      }
      label {
        font-size: 13px;
        margin-left: 10px;
      }
    }
    .arrow {
      color: #fff;
      font-size: 20px;
      color: #7d869a;
    }
  }
  dd {
    position: relative;
    background: #424e59;
    overflow: hidden;

    ul {
      padding: 0px;
    }

    li {
      display: flex;
      align-items: center;
      font-size: 12px;
      letter-spacing: 0;
      color: #7d869a;
      height: 0px;
      padding: 0 10px;

      .v-icon {
        color: #7d869a;
        font-size: 16px;
      }
      label {
        margin-left: 5px;
      }
    }
    li.active {
      color: #fff;
      .v-icon {
        color: #fff;
      }
    }
    li:last-child {
      margin-bottom: 0px;
    }
  }

  dd.active {
    li {
      animation: openDrawer 0.5s forwards ease;
      @keyframes openDrawer {
        100% {
          height: 36px;
        }
      }
    }
    li.active {
      color: #fff;
    }
  }

  dd.close {
    li {
      animation: closeDrawer 0.5s forwards ease;
      @keyframes closeDrawer {
        0% {
          height: 36px;
        }
        100% {
          height: 0px;
        }
      }
    }
  }
}

dl.active{
  border-left:1px solid #01a1dd;
}
</style>
