/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { memoryStorage } from 'multer';
import { BadRequestException } from '@nestjs/common';

export const storage = memoryStorage();

export const fileFilter = (
  req: any,
  file: Express.Multer.File,
  cb: (error: Error | null, acceptFile: boolean) => void,
) => {
  if (!file.mimetype.startsWith('image/')) {
    return cb(
      new BadRequestException('Somente imagens são permitidas!'),
      false,
    );
  }
  cb(null, true);
};

export const limits = {
  // fileSize: 900 * 1024, // Limite de 900KB por imagem
};
