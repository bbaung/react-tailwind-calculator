import React, { useState } from 'react';
import "../App.css";


function Calculator() {

    const [input , setInput] = useState("0");

    const [output , setOutput] = useState("0");

    const [result , setResult] = useState("0") ;

    const clear = () => {
        setOutput("0");
        setInput("0");
        setResult("0");
    }

    const calculate = () => {
        setOutput(eval(result));
    }

    const add_in = e => {
        const key_input = e.currentTarget.querySelector('.key span').innerHTML;
        const key_result = e.currentTarget.getAttribute('data-key');

        if (input == 0) {
            setInput(key_input); 
            setResult(key_result);
        } else {
            setInput(input.concat(key_input)); 
            setResult(result.concat(key_result));
        }      
        // console.log('key_input :',key_input);
        // console.log('key_result :', key_result);
        // console.log('result :',result)
    }

    const one_clear = () =>{

        if (input.length == 1) {
            setInput("0");
            setResult("0");
        }else if(input != 0) {
            setInput(input.slice(0,-1));
            setResult(result.slice(0,-1));
        }
    }


    return(
        <div className="Calculator flex flex-col flex-auto">
            <div className="bg-cal_bg p-2 text-white flex flex-col flex-auto rounded-lg gap-2 ml:h-auto">
                <h2 className="content-center text-3xl font-semibold flex-auto basis-1/6 text-center py-2">Calculator App</h2>

                <div className="content-center display text-right flex-auto basis-1/5 bg-cal_secondary_bg rounded-lg p-6">
                    <p className="text-base overflow-x-auto">{input}</p>
                    <p className="text-2xl overflow-x-auto">{output}</p>
                </div>

                <div className="keys text-center flex-auto basis-full bg-cal_secondary_bg rounded-lg p-6 grid grid-cols-4 gap-1 font-medium text-cal_green">
                    <button type='button' onClick={clear} className="key operator">
                        <span>AC</span>
                    </button>

                    <button type='button' onClick={one_clear} className="key operator">
                        <span>DE</span>
                    </button>

                    <button data-key="." onClick={add_in} type='button' className="key">
                        <span>.</span>
                    </button>

                    <button data-key="/" onClick={add_in} type='button' className="key action">
                        <span>/</span>
                    </button>

                    <button data-key="7" onClick={add_in} type='button' className="key">
                        <span>7</span>
                    </button>

                    <button data-key="8" onClick={add_in} type='button' className="key">
                        <span>8</span>
                    </button>

                    <button  data-key="9" onClick={add_in} type='button' className="key">
                        <span>9</span>
                    </button>

                    <button data-key="*" onClick={add_in} type='button' className="key action">
                        <span>x</span>
                    </button>

                    <button data-key="4" onClick={add_in} type='button' className="key">
                        <span>4</span>
                    </button>

                    <button data-key="5" onClick={add_in} type='button' className="key">
                        <span>5</span>
                    </button>

                    <button data-key="6" onClick={add_in} type='button' className="key">
                        <span>6</span>
                    </button>

                    <button data-key="-" onClick={add_in} type='button' className="key action">
                        <span>-</span>
                    </button>

                    <button data-key="1" onClick={add_in} type='button' className="key">
                        <span>1</span>
                    </button>

                    <button data-key="2" onClick={add_in} type='button' className="key">
                        <span>2</span>
                    </button>

                    <button data-key="3" onClick={add_in} type='button' className="key">
                        <span>3</span>
                    </button>

                    <button data-key="+" onClick={add_in} type='button' className="key action">
                        <span>+</span>
                    </button>

                    <button data-key="00" onClick={add_in} type='button'className="key">
                        <span>00</span>
                    </button>

                    <button data-key="0" onClick={add_in} type='button' className="key">
                        <span>0</span>
                    </button>

                    <button type='button' onClick={calculate} className="key operator col-span-2">
                        <span>=</span>
                    </button>
                </div>
                
            </div>          
        </div>
    );
}

export default Calculator;