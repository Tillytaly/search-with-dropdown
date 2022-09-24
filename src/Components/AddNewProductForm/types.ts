import { PropsWithOnSubmitData } from "../../Types";

interface inputState {
  value: string;
  isValid: boolean | null;
  errorMessage: string;
}

export interface InitialState {
  [key: string]: inputState;
}

interface Payload {
  value: string;
  id: string;
}

export interface Action {
  type: string;
  payload: Payload;
}

export type Reducer = (state: InitialState, action: Action) => InitialState;

export interface AddNewProductFormProps extends PropsWithOnSubmitData {
  onCloseForm: () => void;
}
