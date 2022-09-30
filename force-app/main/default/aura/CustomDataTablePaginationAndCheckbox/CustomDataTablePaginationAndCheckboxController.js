({
    doInit : function(component, event, helper) {
      
      component.set("v.column",[
          {label:'Important Account',fieldName: 'vip_acc',type:'text',cellAttributes:{class:{fieldName:'className'},iconName:{fieldName:'displayIconName'}}},
          {label:'Account Name',fieldName: 'name',type:'text',cellAttributes:{class: {fieldName : 'className'}}},
          {label:'Industry',fieldName: 'industry',type:'text',cellAttributes:{class: {fieldName : 'className'}}},
          {label:'Account Type',fieldName: 'type',type:'text',cellAttributes:{class: {fieldName : 'className'}}}
      ])
      
       var accList=[
         {"vip_acc":true, "name": "ABC Corp", "industry":"Technology", "type":"Other"},
         {"vip_acc":false, "name": "SFP Inc", "industry":"Apparel", "type":"Prospect"},
         {"vip_acc":true, "name": "Taj Ltd.", "industry":"Hospitality", "type":"Other"}
     ];
        
        accList.forEach(function(acc){
                        if(acc.vip_acc){
            				acc.displayIconName='utility:check';
                            acc.className='redcolor';
                        }else{
                            acc.displayIconName='utility:close';
                            acc.className='blackcolor';
                        }
            //this is optional and can be removed this was showing true and false value and so commented it
            acc.vip_acc='';
        });
        
        component.set("v.data",accList);
    }
})