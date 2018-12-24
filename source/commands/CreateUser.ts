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

/**
 * Command for creating a user.
 *
 * @export
 * @interface CreateUser
 */
export interface CreateUser {
    /**
     * The user Id, must be a UUID. Mandatory.
     *
     * @type {string}
     * @memberof CreateUser
     */
    userId: string

    /**
     * The given name of the user. Optional.
     *
     * @type {string}
     * @memberof CreateUser
     */
    givenname?: string

    /**
     * The last name of the user. Optional.
     *
     * @type {string}
     * @memberof CreateUser
     */
    lastname?: string

    /**
     * The email address of the user. Mandatory.
     *
     * @type {string}
     * @memberof CreateUser
     */
    email: string
}