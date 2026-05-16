const supabase = require('../lib/supabase');

const uploadFile = async (bucket, path, fileBuffer) => {
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(path, fileBuffer, {
      upsert: true,
    });

  if (error) {
    throw error;
  }

  const { data: publicUrlData } = supabase.storage
    .from(bucket)
    .getPublicUrl(path);

  return {
    data,
    fileUrl: publicUrlData.publicUrl,
  };
};

const removeFile = async (bucket, path) => {
  const { error } = await supabase.storage
    .from(bucket)
    .remove([path]);

  if (error) {
    throw error;
  }
};

const generateUniqueFileName = (originalName) => {
  return `${Date.now()}-${originalName}`;
};

module.exports = {
  uploadFile,
  removeFile,
  generateUniqueFileName,
};