/*
   Copyright 2018 Thomas Bonk <thomas@meandmymac.de>

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

import * as express from 'express'
import * as core from "express-serve-static-core";
import ApiController from './ApiController'

export default abstract class AuthAPiController implements ApiController {
   /**
    * Get the router with all routes that this controller provides.
    *
    * @returns {express.Router} the router with all routes
    * @memberof ApiController
    */
   abstract router(): core.Router

   /**
    * Check whether the user is authenticated.
    *
    * @param {express.Request} req the request
    * @param {express.Response} res the response object
    * @param {express.NextFunction} next function to be called in case of an error
    * @memberof AuthAPiController
    */
   authenticated(req: express.Request, res: express.Response, next: express.NextFunction) {
   }
}
