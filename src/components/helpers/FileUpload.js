export const fileUpload = async (file) =>{
    const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/didwrtnme/image/upload'
    const CLOUDINARY_UPLOAD_PRESET = 'dptl1zsm';

    const cloudUrl = CLOUDINARY_URL;
    const formData = new FormData();
    formData.append('upload_preset',CLOUDINARY_UPLOAD_PRESET);
    formData.append('file',file);
    
    
    const resp = await fetch(cloudUrl, {
        method: 'POST',
        body: formData
    })
       const cloudResp = await resp.json();
       return cloudResp.secure_url;

}

