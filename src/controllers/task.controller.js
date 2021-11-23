import Task from "../models/Task";

export async function getOneTask(req, res) {
  try {
    const { id } = req.params;

    const task = await Task.findOne({
      where: {
        id,
      },
    });
    res.json(task);
  } catch (error) {
    res.json(error);
  }
}

export async function getTasks(req, res) {
  try {
    const tasks = await Task.findAll();
    res.json({
      data: tasks,
    });
  } catch (error) {
    res.json({
      message: "Couldn't find all tasks",
      data: error
    });
  }
}

export async function getTaskByProject(req,res){
    const { projectid } = req.params;

    const task = await Task.findAll({
        attributes: ['id', 'projectid','done','name'],
        where: {
            projectid
        }
    });

    res.json({task})
}

export async function createTask(req, res) {
  try {
    const { name, done, projectid } = req.body;

    const newTask = await Task.create(
      {
        name,
        done,
        projectid,
      },
      {
        fields: ['name', 'done', 'projectid'],
      }
    );

    newTask &&
      res.json({
        message: "A new task was created",
        data: newTask,
      });
  } catch (error) {
    res.json("An error just happened");
  }
}

export async function updateTask(req, res) {
  try {
    const { id } = req.params;
    const { name, done, projectid } = req.body;
  
    const tasks = await Task.findAll({
      attributes: ["id", "name", "done", "projectid"],
      where: {
        id,
      },
    });
  
    tasks.length > 0 &&
      tasks.forEach(async (task) => {
        await task.update({
          name,
          done,
          projectid,
        });
      });
  
    return res.json({
      message: "The task was updated",
    });
  } catch (error) {
      res.json(error)
  }
}

export async function deleteTask(req, res) {
  try {
    const { id } = req.params;

    const deleteRowCount = await Task.destroy({
      where: {
        id,
      },
    });

    res.json({
      message: "Tasks deleted",
      data: {
        deleteRowCount,
      },
    });
  } catch (error) {
      res.json(error)
  }
}
