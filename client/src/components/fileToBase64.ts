export function fileToBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      resolve(e.target.result);
    };
    reader.onerror = (error: any) => {
      reject(error);
    };
    reader.readAsDataURL(file);
  });
}
