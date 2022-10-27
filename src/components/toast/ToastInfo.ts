type ToastInfo = {
  icon: string[];
  msg: string;
};

const ToastMsgType = {
  INFO: ["fas", "circleInfo"],
  ERROR: ["far", "circleXmark"],
  ALERT: ["fa", "triangleExclamation"],
  CONFIRM: ["fa", "circleCheck"],
};

export default ToastInfo;
export { ToastMsgType };
