import { Link } from "react-router-dom";
import styled from "styled-components";

// #fa9e146f booking
// #141adc41 free
// #f500006e sales
const ImageClicking = (props) => {
  return (
    <WrapperBlock>
      <svg viewBox="0 0 5000 3897">
        <Link to={`${props.id}/${props.idroom1}`}>
          <path
            class="part"
            d="M 886.94708,247.99091 H 1132.4075 V 792.05259 H 292.275 l 1.26526,-221.42045 h 43.01883 l -1.26526,-280.88766 554.18377,-1.26526 z"
            fill={
              props?.statusroom1 === "sales"
                ? "#f500006e"
                : props?.statusroom1 === "booking"
                ? "#fa9e146f"
                : "#141adc41"
            }
          ></path>
        </Link>
        <Link to={`${props.id}/${props.idroom2}`}>
          <path
            class="part"
            d="m 1164.6716,247.9909 h 245.4604 l -0.6326,41.75357 554.1837,-1.26525 V 571.8974 l 41.121,-0.63263 0.1598,220.77 -583.3273,0.44734 V 1036.728 l -131.5171,-2.684 -0.8946,-242.45656 -124.3597,-0.89468 z"
            fill={
              props?.statusroom2 === "sales"
                ? "#f500006e"
                : props?.statusroom2 === "booking"
                ? "#fa9e146f"
                : "#141adc41"
            }
          ></path>
        </Link>
        <Link to={`${props.id}/${props.idroom3}`}>
          <path
            class="part"
            d="m 292.90763,823.68409 552.91851,-0.63263 v 241.66464 l 161.95326,1.2652 0.5179,160.8649 -19.68281,-0.4473 -0.44734,142.2531 -653.50595,-0.2736 0.63263,-281.5203 h -42.3862 z"
            fill={
              props?.statusroom3 === "sales"
                ? "#f500006e"
                : props?.statusroom3 === "booking"
                ? "#fa9e146f"
                : "#141adc41"
            }
          ></path>
        </Link>
        <Link to={`${props.id}/${props.idroom4}`}>
          <path
            class="part"
            d="M 334.02857,1400.6425 H 986.9026 l 1.26526,112.6081 144.23964,1.2653 1.2652,389.7 H 292.275 v -245.4604 h 43.01883 z"
            fill={
              props?.statusroom4 === "sales"
                ? "#f500006e"
                : props?.statusroom4 === "booking"
                ? "#fa9e146f"
                : "#141adc41"
            }
          ></path>
        </Link>
        <Link to={`${props.id}/${props.idroom5}`}>
          <path
            class="part"
            d="m 1451.2529,1399.3773 276.4593,1.2652 -0.6327,3.1632 116.4039,0.6326 v 6.3263 h 94.8945 l -0.5146,491.113 -773.8928,1.7893 0.8947,-386.4991 125.2543,-1.7893 -0.8946,-109.1502 162.8306,-0.8947 z"
            fill={
              props?.statusroom5 === "sales"
                ? "#f500006e"
                : props?.statusroom5 === "booking"
                ? "#fa9e146f"
                : "#141adc41"
            }
          ></path>
        </Link>
        <Link to={`${props.id}/${props.idroom6}`}>
          <path
            class="part"
            d="m 293.54026,1935.2148 839.56404,-0.2343 0.5684,387.4037 -146.13747,-1.5815 0.40825,119.2211 -416.24696,-0.2237 v -5.5917 l -124.58332,0.671 -0.44733,-6.4864 -111.61055,-0.4473 0.44733,-248.7193 h -42.04966 z"
            fill={
              props?.statusroom6 === "sales"
                ? "#f500006e"
                : props?.statusroom6 === "booking"
                ? "#fa9e146f"
                : "#141adc41"
            }
          ></path>
        </Link>
        <Link to={`${props.id}/${props.idroom7}`}>
          <path
            class="part"
            d="m 1164.9879,1935.3729 689.2234,-0.8398 0.8947,254.9821 128.833,129.7277 -114.9655,115.4129 -142.2532,-0.8947 0.4474,6.2627 -408.8659,0.2237 -0.2237,-118.9916 -152.7655,0.4473 z"
            fill={
              props?.statusroom7 === "sales"
                ? "#f500006e"
                : props?.statusroom7 === "booking"
                ? "#fa9e146f"
                : "#141adc41"
            }
          ></path>
        </Link>
        <Link to={`${props.id}/${props.idroom8}`}>
          <path
            class="part"
            d="m 293.22932,2460.154 110.04487,-0.671 0.22367,14.9857 43.83901,-0.2236 -0.22367,-2.013 540.83028,-0.2237 0.54069,109.7541 h 19.61153 l 0.4745,240.5575 -162.42775,-0.4745 0.44258,201.9529 -271.20816,-0.1439 v -6.959 l -129.37281,0.949 0.31631,-5.0611 -43.33514,0.3164 0.31631,14.2341 -68.32402,0.6327 0.31631,-12.3363 -41.75357,0.9489 z"
            fill={
              props?.statusroom8 === "sales"
                ? "#f500006e"
                : props?.statusroom8 === "booking"
                ? "#fa9e146f"
                : "#141adc41"
            }
          ></path>
        </Link>
        <Link to={`${props.id}/${props.idroom9}`}>
          <path
            class="part"
            d="m 335.05532,3059.138 h 77.83661 l 0.44734,-2.2366 33.55027,0.4473 v -2.684 l 430.7854,0.4473 0.89468,-201.7489 h 63.96917 v 11.6307 l 66.20581,0.4474 v 40.2603 l -20.57745,-0.8947 0.89467,150.3052 143.14778,-1.342 1.4631,144.174 111.3429,1.2653 v 74.0176 l 10.1221,0.6327 0.6326,58.8346 -122.0976,-0.6327 -1.2652,318.2129 -248.62357,-1.2653 1.26526,-42.3862 -371.98636,0.6326 -28.46835,28.4684 -103.11867,-0.6327 -74.65032,-74.0177 1.26526,-103.1186 27.20308,-29.101 z"
            fill={
              props?.statusroom9 === "sales"
                ? "#f500006e"
                : props?.statusroom9 === "booking"
                ? "#fa9e146f"
                : "#141adc41"
            }
          ></path>
        </Link>
        <Link to={`${props.id}/${props.idroom10}`}>
          <path
            class="part"
            d="m 1272.6734,2853.3631 h 112.7289 v -17.8935 l 35.7869,0.4473 0.8947,178.4875 -12.0781,-0.4474 1.342,42.9444 43.3917,-0.4474 v -7.1574 l 369.5003,0.4474 0.8946,559.1711 -413.3392,-0.8947 1.7893,42.9443 -249.614,-1.7893 0.8947,-284.5063 122.5703,-0.8947 v -197.7228 l -122.5703,-0.8947 v -110.9396 h 136.8851 l 0.8947,-129.7277 -29.5243,-0.8946 z"
            fill={
              props?.statusroom10 === "sales"
                ? "#f500006e"
                : props?.statusroom10 === "booking"
                ? "#fa9e146f"
                : "#141adc41"
            }
          ></path>
        </Link>
        <Link to={`${props.id}/${props.idroom11}`}>
          <path
            class="part"
            d="m 2124.4028,2461.0486 10.2888,9.8415 219.6424,-0.8947 0.4473,142.2531 86.7833,-0.4473 0.3867,888.5399 -87.3029,-0.6327 0.6326,150.566 -488.3206,-1.099 0.2237,-41.6024 -10.9597,0.4474 -0.2237,-550.8954 39.813,-0.2236 v -8.0521 l 185.2223,0.4267 -0.3164,-542.7965 z"
            fill={
              props?.statusroom11 === "sales"
                ? "#f500006e"
                : props?.statusroom11 === "booking"
                ? "#fa9e146f"
                : "#141adc41"
            }
          ></path>
        </Link>
        <Link to={`${props.id}/${props.idroom12}`}>
          <path
            class="part"
            d="m 2540.4261,2337.1363 587.9286,-0.2016 0.6326,373.568 -18.0299,-0.6327 0.7179,109.9428 -75.1526,-1.7893 0.7333,198.0394 -246.7256,-1.2653 0.8517,593.4464 h -10.2888 v 41.826 l -239.9962,-0.671 -0.1392,-277.7981 -3.954,0.1581 -0.7907,-149.1424 -5.0611,1.2652 0.6326,-63.263 5.0611,-0.6326 0.6326,-560.5101 3.1632,-1.2652 z"
            fill={
              props?.statusroom12 === "sales"
                ? "#f500006e"
                : props?.statusroom12 === "booking"
                ? "#fa9e146f"
                : "#141adc41"
            }
          ></path>
        </Link>
        <Link to={`${props.id}/${props.idroom13}`}>
          <path
            class="part"
            d="m 2823.143,3046.6126 h 102.4401 v 6.2627 l 125.7017,-0.4473 43.3917,0.4473 v -7.1574 l 95.7301,0.4474 0.5785,40.4358 128.2545,1.6138 0.8947,93.0461 h 11.1834 l 2.684,111.3869 -3.1314,-0.4474 0.4474,357.8695 -240.9208,-0.4283 v -42.0699 h -266.6535 z"
            fill={
              props?.statusroom13 === "sales"
                ? "#f500006e"
                : props?.statusroom13 === "booking"
                ? "#fa9e146f"
                : "#141adc41"
            }
          ></path>
        </Link>
        <Link to={`${props.id}/${props.idroom14}`}>
          <path
            class="part"
            d="m 3362.4278,3046.7455 377.68,-0.6327 -0.6326,41.121 h 141.0764 l -0.6326,561.1427 h -516.8586 z"
            fill={
              props?.statusroom14 === "sales"
                ? "#f500006e"
                : props?.statusroom14 === "booking"
                ? "#fa9e146f"
                : "#141adc41"
            }
          ></path>
        </Link>
        <Link to={`${props.id}/${props.idroom15}`}>
          <path
            class="part"
            d="m 3912.1831,3087.2338 h 141.7091 l -1.2652,-40.172 h 96.8698 l -0.4473,5.8154 169.5407,0.8947 v -6.2627 l 101.0981,-0.4474 0.4473,560.7368 -267.5531,-0.2249 v 41.7536 l -239.9505,-0.15 z"
            fill={
              props?.statusroom15 === "sales"
                ? "#f500006e"
                : props?.statusroom15 === "booking"
                ? "#fa9e146f"
                : "#141adc41"
            }
          ></path>
        </Link>
        <Link to={`${props.id}/${props.idroom16}`}>
          <path
            class="part"
            d="m 3885.1207,2337.5837 816.8372,-0.4474 0.671,531.4362 10.2887,0.4474 0.1749,119.5236 h -12.9689 l 1.8343,661.0792 -239.7726,-0.4473 0.8947,-42.0497 -11.1835,0.4473 0.2362,-592.459 -260.9598,-0.6327 v -198.0131 l -199.586,-0.2341 -0.2237,3.1314 h -105.1241 z"
            fill={
              props?.statusroom16 === "sales"
                ? "#f500006e"
                : props?.statusroom16 === "booking"
                ? "#fa9e146f"
                : "#141adc41"
            }
          ></path>
        </Link>
      </svg>
      <BackgroundImg src={props.images} alt="photo" />
    </WrapperBlock>
  );
};
export default ImageClicking;
const BackgroundImg = styled.img`
  width: 100%;
  vertical-align: middle;
  border-style: none;
`;
const WrapperBlock = styled.div`
  position: relative;
  & > svg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    vertical-align: middle;
    & > a > path {
      :hover {
        fill: #00a92266;
      }
    }
  }
`;
