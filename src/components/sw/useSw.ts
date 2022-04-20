import { ref } from "vue";

interface Props {
  labelLeft?: string;
  labelRight?: string;
  iconLeft?: Array<unknown>;
  iconRight?: Array<unknown>;
  valLeft: string;
  valRight: string;
}

interface Emit {
  (e: "toggle", value: string): void;
}

const props = {
  labelLeft: String,
  labelRight: String,
  iconLeft: Array,
  iconRight: Array,
  valLeft: String,
  valRight: String,
};

const emits = ["toggle"];

function useSw(props: Props, emit: Emit) {
  const isLeft = ref<boolean>(true);
  const isInit = ref<boolean>(true);
  const toggleBtnHandler = () => {
    isLeft.value = !isLeft.value;
    isInit.value = false;
    emit("toggle", isLeft.value ? props.valLeft : props.valRight);
  };
  return {
    isLeft,
    isInit,
    toggleBtnHandler,
  };
}

export type { Props, Emit };
export { props, emits, useSw };
