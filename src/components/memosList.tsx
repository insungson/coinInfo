import { FC } from "react";
import { IMemos } from "@atoms/memosAtom";
import { MemoList, Memo } from "@components/styledComponents/memos";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  currentCoinPage,
  getOneCoinMemos,
  getAllCoinMemos,
} from "@atoms/memosAtom";

const MemosList: FC<{ coinType: string | null }> = ({ coinType }) => {
  // coinType 가 null 일땐 전체 메모를 불러오고
  // 아닐땐 필터된 메모리스트를 가져온다.
  const coinTypeMemo = useRecoilValue(getOneCoinMemos);
  const allCoinTypeMemos = useRecoilValue(getAllCoinMemos);
  console.log("allCoinTypeMemos: ", allCoinTypeMemos);
  return (
    <>
      {/* {coinMemoList?.length > 0 && (
      <MemoList>
        {coinMemoList.map(item => (
          <Memo>
            <span></span>
            <span></span>
            <br />
          </Memo>
        ))}
      </MemoList>
    )} */}
    </>
  );
};

export default MemosList;
