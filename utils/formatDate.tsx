export function formatDate(dateString: string) {
	const date = new Date(dateString)

	const day = String(date.getDate()).padStart(2, '0')
	const monthNames = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	]

	const month = monthNames[date.getMonth()]
	const year = String(date.getFullYear())

	const hours = String(date.getHours()).padStart(2, '0')
	const minutes = String(date.getMinutes()).padStart(2, '0')
	const seconds = String(date.getSeconds()).padStart(2, '0')

	const currentDate = new Date()
	const currentYear = String(currentDate.getFullYear())
	const currentMonth = String(currentDate.getMonth())
	const currentDay = String(currentDate.getDay())

	const isThisYear = currentYear === year
	const isToday = isThisYear && day === currentDay && month === currentMonth

	if (isToday) return `${hours}:${minutes}:${seconds}`
	return ` ${day} ${month}${
		isThisYear ? ',' : ` ${year},`
	} ${hours}:${minutes}:${seconds}`
}


export function getTodayFormatted() {
	const today = new Date()

	const weekdays = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	]
	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	]

	const weekday = weekdays[today.getDay()]
	const day = String(today.getDate()).padStart(2, '0')
	const month = months[today.getMonth()]
	const year = today.getFullYear()

	return `${weekday}, ${day} ${month} ${year}`
}
