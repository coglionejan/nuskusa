import React from "react";

type PostProps = {
    boardId: string,
    postId: string,
    username: string,
    isVerified: boolean,
    role: string
}

type PostState = {
    // title: string,
    // content: string,
    // isAnnouncement: boolean,
    // isAnonymous: boolean,
    // isPinned: boolean,
    // isHidden: boolean,
    // owner: string,
    // upvotes: number,
    // permissions: []
}
class EditPost extends React.Component<PostProps, PostState> {
    constructor(props: PostProps) {
        super(props);
        this.state = {
            // title: '',
            // content: '',
            // isAnnouncement: false,
            // isAnonymous: false,
            // isPinned: false,
            // isHidden: false,
            // owner: '',
            // upvotes: 0,
            // permissions: []
        }
    }
    render = () => {
        return (
            <div>
                Edit
            </div>
        )
    }
}

export default EditPost;