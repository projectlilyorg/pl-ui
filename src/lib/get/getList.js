import { getSize, getImage, getText } from "./getFunctions";

const getList = async (type, start = 0) => {
  const size = await getSize(type);
  console.log(size);
  let blogList = [];
  for (let i = start; i < size; i = i + 1) {
    blogList.push({
      id: i,
      image: getImage(type, i + 1),
      text: await getText(type, i + 1),
    });
  }
  console.log(blogList);
  return blogList;
};

export default getList;
