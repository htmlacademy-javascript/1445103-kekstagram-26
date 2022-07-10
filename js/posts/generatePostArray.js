import { generatePost } from './generatePost';

export function generatePostArray() {
  const objectArray = [];
  for (let i = 0; i < 25; i++) {
    objectArray.push(generatePost(i + 1));
  }

  return objectArray;
}
