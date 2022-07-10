import { generateComment} from './comments/generateComment';

export function generateCommentArray(k, l) {
  const commentArray = [];
  for (let i = k; i < l; i++) {
    commentArray.push(generateComment(i));
  }
  return commentArray;
}
