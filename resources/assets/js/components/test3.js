import {app} from '../app.js';
app.component('testThree',{
    template:`<p>{{$ctrl.text}}<i class="fa fa-euro"></i></p>`,
    controller:[function testComponent() {
        this.text = 'Contenido del componente 3'
    }]
});