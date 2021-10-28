
function rules_matcher (absentees_read, data_object, rules) {
  
    // matching absentees from data_object.
    const label_id = data_object.filter( dataObj => dataObj.value == absentees_read.value);
    let rule, newDataObj; 
    if(label_id)
      newDataObj = { id: absentees_read.id, label_id: absentees_read.value, probability: 100, count: 1 };
    else
      rule = { pointer: absentees_read.value, location: label_id, probability: 100, count: 1 };
  
    const searchedRule = rule_searcher(rules, rule.pointer);
    if(searchedRule) // absentee exist with some other rule pointer.
      searcherRule['probability'] += 100;
    else // no record found for absentees therefore creating new one.
      rules.append(rule);
  
    return rules;
  }
  
  const rule_searcher = (rules, pointer) => {
    return rules.find(rule => rule['pointer'] === pointer);
  }
const ObjectsLeftJoin = (objArr1, objArr2, key1, key2) => objArr1.map(
      arrObj1 => ({
          ...objArr2.find(
              arrObj2 => arrObj1[key1] === arrObj2[key2]
          ),
          ...arrObj1
      })
  );