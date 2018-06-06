
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

const app = angular.module('app',[]);

app.component('test',{
    template:`<p>{{$ctrl.text}}</p>`,
    controller:[function testComponent() {
        this.text = 'Contenido del componente'
    }]
});