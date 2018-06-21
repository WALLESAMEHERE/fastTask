const getAverage = require('./stats');

describe('getAverage', () => {
  let oneMonth = [
    { date: new Date('2018-01-01'), visits: 30 },
    { date: new Date('2018-01-02'), visits: 80 },
    { date: new Date('2018-01-03'), visits: 70 },
    { date: new Date('2018-01-04'), visits: 30 },
    { date: new Date('2018-01-05'), visits: 50 },
    { date: new Date('2018-01-06'), visits: 60 },
    { date: new Date('2018-01-07'), visits: 40 },
    { date: new Date('2018-01-08'), visits: 1 },
    { date: new Date('2018-01-09'), visits: 1 },
    { date: new Date('2018-01-10'), visits: 1 },
    { date: new Date('2018-01-11'), visits: 1 },
    { date: new Date('2018-01-12'), visits: 1 },
    { date: new Date('2018-01-13'), visits: 1 },
    { date: new Date('2018-01-14'), visits: 1 },
    { date: new Date('2018-01-15'), visits: 1 },
    { date: new Date('2018-01-16'), visits: 1 },
    { date: new Date('2018-01-17'), visits: 1 },
    { date: new Date('2018-01-18'), visits: 1 },
    { date: new Date('2018-01-19'), visits: 1 },
    { date: new Date('2018-01-20'), visits: 1 },
    { date: new Date('2018-01-21'), visits: 1 },
    { date: new Date('2018-01-22'), visits: 1 },
    { date: new Date('2018-01-23'), visits: 1 },
    { date: new Date('2018-01-24'), visits: 1 },
    { date: new Date('2018-01-25'), visits: 1 },
    { date: new Date('2018-01-26'), visits: 1 },
    { date: new Date('2018-01-27'), visits: 1 },
    { date: new Date('2018-01-28'), visits: 3 },
    { date: new Date('2018-01-29'), visits: 5 },
    { date: new Date('2018-01-30'), visits: 5 },
    { date: new Date('2018-01-31'), visits: 10 },
  ];
    let arrayWithoutSomeDays = [
    { date: new Date('2018-01-01'), visits: 10 },
    { date: new Date('2018-01-03'), visits: 20 },
    { date: new Date('2018-01-05'), visits: 30 },
    { date: new Date('2018-01-06'), visits: 10 }, 
    { date: new Date('2018-01-12'), visits: 20 },
    { date: new Date('2018-01-13'), visits: 15 },
    { date: new Date('2018-01-15'), visits: 30 },
    { date: new Date('2018-01-29'), visits: 10 },
    { date: new Date('2018-01-30'), visits: 10 },
  ];
  let twoSeries = [
    { date: new Date('2018-01-01'), visits: 10 },
    { date: new Date('2018-01-01'), visits: 20 },
    { date: new Date('2018-01-05'), visits: 30 },
    { date: new Date('2018-01-05'), visits: 10 }, 
    { date: new Date('2018-01-06'), visits: 20 },
    { date: new Date('2018-01-07'), visits: 25 },
    { date: new Date('2018-01-15'), visits: 5 },
    { date: new Date('2018-01-16'), visits: 5 }, 
    { date: new Date('2018-01-17'), visits: 5 },
    { date: new Date('2018-01-18'), visits: 5 },
    { date: new Date('2018-01-29'), visits: 10 },
    { date: new Date('2018-01-29'), visits: 10 },
  ];
    let arrayWithTwoMonths = [
    { date: new Date('2018-01-01'), visits: 10 },
    { date: new Date('2018-02-01'), visits: 20 },
    { date: new Date('2018-01-05'), visits: 30 },

  ];

  test('average of one month', () => {
    expect(getAverage(oneMonth)).toEqual({
      averageVisits: 13,
    });
  });

  test('week days average of one month', () => {
    expect(getAverage(oneMonth, true)).toEqual({
      Monday: {
        averageVisits: 8,
      },
      Tuesday: {
        averageVisits: 18,
      },
      Wednesday: {
        averageVisits: 17,
      },
      Thursday: {
        averageVisits: 8,
      },
      Friday: {
        averageVisits: 13,
      },
      Saturday: {
        averageVisits: 16,
      },
      Sunday: {
        averageVisits: 11,
      },
    });
  });
    test('average of one month from array with concated two series', ()=>{
      expect(getAverage(twoSeries)).toEqual({
          averageVisits: 5,
      });
    });
    test('average of weekdays from array with concated two series', ()=>{
      expect(getAverage(twoSeries,true)).toEqual({
      Monday: {
        averageVisits: 18,
      },
      Tuesday: {
        averageVisits: 5,
      },
      Wednesday: {
        averageVisits: 5,
      },
      Thursday: {
        averageVisits: 5,
      },
      Friday: {
        averageVisits: 40,
      },
      Saturday: {
        averageVisits: 20,
      },
      Sunday: {
        averageVisits: 25,
      },
      });
    });
        test('average without some days in array', ()=>{
      expect(getAverage(arrayWithoutSomeDays)).toEqual({
          averageVisits: 5,
      });
    });
    test('array with days from two different months - should return string with error', ()=>{
      expect(getAverage(arrayWithTwoMonths)).toBe('array have days from two months'
      );
    });
});
