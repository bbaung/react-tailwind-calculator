import "../App.css";

function Calculator() {
    return(
        <div className="Calculator">
            <div className="bg-cal_bg p-2 text-white flex flex-col rounded-lg gap-2">
                <h2 className="text-3xl font-semibold text-center py-2">Calculator App</h2>

                <div className="display text-right bg-cal_secondary_bg rounded-lg p-6">
                    <p className="text-base">120x100</p>
                    <p className="text-2xl">120000</p>
                </div>

                <div className="keys text-center bg-cal_secondary_bg rounded-lg p-6 grid grid-cols-4 gap-1 font-medium text-cal_green">
                    <div className="key operator">
                        <span>AC</span>
                    </div>

                    <div className="key operator">
                        <span>DE</span>
                    </div>

                    <div className="key">
                        <span>.</span>
                    </div>

                    <div className="key operator">
                        <span>/</span>
                    </div>

                    <div className="key">
                        <span>7</span>
                    </div>

                    <div className="key">
                        <span>8</span>
                    </div>

                    <div className="key">
                        <span>9</span>
                    </div>

                    <div className="key operator">
                        <span>*</span>
                    </div>

                    <div className="key">
                        <span>4</span>
                    </div>

                    <div className="key">
                        <span>5</span>
                    </div>

                    <div className="key">
                        <span>6</span>
                    </div>

                    <div className="key operator">
                        <span>-</span>
                    </div>

                    <div className="key">
                        <span>1</span>
                    </div>

                    <div className="key">
                        <span>2</span>
                    </div>

                    <div className="key">
                        <span>3</span>
                    </div>

                    <div className="key operator">
                        <span>+</span>
                    </div>

                    <div className="key">
                        <span>00</span>
                    </div>

                    <div className="key">
                        <span>0</span>
                    </div>

                    <div className="key col-span-2">
                        <span>=</span>
                    </div>
                </div>
                
            </div>          
        </div>
    );
}

export default Calculator;