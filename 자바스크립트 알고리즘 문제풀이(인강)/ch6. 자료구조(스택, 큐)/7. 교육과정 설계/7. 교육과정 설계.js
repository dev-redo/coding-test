const need = "CBA";
const plan = "CBDAGE";
console.log(solution(need, plan));

function solution(need, plan) {
  	// 필수 과목 queue
    const queue = need.split("");
    // 수업 계획 loop
  	for (let x of plan) {
        // x가 필수 과목일 시
      	if (queue.includes(x)) {
          	// x가 queue의 첫 번째 과목이 아닐 시 
          	// 이수 순서가 잘 못 됨. 선수 과목을 안 들음
            if (x !== queue.shift()) {
                return "NO";
            }
        }
    }
  	// 필수 과목을 전부 포함하지 않았을 시
    if (queue.length > 0) return "NO";
    // 이수 순서도 맞고 필수 과목도 전부 포함 -> 잘 설계한 계획!
  	return "YES";
}
