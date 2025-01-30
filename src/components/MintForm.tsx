import { uploadToIPFS } from "@/utils/ipfs";
import { useForm } from "react-hook-form";
interface MintFormProps {
  handleMint: (recipient: string, tokenURI: string) => void;
}

const MintForm = ({ handleMint }: MintFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const metadataURI = await uploadToIPFS(
        data.image[0],
        data.name,
        data.description
      );
      handleMint(data.recipient, metadataURI);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl mx-auto">
      <div className="pb-5">
        <label>
          NFT name
          <input
            className="w-full p-2 border border-gray-300 rounded mt-1"
            type="text"
            {...register("name", { required: true })}
            placeholder="NFT name"
          />
        </label>
        {errors.name && <p className="text-red-500">Este campo es requerido</p>}
      </div>
      <label className="">
        NFT description
        <input
          className="w-full p-2 border border-gray-300 rounded mt-1"
          type="text"
          {...register("description")}
          placeholder="NFT description"
        />
      </label>
      <div className="py-5">
        <label>
          Recipient
          <input
            className="w-full p-2 border border-gray-300 rounded mt-1"
            type="text"
            {...register("recipient", { required: true })}
            placeholder="0x..."
          />
        </label>
        {errors.recipient && (
          <p className="text-red-500">Este campo es requerido</p>
        )}
      </div>
      <div className="pb-5">
        <label>
          Image
          <input type="file" {...register("image", { required: true })} />
        </label>
        {errors.image && <p className="text-red-500">Debes subir una imagen</p>}
      </div>
      <button
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg mt-5"
        type="submit"
        disabled={isSubmitting}
      >
        Acuñar NFT
      </button>
    </form>
  );
};

export default MintForm;
