
import logo from '../asset/pixel-3.jpg';
import logo1 from '../asset/iphone.jpg';
import logo2 from '../asset/sam.jpg';
var initialState = [
    {
        id: 1,
        name: 'IPhone 7 Plus',
        image : logo1,
        description : 'Made by Apple',
        price : 500,
        inventory : 10,
        rating : 4 

    },
    {
        id: 2,
        name: 'SamSung Galaxy',
        image : logo2,
        description : 'Made by SamSung',
        price : 500,
        inventory : 10,
        rating : 4

    },
    {
        id: 3,
        name: 'Google Pixel',
        image : logo,
        description : 'Made by Google',
        price : 500,
        inventory : 10,
        rating : 5

    },
    
];

const products = (state = initialState, action) => {
    switch(action.type){
        default : return [...state];
    }
}
export default products;