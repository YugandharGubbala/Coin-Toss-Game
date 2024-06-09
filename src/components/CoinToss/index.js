// Write your code here
import {Component} from 'react'
import './index.css'

const head_url = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tail_url = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossurl: head_url,
    headcount: 0,
    tailcount: 0,
  }

  ontoss = () => {
    const {tossurl, headcount, tailcount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latesthead = headcount
    let latesttail = tailcount

    if (toss === 0) {
      tossImage = head_url
      latesthead += 1
    } else {
      tossImage = tail_url
      latesttail += 1
    }

    this.setState({
      tossurl: tossImage,
      headcount: latesthead,
      tailcount: latesttail,
    })
  }
  render() {
    const {tossurl, headcount, tailcount} = this.state
    const total = headcount + tailcount
    return (
      <div className="container">
        <div className="box">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={tossurl} alt="toss result" />
          <button type="button" onClick={this.ontoss}>
            Toss Coin
          </button>

          <div className="list">
            <p className="elements">Total: {total}</p>
            <p className="elements">Heads: {headcount}</p>
            <p className="elements">Tails: {tailcount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
