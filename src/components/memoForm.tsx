import { useRecoilState, useSetRecoilState } from "recoil";
import { coinListState, memosState, MemoState } from "@atoms/memosAtom";
import { useForm, SubmitHandler } from "react-hook-form";
import { IMemos } from "@atoms/memosAtom";
import { FormBox, FromItem, Button } from "@components/styledComponents/memos";

const MemoForm = ({ coinName }: { coinName: string | null }) => {
  const [coinNameList, setCoinNameList] = useRecoilState(coinListState);
  const setMemoState = useSetRecoilState(memosState);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IMemos>();

  const onSubmit: SubmitHandler<IMemos> = (data) => {
    console.log("SubmitData: ", data);
    setMemoState((prev) =>
      prev.concat({
        id: Date.now(),
        text: data.text,
        buyPrice: data.buyPrice,
        coinType: data.coinType,
        coinNumber: data.coinNumber,
        targetPrice: data.targetPrice,
        writedAt: Date.now(),
        memoState: MemoState.planingToBuy,
        isModified: false,
      })
    );
    reset();
  };

  // const onSelectCoinName = (event: FormEvent<HTMLSelectElement>) => {
  //   const { value } = event.currentTarget;
  // };

  return (
    <FormBox onSubmit={handleSubmit(onSubmit)}>
      <FromItem>
        <span>Select Coin: </span>
        <span>
          {coinNameList && coinNameList?.length > 0 ? (
            <select
              defaultValue={coinName === null ? coinNameList[0] : coinName}
              disabled={coinName === null ? false : true}
              {...register("coinType", { required: "You have to Select one" })}
            >
              {coinNameList.map((coinName) => (
                <option key={coinName} value={coinName}>
                  {coinName}
                </option>
              ))}
            </select>
          ) : (
            <>there is no coinNameList</>
          )}
        </span>
      </FromItem>

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
        <p>{errors.text?.message}</p>
      </FromItem>
      <FromItem>
        <Button>Submit</Button>
      </FromItem>
    </FormBox>
  );
};

export default MemoForm;
