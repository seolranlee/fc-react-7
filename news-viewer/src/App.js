import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    data: null
  };
  handleClick = async () =>{
    try{
      const response = await axios.get('/v2/top-headlines?country=kr&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f');
      console.log(response)
      this.setState({
        data: response.data,
      });
    }catch(e){
      console.log(e);
    }
    // axios.get('https://jsonplaceholder.typicode.com/todos/1')
    // .then(response => {
    //   console.log(response);
    //   this.setState({
    //     data: response.data
    //   })
    // });
  }
  render() {
    const {data} = this.state;
    return (
      <div>
        <div>
          <button onClick={this.handleClick}>불러오기</button>
        </div>

        {data&&<div>
          <h1>{data.title}</h1>
          <div>상태: {data.completed?'완료':'대기'}</div>
        </div>}


        {/* 이런 데이터 표현법을 많이 쓴다. 데이터가 있을때만 표시. */}
        {data && <textarea rows={7} value={JSON.stringify(data, null, 2)}/>}
      </div>
    );
  }
}

export default App;