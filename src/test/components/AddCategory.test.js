import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

import '@testing-library/jest-dom';



describe('Pruebas en el componente <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    } )


    test('debe de mostrarse correctamente ', () => {

        expect( wrapper ).toMatchSnapshot();
        
    });


    test('debe de cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: { value: value } });

        expect( wrapper.find('p').text().trim() ).toBe( value );

    })

    test('No debe de postear la informacion con submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();
        
    })
    

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        const value = 'Hola Bruh';

        // 1. Simular el inputChange
        wrapper.find('input').simulate('change', { target: { value } });

        // 2. Simular el submit 
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        // 3. setCategories se debe de haber llamado
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalled();

        // 4. el valor del input debe de estar ''
        expect( wrapper.find('input').prop('value') ).toBe('');


    });
    
    

    
    
})
