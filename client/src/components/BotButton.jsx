import Button from "react-bootstrap/Button"

import { useEffect, useState } from "react"
import { useBot } from "../hooks/useBot"

const BotButton = () => {
    const {isBotOn, powerOff, powerOn} = useBot();
    const [buttonState, setButtonState] = useState(false)
    
    const handleChangeButton = async () => {    
        if(buttonState){
            setButtonState(false);
            await powerOff()
            return;
        }
        
        setButtonState(true);
        await powerOn();
    }

    useEffect(() => {
        async function fetchData(){
            const isOn = await isBotOn();
            setButtonState(isOn);
        }
        fetchData();
    },[])

    return (
        <div>
            <Button
                onClick={()=>handleChangeButton()}
                variant={!buttonState ? "success" : "danger"}
            >
                {!buttonState ? "Ligar" : "Desligar"} Bot    
            </Button> 
        </div>
    )
}

export default BotButton