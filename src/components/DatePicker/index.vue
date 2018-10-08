<template>
  <div class="pui-date-selecter">
    <DropDown ref="dropDown" :onCloseCallback="onDone">
      <div class="input">
        <input v-bind:value="result" autocomplete="off" spellcheck="false" type="text" placeholder="Select date"
               @click="handleClick">
      </div>

      <div class="pui-date-selecter" slot="dropdown">
        <div class="pui-date-selecter-header">
          <span @click="preYear" class="left left-btn"> &lt;&lt; </span>
          <span @click="preMonth" class="left left-btn"> &lt; </span>
          <span class="select-year">{{currentYear}}年</span>
          <span class="select-month">{{currentMonth}}月</span>
          <span @click="nextMonth" class="right right-btn"> &gt; </span>
          <span @click="nextYear" class="right right-btn"> &gt;&gt; </span>
        </div>
        <div class="pui-date-selecter-content">
          <div class="pui-date-row">
            <div class="pui-date-line pui-date-week-title ">
              <div v-for="(w,index) in weekDay" class="gray" :key="index">
                {{w}}
              </div>
            </div>
            <div v-for="(week,index) in dates" :key="index">
              <div class="pui-date-line">
                <div :title="hoverDate(d)" @click="selectDate(d)" v-for="(d,i) in week" :key="i"
                     :class="itemClasses(d)">
                  {{d.day}}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pui-date-selecter-footer">
          <Button @click="close">确认</Button>
        </div>
      </div>
    </DropDown>

  </div>
</template>

<script>

  import DropDown from '../DropDown';
  import Button from '../button';

  /**
   * @param {Date}  一个时间
   * @param {Number} 天数的加减
   * @returns {Number} 返回加减后的月份对应的天数
   *
   * created by JiwenBai
   * */
  function getDay(date, days) {
    let d = new Date(date);
    d.setDate(d.getDate() + days);
    let day = d.getDate(),
      month = d.getMonth() + 1,
      year = d.getFullYear();

    return {month, day, year};
  }

  export default {
    name: "DatePicker",
    props: {
      confirm
    },
    components: {
      DropDown,
      Button
    },
    beforeMount() {
      let date = new Date();
      this.currentMonth = date.getMonth() + 1;
      this.currentYear = date.getFullYear();
      this.selected = {
        d: null,
        m: null,
        y: null
      }
      this.today = getDay(new Date(), 0);
    },
    data() {
      return {
        otherMonthDay: {},
        currentMonth: null,
        currentYear: null,
        currentDay: null,
        today: null,
        selected: null,
        weekDay: ["日", "一", "二", "三", "四", "五", "六"],
        result: "",

      }
    },
    methods: {
      close() {

        this.$refs.dropDown.onClose();
      },
      onDone() {
        this.selectedCallBack && this.selectedCallBack(this.result);

        let {
          d,
          y,
          m,
        } = this.selected;
        this.currentMonth = m;
        this.currentYear = y;
        this.currentDay = d;
        console.log(this.selected);
      },
      handleClick() {
        this.$refs.dropDown.onShow();
      },
      itemClasses(date) {
        // this.otherMonthDay[idx*7] && console.log(idx*7);
        return [this.currentMonth !== date.month ? "gray" : "", this.currentDateStyle(date)];
      },
      selectDate(item) {

        if (item.month !== this.currentMonth) {
          this.currentMonth = item.month;
        }
        if (item.year !== this.currentYear) {
          this.currentYear = item.year;
        }
        this.selected = {
          d: item.day,
          y: item.year,
          m: item.month
        };

        this.result = `${item.year}-${item.month}-${item.day}`;


        this.onDone();
        if (!this.confirm)
          this.close();
        console.log(`${item.year}-${item.month}-${item.day}`)
      },
      currentDateStyle(item) {
        let {d, m, y} = this.selected;
        let {day, month, year} = this.today;
        let itemClass = "";
        if (m === item.month && y === item.year && d === item.day) {

          itemClass = "current";
        }
        if (item.month === month && item.day === day && item.year === year) {
          itemClass += " today"
        }
        return itemClass;
      },
      hoverDate(date) {
        return `${date.year}年${date.month}月${date.day}日`;
      },
      nextYear() {
        this.currentYear++;
      },
      preYear() {
        this.currentYear--;
      },
      preMonth() {

        this.currentMonth--;
        if (this.currentMonth <= 0) {
          this.currentYear--;
          this.currentMonth = 12;
        }
      },
      nextMonth() {
        this.currentMonth++;
        if (this.currentMonth > 12) {
          this.currentYear++;
          this.currentMonth = 1;
        }
      }
    },
    computed: {

      dates() {
        let firstDay = new Date();
        //因为currentMonth为+1后的结果，所以真正set的时候应减一
        firstDay.setFullYear(this.currentYear, this.currentMonth - 1, 1);


        let firstW = firstDay.getDay();

        let res = []
        let lastDay = firstW;
        for (let j = firstW; j < 42; j++) {
          res[j] = (getDay(firstDay, j - firstW))
        }
        lastDay = firstW;
        for (let i = firstW; i >= 0; i--) {
          res[i] = getDay(firstDay, i - firstW)
        }
        var dates = [];
        for (let i = 0; i < 6; i++) {
          dates.push(res.splice(0, 7))
        }
        return dates;
      }

    }
  }
</script>

<style scoped>
  .input {
    padding: 5px 10px 5px 10px;
    border-radius: 5px;
    border: 1px solid #dfdfdf;
  }

  .input input {

  }

  .pui-date-selecter-header {
    display: flex;
    justify-content: space-between;
  }

  .pui-date-selecter-header .right {
    text-align: right;
  }

  .pui-date-selecter-header span {
    min-width: 30px;
    cursor: pointer;

  }

  .pui-date-selecter-header span:hover {
    color: cornflowerblue;
  }

  .pui-date-selecter {
    width: 210px;
  }

  .pui-date-row {
    display: flex;
    flex-direction: column;
  }

  .pui-date-line {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .pui-date-line div {
    /*padding: 5px;*/
    min-width: 30px;
    /*min-height: 30px;*/
    line-height: 30px;
    text-align: center;
    box-sizing: border-box;
    border-radius: 4px;
  }

  .pui-date-week-title.pui-date-line div:hover {
    background-color: transparent;
    color: #ddd;
  }

  .pui-date-line div.current {
    background-color: cornflowerblue;
    color: #fff;

  }

  .pui-date-line div:hover {
    background-color: cornflowerblue;
    color: #fff;
  }

  .pui-date-line .gray {
    color: #ddd
  }

  .pui-date-line .gray:hover {
    background-color: #aaa;
  }

  .pui-date-line .today {
    position: relative;
  }

  .pui-date-line .today:before {
    background-color: cornflowerblue;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    content: "";
    top: 2px;
    right: 0;
    position: absolute;
  }

  .pui-date-selecter-footer {
    display: flex;
    justify-content: flex-end;
    padding-right: 5px;
    padding-bottom: 5px;
  }
</style>
