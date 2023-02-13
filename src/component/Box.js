import React from 'react'
import styled from 'styled-components'

const BoxBlock = styled.div`
    border: 1px solid #000;
    flex: 1;
    text-align: center;
    p{
        font-size: 50px;
        font-weight: bold;
    }
`
const Box = (props) => {
    let result;
    if(props.title === 'Computer' && props.result !== "draw" && props.result !== ""){
        // 카드가 computer카드인가 && 결과가 비긴건 아닌가 && props.result에 값이 있는가
        result = props.result === "win" ? 'lose' : "win"
    } else{
        // 위의 경우가 아니라면 props로 전달된 결과를 그대로 쓴다.
        result = props.result;
    }
  return (
    <BoxBlock className={`box ${result}`}>
        <h1>{props.title}</h1>
        <h2 data-testid="item-name">{props.items && props.items.name}</h2>
        <p>{props.items && props.items.item}</p>
        <h2>{result}</h2>
    </BoxBlock>
  )
}

export default Box