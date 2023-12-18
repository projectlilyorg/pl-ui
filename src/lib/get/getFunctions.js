import { GIT_USERNAME, GIT_REPO, GIT_BRANCH_NAME } from "../constants";

// this function gets the total no.of type("Posts"/"Blogs") from content.json file
// type = Blogs or Posters
export const getSize = async (type) => {
  const filePath = "content.json";
  const Url = `https://raw.githubusercontent.com/${GIT_USERNAME}/${GIT_REPO}/${GIT_BRANCH_NAME}/${filePath}`;
  try {
    const response = await fetch(Url);
    const data = await response.json();
    return data[type];
  } catch (error) {
    console.log(error);
    return 0;
  }
};

// returns url to the image(.png) with the given id and type
// type = "Blogs" or "Poster", id = numbers of the poster
export const getImage = (type, id) => {
  const filePath = `${type}/${id}/${id}.png`;
  const Url = `https://raw.githubusercontent.com/${GIT_USERNAME}/${GIT_REPO}/${GIT_BRANCH_NAME}/${filePath}`;
  return Url;
};

// if filepath is "" returns text from file(.txt) with the given id and type
// else return the text from the file in the give filepath
// type: "Blogs" or "Poster"
// id: numbers of the poster
// filepath: the text file path inside the repo (default: "")
export const getText = async (type, id, filePath = "") => {
  console.log("filepath:", filePath == "");
  if (filePath == "") {
    filePath = `${type}/${id}/${id}.txt`;
  }
  const Url = `https://raw.githubusercontent.com/${GIT_USERNAME}/${GIT_REPO}/${GIT_BRANCH_NAME}/${filePath}`;
  console.log(Url);
  try {
    const response = await fetch(Url);
    const data = await response.text();
    return data;
  } catch (error) {
    console.log(error);
    return "";
  }
};
