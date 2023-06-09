import React from 'react';
import img from '../../../../Assets/educator-img14.jpg';

const About = () => {
    return (
        <div className='w-4/6 mx-auto'>
            <h1 className='text-center font-bold text-4xl my-5'>Introduction About Our Institute</h1>
            <div className='flex justify-between'>
            
            <div className='text-md font-mono'>
                <p>Maiores montes? Egestas imperdiet voluptates dolor volutpat magnis fugit laboris ullamcorper nam? Nostrum atque fames tempore excepteur tincidunt? Volutpat rerum laboris potenti, varius dui. Eleifend quaerat tempora repudiandae quo, adipisicing mollit nisl, tristique, tenetur exi.</p>

                <p className='mt-5'>Diamlorem dapibus congue nostrud, purus molestiae, explicabo error quia exercitationem, veniam aperiam, odit anim pariatur, per, cubilia voluptas porttitor iusto ducimus cubilia! Fames cumque pulvinar morbi nobis condimentum provident perferendis.</p>
            </div>
            <div>
                <img className='rounded-xl' src={img} alt="" />
            </div>
            </div>
            
        </div>
    );
};

export default About;