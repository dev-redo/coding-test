function solution(skill, skill_trees) {
    // 1. parsed_skill_trees = skill_trees의 tree에서 skill에 없는 값을 제거한다. ✅
    const parsed_skill_trees = [];
    for (let i=0; i<skill_trees.length; i++) {
        const temp = [];
        for (let j=0; j<skill_trees[i].length; j++) {
            const currSkill = skill_trees[i][j];
            
            const isSkillExist = skill.includes(currSkill);
            if (!isSkillExist) continue;
            
            temp.push(currSkill);
        }        
        parsed_skill_trees.push(temp);
    }
    
    // 2. 선행 스킬이 있는 스킬을 먼저 배울 시 or 배우지 않았을 시 불가능한 tree이다. ✅
    //   -> parsed_skill_trees에서 skill에 대한 인덱스 값을 추출한다.
    const skill_trees_order = parsed_skill_trees.reduce((skill_trees_order, tree) => {
        const treeIndex = tree.reduce((treeIndex, currSkill) => {
            const currSkillIndex = skill.indexOf(currSkill);
            treeIndex.push(currSkillIndex);
            
            return treeIndex;
        }, []);
        
        skill_trees_order.push(treeIndex);
        return skill_trees_order;
    }, []);
    
    // 3. 추출한 인덱스 값이 0부터 순차적으로 있는 스킬트리 개수 ✅
    //   -> * 모든 스킬이 없을 수 있으나, 선행 관계를 어길 시 false
    const skill_tree_cnt = skill_trees_order.reduce((skill_tree_cnt, tree_order) => {
        // isOrderValid = tree_order 배열의 값이 0부터 차례로 들어가 있는지 판별하기 ✅
        const isOrderValid = tree_order.reduce((isOrderValid, skillIndex, index) => {
            if (skillIndex !== index) {
                isOrderValid = false;
            }
            
            return isOrderValid;
        }, true);
        
        // isOrderValid가 true일 시 선행 관계를 지켰으므로 + 1 ✅
        if (isOrderValid) return skill_tree_cnt += 1;
        
        return skill_tree_cnt;
    }, 0);
    
    return skill_tree_cnt;
}

// Algorithm Flow
// 1. 위 순서에 없는 다른 스킬(힐링 등)은 순서에 영향을 주지 않는다 + 스킬은 중복되지 않는다. ✅
//    => skill_trees의 tree에서 skill에 없는 값은 제거(parsed_skill_trees)하고 시작한다.
// 2. 선행 스킬이 있는 스킬을 먼저 배울 시 or 배우지 않았을 시 불가능한 tree이다. ✅
//   -> parsed_skill_trees에서 skill에 대한 인덱스 값을 추출한다.
//      - 예시: skill = CBD, tree = BACDE
//             - 1) 순서와 상관 없는 스킬 제거: BCD
//             - 2) 인덱스 값 추출: 1 0 2
// 3. 추출한 인덱스 값이 0부터 순차적으로 있는 스킬트리 개수를 센다. ✅
//   -> * 모든 스킬이 없을 수 있으나, 선행 관계를 어길 시 불가능