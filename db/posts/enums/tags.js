const PostTagsEnum = {
    PSYCHOLOGY: 'psychology', 
    PHILOSOPHY: 'philosophy',
}
// maybe you want to have them used as human readable 
const PostTagsLabels = {
    [PostTagsEnum.PSYCHOLOGY]: 'Psychology & Education',
    [PostTagsEnum.PHILOSOPHY]: 'Philosophy & Arts',
}
export default PostTagsEnum;
export {
    PostTagsEnum,
    PostTagsLabels,
}
