import * as path from 'path';

export class FileNameService {
  getSampleFileName(templateId: string): string {
    return `${templateId}/sample.csv`;
  }
  getSampleFileUrl(templateId: string): string {
    const fileName = this.getSampleFileName(templateId);

    return path.join(process.env.S3_LOCAL_STACK, process.env.S3_BUCKET_NAME, fileName);
  }
  getFileExtension(fileName: string): string {
    return fileName.split('.').pop();
  }
  getUploadedFilePath(uploadId: string, fileName: string): string {
    return `${uploadId}/${this.getUploadedFileName(fileName)}`;
  }
  getUploadedFileName(fileName: string): string {
    return `uploaded.${this.getFileExtension(fileName)}`;
  }
  getAllJsonDataFileName(): string {
    return `all-data.json`;
  }
  getAllJsonDataFilePath(uploadId: string): string {
    return `${uploadId}/${this.getAllJsonDataFileName()}`;
  }
  getInvalidDataFileName(): string {
    return `invalid-data.json`;
  }
  getInvalidDataFilePath(uploadId: string): string {
    return `${uploadId}/${this.getInvalidDataFileName()}`;
  }
  getValidDataFileName(): string {
    return `valid-data.json`;
  }
  getValidDataFilePath(uploadId: string): string {
    return `${uploadId}/${this.getValidDataFileName()}`;
  }
}
