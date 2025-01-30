const PINATA_API_KEY = process.env.NEXT_PUBLIC_PINATA_API_KEY;
const PINATA_SECRET_API_KEY = process.env.NEXT_PUBLIC_PINATA_SECRET_KEY;
export const uploadToIPFS = async (
  file: File,
  name: string,
  description: string
) => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const imageRes = await fetch(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      {
        method: "POST",
        headers: {
          pinata_api_key: PINATA_API_KEY!,
          pinata_secret_api_key: PINATA_SECRET_API_KEY!,
        },
        body: formData,
      }
    );

    if (!imageRes.ok) {
      throw new Error(`Error subiendo a Pinata: ${imageRes.statusText}`);
    }
    const imageData = await imageRes.json();
    const imageCID = imageData.IpfsHash;
    const imageUrl = `https://gateway.pinata.cloud/ipfs/${imageCID}`;

    const metadata = {
      name,
      description,
      image: imageUrl,
    };

    const metadataRes = await fetch(
      "https://api.pinata.cloud/pinning/pinJSONToIPFS",
      {
        method: "POST",
        body: JSON.stringify(metadata),
        headers: {
          "Content-Type": "application/json",
          pinata_api_key: PINATA_API_KEY!,
          pinata_secret_api_key: PINATA_SECRET_API_KEY!,
        },
      }
    );

    if (!metadataRes.ok)
      throw new Error("❌ Error subiendo los metadatos a Pinata");

    const metadataData = await metadataRes.json();
    const metadataCID = metadataData.IpfsHash;
    const metadataURI = `https://gateway.pinata.cloud/ipfs/${metadataCID}`;

    console.log("✅ Archivo subido a Pinata:", metadataURI);
    return metadataURI;
  } catch (error) {
    console.error("❌ Error subiendo a Pinata:", error);
    throw error;
  }
};
