const alf = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m',
    'n','o','p','q','r','s','t','u','v','w','x','y','z'
    ];

const caesarCipher = (value,key,array=[]) => {
    if (!Number.isInteger(key)) {
        return null;
        }

    value = value.toString();
    
    for (let i=0; i< value.length; ++i){
        array.push(value.charAt(i));
    }
    
    let cipherArray = array.map((x)=> shift(x,key));
    
    let cipherValue = cipherArray.reduce((totalString, currentItem) => {
        return totalString.concat(currentItem);
      }, '');

    return cipherValue;
   }

function shift(value,key){
    switch(alf.includes(value.toLowerCase())){
        case true:
        let index = alf.indexOf(value.toLowerCase()) + key;
            if ( index >= alf.length){
                index = index - alf.length;
            } 
            return (isUpperCase(value))? alf[index].toUpperCase() : alf[index];
        case false:
            return value;
    }
}

function isUpperCase(value){
        if (value === value.toUpperCase()) {
        return true;
        }
        if (value === value.toLowerCase()){
        return false;
       }
    }


export {caesarCipher};