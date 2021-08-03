import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthticated from '@modules/users/infra/http/middlewares/ensureAuthticated';
import AppointmentController from '../controllers/AppointmentsController';
import ProviderAppointmentsController from '../controllers/ProviderAppointmentsController';

const appointmentsRouter = Router();
const appointmentController = new AppointmentController();
const providerAppointmentsController = new ProviderAppointmentsController();
appointmentsRouter.use(ensureAuthticated);

appointmentsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      provider_id: Joi.string().uuid().required(),
      date: Joi.date().required(),
    },
  }),
  appointmentController.create,
);
appointmentsRouter.post('/me', providerAppointmentsController.index);

export default appointmentsRouter;
