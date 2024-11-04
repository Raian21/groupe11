
  
   // Fonction pour mettre à jour la localisation
function updateLocation() {
  const latitude = 3.848;
  const longitude = 11.502;
  const apiKey = '4997fb908b935664f8b5234881c8145f'; // Votre clé d'API OpenWeatherMap

  // Appel à l'API de prévision météorologique pour obtenir les données de la localisation de Yaoundé
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const locationDiv = document.querySelector('.location');
      locationDiv.textContent = data.name; // Met à jour la localisation dans la div

      const tempDiv = document.querySelector('.temperature');
      tempDiv.textContent = (data.main.temp - 273.15).toFixed(2) + '°C'; // Met à jour la température dans la div (convertie en Celsius)
    })
    .catch(error => {
      console.log('Une erreur s\'est produite :', error);
    });
}

// Appel de la fonction pour mettre à jour la localisation
updateLocation();
  
  
  
  

     class TaskManager {
       constructor(taskFormId, taskInputId, taskListId) {
         this.taskForm = document.getElementById(taskFormId);
         this.taskInput = document.getElementById(taskInputId);
         this.taskList = document.getElementById(taskListId);
         this.tasks = [];

         this.addTask = this.addTask.bind(this);
         this.deleteOrEditTask = this.deleteOrEditTask.bind(this);

         this.taskForm.addEventListener('submit', this.addTask);
         this.taskList.addEventListener('click', this.deleteOrEditTask);

         this.loadTasks();
         this.renderTasks();
       }

       addTask(event) {
         event.preventDefault();
         const taskText = this.taskInput.value.trim();

         if (taskText !== '') {
           const taskItem = document.createElement('li');
           const currentDate = new Date().toLocaleDateString();
           taskItem.innerHTML = `
             <span class="task">${taskText}</span>
             <span class="date">(${currentDate})</span>
             <div class="task-actions">
               <button class="edit-btn">Modifier</button>
               <input type="checkbox" class="complete-checkbox">
               <button class="delete-btn">Supprimer</button>
             </div>
           `;
           this.taskList.appendChild(taskItem);
           this.taskInput.value = '';

           this.tasks.push(taskText);
           this.saveTasks();
         }
       }

       deleteOrEditTask(event) {
         const target = event.target;
         const taskItem = target.closest('li');

         if (target.classList.contains('delete-btn')) {
           taskItem.remove();
           const taskText = taskItem.querySelector('.task').textContent;
           const taskIndex = this.tasks.indexOf(taskText);
           if (taskIndex !== -1) {
             this.tasks.splice(taskIndex, 1);
             this.saveTasks();
           }
         } else if (target.classList.contains('edit-btn')) {
           const taskText = taskItem.querySelector('.task');
           const newTaskText = prompt('Modifier la tâche', taskText.textContent);

           if (newTaskText !== null && newTaskText.trim() !== '') {
             taskText.textContent = newTaskText.trim();
             const taskIndex = this.tasks.indexOf(taskText.textContent);
             if (taskIndex !== -1) {
               this.tasks[taskIndex] = newTaskText.trim();
               this.saveTasks();
             }
           }
         }
       }

       loadTasks() {
         const savedTasks = localStorage.getItem('tasks');
         if (savedTasks) {
           this.tasks = JSON.parse(savedTasks);
         }
       }

       saveTasks() {
         localStorage.setItem('tasks', JSON.stringify(this.tasks));
       }

       renderTasks() {
         this.tasks.forEach(taskText => {
           const taskItem = document.createElement('li');
           const currentDate = new Date().toLocaleDateString();
           taskItem.innerHTML = `
             <span class="task">${taskText}</span>
             <span class="date">(${currentDate})</span>
             <div class="task-actions">
               <button class="edit-btn">Modifier</button>
               <input type="checkbox" class="complete-checkbox">
               <button class="delete-btn">Supprimer</button>
             </div>
           `;
           this.taskList.appendChild(taskItem);
         });
       }
     }

     const taskManager = new TaskManager('task-form', 'task-input', 'task-list'); 
   
      
      
      
    
      function updateTime() {
      var timeDisplay = document.getElementById("time-display");
      var currentDate = new Date();
      var hours = currentDate.getHours().toString().padStart(2, '0');
      var minutes = currentDate.getMinutes().toString().padStart(2, '0');
      var seconds = currentDate.getSeconds().toString().padStart(2, '0');
      var currentTime = `${hours}:${minutes}:${seconds}`;
      timeDisplay.textContent = currentTime;
    }

    // Mettre à jour l'heure toutes les secondes
    setInterval(updateTime, 1000);
      
      