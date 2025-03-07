export interface postDataProps {
	id: string;
	title: string;
	postedBy: string;
	postTime: string;
	content: string;
	photos: string[];
	tags: string[];
  }

export interface PinnedPostProps {
	post : postDataProps;
}  

export interface PostListProps {
	posts: postDataProps[]
}

export interface NavButtonProps {
  path: string;
  label: string;
  icon: string | null;
}