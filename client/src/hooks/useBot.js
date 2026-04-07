const url = "http://localhost:5001/bot/1";

export function useBot(){
    const isBotOn = async () => {
        const request = await fetch(url);
        if(!request.ok) throw new Error(request.json());
        const response = await request.json();
        return response.isActive;
    }

    const powerOff = async () => {
        const options = {
            method: "PATCH",
            body: JSON.stringify({"isActive" : false})
        }
        const request = await fetch(url, options);
        if (!request.ok) throw new Error(request.json());
    }

    const powerOn = async () => {
        const options = {
            method: "PATCH",
            body: JSON.stringify({"isActive" : true})
        }
        const request = await fetch(url, options);
        if (!request.ok) throw new Error(request.json());
    }

    return {isBotOn, powerOff, powerOn}
} 