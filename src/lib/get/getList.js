import { getSize, getImage, getText } from "./getFunctions";

// returns a list of objects that have a text and a url to the image
// type: "Blogs" or "Posters"
// start: starting of posters/blogs (default: 1)
const getList = async (type, start = 1) => {
  const size = await getSize(type);
  console.log(size);
  let blogList = [];
  for (let i = start; i <= size; i = i + 1) {
    blogList.push({
      id: i,
      image: getImage(type, i),
      text: await getText(type, i),
    });
  }
  console.log(blogList);
  return blogList;
};

export default getList;
