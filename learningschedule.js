if (typeof(Storage) !== "undefined") {
    var _1 = localStorage.getItem("date");
    if(_1) {
        generateDates({value: _1});
    }
  } else {
   
}
function generateDates(event) {
    var i;
    var fib = []; // Initialize array!
    
    fib[0] = 1;
    fib[1] = 1;
    for (i = 2; i <= 50; i++) {
      // Next fibonacci number = previous + one before previous
      // Translated to JavaScript:
      fib[i] = fib[i - 2] + fib[i - 1];
    }
    
    Date.prototype.addDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }
    
    var date = new Date();
    
    var startDate = moment(event.value);
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem('date');
    }
    var resultEl = document.getElementById("result");
    while(moment(date).isAfter(startDate,'day')) {
      for(var nn=0; nn<50;nn++) {
        var days_1 = fib[nn];
        if( moment(startDate, "DD-MM-YYYY").clone().add(days_1, 'days').isSame(moment(date, "DD-MM-YYYY"), 'days')) {
          const temp = document.createElement('div');
          temp.innerText = moment(startDate, "DD-MM-YYYY").toString();
          resultEl.appendChild(temp);

        }
      }
    //   console.log(startDate);
      startDate = moment(startDate, "DD-MM-YYYY").add(1, 'days');
    }   
}
