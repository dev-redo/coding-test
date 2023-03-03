function solution(today, terms, privacies) {    
    const termsDay = terms.reduce((termsDay, term) => {
        const [termCategory, termMonth] = term.split(" ");
        termsDay[termCategory] = termMonth * 28;
        return termsDay;
    }, {});
    
    const answer = [];
    const [ty, tm, td] = today.split(".").map(Number);
    
    privacies.forEach((privacy, idx) => {
        const [privacyDay, terms] = privacy.split(" ");
        const [py, pm, pd] = privacyDay.split(".").map(Number);
        
        const isDestroy = ((ty - py) * 12 + (tm - pm)) * 28 + (td - pd) >= termsDay[terms];
        if (isDestroy) {
            answer.push(idx + 1);
        }
    });
    
    return answer;
}