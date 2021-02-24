import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status={ 'testing text' } />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('testing text');
    });

    test('after creation <span> should be displayed', () => {
        const component = create(<ProfileStatus status={ 'testing text' } />);
        const instance = component.root;
        const span = instance.findByType('span');
        expect(span).not.toBeNull();
    });

    test('after creation <span> should be displayed with status correct text', () => {
        const component = create(<ProfileStatus status={ 'testing text' } />);
        const instance = component.root;
        const span = instance.findByType('span');
        expect(span.children[0]).toBe('testing text');
    });

    test(`after creation <input> shouldn't be displayed`, () => {
        const component = create(<ProfileStatus status={ 'testing text' } />);
        const instance = component.root;
        expect(() => {
            const input = instance.findByType('input');
        }).toThrow();
    });
});
