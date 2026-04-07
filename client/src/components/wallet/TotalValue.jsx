import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";

const TotalValue = () => {
    const [totalValue, setTotalValue] = useState("00,00");

    useEffect(()=>{
        async function fetchData(){
            const url = "http://localhost:5001/traders/1";
            const request = await fetch(url);
            if(!request.ok){
                return
            }
            const response = await request.json();
            setTotalValue(response.wallet_value);
        }
        const interval = setInterval(fetchData, 1);
        return () => clearInterval(interval);
    },[])

    return (
        <div>
            <Card>
                <div>
                    Saldo Total
                </div>
                <div>
                    R$ {totalValue}
                </div>
            </Card>
        </div>
    )
}

export default TotalValue