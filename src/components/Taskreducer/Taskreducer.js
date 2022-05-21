const iniData = {
  listTasks: [],
};

const taskReducer = (state = iniData, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
          listTasks: [...state.listTasks, action.payload]
        
      };
    case "DELETE_TASK":
      return {
        ...state,
        listTasks: state.listTasks.filter((item) => {
            return item !== action.payload;
        }),
          };
      case 'UPDATE_TASK': return {
          ...state,
          listTasks: state.listTasks.map((item) => {
              if (item === action.payload.oldTask) {
                return item = action.payload.newTask
              }
              return item
          })
      }
      default: {
          return state;

      }
  }
};

export default taskReducer;
