<template>
    <div class="vts-date-selecter">
        <input autocomplete="off" spellcheck="false" type="text" placeholder="Select date">
        <div class="vts-date-selecter">
            <div class="vts-date-selecter-header">
                <span @click="preYear" class="left-btn"> &lt;&lt; </span>
                <span @click="preMonth" class="left-btn"> &lt; </span>
                <span class="select-year">{{currentYear}}年</span>
                <span class="select-month">{{currentMonth}}月</span>
                <span @click="nextMonth" class="right-btn"> &gt; </span>
                <span @click="nextYear"  class="right-btn"> &gt;&gt; </span>
            </div>
            <div class="vts-date-selecter-content">
                <div class="vts-date-row">
                    <div class="vts-date-line vts-date-week-title ">
                        <div  v-for="(w) in weekDay" class="gray">
                            {{w}}
                        </div>
                    </div>
                    <div v-for="week in dates">
                        <div class="vts-date-line">
                            <div :title="hoverDate(d)" @click="selectDate(d)" v-for="(d) in week" :class="itemClasses(d)">
                                {{d.day}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="vts-date-selecter-footer"></div>
        </div>
    </div>
</template>

<script>
    /**
     * @param {Date}  一个时间
     * @param {Number} 天数的加减
     * @returns {Number} 返回加减后的月份对应的天数
     *
     * created by JiwenBai
     * */
    function getDay(date, days){
        let d = new Date(date);
        d.setDate(d.getDate() + days);
        let day = d.getDate(),
            month = d.getMonth()+1,
            year = d.getFullYear();

        return {month,day,year};
    }

    export default {
        name: "DatePicker",
        beforeMount() {
            let date = new Date();
            this.currentMonth = date.getMonth()+1;
            this.currentYear = date.getFullYear();
            this.selected = {
                d:null,
                m:null,
                y:null
            }
            this.today = getDay(new Date(),0);
        },
        data() {
            return {
                otherMonthDay:{},
                currentMonth:null,
                currentYear:null,
                currentDay:null,
                today:null,
                selected:null,
                weekDay:["日","一","二","三","四","五","六"]
            }
        },
        methods:{
            itemClasses(date){
                // this.otherMonthDay[idx*7] && console.log(idx*7);
                return [this.currentMonth!==date.month?"gray":"",this.currentDateStyle(date)];
            },
            selectDate(item){
                if(item.month !== this.currentMonth){
                    this.currentMonth = item.month;
                }
                if(item.year !== this.currentYear){
                    this.currentYear = item.year;
                }
                // if(item.day !== this.currentDay){
                //     this.currentDay = item.day;
                // }
                this.selected = {
                    d:item.day,
                    y:item.year,
                    m:item.month
                };

                console.log(`${item.year}-${item.month}-${item.day}`)
            },
            currentDateStyle(item){
                let {d,m,y} = this.selected;
                let {day,month,year} = this.today;
                let itemClass = "";
                if(m === item.month && y === item.year && d === item.day){

                    itemClass= "current";
                }
                if(item.month === month && item.day === day && item.year === year){
                    itemClass+=" today"
                }
                return itemClass;
            },
            hoverDate(date){
                return `${date.year}年${date.month}月${date.day}日`;
            },
            nextYear(){
                this.currentYear++;
            },
            preYear(){
                this.currentYear--;
            },
            preMonth(){

                this.currentMonth--;
                if(this.currentMonth<=0){
                    this.currentYear--;
                    this.currentMonth=12;
                }
            },
            nextMonth(){
                this.currentMonth++;
                if(this.currentMonth>12){
                    this.currentYear++;
                    this.currentMonth=1;
                }
            }
        },
        computed:{

            dates(){
                let firstDay = new Date();
                //因为currentMonth为+1后的结果，所以真正set的时候应减一
                firstDay.setFullYear(this.currentYear,this.currentMonth-1,1);


                let firstW = firstDay.getDay();

                let res = []
                let lastDay = firstW;
                for (let j = firstW; j < 42; j++) {
                    res[j] = (getDay(firstDay,j-firstW))
                }
                lastDay = firstW;
                for (let i = firstW; i >=0 ; i--) {
                    res[i]=getDay(firstDay,i-firstW)
                }
                var dates = [];
                for(let i = 0 ; i < 6 ; i++){
                    dates.push(res.splice(0,7))
                }
                return dates;
            }

        }
    }
</script>

<style scoped>
    .vts-date-selecter-header{
        display: flex;
        justify-content: space-between;
    }
    .vts-date-selecter-header span{
        min-width: 30px;
    }
    .vts-date-selecter-header span:hover{
        color: cornflowerblue;
    }
    .vts-date-selecter{
        width: 210px;
    }
    .vts-date-row{
        display: flex;
        flex-direction: column;
    }
    .vts-date-line{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .vts-date-line div{
        /*padding: 5px;*/
        min-width: 30px;
        /*min-height: 30px;*/
        line-height: 30px;
    }
    .vts-date-week-title.vts-date-line div:hover{
        background-color: transparent;
        color:#ddd;
    }
    .vts-date-line div.current{
        border: 1px solid cornflowerblue;
    }
    .vts-date-line div:hover{
        background-color: cornflowerblue;
        color: #fff;
    }
    .vts-date-line .gray{
        color:#ddd
    }
    .vts-date-line .gray:hover{
        background-color: #aaa;
    }
    .vts-date-line .today{
        position: relative;
    }
    .vts-date-line .today:before{
        background-color: cornflowerblue;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        content: "";
        top: 2px;
        right: 0;
        position: absolute;
    }
</style>
