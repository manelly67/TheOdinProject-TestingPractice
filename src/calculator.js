class Calculator {

    constructor(a=0,b=0){
        this.a = a;
        this.b = b;
    }


    add(a,b){
        switch(isNaN(a)===true || isNaN(b)===true){
            case true:
            return null;
            case false:
            return a+b;
        }
    }

    subtract(a,b){
        switch(isNaN(a)===true || isNaN(b)===true){
            case true:
            return null;
            case false:
            return a-b;
        }
    }

    divide(a,b){
        switch(isNaN(a)===true || isNaN(b)===true){
            case true:
            return null;
            case false:
            return a/b;
        }
    }

    multiply(a,b){
        switch(isNaN(a)===true || isNaN(b)===true){
            case true:
            return null;
            case false:
            return a*b;
        }
    }

}

export {Calculator};