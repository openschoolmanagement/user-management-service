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

import { Router } from 'express'
import { authenticateController, userManagementCommandsController } from './controllers'

/**
 * This class exposes the router for the version 1 API of the
 * user-management-service.
 *
 * @export
 * @class ApiV1Router
 */
export class ApiV1Router {
    public router = Router()

    constructor() {
        this.routes()
    }

    private routes() {
        this.router.use('/v1', [
            authenticateController.router(),
            userManagementCommandsController.router()
        ])
    }
}

export const APIV1 = new ApiV1Router()
