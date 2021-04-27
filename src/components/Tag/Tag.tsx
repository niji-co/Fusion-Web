import React from "react";

import TagProps from "./models/TagProps";

import "./style.css";

const Tag: React.FC<TagProps> = ({ text }: TagProps) => <span>{text}</span>;

export default Tag;
