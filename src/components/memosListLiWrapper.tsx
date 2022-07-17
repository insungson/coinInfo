import { FC, ReactNode } from "react";
import moment from "moment";
import {
  MemoCardBox,
  MemoCardItem,
  MemoCardItemSpan,
  MemoCardUl,
  MemoCardLi,
  MemoCardLiProfit,
  MemoCardLiLoss,
  Button,
} from "@components/styledComponents/memoList";
import { IMemos, MemoState } from "@atoms/memosAtom";
import MemoModifyForm from "./memoModifyForm";

const MemosListLiWrapper: FC<{
  itemObj: IMemos;
  itemIndex: number;
  children: ReactNode;
}> = ({ itemObj, itemIndex, children }) => {
  // MemoState.planingToBuy 일땐 그냥 MemoCardLi
  if (itemObj.memoState === MemoState.planingToBuy) {
    return <MemoCardLi key={itemIndex}>{children}</MemoCardLi>;
  } else {
    // MemoState.completedDeal 일땐
    if (itemObj.sellPrice) {
      // sellPrice - buyPrice > 0 ? MemoCardLiProfit : MemoCardLiLoss 처리
      if (itemObj.sellPrice - itemObj.buyPrice > 0) {
        return <MemoCardLiProfit key={itemIndex}>{children}</MemoCardLiProfit>;
      } else {
        return <MemoCardLiLoss key={itemIndex}>{children}</MemoCardLiLoss>;
      }
    } else {
      return <MemoCardLi key={itemIndex}>{children}</MemoCardLi>;
    }
  }
};

export default MemosListLiWrapper;
