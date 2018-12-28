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

import { CreateUser } from '../../commands'

/**
 * Symbol to be used for dependency injection
 */
export const UserManagementServiceIF = Symbol.for("UserManagementService")

/**
 * Interface for user management services
 *
 * @export
 * @interface UserManagementService
 */
export interface UserManagementService {
    /**
     * Create a user.
     *
     * @param {CreateUser} command
     * @memberof UserManagementService
     */
    createUser(command: CreateUser): void
}
