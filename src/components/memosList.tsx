import { FC, useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { MemoList, Memo, FromItem } from "@components/styledComponents/memos";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  currentCoinPage,
  getOneCoinMemos,
  getAllCoinMemos,
  MemoState,
  IMemos,
  memosState,
} from "@atoms/memosAtom";
import moment from "moment";
import {
  MemoCardBox,
  MemoCardItem,
  MemoCardItemSpan,
  MemoCardUl,
  MemoCardLi,
  Button,
} from "@components/styledComponents/memoList";
import MemoModifyForm from "./memoModifyForm";
import MemosListNormal from "./memosListNormal";

const MemosList: FC<{ coinType: string | null }> = ({ coinType }) => {
  const setMemoState = useSetRecoilState(memosState);
  // coinType 가 null 일땐 전체 메모를 불러오고
  // 아닐땐 필터된 메모리스트를 가져온다.
  const coinTypeMemo = useRecoilValue(getOneCoinMemos);
  console.log("coinTypeMemo: ", coinTypeMemo);
  const allCoinTypeMemos = useRecoilValue(getAllCoinMemos);
  console.log("allCoinTypeMemos: ", allCoinTypeMemos);
  // 버튼 클릭시 수정할 수 있는 수정 폼 컴포넌트 키기! setRecoil로 수정하기
  const turnModifyForm = useCallback(
    (itemObj: IMemos) => {
      setMemoState((prev) => {
        console.log("prev: ", prev);
        const objIndex = prev.findIndex((item) => item.id === itemObj.id);
        // prev[objIndex].isModifyOpen = true;
        const currentIsModifyOpen = prev[objIndex].isModifyOpen;
        // memoState 가 CompletedDeal 일땐 수정창 안열고, 그냥 alert만 띄우기
        const currentMemoState = prev[objIndex].memoState;
        if (currentMemoState === MemoState.planingToBuy) {
          return [
            ...prev.slice(0, objIndex),
            {
              ...prev[objIndex],
              isModifyOpen: !currentIsModifyOpen,
            },
            ...prev.slice(objIndex + 1),
          ];
        } else {
          alert("Sorry, CompleteDeal is disable to change!");
          return prev;
        }
      });
    },
    [setMemoState]
  );

  return (
    <>
      {coinType === null &&
        (allCoinTypeMemos && allCoinTypeMemos.length > 0 ? (
          allCoinTypeMemos.map((coinObj, coinObjIndex) => (
            <MemoCardBox key={coinObjIndex}>
              <div>{coinObj[0].coinType}</div>
              <MemoCardItem>
                <MemoCardUl>
                  {coinObj.map((item, index) => (
                    <>
                      <MemosListNormal
                        itemObj={item}
                        itemIndex={index}
                        turnModifyForm={turnModifyForm}
                      />
                    </>
                  ))}
                </MemoCardUl>
              </MemoCardItem>
            </MemoCardBox>
          ))
        ) : (
          <>There is no List you are looking for..</>
        ))}
      {coinType !== null &&
        (coinTypeMemo && coinTypeMemo.length > 0 ? (
          <MemoCardBox>
            <div>{coinTypeMemo[0].coinType}</div>
            <MemoCardItem>
              <MemoCardUl>
                {coinTypeMemo.map((itemObj, itemIndex) => (
                  <MemosListNormal
                    itemObj={itemObj}
                    itemIndex={itemIndex}
                    turnModifyForm={turnModifyForm}
                  />
                ))}
              </MemoCardUl>
            </MemoCardItem>
          </MemoCardBox>
        ) : (
          <>There is no List you are looking for..</>
        ))}
    </>
  );
};

export default MemosList;
