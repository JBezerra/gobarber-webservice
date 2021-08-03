import IHashProvider from '../models/IHashProvider';

export default class FakeHashProvider implements IHashProvider {
  public async generateHash(payload: string): Promise<string> {
    return new Promise<string>(resolve => resolve(payload));
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return new Promise<boolean>(resolve => resolve(payload === hashed));
  }
}
