import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";

const LastProfit = () => {
    const [lastProfit, setLestProfit] = useState("00,00");

    return (
        <div> 
            <Card>
                <div>
                    Lucro 24h
                </div>
                <div>
                    R$ {lastProfit}
                </div>
            </Card>
        </div>
  )
}

export default LastProfit