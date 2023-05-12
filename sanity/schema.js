import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import post from "./schemas/post";
import author from "./schemas/author";
import textBlock from "./schemas/textBlock";
import realisation from "./schemas/realisation";

export const schema = {
    types: [post, blockContent, textBlock, realisation, author, category],
};
