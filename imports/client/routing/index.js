import route from './router';

//User
import Register from '/imports/client/pages/users/Register';
import Login from '/imports/client/pages/users/Login';
import Home from '/imports/client/pages/home/Home';

route('/', Home, {}, {
    name: 'home'
});
route('/login', Login, {}, {
    name: 'login'
});
route('/register', Register, {}, {
    name: 'register'
});


