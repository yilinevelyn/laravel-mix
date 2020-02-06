//透過require引入初始化檔案
require('./bootstrap')

import StudentNameList from './componets/StudentNameList'
import AddStudent from './componets/AddStudent'

new Vue({
    el: '#app',
    components: { StudentNameList, AddStudent },
    data() {
        return {
            title: 'Student List',
            
        }
    },
    methods: {}
})