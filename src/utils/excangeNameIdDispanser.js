export const excangeNameIdDispanser = (childInfo, dispancers) => {
    let newChildInfo = { ...childInfo };  
    dispancers.allDispancers.forEach(item => {
        if (item.name === childInfo.dispancer) {
            newChildInfo.dispancer = item._id;
            
        }
    });
    
    return newChildInfo;
};