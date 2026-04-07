import BotButton from '../components/BotButton.jsx'
import Trade from '../components/trade/Trade.jsx'
import Wallet from '../components/wallet/Wallet.jsx'

const Home = () => {
  return (
    <div>
        <div>
            Home
            <BotButton />
        </div>
        <hr />
        <Wallet />
        <hr />
        <Trade />
    </div>
  )
}

export default Home