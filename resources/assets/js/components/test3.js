import {app} from '../app.js';
app.component('testThree',{
    template:`<p>{{$ctrl.text}}</p>`,
    controller:[function testComponent() {
        this.text = 'Contenido del componente 3'
    }]
});