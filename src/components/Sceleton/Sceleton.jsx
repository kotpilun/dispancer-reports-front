import React from "react"
import ContentLoader from "react-content-loader"

const Sceleton = (props) => (
<ContentLoader 
    speed={1}
    width={1200}
    height={40}
    viewBox="0 0 1200 44"
    backgroundColor="#d1d1d1"
    foregroundColor="#a8a4a4"
    {...props}
  >
    <rect x="15" y="15" rx="1" ry="1" width="13" height="13" /> 
    <rect x="47" y="2" rx="10" ry="10" width="1100" height="35" />
  </ContentLoader>
)

export default Sceleton

