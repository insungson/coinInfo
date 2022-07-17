import { atom, selector } from "recoil";
import { ICoin } from "@models/coins";

export enum MemoState {
  "planingToBuy" = "PlaningToBuy",
  "completedDeal" = "CompletedDeal",
}

export interface IMemos {
  id: number; // 메모아이디.. 날짜 -> 최초 입력 시 날짜 -> 숫자로 컨버팅
  text: string; // 메모한것
  buyPrice: number; // 구입 가격
  coinNumber: number; // 구입 갯수
  targetPrice: number; // 목표 가격
  sellPrice?: number | null; // 판 가격
  coinType: string; // 코인타입
  writedAt: number; // 최초 작성날짜
  memoState: MemoState; // 메모 상태
  modifiedAt?: number; // 마지막 수정날짜
  isModified: boolean; // 1회 이상 수정 시 true 처리
  isModifyOpen: boolean; // 수정 폼 띄우기 여부
}

// 전체 메모정보
export const memosState = atom<IMemos[]>({
  key: "memosState",
  default: [],
});

// 현재 위치한 코인페이지
export const currentCoinPage = atom<string | null>({
  key: "currentCoinPage",
  default: null,
});

// 코인 타입 리스트 모음
export const coinListObjState = atom<ICoin[] | null>({
  key: "coinListObjState",
  default: null,
});

// 현재 코인 페이지의 코인 목록만 가져옮
export const getOneCoinMemos = selector({
  key: "getOneCoinMemos",
  get: ({ get }) => {
    const allMemos = get(memosState);
    const currentPage = get(currentCoinPage);
    return allMemos.filter((item) => item.coinType === currentPage);
  },
});

// 전체 코인을 코인 타입으로 나누고, 메모 상태로 구분하여 보여준다
export const getAllCoinMemos = selector({
  key: "getAllCoinMemos",
  get: ({ get }) => {
    const allMemos = get(memosState);
    // 코인타입리스트 불러오기 (중복제거 처리하기)
    const coinTypeList = Array.from(
      new Set(allMemos?.map((item) => item.coinType))
    );
    // [[{},{}],[{},{},{}], ...];  형태로 쪼개기
    return coinTypeList.map((coinType) => {
      return allMemos.filter((memoObj) => memoObj.coinType === coinType);
    });
  },
});
