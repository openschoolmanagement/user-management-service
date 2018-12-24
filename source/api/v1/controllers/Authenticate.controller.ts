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

import { Router, Request, Response, NextFunction } from 'express'
import * as core from "express-serve-static-core";
import ApiController from '../../common/ApiController'

/**
 * This controller handles the authentication requests.
 *
 * @export
 * @class AuthenticateController
 * @implements {ApiController}
 */
export class AuthenticateController implements ApiController {
    private _router: Router | undefined = undefined

    constructor() {
    }

    /**
     * Return the router with the configuraed routes.
     *
     * @returns {core.Router} the configured router
     * @memberof AuthenticateController
     */
    router(): core.Router {
        if (this._router === undefined) {
            this.configureRoutes()
        }
        return this._router!
    }

    private configureRoutes() {
        this._router = Router()
        this._router.post('/authenticate', this.authenticate.bind(this))
    }

    private authenticate(req: Request, res: Response, next: NextFunction) {
        res.send('Hello, World!')
    }
}

export const authenticateController = new AuthenticateController()
