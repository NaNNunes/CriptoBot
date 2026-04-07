const urlApi = "https://api.binance.com/api/v3/ticker?symbol=BTCBRL";
const localApi = "http://localhost:5001/tickers"; 

export function useTicker(){
    const getNewTicker = async () => {
        const request = await fetch(urlApi);
        if(!request.ok) throw new Error(request.json());
        
        const response = await request.json();
        return response;
    } 

    const getLastTicker = async () => {
        const request = await fetch(localApi);
        if (!request.ok) throw new Error(request.json());
        
        let response = [];
        response = await request.json();
        if(response.length < 1) return [];
        
        return response[response.length-1];
    }

    return {getNewTicker, getLastTicker}
}