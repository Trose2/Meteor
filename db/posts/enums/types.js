const PostTypesEnum = {
    PSYCHOLOGY: 'Psychology', 
    NATURE: 'Nature',
    MUSIC: 'Music',
    Programming: 'Programming',
    PROJECT_MANAGEMENT: 'Project Management',
    Other: 'Other',

}
// maybe you want to have them used as human readable 
const PostTagsLabels = {
    [PostTypesEnum.PSYCHOLOGY]: 'Psychology & Education',
    [PostTypesEnum.Nature]: 'Nature',
    [PostTypesEnum.Music]: 'Music',
    [PostTypesEnum.Programming]: 'Programming',
    [PostTypesEnum.ProjectManagement]: 'Project Management',
    [PostTypesEnum.Other]: 'Other',
}
export default PostTypesEnum;
export {
    PostTypesEnum,
    PostTypeLabels,
}
