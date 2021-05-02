import React from "react";
import TagProps from "./models/TagProps";
import "./style.css";

const Tag: React.FC<TagProps> = ({ value }: TagProps) => <span>{value}</span>;

export default Tag;
