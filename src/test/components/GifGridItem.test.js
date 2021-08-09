import React from 'react'; 
import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem";




describe('Pruebas en <GifGridItem />', () => {

    const title  = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow( <GifGridItem  title={ title } url={ url } />);  // create a shallow to take a snap of the component

    
    test('debe de mostrar el componente correctamente', () => {

        expect( wrapper ).toMatchSnapshot(); // we use toMatchSnapshot function

    });

    test('debe de tener un párrafo con el title ', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
        
    })

    test('debe de tener la imagen igual al url y alt de los props  ', () => {

        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe(url);
        expect( img.prop('alt') ).toBe(title);
        
    })

    test('debe de tener la clase de animate__fadeInDown ', () => {
        
        const div = wrapper.find('div');

        const className = div.prop('className');

        expect( className.includes('animate__fadeInDown') ).toBe( true );
    })

   
});






