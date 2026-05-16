import supabase from "../lib/supabase";

export const uploadVideo = async (file) => {
  const fileName = `${Date.now()}-${file.name}`;

  const { data, error } = await supabase.storage
    .from("videos")
    .upload(fileName, file);

  if (error) {
    console.log(error);
    return null;
  }

  const { data: publicUrlData } = supabase.storage
    .from("videos")
    .getPublicUrl(fileName);

  return publicUrlData.publicUrl;
};