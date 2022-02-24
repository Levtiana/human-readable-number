module.exports = function toReadable (number) {
    result = '';
    let stringNumber = number.toString();

    let numbers = [];
    numbers[0] = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    numbers[1] = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


    if(stringNumber.length === 3) {
        let hundreds = `${numbers[0][Number(stringNumber[0])]} hundred`;
        if( stringNumber[1] === '1'){
            let tens;
            switch (stringNumber[2]) {
                case '0':
                    tens = 'ten';
                    break;
                case '1':
                    tens = 'eleven';
                    break;
                case '2':
                    tens = 'twelve';
                    break; 
                case '3':
                    tens = 'thirteen';
                    break;
                case '4':
                    tens = 'fourteen';
                    break;
                case '5':
                    tens = 'fifteen';
                    break;
                case '6':
                    tens = 'sixteen';
                    break;
                case '7':
                    tens = 'seventeen';
                    break;
                case '8':
                    tens = 'eighteen';
                    break;
                case '9':
                tens = 'nineteen';
                break;          
            }
            return result = `${hundreds} ${tens}`
        } else if (stringNumber[1] === '0') {
            if ( stringNumber[2] === '0') {
                return result = `${hundreds}`; 
            } else {
                tens = `${numbers[0][Number(stringNumber[2])]}`;
                return result = `${hundreds} ${tens}`;
            }
            
        } else {
            if(stringNumber[2] === '0'){
                tens = `${numbers[1][Number(stringNumber[1])]}`;
                return result = `${hundreds} ${tens}`;
            } else {
                tens = `${numbers[1][Number(stringNumber[1])]} ${numbers[0][Number(stringNumber[2])]}`;
                return result = `${hundreds} ${tens}`;
            }
       
        }

    }   

    if(stringNumber.length == 2) {
    if( stringNumber[0] === '1'){
        let tens;
        switch (stringNumber[1]) {
            case '0':
                 tens = 'ten';
                 break;
             case '1':
                 tens = 'eleven';
                 break;
             case '2':
                 tens = 'twelve';
                 break; 
             case '3':
                 tens = 'thirteen';
                 break;
             case '4':
                 tens = 'fourteen';
                 break;
             case '5':
                 tens = 'fifteen';
                 break;
             case '6':
                 tens = 'sixteen';
                 break;
             case '7':
                 tens = 'seventeen';
                 break;
             case '8':
                 tens = 'eighteen';
                 break;
             case '9':
                 tens = 'nineteen';
                 break;          
        }
        return result = `${tens}`
    } else {
        if(stringNumber[1] === '0'){
           tens = `${numbers[1][Number(stringNumber[0])]}`;
           return result = `${tens}`;
        } else {
            tens = `${numbers[1][Number(stringNumber[0])]} ${numbers[0][Number(stringNumber[1])]}`;
            return result = `${tens}`;
        }
        
    }
    }

    if(stringNumber.length == 1) {
    if(stringNumber === '0') {
        return result = 'zero';
    } else {
        return result = `${numbers[0][Number(stringNumber[0])]}`
    }
    }


    return result;
}
