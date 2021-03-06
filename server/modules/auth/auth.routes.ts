import { Router } from 'express';
import { authJwt } from '../../common/middlewares/auth.middleware';
import { createValidator } from '../../common/middlewares/create-validator.middleware';
import { authController } from './auth.controller';
import { loginDto } from './auth.dtos';

export const router: Router = Router();

/**
 * @method GET
 * @route /api/auth
 * @description : fetch logged in user details
 * @acces private
 */
router.get('/', authJwt, authController.loadUser);

/**
 * @method POST
 * @route /api/auth
 * @description : login registered user to app
 * @acces public
 */
router.post('/', createValidator(loginDto), authController.login);
