import { GIT_USERNAME, GIT_REPO, GIT_BRANCH_NAME } from "../constants";

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

export const getImage = (type, id) => {
  const filePath = `${type}/${id}/${id}.png`;
  const Url = `https://raw.githubusercontent.com/${GIT_USERNAME}/${GIT_REPO}/${GIT_BRANCH_NAME}/${filePath}`;
  return Url;
};

export const getText = async (type, id) => {
  const filePath = `${type}/${id}/${id}.txt`;
  const Url = `https://raw.githubusercontent.com/${GIT_USERNAME}/${GIT_REPO}/${GIT_BRANCH_NAME}/${filePath}`;
  try {
    const response = await fetch(Url);
    const data = await response.text();
    return data;
  } catch (error) {
    console.log(error);
    return "";
  }
};
