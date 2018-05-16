<template>
    <div>
        <div>
            <p class="p-text">Please Add Your TODO list here.!</p>  
            <input type="text" v-model="addText" />
            <button v-on:click="addButton">Add TODO's</button>
        </div>
        <div>
            <ol>
                <li v-for="(list, index) in ToDoList">
                    {{ list }}
                <button  class="remove" v-on:click="removeList(index)"><p>X</p></button>            
                </li>
            </ol>
        </div>
        
        <div v-if="flag">
            <b><p>Successfully Deleted from the List.</p></b>
        </div>

        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ToDoList: [],
                addText: '',
                flag: false
            }
        },
        
        methods: {
            addButton: function () {
                this.ToDoList.push(this.addText);
                console.log('addText +++++++++++++', this.addText);
                console.log('ToDoList +++++++++++++', this.ToDoList);
            },

            removeList: function (value) {
                this.ToDoList.splice(value, 1)
                alert('Are you sure want to Remove?');
                this.flag = true; 
            }
        }
}
</script>

<style>
    .remove {
        background-color: white;
        color: #555555;
    }
    .p-text {
        background-color: silver;
        padding: 20px;
    }
</style>