"use strict"
const getAverage = (series1, weekdays) => {
	// validate if our array have only days from 1 month - false end function
	 const arrayHaveOnlyOneMonth = {
	 	status : true,
	 	check(){
	 		series1.every((v,i,a)=>{
	 			const globdate = v.date.getMonth()
	 			a.map((z)=>{
	 				if(z.date.getMonth() !== globdate){
	 					this.status = false;
	 				}
	 			})
	 		})
	 	return arrayHaveOnlyOneMonth.status
	 	}
	 }
	 // check if first validation return true - go a head
	 if(arrayHaveOnlyOneMonth.check()){
	 	let result = {};
	 	// conncat arrays from diffrent series to one month array - sum visits per 1 day from another series 
	 	const connectedSeries = series1.reduce((allDates, date) => {
	        if (allDates.some((e) => {
	                return (e.date.toString() === date.date.toString())
	            })) {
	            allDates.filter((e) => {
	                return e.date.toString() === date.date.toString()
	            })[0].visits += date.visits
	        } else {
	            allDates.push({
	                date: date.date,
	                visits: +date.visits
	            })
	        }
	        return allDates
	    }, []);
	    // if function have second parametr - return average from every weekday
	    if (weekdays === true) {
	        const arrayOfDaysNumber = []; // array with weekday number 0 - 6 - start from SUNDAY
	        const arrayOfWeekDaysNames = []; // array with changed numbers to name of weekday
	        connectedSeries.map((arg) => {
	            const day = arg.date.getDay();
	                arrayOfDaysNumber.push({
	                    day: day,
	                    visits: arg.visits
	                });
	        });
	        // loop for change numbers to name, count weekdays per month and return average 
	        for (let i = 0; i < 7; i++) {
	            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	            let countedWeekDays = null;
	            let sumVisistsWeekDay = null;
	            let dayOfWeek;
	            arrayOfDaysNumber.map((a) => {
	                if (a.day === i) {
	                    countedWeekDays++;
	                    sumVisistsWeekDay += a.visits
	                    dayOfWeek = days[i];
	                }
	            });
	            // week day average
	            const averageWeekDay = Math.round(sumVisistsWeekDay / countedWeekDays)
	            // push our weekday with calculated average to right array
	            arrayOfWeekDaysNames.push({
	                dayOfWeek,
	                averageVisits: averageWeekDay
	            });
	        }
	        // push sunday to the end of array - start count week from monday
	        arrayOfWeekDaysNames.push(arrayOfWeekDaysNames.shift());
	        // return correctly our array to result
	        arrayOfWeekDaysNames.map((z) => {
	            result[z.dayOfWeek] = {
	                averageVisits: z.averageVisits
	            }
	        })
	    }
	    // function witch return average from Series1 per 1 month 
	     else {
	        const date = connectedSeries[0].date;
	        const year = date.getFullYear();
	        const month = date.getMonth() + 1;
	        const getNumberOfDays = (y, m) => {
	            return new Date(y, m, 0).getDate();
	        }
	        // get number of days from current month
	        const numeberOfDays = getNumberOfDays(year, month)
	        let sumVisits = null;
	        // iterate throught all days and sum visits
	        connectedSeries.map((b) => {
	            const parsedNumb = parseInt(b.visits);
	            sumVisits += parsedNumb;
	        });
	        // get average of month
	        const averageV = Math.round(sumVisits / numeberOfDays)
	        result = {
	            averageVisits: averageV
	        }
	    }
	    return result
	 }else{
	 	return ('array have days from two months');
	 }
};
module.exports = getAverage;