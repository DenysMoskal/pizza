import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton: React.FC = (props) => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="130" cy="130" r="130" /> 
    <rect x="0" y="276" rx="0" ry="0" width="280" height="28" /> 
    <rect x="0" y="321" rx="0" ry="0" width="280" height="88" /> 
    <rect x="0" y="427" rx="0" ry="0" width="90" height="27" /> 
    <rect x="126" y="415" rx="15" ry="15" width="152" height="47" />
  </ContentLoader>
)

export default Skeleton