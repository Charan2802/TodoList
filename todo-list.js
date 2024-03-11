const todoList=[{
   name:'make dinner', 
   dueDate:'2022-12-22'
},{
   name:'wash dishes',
dueDate:'2022-12-22'
}];
    renderTool();
   function renderTool(){
      let todoListhtml='';
      for  (i=0;i<todoList.length;i++){
         const TodoObject= todoList[i];
        // const name=TodoObject.name;
         //const dueDate=TodoObject.dueDate;
         const{name,dueDate}=TodoObject;
         const html=`
         <div>${name}</div>
         <div>${dueDate}</div>
         <button onclick="
         todoList.splice(${i},1);
         renderTool();
         "class="delete-button">✘</button>
         `;
         todoListhtml+=html;
      }
         document.querySelector('.js-div')
         .innerHTML=todoListhtml;
   }
   function addTodo(){
   const inputElement= document.querySelector('.Text-type');
   const name = inputElement.value;
   const dateInputElement= document.querySelector('.js-due-date-input')
   const dueDate =dateInputElement.value;
   todoList.push({
    //  name:name,
      //dueDate:dueDate,
      name,
      dueDate
   });


   inputElement.value='';
   console.log(inputElement.value);
   renderTool();
}
