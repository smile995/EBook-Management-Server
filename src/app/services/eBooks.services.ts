import { IEBook } from "../interfaces/eBooks.interface";
import { EBookModel } from "../schemaModels/eBook.model";

const createEbookIntoDB = async (ebookData: IEBook) => {
  try {
    const ebook = await EBookModel.create(ebookData);
    return ebook;
  } catch (error) {
    throw new Error("Failed to create ebook");
  }
};
const getAllEbooks = async () => {
  try {
    const ebooks = await EBookModel.find();
    return ebooks;
  } catch (error) {
    throw new Error("Failed to create ebook");
  }
};
const getSingleEbook = async (id: string) => {
  try {
    const ebook = await EBookModel.findById({ _id: id });
    return ebook;
  } catch (error) {
    throw new Error("Failed to create ebook");
  }
};

export const EBookServices = {
  createEbookIntoDB,
  getAllEbooks,
  getSingleEbook,
};
