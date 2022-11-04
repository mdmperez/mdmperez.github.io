<template>
  <ul class="counter">
    <li class="counter__item">
      <p class="counter__item--number">{{weddingDate.days.value}}</p>
      <p class="counter__item--text">{{weddingDate.days.text}}</p>
    </li>
    <li class="counter__item">
      <p class="counter__item--number">{{ weddingDate.hours.value }}</p>
      <p class="counter__item--text">{{weddingDate.hours.text}}</p>
    </li>
    <li class="counter__item">
      <p class="counter__item--number">{{ weddingDate.minutes.value }}</p>
      <p class="counter__item--text">{{weddingDate.minutes.text}}<span>{{weddingDate.minutes.secondaryText}}</span></p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Counter",
  data: function () {
    return {
        weddingDate: {
          hours: {
            text: "-",
            value: "-"
          },
          minutes: {
            text: "-",
            value: "-"
          },
          days: {
            text: "0",
            value: "Días"
          },
        }
      }
  },
  mounted() {
      let dateFuture = new Date('2022/10/15 13:00:00');
      let dateNow = new Date();

      let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;

      // calculate days
      const days = Math.floor(diffInMilliSeconds / 86400);
      diffInMilliSeconds -= days * 86400;

      // calculate hours
      const hours = (Math.floor(diffInMilliSeconds / 3600) % 24);
      diffInMilliSeconds -= hours * 3600;

      // calculate minutes
      const minutes = (Math.floor(diffInMilliSeconds / 60) % 60);
      diffInMilliSeconds -= minutes * 60;

      let calculatedDate = {
        hours: {
          value: hours,
          text: (hours === 0 || hours === 1) ? `hora` : `horas`
        },
        minutes: {
          value : minutes,
          text : "min",
          secondaryText : (minutes === 1) ? `uto` : `utos`
        }
      }

     if (days > 0) {
        calculatedDate.days =  {
          value : days,
          text: (days === 1) ? `día` : `días`
        }
      } else {
       calculatedDate.days =  {
         text: "0",
         value: "Días"
       }
     }
    this.weddingDate = calculatedDate;
  },

}
</script>

