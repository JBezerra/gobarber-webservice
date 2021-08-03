import IStorageProvider from '../models/IStorageProvider';

interface IStorageFile {
  file: string;
}

export default class DiskStorageProvider implements IStorageProvider {
  private storage: IStorageFile[] = [];

  public async saveFile(file: string): Promise<string> {
    this.storage.push({ file });
    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    const findIndex = this.storage.findIndex(storage => storage.file === file);
    this.storage.splice(findIndex, 1);
  }
}
