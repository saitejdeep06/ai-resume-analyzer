import API from "./api";

export const uploadResume = async (file) => {
  const formData = new FormData();
  formData.append("resume", file);

  const res = await API.post("/resume/upload", formData);
  return res.data;
};