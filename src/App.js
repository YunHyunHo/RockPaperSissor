import { useState } from 'react';
import "./App.css"
import Box from './component/Box';
import styled from 'styled-components';

const View = styled.div`
  display: flex;
`
const BtnBlock = styled.div`
  display: flex;
  justify-content: center;
`
// 1. 박스 2개(title, item, result)
// 2. 가위 바위 보 button
// 3. button을 클릭하면 클릭한 값이 Box에 보임
// 4. computer는 rendom하게 item을 선택
// 5. 3,4의 result를 가지고 승패를 가린다.
// 6. 승패결과에따라 테두리 색이 바뀐다( 파랑색 = 승 / 빨간색 = 패 / 무승부 = 주황)

const choice = {
  rock: {
    name: 'Rock',
    item: '주먹'
  },
  scissors: {
    name: 'Scissors',
    item: '가위'
  },
  paper: {
    name: 'Paper',
    item: '보'
  }
}
function App() {
  // user 값
  const [userSelect, setUserSelect] = useState(null);
  // computer 값
  const [comSelect, setComSelect] = useState(null)
  // result 값
  const [result, setResult] = useState("")
  const play = (userchoice) => {
    // user의 선택된 값
    setUserSelect(choice[userchoice]);
    // computer의 선택된 값
    let comChoice = randomChoice()
    setComSelect(comChoice);
    // 결과 판단(유저가 선택한값 / 컴퓨터가 선택한값)
    setResult(judgement(choice[userchoice],comChoice));
    console.log(comChoice)
  };
  
  const judgement = (user, computer) => {
    // user == computer 무승부
    // user 주먹 == computer 가위 user이김
    // user 가위 == computer 보 user이김
    // user 보 == computer 주먹 user이김
    // user 가위 == computer 주먹 user짐
    // user 보 == computer 가위 user짐
    // user 주먹 == computer 보 user짐
    if(user.name === computer.name){
      console.log('user:', user, 'compuster:', computer , user.name === computer.name)
      return 'draw'
    }else if(user.name === "Rock") 
      return computer.name === "Scissors" ? "win" : "lose"
    else if(user.name === "Scissors") 
      return computer.name === "Paper" ? "win" : "lose"
    else if(user.name === "Paper") 
      return computer.name === "Rock" ? "win" : "lose"
  };

  const randomChoice = () => {
    // 객체의 키값을 뽑아서 어레이로 만듬
    let itemArr = Object.keys(choice);
    // Math.floor 소수점 아래있는것들을 버려준다.
    let randomItem = Math.floor(Math.random()*itemArr.length);
    let final = itemArr[randomItem];
    return choice[final]
  }
  return (
    <div className="App">
      <View>
        <Box title="Me" items={userSelect} result={result}></Box>
        <Box title="Computer" items={comSelect} result={result}></Box>
      </View>
      <BtnBlock>
        <button onClick={() => play('scissors')}>가위</button>
        <button onClick={() => play('rock')}>바위</button>
        <button onClick={() => play('paper')}>보</button>
      </BtnBlock>
    </div>
    
  );
}

export default App;
