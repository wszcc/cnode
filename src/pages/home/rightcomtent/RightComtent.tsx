import React from "react";
import "./rightContent.scss";
import TopContent from "./TopContent";
import BodyContent from "./BodyContent";
const RightComtent: React.FC = () => {
  return (
    <div className="right-content">
      <TopContent />
      <BodyContent />
    </div>
  );
};

export default RightComtent;
