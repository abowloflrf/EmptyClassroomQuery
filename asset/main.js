    var submit = document.getElementById("button");
  
    function change() {
        var selectObj = document.getElementById('class');
        var selectvalue = selectObj.value;
        var selecttext = selectObj.options[selectvalue-1].text;
        alert("You have chose "+selectvalue+ selecttext);
    }
    
    
    /*判断年份是否为润年 */
    function isLeapYear(year) {
        return (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0);
    }
    /* 获取某一年份的某一月份的天数*/
    function getMonthDays(year, month) {
        return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month] || (isLeapYear(year) ? 29 : 28);
    }26 
    /*获取某年的某天是第几周*/
    function getWeekNumber(y, m, d) {
        var now = new Date(y, m - 1, d),
            year = now.getFullYear(),
            month = now.getMonth(),
            days = now.getDate();
        //那一天是那一年中的第多少天
        for (var i = 0; i < month; i++) {
            days += getMonthDays(year, i);
        }

        //那一年第一天是星期几
        var yearFirstDay = new Date(year, 0, 1).getDay() || 7;

        var week = null;
        if (yearFirstDay == 1) {
            week = Math.ceil(days / yearFirstDay);
        } else {
            days -= (7 - yearFirstDay + 1);
            week = Math.ceil(days / 7) + 1;
        }
        return week;
    }
    
    
    submit.onclick = CurentTime;
    
    function CurentTime() {
        var myDate = new Date();
        var year = myDate.getFullYear();
        var month = myDate.getMonth();
        var days = myDate.getDate();
        var day = year+"-"+(month+1)+"-"+days;
        var weekday = myDate.getDay();
        var weekforyear = getWeekNumber(year, month+1, days);
        /*alert("今天是"+day+"星期"+weekday);*/
        alert("今天是"+year+"年度"+"第"+weekforyear+"周");
        alert("今天是"+(year-1)+"-"+year+"年度"+"第2学期"+"第"+(weekforyear-9)+"周周"+weekday);
    }
    