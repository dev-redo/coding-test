function solution(s) {
    const stack = [];

    for(let i = 0 ; i < s.length ; i++ ){
        if( !stack.length || stack[stack.length-1] !== s[i] ) stack.push(s[i]);
        else stack.pop();
    }

  return stack.length ? 0 : 1;
}