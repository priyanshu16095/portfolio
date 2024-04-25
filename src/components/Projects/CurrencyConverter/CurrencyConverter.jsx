import React from 'react'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

function CurrencyConverter() {
    return (
        <div className='currency'>
            <div className="currencyBody flex-v">
                <p className="title">Currency Converter</p>
                <div className="currencyContainer bigContainer flex-v">

                    <div className="header flex-s">
                        <div className="from flex-v">
                            <p className='key'>From:</p>
                            <button className="button">USD</button>
                        </div>
                        <div className="round"><CurrencyExchangeIcon className='icon' /></div>
                        <div className="to flex-v">
                            <p className='key'>To:</p>
                            <button className="button">INR</button>
                        </div>
                    </div>

                    <div className="amount flex-v">
                        <p className="key">Amount:</p>
                        <p className='lightpContainer'>500</p>
                    </div>

                    <div className="flex-e">
                    <button className='button'>Convert</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrencyConverter
