import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";

import { useBot } from "../../../hooks/useBot";
import { useTicker } from "../../../hooks/useTicker";

const BitcoinCard = () => {
    const {isBotOn} = useBot();
    const {getNewTicker, getLastTicker} = useTicker();
    
    const [priceChangePercent, setPriceChangePercent] = useState("0.00");
    const [symbol, setSymbol] = useState("BTC");
    const [totalCoin, setTotalCoin] = useState("0.00000000");
    const [value, setValue] = useState("00,00");

    const registerTicker = async (data) => {
        const url = "http://localhost:5001/tickers";
        const options = {
            "method" : "POST",
            "headers": {
                "Content-Type":"application/json"
            },
            "body": JSON.stringify(data)
        }
        const request = await fetch(url, options);
        if(!request.ok) throw Error(request.json());
    }

    useEffect(()=>{
        async function fetchData(){
            const newTicker = await getNewTicker();
            const lastTicker = await getLastTicker();
            const isBotOnline = isBotOn();

            // registerTicker(response);

            // setValue(response.lastPrice);
            // setPriceChangePercent(response.priceChangePercent);
        }

        const interval = setInterval(fetchData, 1000);
        return () => clearInterval(interval);
    },[]);

    return (
        <div>
            <Card>
                <div>
                    <p>{symbol}</p>
                    <p>bitcoin</p>
                    <p>{totalCoin}</p>
                    <p >R$ {value}</p>
                </div>

                <div>
                    <p style={{color: priceChangePercent > 0 ? "green" : "red"}}>{priceChangePercent} %</p>
                </div>
            </Card>
        </div>
    )
}

export default BitcoinCard