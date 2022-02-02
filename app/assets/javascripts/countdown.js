$(document).on("ready page:load", function() {
  updateCountdown()
  setInterval(updateCountdown, 1000)
});

updateCountdown = function() {
  var dateNow = moment();
  var dateWedding = moment.tz('2021-09-07 07:49:00', 'Europe/London');
  var duration = moment.duration(dateNow.diff(dateWedding))

  var years = Math.floor(duration.asYears())
  duration = duration.add(-years, 'years')

  var months = Math.floor(duration.asMonths())
  duration = duration.add(-months, 'months')

  var days = Math.floor(duration.asDays())
  duration = duration.add(-days, 'days')

  var hours = Math.floor(duration.asHours())
  duration = duration.add(-hours, 'hours')

  var minutes = Math.floor(duration.asMinutes())
  duration = duration.add(-minutes, 'minutes')

  var seconds = Math.floor(duration.asSeconds())

  var element = $('.countdown')
  element.find('.years .value').text(asTime(years))
  element.find('.months .value').text(asTime(months))
  element.find('.days .value').text(asTime(days))
  element.find('.hours .value').text(asTime(hours))
  element.find('.minutes .value').text(asTime(minutes))
  element.find('.seconds .value').text(asTime(seconds))
}

asTime = function(value) {
  if(value <= 0) { return "00" }
  value = Math.round(value).toString();
  (value.length > 1) ? value : "0" + value
}
