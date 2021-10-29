
function rules_matcher (absentees_read, data_object, rules) {
    // matching absentees from data_object.
    const label_ids = data_object.filter( dataObj => dataObj.value == absentees_read.value && dataObj.prob >50);
    let rule, newDataObj; 
    if(label_ids.length == 0){
      newDataObj = absentees_read.map((absentees)=>{
        return { id: absentees.id, value: absentees.value, prob: 100, count: 1 }
      })
    }
      
    else{
      rule = absentees_read.map((absentees)=>{
        return { pointer: absentees.id, loc: label_ids[0], prob: 100, count: 1 }
      })
    }
    
  
    const searchedRule = rule_searcher(rules, rule.pointer, rule.loc);
    if(searchedRule) // absentee exist with some other rule pointer.
      searchedRule[0]['prob'] =( ( arrObj['prob'] * (arrObj['count'] - 1) / 100) + 1) / arrObj['count'] 
     
    else // no record found for absentees therefore creating new one.
      rules.append(rule);
  
    return rules;
  }
  
  const rule_searcher = (rules, pointer) => {
    return rules.find(rule => rule['pointer'] == pointer && rule['loc'] == location);
  }
const ObjectsLeftJoin = (objArr1, objArr2, key1, key2) => objArr1.map(
      arrObj1 => ({
          ...objArr2.find(
              arrObj2 => arrObj1[key1] === arrObj2[key2]
          ),
          ...arrObj1
      })
  );