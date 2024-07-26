const reverseString = (value,array=[],newArr=[]) => {
    value = value.toString();
    
    for (let i=0; i< value.length; ++i){
        array.push(value.charAt(i));
    }
    
    for (let i = array.length - 1; i >= 0; i--) {
      newArr.push(array[i])
    }
    
    let newValue = newArr.reduce((totalString, currentItem) => {
        return totalString.concat(currentItem);
      }, '');

    return newValue;
  }

export {reverseString};