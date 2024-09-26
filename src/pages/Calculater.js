import React, { useState } from 'react'


const Calculater = () => {
    const [display, setDisplay] = useState('0');
    const [operand, setOperand] = useState(null);
    const [operator, setOperator] = useState(null);
    const pressButton = (value) => {
        if (display === '0') {
            setDisplay(value);
        } else {
            setDisplay(display + value);
        }
    };
    const pressOperator = (operation) => {
        setOperand(parseFloat(display));
        setOperator(operation);
        setDisplay('0');
    };
    const calculate = () => {
        const num = parseFloat(display);
        switch (operator) {
            case '+':
                setDisplay((operand + num).toString());
                break;
            case '-':
                setDisplay((operand - num).toString());
                break;
            case '*':
                setDisplay((operand * num).toString());
                break;
            case '/':
                setDisplay((operand / num).toString());
                break;
        }
        setOperand(null);
        setOperator(null);
    };

    const reSet = () => {
        setDisplay('0')
    };
  



    return (
        <div className='flex container mx-auto  p-5'>
            <div className='basis-5 mx-auto border border-opacity-25 border-black p-6 shadow-2xl rounded-md bg-cyan-100'>
                <h3 className='text-center text-3xl font-mono'>casio</h3>
                <table className='p-4'>
                    <tr>
                        <td className=' border-cyan-300  ' colspan="3" ><input className='border text-2xl border-black p-4 rounded-lg'
                            placeholder={display} type="text" id="result" /></td>
                        <td><button className='border border-black bg-green-400 rounded-md p-4 ' onClick={() => reSet()} >C</button></td>
                    </tr>
                    <tr className='gap-3'>
                        <td className=''><button className='border border-black bg-green-400 rounded-md p-4 w-full' value="1" onClick={() => pressButton('1')} >1</button> </td>
                        <td className=''><button className='border border-black bg-green-400 rounded-md p-4 w-full' value="2" onClick={() => pressButton('2')} >2</button> </td>
                        <td className=''><button className='border border-black bg-green-400 rounded-md p-4 w-full' value="3" onClick={() => pressButton('3')}>3</button> </td>
                        <td className=''><button className='border border-black bg-green-400 rounded-md p-4 w-full' value="/" onClick={() => pressOperator('/')}>/</button> </td>
                    </tr>
                    <tr className='gap-3'>
                        <td className=''><button className='border border-black bg-green-400 rounded-md p-4 w-full' value="4" onClick={() => pressButton('4')}>4</button> </td>
                        <td className=''><button className='border border-black bg-green-400 rounded-md p-4 w-full' value="5" onClick={() => pressButton('5')}>5</button> </td>
                        <td className=''><button className='border border-black bg-green-400 rounded-md p-4 w-full' value="6" onClick={() => pressButton('6')}>6</button> </td>
                        <td className=''><button className='border border-black bg-green-400 rounded-md p-4 w-full' value="*" onClick={() => pressOperator('*')}>*</button> </td>
                    </tr>
                    <tr className='gap-3'>
                        <td className=''><button className='border border-black bg-green-400 rounded-md p-4 w-full' value="7" onClick={() => pressButton('7')}>7</button> </td>
                        <td className=''><button className='border border-black bg-green-400 rounded-md p-4 w-full' value="8" onClick={() => pressButton('8')}>8</button> </td>
                        <td className=''><button className='border border-black bg-green-400 rounded-md p-4 w-full' value="9" onClick={() => pressButton('9')}>9</button> </td>
                        <td className=''><button className='border border-black bg-green-400 rounded-md p-4 w-full' value="-" onClick={() => pressOperator('-')}>-</button> </td>
                    </tr>
                    <tr className='gap-3'>
                        <td className=''><button className='border border-black bg-green-400 rounded-md p-4 w-full' value="0" onClick={() => pressButton('0')}>0</button> </td>
                        <td className=''><button className='border border-black bg-green-400 rounded-md p-4 w-full' value="." onClick={() => pressButton('.')}>.</button> </td>
                        <td className=''><button className='border border-black bg-green-400 rounded-md p-4 w-full' value="=" onClick={calculate}>=</button> </td>
                        <td className=''><button className='border border-black bg-green-400 rounded-md p-4 w-full' value="+" onClick={() => pressOperator('+')}>+</button> </td>
                    </tr>


                </table>
            </div>

        </div>

    )
}

export default Calculater
