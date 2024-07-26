const analyzeArray = (array) => { 
    
    const allAreNumbers = array.map((x) => isNaN(x)).includes(true) === false;

    switch(allAreNumbers){
        case true:
            const average = array.reduce((total, currentItem) => {
                return total + currentItem;
              }, 0) / array.length;
            
            const min = array.reduce((previous,current) => {
                return current < previous ? current : previous;
              })

            const max = array.reduce((previous,current) => {
                return current > previous ? current : previous;
              })

            const length = array.length;

        return { average, min, max, length };
        default:
        return null;
    }    
   }


 
 export {analyzeArray};