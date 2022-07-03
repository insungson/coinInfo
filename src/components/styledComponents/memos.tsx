import styled from "styled-components";

export const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

export const MemoList = styled.ul``;

export const Memo = styled.li`
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
`;

export const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 48px;
  color: ${(props) => props.theme.textColor};
`;

export const Loader = styled.span`
  text-align: center;
  display: block;
`;

export const Input = styled.input``;

export const Textarea = styled.textarea``;

export const Button = styled.button`
  padding: 0.5em;
  border-radius: 6px;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
`;

export const FormBox = styled.form`
  display: block;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;

export const FromItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  width: 80%;
  margin-top: 10px;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-top: 5px;
    margin-left: 10px;
    margin-bottom: 5px;
  }
  span:last-child {
    margin-left: 10px;
    /* margin-top: 5px; */
  }
  p {
    color: ${(props) => props.theme.textColor};
    font-size: 10px;
  }
`;
