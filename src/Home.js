import React, { Component } from 'react'

export default class Home extends Component {

  constructor() {
    super();
    this.state = ({
      val: '',
      sign: '', 
      first: '',
    })
  }

  getdata = (e) => {
    this.setState({ val: this.state.val += e.target.value })
  }

  getdel = () => {
    this.setState({val : ''})
  }

  getsign = (e) => {
    this.setState({ first: this.state.val})

    if(e.target.value == '+'){
      this.setState({sign: e.target.value  })
    }

    if(e.target.value == '-'){
      this.setState({sign: e.target.value  })
    }

    if(e.target.value == '*'){
      this.setState({sign: e.target.value  })
    }

    if(e.target.value == '/'){
      this.setState({sign: e.target.value  })
    }
    this.setState({val: ''})
  }

  getback = () => {
    this.setState({ val: this.state.val.slice(0,-1)})
  }

  getans = () => {

    if(this.state.sign == '+'){
      var add = parseInt(this.state.first) + parseInt(this.state.val)
    }

    if(this.state.sign == '-'){
      var add = parseInt(this.state.first) - parseInt(this.state.val)
    }

    if(this.state.sign == '*'){
      var add = parseInt(this.state.first) * parseInt(this.state.val)
    }

    if(this.state.sign == '/'){
      var add = parseInt(this.state.first) / parseInt(this.state.val)
    }

    this.setState({val: add})
    
  }

  render() {

    return (
      <>
        <div className="calculator margin">
          <div className="tb1 flex center pt">
            <input type="text" id="num1" name="" placeholder='0' value={this.state.val} readOnly/>
          </div>

          <button id="errow" onClick={this.getback} value='check'>
            <i className="fa-solid fa-delete-left"></i>
          </button>

          <div className="container flex between ">

            <div className="row">
              <input type="button" id="num" name="" value={'7'} onClick={this.getdata} />
              <input type="button" id="num" name="" value={'4'} onClick={this.getdata} />
              <input type="button" id="num" name="" value={'1'} onClick={this.getdata} />
              <input type="button" id="num" name="" value={'.'} onClick={this.getdata} />
            </div>
            <div className="row">
              <input type="button" id="num" name="" value={'8'} onClick={this.getdata} />
              <input type="button" id="num" name="" value={'5'} onClick={this.getdata} />
              <input type="button" id="num" name="" value={'2'} onClick={this.getdata} />
              <input type="button" id="ce" name="" value={'CE'} onClick={this.getdel} />
            </div>
            <div className="row">
              <input type="button" id="num" name="" value={'9'} onClick={this.getdata} />
              <input type="button" id="num" name="" value={'6'} onClick={this.getdata} />
              <input type="button" id="num" name="" value={'3'} onClick={this.getdata} />
              <input type="button" id="num" name="" value={'+'} onClick={this.getsign} />
            </div>
            <div className="row">
              <input type="button" id="num" name="" value={'/'} onClick={this.getsign} />
              <input type="button" id="num" name="" value={'*'} onClick={this.getsign} />
              <input type="button" id="num" name="" value={'-'} onClick={this.getsign} />
              <input type="button" id="num" name="" value={'='} onClick={this.getans} />
            </div>
          </div>


        </div>
      </>
    )
  }
}

