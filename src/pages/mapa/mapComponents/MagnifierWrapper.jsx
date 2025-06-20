import Magnifier from "magnify-anything";
import { theme } from "../../../utils/theme/ThemeProviderWrapper";

const MagnifierWrapper = ({
  children,
  previewSize = 300,
  zoom = 2.5,
  borderColor = theme.palette.primary.main,
  disabled = false,
}) => {
  const Wrapper = disabled ? (
    children
  ) : (
    <Magnifier previewSize={previewSize} zoom={zoom} borderColor={borderColor}>
      {children}
    </Magnifier>
  );
  return Wrapper;
};

export default MagnifierWrapper;
