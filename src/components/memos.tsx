import {
  Container,
  Header,
  Title,
  Input,
  Textarea,
  Button,
  MemoList,
  Memo,
  Loader,
} from "@components/styledComponents/memos";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

import MemoForm from "@components/memoForm";
import MemosList from "./memosList";

const Memos = () => {
  const navigate = useNavigate();

  const backToCoinList = () => {
    navigate("/");
  };
  return (
    <Container>
      <Helmet>
        <title>MemoList</title>
      </Helmet>
      <Header>
        <Button onClick={backToCoinList}>코인 리스트 보기</Button>
        <Title>메모 목록</Title>
      </Header>
      <MemoForm coinName={null} />
      <MemosList coinType={null} />
    </Container>
  );
};

export default Memos;
