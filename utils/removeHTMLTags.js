const removeHTMLTags = (str) => str.replace(/<(.*?)>/g, "");

export default removeHTMLTags;
