
var data;
var rules;
function search(){

    getData("MyForms", (items) => {
        data = items.MyForms.Data;
        rules = items.MyForms.Rules;
        console.log("Got from local "+ data)
        findLabels();
    });
}
function findLabels(){
    for(form of forms){
        let labs = form.Labels;
        console.log(labs)
        for(lab of labs){
            lab= lab.toLowerCase();
            let filD =  data.filter((ob)=>{
                return (ob.id == lab && ob.prob >50)      
            })
            //call Write
            console.log("filtered: ",filD)
        }
       
    }
}
function cleanup(){
    forms = null;
    data= null;
    rules = null;
}
//max function
//write function