import { Oval } from "react-loader-spinner";

function LoadingSpinner({
  style,
  height = 80,
  width = 80,
  color = "#4fa94d",
  secondaryColor = "#4fa94d",
  strokeWidth = 2,
  strokeWidthSecondary = 2,
}) {
  return (
    <Oval
      height={height}
      width={width}
      color={color}
      wrapperStyle={style}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor={secondaryColor}
      strokeWidth={strokeWidth}
      strokeWidthSecondary={strokeWidthSecondary}
    />
  );
}

export default LoadingSpinner;
