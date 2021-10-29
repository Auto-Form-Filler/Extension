
let RulesArr=[];
function data_matcher (read_obj, data_object,r){
  RulesArr = r;
  const combinedDataObj = ObjectsLeftJoin(read_obj, data_object, read_obj[0]['id'], data_object[0]['id']);
  
  let idMatachedReadObj, isAbsentReadObj;
  isAbsentReadObj = combinedDataObj.filter(dataObj => dataObj['id'] == null);
  idMatachedReadObj = combinedDataObj.filter(dataObj => dataObj['id'] != null);

  idMatachedReadObj.map(pReadObj => {
    let arr= filterById(pReadObj['id'], data_object);
    arr.map((arrObj)=>{
      arrObj['count']++;
    arrObj['value'] == pReadObj['value'] ? 
     arrObj['prob'] =  ( ( arrObj['prob'] * (arrObj['count'] - 1) / 100) + 1) / arrObj['count'] 
    : 
    arrObj['prob'] = ( arrObj['prob'] * ( arrObj['count'] - 1) / 100  )/ arrObj['count'] ;
    arrObj['prob'] *= 100;
    })
 
  })

  isAbsentReadObj.map(absentObj => {
    // currently declaring empty array for RulesArr as default
    // currently logging the RulesArr created 
    console.log(rules_matcher(absentObj, data_object, RulesArr));
  })

  return { 'dataObject' : data_object, 'RulesArr': RulesArr };
}
const filterById = (id, data_objects) => {
  return data_objects.filter((obj) => obj.id==id);
}