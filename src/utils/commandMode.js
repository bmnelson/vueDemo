class Executor {
  constructor() {

  }
  setCommand(btn, command) {
    btn.onClick = command.execute()
  }
}

class Menu {
  addMenu() {

  }

  deleteMenu() {

  }
}

class AddMenu {
  constructor(receiver) {
    this.receiver = receiver
  }

  execute() {
    this.receiver.addMenu()
  }
}

class DeleteMenu {
  constructor(receiver) {
    this.receiver = receiver
  }
  execute() {
    this.receiver.deleteMenu()
  }
}
let bt1 = document.getElementById('bt1')
let bt2 = document.getElementById('bt2')

let executor = new Executor()
let menu = new Menu()
let addMenuCommand = new AddMenu(menu)
let deleteMenuCommand = new DeleteMenu(menu)
executor.setCommand(bt1, addMenuCommand)
executor.setCommand(bt2, deleteMenuCommand)