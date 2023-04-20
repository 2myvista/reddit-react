interface Idiff {
	date1?: number;
	date2?: number;
	milliseconds?: number;
	seconds?: number;
	minutes?: number;
	hours?: number;
	days?: number;
	weeks?: number;
	summary?: string;
}

export function timeDiff(date:string | number) {
		const a = Date.now();
		const b = new Date(date).getTime();
		const diff:Idiff={};
	
		diff.date1 = a;
		diff.date2 = b;
		diff.milliseconds = a > b ? a % b : b % a;
		diff.seconds = Math.floor(diff.milliseconds / 1000);
		diff.minutes = Math.floor(diff.milliseconds/1000 / 60);
		diff.hours = Math.floor(diff.milliseconds/1000 / 60 / 60);
		diff.days = Math.floor(diff.milliseconds/1000 / 60 / 60 / 24);
		diff.weeks = Math.floor(diff.milliseconds/1000 / 60 / 60 / 24 / 7);
		
		diff.summary='';
		
		if (diff.days > 0) {
			if (diff.days == 1) {
				diff.summary=diff.days + ' день ';
			}
			else if (diff.days >  4) {
				diff.summary=diff.days + ' дней ';
			}
			else if (diff.days > 1 && diff.days < 5) {
				diff.summary=diff.days + ' дня ';
			}
		}
		else if (diff.hours >0) {
			if (diff.hours == 1) {
				diff.summary=diff.hours + ' час ';
			}
			else if (diff.hours >  4) {
				diff.summary=diff.hours + ' часов ';
			}
			else if (diff.hours > 1 && diff.days < 5) {
				diff.summary=diff.hours + ' часа ';
			}
		}
		else {
			if (diff.minutes == 1) {
				diff.summary=diff.minutes + ' минута ';
			}
			else if (diff.minutes >  4) {
				diff.summary=diff.minutes + ' минут ';
			}
			else if (diff.minutes > 1 && diff.days < 5) {
				diff.summary=diff.minutes + ' минуты ';
			}
		}
		return diff;
}