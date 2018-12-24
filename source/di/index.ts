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
 * This is a class type.
 */
export type Class = { new(...args: any[]): any; }

/**
 * Dependency Injection container.
 *
 * @export
 * @class Container
 */
export class Container {
    private _registry = new Map()
    private _resolved = new Map()

    /**
     * Register a class and resolver for retrieving an instance.
     *
     * @param {Class} aClass the class for which the resolver is registered
     * @param {() => any} resolver the resolver that creates an instance
     * @memberof Container
     */
    register(symb: Class | symbol, resolver: () => any) {
        this._registry.set(symb, resolver)
    }

    /**
     * Returns an instance for a regsitered class. Every call to this
     * method with the same class always returns the same instance.
     *
     * @template T type of the resulting class
     * @param {Class} aClass the class for which an instance shall be retrieved
     * @returns {T} the instance
     * @memberof Container
     */
    resolve<T>(symb: Class | symbol): T {
        var resolved = this._resolved.get(symb)

        if (resolved === undefined) {
            let resolver = this._registry.get(symb)

            if (resolver === undefined) {
                throw new Error(`The symbol >${String(symb)}< is not registered. No resolver available.`)
            }
            resolved = resolver()
            this._resolved.set(symb, resolved)
        }

        return resolved as T
    }
}

/**
 * The default container instance
 */
export const container = new Container()

/**
 * Register a class and resolver for retrieving an instance with the default container.
 *
 * @export
 * @template T type of the resulting class
 * @param {Class} aClass aClass the class for which the resolver is registered
 * @param {() => T} resolver the resolver that creates an instance
 */
export function register<T>(symb: Class | symbol, resolver: () => T) {
    container.register(symb, resolver)
}

/**
 * Returns an instance for a regsitered class. Every call to this
 * method with the same class always returns the same instance.
 * The default container is used.
 *
 * @export
 * @template T type of the resulting class
 * @param {Class} aClass the class for which an instance shall be retrieved
 * @returns {T} the instance
 */
export function inject<T>(symb: Class | symbol): T {
    return container.resolve(symb)
}
