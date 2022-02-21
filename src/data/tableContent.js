import * as IoIcons from "react-icons/io";
export const tableContent = [
  {
    title: "Monthly Price",
    basic: "26.99 TL",
    standard: "40.99TL",
    premium: "54.99TL",
  },
  {
    title: "Video quality",
    basic: "Good",
    standard: "Better",
    premium: "Best",
  },
  {
    title: "Resolution",
    basic: "480p",
    standard: "1080p",
    premium: "4K+HDR",
  },
  {
    title: "Watch on your TV, computer, mobile phone and tablet",
    basic: <IoIcons.IoMdCheckmark value={{ color: "red", size: "25px" }} />,
    standard: <IoIcons.IoMdCheckmark value={{ color: "red", size: "25px" }} />,
    premium: <IoIcons.IoMdCheckmark value={{ color: "red", size: "25px" }} />,
  },
];
