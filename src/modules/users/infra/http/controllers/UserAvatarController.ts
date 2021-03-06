import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

export default class UsersAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateUserAvatar = container.resolve(UpdateUserAvatarService);
    const { id } = request.user;
    const { filename } = request.file;
    const user = await updateUserAvatar.execute({
      user_id: id,
      avatarFilename: filename,
    });

    return response.json(classToClass(user));
  }
}
