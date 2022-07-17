import styled from "styled-components";

export const MemoCardBox = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const MemoCardItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  span {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
    margin-left: 10px;
  }
  p {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-left: 10px;
    margin-bottom: 5px;
  }
`;

export const MemoCardItemSpan = styled.span`
  font-size: 10px;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 5px;
  margin-left: 10px;
`;

export const MemoCardUl = styled.ul`
  width: 80%;
`;
// 보통 리스트 카드
export const MemoCardLi = styled.li`
  background-color: white;
  color: #2f3640;
  border-radius: 5px;
  margin-bottom: 10px;
`;
// 수익난 리스트 카드
export const MemoCardLiProfit = styled.li`
  background-color: greenyellow;
  color: #2f3640;
  border-radius: 5px;
  margin-bottom: 10px;
`;
// 손실난 리스트 카드
export const MemoCardLiLoss = styled.li`
  background-color: red;
  color: #2f3640;
  border-radius: 5px;
  margin-bottom: 10px;
`;

// 거래 완료된 li (TODO: 수익난것, 손실난것 구분처리 해보기)
export const MemoCardDoneLi = styled.li`
  background-color: yellowgreen;
  color: #2f3640;
  border-radius: 5px;
  margin-bottom: 10px;
`;

// 버튼
export const Button = styled.button`
  text-align: center;
  padding: 0.5em;
  border-radius: 6px;
  background-color: #2f3640;
  color: white;
`;
