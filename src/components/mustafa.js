import { animated, config, useTrail } from "react-spring";

function Mustafa(props) {
  let mobile = props.mobile;
  const pathsMobile = [
    {
      d: "M0.440002 42V1.20001H14.54L21.74 30.96L28.94 1.20001H43.04V42H34.76V10.44H33.86L25.88 40.2H17.6L9.62 10.44H8.72V42H0.440002Z",
      fill: "#FFA372",
    },
    {
      d: "M67.8639 28.38C67.8639 33.14 70.2839 35.52 75.1239 35.52C79.9639 35.52 82.3839 33.14 82.3839 28.38V1.20001H90.6639V28.2C90.6639 33.2 89.3639 36.88 86.7639 39.24C84.2039 41.56 80.3239 42.72 75.1239 42.72C69.9239 42.72 66.0239 41.56 63.4239 39.24C60.8639 36.88 59.5839 33.2 59.5839 28.2V1.20001H67.8639V28.38Z",
      fill: "#FFA372",
    },
    {
      d: "M119.742 7.68001C115.382 7.68001 113.202 9.12001 113.202 12C113.202 13.28 113.742 14.26 114.822 14.94C115.902 15.62 118.422 16.6 122.382 17.88C126.382 19.16 129.182 20.62 130.782 22.26C132.382 23.86 133.182 26.34 133.182 29.7C133.182 33.98 131.882 37.22 129.282 39.42C126.682 41.62 123.282 42.72 119.082 42.72C115.962 42.72 112.142 42.24 107.622 41.28L105.462 40.86L106.302 34.44C111.662 35.16 115.762 35.52 118.602 35.52C122.842 35.52 124.962 33.76 124.962 30.24C124.962 28.96 124.462 27.96 123.462 27.24C122.502 26.52 120.562 25.74 117.642 24.9C113.002 23.58 109.722 22.02 107.802 20.22C105.922 18.38 104.982 15.84 104.982 12.6C104.982 8.52001 106.222 5.48001 108.702 3.48001C111.182 1.48001 114.582 0.480011 118.902 0.480011C121.862 0.480011 125.622 0.880011 130.182 1.68001L132.342 2.10001L131.682 8.64001C126.042 8.00001 122.062 7.68001 119.742 7.68001Z",
      fill: "#FFA372",
    },
    {
      d: "M144.178 8.52001V1.20001H174.178V8.52001H163.378V42H155.098V8.52001H144.178Z",
      fill: "#FFA372",
    },
    {
      d: "M181.774 42L190.954 1.20001H206.674L215.854 42H207.574L205.954 34.62H191.674L190.054 42H181.774ZM197.374 8.04001L193.234 27.42H204.394L200.254 8.04001H197.374Z",
      fill: "#FFA372",
    },
    {
      d: "M229.288 42V1.20001H255.328V8.40001H237.568V20.4H252.088V27.6H237.568V42H229.288Z",
      fill: "#FFA372",
    },
    {
      d: "M264.454 42L273.634 1.20001H289.354L298.534 42H290.254L288.634 34.62H274.354L272.734 42H264.454ZM280.054 8.04001L275.914 27.42H287.074L282.934 8.04001H280.054Z",
      fill: "#FFA372",
    },
  ];

  const paths = [
    {
      d: "M0.839996 111V2.2H38.44L57.64 81.56L76.84 2.2H114.44V111H92.36V26.84H89.96L68.68 106.2H46.6L25.32 26.84H22.92V111H0.839996Z",
      fill: "#FFA372",
    },
    {
      d: "M173.304 74.68C173.304 87.3733 179.757 93.72 192.664 93.72C205.57 93.72 212.024 87.3733 212.024 74.68V2.2H234.104V74.2C234.104 87.5333 230.637 97.3467 223.704 103.64C216.877 109.827 206.53 112.92 192.664 112.92C178.797 112.92 168.397 109.827 161.464 103.64C154.637 97.3467 151.224 87.5333 151.224 74.2V2.2H173.304V74.68Z",
      fill: "#FFA372",
    },
    {
      d: "M304.311 19.48C292.685 19.48 286.871 23.32 286.871 31C286.871 34.4133 288.311 37.0267 291.191 38.84C294.071 40.6533 300.791 43.2667 311.351 46.68C322.018 50.0933 329.485 53.9867 333.751 58.36C338.018 62.6267 340.151 69.24 340.151 78.2C340.151 89.6133 336.685 98.2533 329.751 104.12C322.818 109.987 313.751 112.92 302.551 112.92C294.231 112.92 284.045 111.64 271.991 109.08L266.231 107.96L268.471 90.84C282.765 92.76 293.698 93.72 301.271 93.72C312.578 93.72 318.231 89.0267 318.231 79.64C318.231 76.2267 316.898 73.56 314.231 71.64C311.671 69.72 306.498 67.64 298.711 65.4C286.338 61.88 277.591 57.72 272.471 52.92C267.458 48.0133 264.951 41.24 264.951 32.6C264.951 21.72 268.258 13.6133 274.871 8.28C281.485 2.94666 290.551 0.279999 302.071 0.279999C309.965 0.279999 319.991 1.34666 332.151 3.48L337.911 4.6L336.151 22.04C321.111 20.3333 310.498 19.48 304.311 19.48Z",
      fill: "#FFA372",
    },
    {
      d: "M362.142 21.72V2.2H442.143V21.72H413.342V111H391.263V21.72H362.142Z",
      fill: "#FFA372",
    },
    {
      d: "M455.064 111L479.544 2.2H521.464L545.944 111H523.864L519.544 91.32H481.464L477.144 111H455.064ZM496.664 20.44L485.624 72.12H515.384L504.344 20.44H496.664Z",
      fill: "#FFA372",
    },
    {
      d: "M574.434 111V2.2H643.874V21.4H596.514V53.4H635.234V72.6H596.514V111H574.434Z",
      fill: "#FFA372",
    },
    {
      d: "M660.876 111L685.356 2.2H727.276L751.756 111H729.676L725.356 91.32H687.276L682.956 111H660.876ZM702.476 20.44L691.436 72.12H721.196L710.156 20.44H702.476Z",
      fill: "#FFA372",
    },
  ];

  const spring = useTrail(paths.length, {
    config: config.default,
    from: {
      // fill: "#2c003e",
      transform: "translate3d(0,100px,0)",
      //   strokeDasharray: 0,
      //   strokeDashoffset: 0,
    },
    to: {
      // fill: "#FFA372",
      transform: "translate3d(0,0,0)",
      //   strokeDasharray: 100,
      //   strokeDashoffset: 100,
    },
  });
  return (
    <animated.svg
      className="mustafa"
      width={mobile ? "30" : "100"}
      height={mobile ? "30" : "100"}
      viewBox={mobile ? "0 0 299 43" : "0 0 752 113"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {spring.map((styles, i) => (
        <animated.path
          key={i}
          d={mobile ? pathsMobile[i].d : paths[i].d}
          style={styles}
        />
      ))}
    </animated.svg>
  );
}

export default Mustafa;
