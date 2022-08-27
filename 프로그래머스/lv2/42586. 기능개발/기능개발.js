function solution(progresses, speeds) {
	const answer = [];
	const needTimes = progresses.map((progress, idx) => {
		return Math.ceil((100 - progress) / speeds[idx]);
	});
	let nowDay = needTimes[0];

	while (needTimes.length > 0) {
		let count = 0;

		while (needTimes[0] <= nowDay) {
			needTimes.shift();
			count++;
		}

		nowDay = needTimes[0];
		answer.push(count);
	}

	return answer;
}