<template>
<table class="pui-table">
    <thead>
        <tr>
            <td v-for="(item,index) in title" :key="index">{{item}}</td>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(tr,index) in rows" :key="index">
            <td v-for="(td,i) in tr" :key="i">{{td}}</td>
        </tr>
    </tbody>
</table>

</template>
<style scoped lang="scss">
.pui-table {
  border-collapse: collapse;
  font-size: 14px;
  thead {
    background-color: #f2f2f2;
    color: #333;
    font-weight: bold;
  }
  tbody {
    color: #666;
    tr:nth-of-type(2n) {
      background-color: #f5f9fc;
    }
  }
  td {
    padding: 8px;
    border: 1px solid #ececec;
    word-break: break-all;
  }
}
</style>

<script>
export default {
  name: "pui-table",
  props: {
    title: {
      type: Array,
      default: null
    },
    rows: {
      type: Array,
      default: null
    }
  },
  data() {
    return {};
  }
};
</script>