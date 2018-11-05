import IApp from "../../globals/interfaces";

export function getMyStyle(): IApp.MyMinimumCssInterface {
  return {
    position: "absolute",
    overflow: "hidden",
    bottom: "5px",
    display: "block",
    background: "#6f6f62",
    height: "35px",
    textAlign: "center",
    border: "none",
    WebkitAnimationName: "fromTopToBottom",
    WebkitAnimationDuration: "4s",
    WebkitAnimationDelay: "2s",
    animationName: "fromTopToBottom",
    animationDuration: "4s",
    animationDelay: "-2s",
  } as  IApp.MyMinimumCssInterface;
}

export function getFooterTitleStyle() {
  return {
    width: "100%",
    height: "35px",
    WebkitAnimationName: "FadeBlack",
    WebkitAnimationDuration: "3s",
    animationName: "FadeSilver",
    animationDuration: "3s",
  };
}
