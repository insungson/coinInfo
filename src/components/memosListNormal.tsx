import { FC } from "react";
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
import { IMemos } from "@atoms/memosAtom";
import MemoModifyForm from "./memoModifyForm";
import MemosListLiWrapper from "./memosListLiWrapper";

const MemosListNormal: FC<{
  itemObj: IMemos;
  itemIndex: number;
  turnModifyForm: (obj: IMemos) => void;
}> = ({ itemObj, itemIndex, turnModifyForm }) => {
  return (
    <>
      {/* <MemoCardLi key={itemIndex}> */}
      <MemosListLiWrapper itemObj={itemObj} itemIndex={itemIndex}>
        {itemObj.isModified && (
          <div>
            <span>Modified!</span>
          </div>
        )}
        <div>
          <span>Trade State</span>
          <MemoCardItemSpan>{itemObj.memoState}</MemoCardItemSpan>
        </div>
        <div>
          <span>{itemObj.isModified ? "Last Modified :" : "Write Date :"}</span>
          <MemoCardItemSpan>
            {moment(
              itemObj.isModified ? itemObj.modifiedAt : itemObj.writedAt
            ).format("YYYY-MM-DD")}
          </MemoCardItemSpan>
        </div>
        <div>
          <span>BuyPrice :</span>
          <MemoCardItemSpan>{itemObj.buyPrice}</MemoCardItemSpan>
        </div>
        <div>
          <span>Bought Quantity :</span>
          <MemoCardItemSpan>{itemObj.coinNumber}</MemoCardItemSpan>
        </div>
        <div>
          <span>TargetPrice :</span>
          <MemoCardItemSpan>{itemObj.targetPrice}</MemoCardItemSpan>
        </div>
        <div>
          <span>Expected Profit :</span>
          <MemoCardItemSpan>
            $ {itemObj.buyPrice * itemObj.coinNumber}
          </MemoCardItemSpan>
        </div>
        <div>
          <span>Memo You wrote :</span>
          <p>{itemObj.text}</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <Button onClick={() => turnModifyForm(itemObj)}>
            수정 폼 켜기/끄기
          </Button>
        </div>
        {/* </MemoCardLi> */}
      </MemosListLiWrapper>
      {itemObj.isModifyOpen && <MemoModifyForm memoObj={itemObj} />}
    </>
  );
};

export default MemosListNormal;
