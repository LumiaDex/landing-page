import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export enum StepProfile {
  TODO = 0,
  CONNECT = 1,
  SELECT_AVATAR = 2,
  MINT_PROFILE = 3,
}
interface TabProfileState {
  step: StepProfile;
  nftSelected: NFTItem | null;
}

export interface TabProfileAction {
  setStep: (step: StepProfile) => void;
  setNftSelected: (nftSelected: NFTItem) => void;
  resetTabProfile: () => void;
}

const tabProfileStore = create<TabProfileState & TabProfileAction>()(
  immer((set) => ({
    step: 0,
    nftSelected: null,
    setStep: (step) =>
      set((draft) => {
        draft.step = step;
      }),
    setNftSelected: (nft) =>
      set((draft) => {
        draft.nftSelected = nft;
        draft.step = StepProfile.SELECT_AVATAR;
      }),
    resetTabProfile: () =>
      set((draft) => {
        draft.nftSelected = null;
        draft.step = StepProfile.TODO;
      }),
  }))
);

export const useStepTabProfile = () => tabProfileStore((state) => state.step);
export const useSetStepTabProfile = () =>
  tabProfileStore((state) => state.setStep);

export const useNftSelected = () =>
  tabProfileStore((state) => state.nftSelected);
export const useSetNftSelected = () =>
  tabProfileStore((state) => state.setNftSelected);

export const useResetTabProfile = () =>
  tabProfileStore((state) => state.resetTabProfile);
