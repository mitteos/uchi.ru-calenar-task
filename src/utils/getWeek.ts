export interface GetWeekValue {
  id: number
  day: string
  date: number
  fullDate: Date
}
export const getWeek: (d: Date) => GetWeekValue[] = (date: Date) => {
  const weekDay = date.getDay();
  const monthDay = date.getDate();
  const month = date.getMonth();

  const countDayOnMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const week = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  let result = [];
  let countMonthDay;
  if (weekDay > 1) {
    countMonthDay = monthDay - (weekDay - 1);
  } else if (weekDay === 0) {
    countMonthDay = monthDay - 6;
  } else {
    countMonthDay = monthDay;
  }

  for (let i = 0; i < week.length; i++) {
    if ((countMonthDay + i) > countDayOnMonth[month]) {
      let count = countDayOnMonth[month] - (countMonthDay + (week.length - 1));
      if(count < 1) continue
      result.push(
        {
          id: i,
          day: week[i],
          date: count + i,
          fullDate: new Date(date.getFullYear(), date.getMonth(), count + i)
        }
      );
      if(count === countDayOnMonth[month]) break
    } else {
      if(countMonthDay + i < 1) continue
      result.push(
        {id: i,
          day: week[i],
          date: countMonthDay + i,
          fullDate: new Date(date.getFullYear(), date.getMonth(), countMonthDay + i)
        }
      );
      if(countMonthDay + i === countDayOnMonth[month]) break
    }
  }

  return result
}
