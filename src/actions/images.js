export const uploadImage = async (image) => {
  const data = new FormData();
  data.append("file", image);
  data.append("upload_preset", "MejorPostor");

  const res = await fetch("https://api.cloudinary.com/v1_1/di57h1uhf/upload/", {
    method: "POST",
    body: data,
  });
  const file = await res.json();
  return new Promise((resolve, reject) => {
    if (file.secure_url) {
      resolve(file.secure_url);
    } else {
      reject(file.error);
    }
  });
};
