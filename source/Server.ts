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

const expressPinoLogger = require('express-pino-logger')

import * as http from 'http'
import express from 'express'
import { APIV1 } from './api/v1'
import L from './Logger'

/**
 * Start the server on the given port with the given routes
 * 
 * @param port Port where the gateway is listening on
 * @param routes Routes that are dispatched by the gateway
 * @returns the server object
 */
export function startServer(port: number): http.Server {
    let app: express.Application = express()
    
    app.use(expressPinoLogger({ logger: L }))
    app.use('/', APIV1.router)

    return app.listen(port, () => {
        L.info(`user-management-service is listening on port ${port}`)
    })
}
