import Image from "next/image"

// style
import animation from "../styles/animation.module.css"

const Spinner = ({ size = "small", animated = true }) => {
  return (
    <div
      className={animated ? animation.rotating : ""}
      style={{
        width: size === "small" ? 17 : 25,
        height: size === "small" ? 25.5 : 25,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Image
        src={"/spinner.png"}
        width={size === "small" ? 920 : 920}
        height={size === "small" ? 512 : 13.9}
        layout="fixed"
        priority
        alt="spinner"
      />
    </div>
  )
}

export default Spinner
