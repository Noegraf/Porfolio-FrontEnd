import { Component, OnInit } from '@angular/core';
// Declare the 'window', to access the window instance.
declare var window: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal-component.html',
  styleUrls: ['./modal-component.css']
})
export class ModalComponent implements OnInit {

  //Declare a variable like 'formModal', which going to contain the instance of Bootstrap modal.
  formModal: any;

  constructor() {}

  ngOnInit(): void {
    //Here initialized the 'bootstrap.Modal()' and then assigned to 'formModal' variable.
    this.formModal = new window.bootstrap.Modal(
      //Get the bootstrap modal HTML element to pass as an input parameter.
      document.getElementById('myModal')
    );
  }
 
  openFormModal() {
    //The 'show()' method to open modal.
    this.formModal.show();
  }
  saveSomeThing() {
    // confirm or save something
    //The 'hide()' method to close modal.
    this.formModal.hide();
  }
}
