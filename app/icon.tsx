import { ImageResponse } from "next/og";
import { BiCodeAlt } from "react-icons/bi";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 14,
  height: 14,
};
export const contentType = "image/png";

//Favicon generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <BiCodeAlt />
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
