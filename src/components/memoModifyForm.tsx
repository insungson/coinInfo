import { FC, memo } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { memosState, MemoState } from "@atoms/memosAtom";
import { useForm, SubmitHandler, useWatch } from "react-hook-form";
import { IMemos } from "@atoms/memosAtom";
import { FormBox, FromItem, Button } from "@components/styledComponents/memos";

const MemoModifyForm: FC<{ memoObj: IMemos }> = ({ memoObj }) => {
  const setMemoState = useSetRecoilState(memosState);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
    control,
  } = useForm<IMemos>({
    defaultValues: {
      text: memoObj.text,
      buyPrice: memoObj.buyPrice,
      coinType: memoObj.coinType,
      coinNumber: memoObj.coinNumber,
      targetPrice: memoObj.targetPrice,
      memoState: memoObj.memoState,
    },
  });

  const onSubmit: SubmitHandler<IMemos> = (data) => {
    console.log("SubmitData: ", data);
    setMemoState((prev) => {
      const objIndex = prev.findIndex((item) => item.id === memoObj.id);
      // // setState 는 아래와 같이 수정하면 안되고..
      // // return 에서 slice 함수를 사용하여 처리해야 한다.
      // prev[objIndex] = {
      //   ...prev[objIndex],
      //   text: data.text,
      //   buyPrice: data.buyPrice,
      //   coinType: data.coinType,
      //   coinNumber: data.coinNumber,
      //   targetPrice: data.targetPrice,
      //   memoState: data.memoState, // form 만들기
      //   sellPrice: data?.sellPrice ?? 0, // 판 가격 MemoState.completedDeal 일때만 입력 가능!
      //   isModified: true,
      //   isModifyOpen: false,
      // };
      return [
        ...prev.slice(0, objIndex),
        {
          ...prev[objIndex],
          text: data.text,
          buyPrice: data.buyPrice,
          coinType: data.coinType,
          coinNumber: data.coinNumber,
          targetPrice: data.targetPrice,
          memoState: data.memoState, // form 만들기
          sellPrice: data?.sellPrice ?? 0, // 판 가격 MemoState.completedDeal 일때만 입력 가능!
          isModified: true,
          isModifyOpen: false,
        },
        ...prev.slice(objIndex + 1),
      ];
    });
    reset();
  };

  // 아래의 방법으로 실시간 state 처럼 사용 가능!!
  const memoStateWatch = useWatch({
    control,
    name: "memoState",
  });
  console.log("memoStateWatch: ", memoStateWatch);

  return (
    <FormBox onSubmit={handleSubmit(onSubmit)}>
      <FromItem>
        <span>Select Coin: </span>
        <span>
          <select disabled>
            <option>{memoObj.coinType}</option>
          </select>
        </span>
      </FromItem>
      <FromItem>
        <span>Memo State: </span>
        <span>
          <select {...register("memoState")}>
            <option value={MemoState.planingToBuy}>
              {MemoState.planingToBuy}
            </option>
            <option value={MemoState.completedDeal}>
              {MemoState.completedDeal}
            </option>
          </select>
        </span>
      </FromItem>
      {memoStateWatch === MemoState.completedDeal && (
        <FromItem>
          <span>Sell Price: </span>
          <span>
            <input
              {...register("sellPrice", {
                valueAsNumber: true,
                required: "only positive Number Available",
                validate: {
                  //@ts-ignore
                  positive: (value) => value > 0,
                },
              })}
            />
          </span>
          <p>{errors.buyPrice?.message}</p>
        </FromItem>
      )}
      <FromItem>
        <span>Buy Price: </span>
        <span>
          <input
            {...register("buyPrice", {
              valueAsNumber: true,
              required: "only positive Number Available",
              validate: {
                positive: (value) => value > 0,
              },
            })}
          />
        </span>
        <p>{errors.buyPrice?.message}</p>
      </FromItem>

      <FromItem>
        <span>Target Price: </span>
        <span>
          <input
            {...register("targetPrice", {
              valueAsNumber: true,
              required: "only positive Number Available",
              validate: {
                positive: (value) => value > 0,
              },
            })}
          />
        </span>
        <p>{errors.targetPrice?.message}</p>
      </FromItem>

      <FromItem>
        <span>Coin Number To Buy: </span>
        <span>
          <input
            {...register("coinNumber", {
              valueAsNumber: true,
              required: "only positive Number Available",
              validate: {
                positive: (value) => value > 0,
              },
            })}
          />
        </span>
        <p>{errors.coinNumber?.message}</p>
      </FromItem>

      <FromItem>
        <span>Memo for your Trade</span>
        {/* <span>
          <textarea
            {...register("text", {
              required: "write at least one letter",
              validate: {
                letter: (value) =>
                  value.trim().length === 0
                    ? "write at least one letter"
                    : true,
              },
            })}
          />
        </span> */}
        <p>{errors.text?.message}</p>
      </FromItem>
      <FromItem>
        <span>
          <textarea
            {...register("text", {
              required: "write at least one letter",
              validate: {
                letter: (value) =>
                  value.trim().length === 0
                    ? "write at least one letter"
                    : true,
              },
            })}
          />
        </span>
      </FromItem>
      <FromItem>
        <Button>Submit</Button>
      </FromItem>
    </FormBox>
  );
};

export default MemoModifyForm;
