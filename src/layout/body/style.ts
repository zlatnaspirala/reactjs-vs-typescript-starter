import IApp from "../../globals/interfaces";

export function getHomeStyle(): IApp.MyMinimumCssInterface {
  return {
    background: "#A9A9A9",
    height: "79vh",
    textAlign: "center",
  } as  IApp.MyMinimumCssInterface;
}

export function getAboutWrapperStyle(): IApp.MyMinimumCssInterface {
  return {
    display: "inline-grid",
    background: "#959595",
    height: "auto",
    textAlign: "left",
    wordBreak: "break-word",
    width: "500px",
  } as IApp.MyMinimumCssInterface;
}

export function getAboutStyle(): IApp.MyMinimumCssInterface {
  return {
    background: "#959595",
    height: "auto",
    textAlign: "center",
    wordBreak: "break-word",
    fontFamily: "Georgia, serif",
    fontSize: "26px",
    letterSpacing: "1.8px",
    wordSpacing: "1.2px",
    color: "#000000",
    fontWeight: "normal",
    textDecoration: "none",
    fontStyle: "normal",
    fontVariant: "small-caps",
    textTransform: "none",
    WebkitAnimationName: "FadeSilver",
    WebkitAnimationDuration: "3s",
    animationName: "FadeSilver",
    animationDuration: "3s",
  } as IApp.MyMinimumCssInterface;
}

export function getBtnStyle(): IApp.MyMinimumCssInterface {
  return {
    justifyContent: "center",
    height: "60px",
    display: "grid",
    alignItems: "center",
    background: "silver",
    width: "100%",
    textAlign: "center",
    WebkitBoxShadow: "12px 12px 12px 0 rgba(0,0,0,0.2)",
    boxShadow: "12px 12px 12px 0 rgba(0,0,0,0.2)",
    onHover: "background-color: lime",
    WebkitAnimationName: "FadeSilver",
    WebkitAnimationDuration: "3s",
    animationName: "FadeSilver",
    animationDuration: "3s",
  } as IApp.MyMinimumCssInterface;
 }

export function getBtnWrapperStyle(): IApp.MyMinimumCssInterface {
  return {
    height: "60px",
  } as IApp.MyMinimumCssInterface;
}

export function getMyTableItemWrapperStyle(): IApp.MyMinimumCssInterface {
  return {
    width: "50%",
    height: "100px",
  } as IApp.MyMinimumCssInterface;
}
