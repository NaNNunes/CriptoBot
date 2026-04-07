import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";

const TotalProfit = () => {
    const [totalProfit, setTotalProfit] = useState("00,00");

    return (
        <div>
            <Card>
                <div>
                    Lucro Total
                </div>
                <div>
                    R$ {totalProfit}
                </div>
            </Card>
        </div>
    )
}

export default TotalProfit