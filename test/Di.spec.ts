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

import {
    expect
} from 'chai';
import * as di from '../source/di'

class InterfaceA {
    getValueA(): string {
        return ""
    }
}

class ImplementationA implements InterfaceA {
    getValueA(): string {
        return "valueA"
    }
}

class InterfaceB {
    getValueB(): string { 
        return ""
    }
}

di.register(InterfaceA, () => new ImplementationA())

describe('Dependency Injection', function () {
    it('Interface is resolved to an implementation instance', function () {
        let implA: InterfaceA = di.inject(InterfaceA)

        expect(implA.getValueA()).equals("valueA")
    })

    it('The same implementation instance is always returned', function () {
        let implA1: InterfaceA = di.inject(InterfaceA)
        let implA2: InterfaceA = di.inject(InterfaceA)

        expect(implA1 === implA2).equals(true)
    })

    it('Exception is thrown for unregistered interface', function () {
        var failed = false

        try {
            let implA: InterfaceB = di.inject(InterfaceB)
        } catch(err) {
            failed = true
        }

        expect(failed).eq(true)
    })
})
