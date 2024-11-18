import multer from "multer";
import path from "path";

// Configuração de armazenamento do multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "..", "../public", "uploads")); // Pasta para salvar as imagens
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueSuffix); // Nome único para evitar conflitos
  },
});

// Filtrar tipos de arquivo (apenas imagens)
const fileFilter = (req: any, file: any, cb: any) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Apenas arquivos de imagem são permitidos."), false);
  }
};

export const upload = multer({ storage, fileFilter });
